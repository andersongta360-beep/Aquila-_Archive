import{ mostrarAviso } from "./JS/aviso_inicial.js";
mostrarAviso();


if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});