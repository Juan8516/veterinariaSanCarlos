document.addEventListener("DOMContentLoaded", function() {
    const botonReserva = document.querySelector(".button-reservas");

    botonReserva.addEventListener("click", function() {
        // Abrir una ventana emergente con dimensiones específicas
        window.open("agendaCitas.html", "popup", "width=600,height=500");
    });
});

const envioCita = document.getElementById('confirmacionCita');

envioCita.addEventListener('click', function() {
    alert('Cita programada correctamente');
})