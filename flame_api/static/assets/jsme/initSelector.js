function jsmeOnLoad() {
    jsmeApplet = new JSApplet.JSME("jsme_container_selector", "615px", "400px", {"options": "query"});
}

function clipmol(moltext) {
    span = document.getElementById("molclipboard_selector");
    span.innerText=moltext
}