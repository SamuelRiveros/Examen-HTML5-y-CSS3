let btnObtener = document.getElementById("obtener")

let btnObtener2 = document.getElementById("obtener2")

let btnObtener3 = document.getElementById("obtener3")

let btnDetalles = document.getElementById("carritocompras")

let btnX = document.getElementById("buttonX")

let productoXX = document.getElementById("productoX")


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

btnDetalles.addEventListener("click", event => {
    const ver = document.querySelectorAll(".detalles")

    ver.forEach(element => {
        element.style.display = "flex";
    });

});

btnX.addEventListener("click", event => {
    const ver = document.querySelectorAll(".productobtenido , .detalles")

    ver.forEach(element => {
        element.style.display = "none";
    });

});


productoXX.addEventListener("click", event => {
    const ver = document.querySelectorAll(".productobtenido , .detalles")

    ver.forEach(element => {
        element.style.display = "none";
    });

});
