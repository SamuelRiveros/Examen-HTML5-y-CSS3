let btnObtener = document.getElementById("obtener")

let btnObtener2 = document.getElementById("obtener2")

let btnObtener3 = document.getElementById("obtener3")


btnObtener.addEventListener("click", event => {
    const ver = document.querySelectorAll(".productobtenido")

    ver.forEach(element => {
        element.style.display = "flex";
    });

});

btnObtener2.addEventListener("click", event => {
    const ver = document.querySelectorAll(".productobtenido")

    ver.forEach(element => {
        element.style.display = "flex";
    });

});

btnObtener3.addEventListener("click", event => {
    const ver = document.querySelectorAll(".productobtenido")

    ver.forEach(element => {
        element.style.display = "flex";
    });

});

