

// Agregamos un evento, DOMContentLoaded se activa cuando el documento html esta completamente cargado, pero sin esperar a que se hayan descargado todos los recursos externos como imágenes.
document.addEventListener("DOMContentLoaded", function () {
    // creamos una constante y que tome el id de un elemento, en este caso el boton del Swipe UP
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Mostrar el botón cuando se desplaza hacia abajo
    window.addEventListener("scroll", function () {
        // Esta propiedad windowscrollY devuelve la cantidad de píxeles que el documento actual ha sido desplazado verticalmente; muestra la posición vertical actual del desplazamiento de la página.
        // Y aca esta diciendo que si la posición de desplazamiento vertical (window.scrollY) es mayor que 200 píxeles, entonces se cambia el estilo del botón para que se muestre
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Volver arriba cuando se hace clic en el botón
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Desplazamiento suave
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // toma el id del formulario
    const form = document.getElementById("myForm");
    // toma el id del div que esta debajo del form
    const errorMessage = document.getElementById("error-message");

    // se produce un evento cuando se envía el formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        errorMessage.textContent = "";

        // Estamos obteniendo los valores de los campos de nombre y correo electrónico del formulario
        const name = form.name.value;
        const email = form.email.value;

         // Si alguno de los campos está vacío, se establece un mensaje de error 
        if (name === "" || email === "") {
            errorMessage.textContent = "Por favor, complete todos los campos obligatorios.";
            
        // Si el correo electrónico no es válido según la función isValidEmail, se establece un mensaje de error
        } else if (!isValidEmail(email)) {
            errorMessage.textContent = "Ingrese un correo electrónico válido.";
        } else {
            form.submit(); // Enviar el formulario si es válido
        }
    });

    function isValidEmail(email) {
        // Define una expresión regular para validar direcciones de correo electrónico.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           // La función test de la expresión regular verifica si el correo electrónico coincide con el patrón definido.
        return emailPattern.test(email);
    }
});


