document.addEventListener("DOMContentLoaded", function(event){
    const formulario = document.querySelector("form")

    formulario.addEventListener("submit", function(event){
        event.preventDefault()

        const name = event.target.varName.value
        const album = event.target.varAlbum.value
        const artista = event.target.varArtista.value
        const disco = event.target.varDisco.value
        const genero = event.target.varGenero.value

        const fila = document.createElement("tr")

        const Celdaname = document.createElement("td")
        const Celdaalbum = document.createElement("td")
        const Celdaartista = document.createElement("td")
        const Celdadisco = document.createElement("td")
        const Celdagenero = document.createElement("td")

        Celdaname.textContent = name
        Celdaalbum.textContent = album
        Celdaartista.textContent = artista
        Celdadisco.textContent = disco
        Celdagenero.textContent =  genero

        fila.appendChild(Celdaname)
        fila.appendChild(Celdaalbum)
        fila.appendChild(Celdaartista)
        fila.appendChild(Celdadisco)
        fila.appendChild(Celdagenero)

        const tabla = document.querySelector("tbody")
        tabla.appendChild(fila);

        formulario.reset();






        




        




        /* console.log(name)
        console.log(album)
        console.log(artista) */
        


    })
})