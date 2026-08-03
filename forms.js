function sendMail() {

    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let comentario = document.getElementById("comentario").value;


    // Comprobar que los campos no estén vacíos
    if (nombre === "" || correo === "" || comentario === "") {

        alert("Por favor, completa todos los campos.");

        return;
    }


    // Crear los parámetros que serán enviados a EmailJS
    let params = {

        nombre: nombre,
        correo: correo,
        comentario: comentario

    };


    // Mostrar los datos en la consola
    console.log("Datos enviados:", params);


    // Desactivar el botón mientras se envía
    let button = document.getElementById("submitButton");

    button.disabled = true;
    button.value = "Enviando...";


    // Enviar correo mediante EmailJS
    emailjs.send(
        "service_gxvlys2",
        "template_j6w2y5b",
        params
    )

    .then(function(response) {

        console.log("Éxito:", response);

        alert("Comentario enviado correctamente.");


        // Limpiar los campos
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("comentario").value = "";

    })

    .catch(function(error) {

        console.error("Error completo:", error);

        alert(
            "No se pudo enviar el comentario.\n\n" +
            "Error: " +
            (error.text || "Error desconocido")
        );

    })

    .finally(function() {

        // Volver a activar el botón
        button.disabled = false;
        button.value = "Enviar";

    });

}