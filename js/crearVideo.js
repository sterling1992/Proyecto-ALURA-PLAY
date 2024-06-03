import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario");

async function crearVideo(evento){

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random*10).toString();
    // Llamado a la función enviarVideo();

    try{
        await conexionAPI.enviarVideo(titulo,descripcion,url,imagen);
        // Se redirecciona a través del DOM al usuario a la ventana de envio concluido
        window.location.href="../pages/envio-concluido.html";
    }catch(e){ // Capruramos el mensaje de error y lo pasamos a un alert
        alert(e)
    }
   

}

//CAPTURAMOS LA ACCIÓN DE ENVIAR DEL FORMULARIO
formulario.addEventListener("submit", evento => crearVideo(evento))