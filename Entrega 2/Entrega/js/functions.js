

// Función para cargar el navbar y el footer
function cargarElementosComunes() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });

        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
        });
}

// Llama a la función para cargar los elementos comunes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarElementosComunes);