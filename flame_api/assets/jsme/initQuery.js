function jsmeOnLoad() {
    jsmeApplet = new JSApplet.JSME("jsme_container", "615px", "400px", {"options": "query"});
}

function clipmol(moltext) {
    span = document.getElementById("molclipboard");
    span.innerText=moltext
}