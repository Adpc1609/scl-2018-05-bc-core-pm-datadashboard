function cargarDatosLima(){
    const url = "../data/cohorts.json"
    fetch(url).then(  //Then recibe una función llamada cuando recibimos una respuesta. Entrega ''promesas''
        (response)=>{
            if(response.ok){
                return response.json();
            }
        }
    ).then( //Cuando la promesa se cumple.    Aquí anidamos más promesas
        (responseJson)=>{
            const datosLimaReceptor = document.getElementById("cargaDatosLima");
            for(let limaIndex=0; limaIndex < responseJson.length; limaIndex++){
                const limaDatos = document.createElement(''); //Aquí "almaceno" las imágenes
                limaDatos.src = responseJson[limaIndex];
                datosLimaReceptor.appendChild(limaDatos);
            }
        }
    ).catch( //Cuando no se cumple
        (error)=>{
            console.log("Petición falló, no tenemos gatitos por hoy");
        }
    ); 

    /*Promise.all([   //Ejecuta todas las llamadas de manera paralela
        fetch(url1),
        fetch(url2),
        fetch(url3)
    ]).then(
        (responses)=>{   //Responde a todas las promesas
            return Promise.all(responses.map((response)=>{
                return response.json();
            }));
        }
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
         //
         // Código que ocupa los jsons...
         //
    }).catch(
        (error)=>{ // Al menos una llamada falló
        }
    );*/
}