var qrcode = new QRCode("qrcode");

function makeCode () {      
    var elText = document.getElementById("text");
    }
    
    qrcode.makeCode(elText.value);
}