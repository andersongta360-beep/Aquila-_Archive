export function mostrarAviso(){

const aviso = document.getElementById("aviso-inicial");

const fechar = document.getElementById("fechar-aviso");

fechar.addEventListener("click", function() {

    aviso.classList.add("fechando");

    setTimeout(function() {
        aviso.style.display = "none";
    }, 600);

});

}