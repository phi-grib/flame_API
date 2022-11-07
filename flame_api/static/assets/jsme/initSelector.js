function jsmeOnLoad() {
    jsmeApplet2 = new JSApplet.JSME("jsme_container_selector", "615px", "400px", {"options": "query"});
}

function clipmol2(moltext) {
    span = document.getElementById("molclipboard_selector");
    span.innerText=moltext
}