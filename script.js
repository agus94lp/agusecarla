const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//redirigir
document.addEventListener("DOMContentLoaded", function () {
    let idioma = navigator.language || navigator.userLanguage; 
    idioma = idioma.toLowerCase();
    let pagina = window.location.pathname;
    // Solo redirigir si NO estamos ya en la página correcta
    if (idioma.startsWith("es") && !pagina.includes("index.html") && !pagina.endsWith("/")) {
        window.location.href = "index.html";
    } 
    else if (idioma.startsWith("pt") && !pagina.includes("index-pt.html")) {
        window.location.href = "index-pt.html";
    } 
    else if (idioma.startsWith("en") && !pagina.includes("index-en.html")) {
        window.location.href = "index-en.html";
    } 
    else if (!idioma.startsWith("es") && !idioma.startsWith("pt") && !idioma.startsWith("en")) {
        // Si no es ninguno, por defecto español (pero sin bucle)
        if (!pagina.includes("index.html") && !pagina.endsWith("/")) {
            window.location.href = "index.html";
        }
    }
});