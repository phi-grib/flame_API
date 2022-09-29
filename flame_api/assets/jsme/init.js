function jsmeOnLoad() {
        jsmeApplet = new JSApplet.JSME("jsme_container", "615px", "400px");
        // jsmeApplet = new JSApplet.JSME("jsme_container", "615px", "400px", {"options": "query"});
}

function clipmol(moltext) {
        span = document.getElementById("molclipboard");
        // txt = document.createTextNode(moltext);
        // span.appendChild(txt);
        span.innerText=moltext
}