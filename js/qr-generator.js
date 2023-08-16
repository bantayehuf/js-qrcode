var qrcode = new QRCode("qrcode", {
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

function generateQRCode() {
    var elText = document.getElementById("qrText");

    if (!elText.value) {
        alert("QRCode input text is empty!");
        elText.focus();
        return;
    }

    qrcode.makeCode((elText.value).trim());
}


generateQRCode();


//Creating dynamic link that automatically click
function downloadImage(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function createImage(name) {
    var div = document.getElementById("qrcode");

    const options = {
        // imageTimeout: 2000,
        ignoreElements: true,
        removeContainer: true,
        width: 290,
        height: 290,
    }

    html2canvas(div, options).then(function (canvas) {
        document.body.appendChild(canvas);

        var myImage = canvas.toDataURL("image/png");

        //Download the file
        downloadImage("data:" + myImage, `${name}.png`);
    });
}