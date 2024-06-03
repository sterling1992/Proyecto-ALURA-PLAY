
// CREACIÓN DE SOLICITUD GET
async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos");
    // Convertir lo obtenido a una estructura json
    const conexionConvertida = await conexion.json();
   // console.log(conexionConvertida);
    return conexionConvertida;
}

// CREACIÓN SOLICITUD POST

async function enviarVideo (titulo,descripcion,url,imagen){
  const conexion = await fetch("http://localhost:3001/videos", {
    method: "POST",
    headers: {"content-type": "aplications/json"},
    body: JSON.stringify({
      titulo:titulo,
      descripcion:`${descripcion} mil visualizaciones`,
      url:url,
      imagen:imagen
    })
  });

  if(!conexion.ok){
    throw new Error("Ha odurrido un error al enviar el video");
  }

  const conexionConvertida = await conexion.json();
  // Capturamos el error si la conexión no se cumple para enviar un video
  return conexionConvertida;
}

// Función para busqueda de los videos 
async function buscarVideos(palabraClave){
  const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
  const conexionConvertida =  await conexion.json();
  return conexionConvertida;
}

// Exportamos la función Listar Videos
  export const conexionAPI = {
    listarVideos, enviarVideo, buscarVideos
  };