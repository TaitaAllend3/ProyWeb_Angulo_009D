fetch('http://localhost:3300/productos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos
    console.log(data);
    // Por ejemplo, puedes usar los datos para generar elementos HTML dinámicamente
    const productosContainer = document.getElementById('productos-container');
    data.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');

      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;

      const nombre = document.createElement('p');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('p');
      precio.textContent = `Precio: $${producto.Precio}`;

      productoDiv.appendChild(imagen);
      productoDiv.appendChild(nombre);
      productoDiv.appendChild(precio);

      productosContainer.appendChild(productoDiv);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


function obtenerDatosYActualizarHTML() {
  fetch('http://localhost:3300/productos')
      .then(response => response.json())
      .then(data => {
          // Tomar solo los primeros 5 productos
          const primeros5Productos = data.slice(0, 5);

          const productContainer = document.getElementById('product-container');
          const cantidadProductos = document.getElementById('cantidad-productos');
          const total = document.getElementById('total');

          let cantidadTotal = 0;
          let precioTotal = 0;

          // Recorrer los primeros 5 productos y construir el HTML dinámicamente
          primeros5Productos.forEach(producto => {
              cantidadTotal += 1;
              precioTotal += producto.Precio;

              const productInfo = `
                  <div class="product-info">
                      <div style="flex: 2"><img class="row-image" src="${producto.imagen}" alt="placeholder"></div>
                      <div style="flex: 2">
                          <p>${producto.nombre}</p>
                      </div>
                      <div style="flex: 1;">
                          <p>$${producto.Precio}</p>
                      </div>
                      <div style="flex: 1;">
                          <p>Cantidad: 1</p>
                      </div>
                  </div>
              `;

              productContainer.innerHTML += productInfo;
          });

          // Actualizar la cantidad total y el precio total
          cantidadProductos.textContent += cantidadTotal + ' Productos';
          total.textContent += '$' + precioTotal;
      })
      .catch(error => {
          console.error('Error al obtener los datos de la API:', error);
      });
}

// Llama a la función cuando el contenido de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', obtenerDatosYActualizarHTML);


function cargarProductosDesdeAPI() {
  fetch('http://localhost:3300/productos')
      .then(response => response.json())
      .then(data => {
          const carrito = document.querySelector('.carrito');
          const totalPrecio = document.getElementById('total-price'); // Elemento que muestra el total

          // Limpiar los productos actuales del carrito
          carrito.innerHTML = '';

          // Tomar solo los primeros 5 productos
          const primeros5Productos = data.slice(0, 5);

          // Inicializar el total
          let total = 0;

          // Recorrer los primeros 5 productos obtenidos de la API y construir los elementos del carrito
          primeros5Productos.forEach(producto => {
              const carritoItem = document.createElement('div');
              carritoItem.classList.add('carrito-item');

              const precio = parseFloat(producto.Precio); // Convertir el precio a número

              carritoItem.innerHTML = `
                  <img src="${producto.imagen}" alt="Product Image">
                  <div class="item-details">
                      <h3 class="prod">${producto.nombre}</h3>
                      <p>Precio: $${precio.toFixed(2)}</p>
                      <div class="cantidad">
                          <button class="decrease-btn">-</button>
                          <input type="text" value="1" readonly>
                          <button class="increase-btn">+</button>
                      </div>
                      <button class="remove-btn">Borrar</button>
                  </div>
              `;

              carrito.appendChild(carritoItem);

              // Sumar el precio del producto al total
              total += precio;
          });

          // Actualizar el texto del total
          totalPrecio.textContent = `$${total.toFixed(0)}`;
      })
      .catch(error => {
          console.error('Error al cargar los productos desde la API:', error);
      });
}

document.addEventListener('DOMContentLoaded', cargarProductosDesdeAPI);


