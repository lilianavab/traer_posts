const getPosts = async () => {
  try {
    // Realizar una solicitud para obtener datos de la API
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: Status ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    if (datos.length === 0) {
      throw new Error('Objetos no encontrados');
    }

      // Seleccionar el elemento HTML donde se mostrarán los datos
    const mostrarDatos = document.querySelector('#data');
    let listaPostsHTML = '';
    datos.forEach((post) => {
      listaPostsHTML = listaPostsHTML + `<li>${post.title}</li>`;
    });
    mostrarDatos.innerHTML = listaPostsHTML;

  } catch (error) {
    // Manejar y mostrar errores en la consola
    console.error('Se ha presentado un error', error);
  }
};
