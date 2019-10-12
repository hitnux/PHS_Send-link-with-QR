chrome.tabs.getSelected(null, tab => {
    let url = tab.url;
    let qr= document.getElementById("qr");
    new QRCode(qr, {
        text: url,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});