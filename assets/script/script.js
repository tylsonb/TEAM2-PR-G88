// leea el contenido del DOM
document.addEventListener("DOMContentLoaded", function (event) {
  const formulario = document.querySelector("form");
  // previene compotamiento por defecto
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Valore ingresado por el usuario

    const name = event.target.varName.value;
    const album = event.target.varAlbum.value;
    const artista = event.target.varArtista.value;
    const disco = event.target.varDisco.value;
    const genero = event.target.varGenero.value;

    // crea los elementos de la tabla
    const fila = document.createElement("tr");

    const Celdaname = document.createElement("td");
    const Celdaalbum = document.createElement("td");
    const Celdaartista = document.createElement("td");
    const Celdadisco = document.createElement("td");
    const Celdagenero = document.createElement("td");

    // asignar  valores el elemento td
    Celdaname.textContent = name;
    Celdaalbum.textContent = album;
    Celdaartista.textContent = artista;
    Celdadisco.textContent = disco;
    Celdagenero.textContent = genero;

    // añade el valor a la celda en la fila
    fila.appendChild(Celdaname);
    fila.appendChild(Celdaalbum);
    fila.appendChild(Celdaartista);
    fila.appendChild(Celdadisco);
    fila.appendChild(Celdagenero);
    // dibuja la tabla en el DOM
    const tabla = document.querySelector("tbody");
    tabla.appendChild(fila);
    // limpia los campps ingresados por el usuario
    formulario.reset();
  });
});
