function scrollToTop() {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        // Calculamos la posición para el siguiente paso
        const newPosition = currentPosition - 100;
        // Realizamos el desplazamiento
        window.scrollTo(0, newPosition);
        // Llamamos a la función nuevamente después de un pequeño retraso
        setTimeout(scrollToTop, 10);
    }
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}
var toggleBtnRegistro = document.getElementById("toggleBtnRegistro");
    var toggleBtnInicio = document.getElementById("toggleBtnInicio");
    var registroContainer = document.getElementById("registro_container");
    var inicioContainer = document.getElementById("inicio_container");

    toggleBtnRegistro.addEventListener("click", function() {
        registroContainer.style.opacity = "0"; // Ajuste de opacidad
        inicioContainer.style.opacity = "1";   // Ajuste de opacidad
        setTimeout(function() { // Retraso para permitir que la opacidad cambie antes de ocultar el contenedor
            registroContainer.style.display = "none";
            inicioContainer.style.display = "block";
        }, 500); // Se debe igualar a la duración de la transición CSS
    });

    toggleBtnInicio.addEventListener("click", function() {
        registroContainer.style.opacity = "1";  // Ajuste de opacidad
        inicioContainer.style.opacity = "0";    // Ajuste de opacidad
        setTimeout(function() { // Retraso para permitir que la opacidad cambie antes de ocultar el contenedor
            registroContainer.style.display = "block";
            inicioContainer.style.display = "none";
        }, 500); // Se debe igualar a la duración de la transición CSS
    });