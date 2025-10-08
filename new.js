function copyText() {
    var copyText = document.getElementById("copyText");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    document.execCommand("copy");

    // Alert the copied text
    alert("Text copied to clipboard: " + copyText.value);
}
