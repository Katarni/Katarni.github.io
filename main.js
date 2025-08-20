window.onload = function() {
    let body = document.getElementById("body");
    let header = document.getElementById("header");
    let main = document.getElementById("main");

    body.classList.add("main-content-wrapper");
    
    header.removeAttribute("disabled");
    header.classList.remove("inactive");

    main.removeAttribute("disabled");
    main.classList.remove("inactive");
}
