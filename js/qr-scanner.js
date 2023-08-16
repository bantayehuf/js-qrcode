
let scanDate = document.querySelector('#scanDate');
let scanText = document.querySelector('#scanText');

function onScanSuccess(decodedText, decodedResult) {
    // console.log(decodedResult);
    // console.log(decodedText);

    var d = new Date();

    scanDate.innerHTML = `Scanned at: ${d.getHours()}:${d.getMinutes()} ${d.getSeconds()}`;
    scanText.innerHTML = decodedText;
}

function onScanFailure(error) {
    // console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    }, false);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);