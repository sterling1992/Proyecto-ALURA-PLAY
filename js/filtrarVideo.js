import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideo.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    console.log(`Datos de búsqueda: ${datosDeBusqueda}`); // Verificar datos de búsqueda

    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    // Limpiar lista existente
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Filtrar y crear las nuevas cards
    const cards = busqueda
        .filter(video => video.titulo.includes(datosDeBusqueda) || video.descripcion.includes(datosDeBusqueda))
        .map(video => crearCard(video.titulo, video.descripcion, video.url, video.imagen));

    // Añadir las cards a la lista
    cards.forEach(card => lista.appendChild(card));

    if (cards.length === 0) {
        lista.innerHTML = `<h2 class="mensaje_titulo">No fueron encontrados elementos para ${datosDeBusqueda} </h2>`;
    }
}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento => filtrarVideo(evento));
