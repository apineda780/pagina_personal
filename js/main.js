document.querySelector("#btnFind")

const btnClick = document.getElementById("btnFind");

btnClick.addEventListener("click", () => {

    const idBuscar = document.getElementById("idfind").value
    econtrar(idBuscar);
});

function econtrar(idBuscar) {

    console.log("aqui esta el valor del input", idBuscar);

    let urlEndPoint = `https://jsonplaceholder.typicode.com/posts/${idBuscar}`;
    
    fetch(urlEndPoint)
        .then((response) => {

            const dresultado = document.getElementById("resultadoFind");
                dresultado.innerHTML = "";

            let respuesta = response.json();
            console.log(respuesta);
            let responseBody = "";
            if (response.status == 200) {

            } else {
            responseBody = `<li><p><span class="negrita-no-found"> No se encontraron los resultados  </span></p></li>`;
        }

        dresultado.innerHTML = responseBody;

        .then ((data) =>{
        console.log(data)
    })

    const dresultado = document.getElementById("resultadoFind")
        dresultado.innerHTML = "";
    let  responseBody = "";
    if(data.lenght > 0) { 

    responseBody += `<li><p><span class="negrita-size">ID: </span>${data.id}</p></li>`;
    responseBody += `<li><p><span class="negrita-size">Titulo: </span>${data.tittle}</p></li>`;
    responseBody += `<li><p><span class="negrita-size">Cuerpo: </span>${data.body}</p></li>`;
    responseBody += `<li><p><span class="negrita-size">UsuarioID: </span>${data.userId}</p></li>`;
}   else {
    responseBody = `<li><p><span class="negrita-no-found"> No se encontraron los resultados  </span></p></li>`;
}
    dresultado.innerHTML = responseBody;
  



}

//hola profe soyyy Angiee....