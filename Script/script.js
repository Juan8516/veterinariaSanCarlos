document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el carrito desde LocalStorage o vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para guardar el carrito en LocalStorage
    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombreProducto, precioProducto, imagenProducto) {
        carrito.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto });
        guardarCarrito();
        alert(`${nombreProducto} ha sido añadido al carrito.`);
    }

    // Función para mostrar el carrito (en carrito.html)
    function mostrarCarrito() {
        const carritoContenedor = document.getElementById('carrito-contenedor');
        if (!carritoContenedor) return;

        // Limpiar contenido previo
        carritoContenedor.innerHTML = '';
        let total = 0;

        // Mostrar productos
        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('carrito-item');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-item__imagen" style="width: 100px; height: auto; margin-right: 10px;">
                <p>${producto.nombre} - $${producto.precio}</p>
            `;
            carritoContenedor.appendChild(productoDiv);
            total += producto.precio;
        });

        // Mostrar total
        const totalDiv = document.createElement('div');
        totalDiv.classList.add('carrito-total');
        totalDiv.innerHTML = `<strong class="estilos-total">Total: $${total}</strong>`;
        carritoContenedor.appendChild(totalDiv);
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        carrito = [];
        guardarCarrito();
        mostrarCarrito();
        alert('El carrito ha sido vaciado.');
    }

    // Detectar si estamos en tienda.html
    const botonesAgregar = document.querySelectorAll('.producto__a__carrito');
    if (botonesAgregar.length > 0) {
        botonesAgregar.forEach(boton => {
            boton.addEventListener('click', () => {
                const nombreProducto = boton.getAttribute('data-nombre');
                const precioProducto = parseInt(boton.getAttribute('data-precio'), 10);
                const imagenProducto = boton.getAttribute('data-imagen');
                agregarAlCarrito(nombreProducto, precioProducto, imagenProducto);
            });
        });
    }

    // Detectar si estamos en carrito.html
    const botonVaciar = document.getElementById('boton-vaciar');
    if (botonVaciar) {
        botonVaciar.addEventListener('click', vaciarCarrito);
        mostrarCarrito();
    }

    // Mostrar el carrito al cargar carrito.html
    mostrarCarrito();
});