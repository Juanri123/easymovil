function cargarDispositivos(){
    axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/db')
    .then(function(respuesta){
        let listaInformacion = document.getElementById('tblContenido');

        for (let i=0; i<respuesta.data.dispositivos.length; i++){

            let ListaID_fila = document.createElement('tr');

            let ListaID_columna = document.createElement('td');
            ListaID_columna.innerText = respuesta.data.dispositivos[i].id;

            let ListaNombre_columna = document.createElement('td');
            ListaNombre_columna.innerText = respuesta.data.dispositivos[i].marca;

            let ListaModelo_columna = document.createElement('td');
            ListaModelo_columna.innerText = respuesta.data.dispositivos[i].modelo;

            let ListaColor_columna = document.createElement('td');
            ListaColor_columna.innerText = respuesta.data.dispositivos[i].color;

            let ListaAlmacenamiento_columna = document.createElement('td');
            ListaAlmacenamiento_columna.innerText = respuesta.data.dispositivos[i].almacenamiento;

            let ListaProcesador_columna = document.createElement('td');
            ListaProcesador_columna.innerText = respuesta.data.dispositivos[i].procesador;

            ListaID_fila.appendChild(ListaID_columna);
            ListaID_fila.appendChild(ListaNombre_columna);
            ListaID_fila.appendChild(ListaModelo_columna);
            ListaID_fila.appendChild(ListaColor_columna);
            ListaID_fila.appendChild(ListaAlmacenamiento_columna);
            ListaID_fila.appendChild(ListaProcesador_columna);

            listaInformacion.appendChild(ListaID_fila);
        }   
    })
    .catch(function(error){
        console.log(error);
    });
} 

function consultarDispositivo(){
    let ID_info = document.getElementById('ID_consulta').value;

    let Marca = document.getElementById('Marca');
    let Modelo = document.getElementById('Modelo');
    let Color = document.getElementById('Color');
    let Almacenamiento = document.getElementById('Almacenamiento');
    let Procesador = document.getElementById('Procesador');

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db')
    .then(response => response.json())
    .then((respuesta) => {
        
    for (let i=0; i<respuesta.dispositivos.length; i++){
        if (ID_info == respuesta.dispositivos[i].id){
            Marca.value = respuesta.dispositivos[i].marca;
            Modelo.value = respuesta.dispositivos[i].modelo;
            Color.value = respuesta.dispositivos[i].color;
            Almacenamiento.value = respuesta.dispositivos[i].almacenamiento;
            Procesador.value = respuesta.dispositivos[i].procesador;
            break;

    }
    } 
    })
    
    .catch(function(error) { 
        alert(error);
    });
}

function modificarDispositivo(){
    let ID_info = document.getElementById('ID_consulta').value;
    let Marca = document.getElementById('Marca').value;
    let Modelo = document.getElementById('Modelo').value;
    let Color = document.getElementById('Color').value;
    let Almacenamiento = document.getElementById('Almacenamiento').value;
    let Procesador = document.getElementById('Procesador').value;

    json = JSON.stringify({ID_info,Marca,Modelo,Color,Almacenamiento,Procesador})
    saludo = 'Ha sido modificado exitosamente.' + json
     
    if(ID_info == ""){
        alert('No se ha seleccionado un ID');
    }else{
        alert((saludo));
    }
}

function eliminarDispositivo(){
    let ID_info = document.getElementById('ID_consulta').value;

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
        method: 'DELETE',
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        if(ID_info == ""){
            alert('No se ha seleccionado un ID');
        }else{
            document.getElementById('Marca').value = "";
            document.getElementById('Modelo').value = "";
            document.getElementById('Color').value = "";
            document.getElementById('Almacenamiento').value = "";
            document.getElementById('Procesador').value = "";            
            alert((`Ha sido Eliminado el ${ID_info}.`));

        }
    })
    .catch(error => console.error('Error: ', error))
}

function nuevoDispositivo(){
    let Marca = document.getElementById('Marca_a').value;
    let Modelo = document.getElementById('Modelo_a').value;
    let Color = document.getElementById('Color_a').value;
    let Almacenamiento = document.getElementById('Almacenamiento_a').value;
    let Procesador = document.getElementById('Procesador_a').value;

    alert(`Se agregó un nuevo articulos \n Marca: ${Marca} \n Modelo: ${Modelo} \n Color: ${Color} \n Almacenamiento: ${Almacenamiento} \n Procesador: ${Procesador}`)

}