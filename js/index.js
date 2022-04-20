
function copytoClipboard(){
    var copyText ="play.vestriamc.com"


    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}