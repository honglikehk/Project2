//import { builtinModules } from "module";

$(document).ready(function () {

  
      // Add Button //
      $("body").on("click", "button[name=add]", function () {
          let priceIndex;
          let orderItem;
          
          itemIndex = $(this)
          .val()
          .indexOf("||");
          priceIndex = $(this)
          .val()
          .indexOf("$");
          orderPrice = $(this)
          .val()
        .substring(priceIndex + 1, $(this).val().length);
        
          orderItem = $(this)
          .val()
          .substring(itemIndex + 3, $(this).val().length - orderPrice.length - 2);
          
          // alert(orderItem);
          //alert(orderPrice);
          
          $("#orderList").append($(this).val());
          $("#orderList").append("<br/>");
          setCookie("orderList", $("#orderList").html(), 1);
          // set orderItemlist
          if (getCookie("orderItemFinal") == null) {
              setCookie("orderItemFinal", orderItem, 1);
            } else {
                setCookie(
                    "orderItemFinal",
                    getCookie("orderItemFinal") + "," + orderItem,
                    1
                    );
                }
                // set orderPrice
                if (getCookie("orderPrice") == null) {
                    setCookie("orderPrice", orderPrice, 1);
                } else {
                    setCookie("orderPrice", getCookie("orderPrice") + "," + orderPrice, 1);
                }
                
                
            });
            
            
            //Delete Button//
            $("body").on("click", "button[name=delete]", function() {
                if (
                    $("#orderList").html().length == 0 ||
                    getCookie("orderList").indexOf($(this).val()) == -1
                    ) {
                        alert("Nothing to remove from the order");
                    } else {
                        $("#orderList").html(
                            getCookie("orderList").replace($(this).val() + "<br>", "")
                            );
                            setCookie("orderList", $("#orderList").html(), 1);
                        }
                    });
                    
                    var x = getCookie("orderList");
       $("#orderList").html(x)
      
      //start modal popup
      var modal = document.getElementById("myModal");
      // Get the button that opens the modal
      var btn = document.getElementById("cfm");
      // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
     
        
     
      // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
        //set model with cookie value
        $("#confirmOrderList").html(getCookie("orderList"))
          
        let totalPrice = 0;
        
       let orderPriceArr = getCookie("orderPrice").split(',');

        for (i = 0; i < orderPriceArr.length; i++) {
            var tmpPrice = parseFloat(orderPriceArr[i],10);

            totalPrice = totalPrice + tmpPrice
          //alert(orderPriceArr[i]);
        }
      $("#confirmOrderList").html(getCookie("orderList") + "<br>"+"Total Price: $"+totalPrice);
          
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      //end modal popup
                    
                    
                    
                });
            