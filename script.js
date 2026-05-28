// Lógica para la rotación de imágenes del carrusel (JS)
let slideIndex = 0;

function mostrarSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Ocultar todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Incrementar el índice
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    
    // Mostrar la imagen actual
    slides[slideIndex - 1].style.display = "block";  
    
    // Cambiar imagen cada 4 segundos
    setTimeout(mostrarSlides, 4000); 
}

// Ejecutar funciones al cargar la página
window.onload = function() {
    // Iniciar el carrusel
    mostrarSlides();
    
    // Configurar volumen bajo para la música instrumental de fondo
    let musica = document.getElementById("musica-fondo");
    if(musica) {
        musica.volume = 0.15; // Volumen ajustado al 15% para que no moleste
    }
};
