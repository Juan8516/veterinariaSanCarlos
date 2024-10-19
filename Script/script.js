document.addEventListener('DOMContentLoaded', function() {
    // Carrito inicial
    let carrito = [];

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombreProducto, precioProducto) {
        // Añadir producto al carrito
        carrito.push({ nombre: nombreProducto, precio: precioProducto });
        
        // Actualizar el total
        actualizarCarrito();
    }

    // Función para actualizar la pestaña del carrito
    function actualizarCarrito() {
        let carritoHTML = document.getElementById("carrito");
        let total = 0;
        
        // Limpiar contenido previo
        carritoHTML.innerHTML = "";

        // Mostrar productos en el carrito
        carrito.forEach((producto, index) => {
            carritoHTML.innerHTML += `<p>${producto.nombre}: $${producto.precio}</p>`;
            total += producto.precio;
        });

        // Mostrar el total
        carritoHTML.innerHTML += `<p><strong>Total: $${total}</strong></p>`;
    }

    // Ejemplo de uso
    document.querySelectorAll('.producto__a__carrito').forEach(boton => {
        boton.addEventListener('click', function() {
            const nombreProducto = this.getAttribute('data-nombre');
            const precioProducto = parseFloat(this.getAttribute('data-precio'));
            agregarAlCarrito(nombreProducto, precioProducto);
        });
    });    
});