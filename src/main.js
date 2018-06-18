
const url1 = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const url2 = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const url = 'https://laboratoria-la-staging.firebaseapp.com';

/* Se debe obtener la data de API desde este archivo */
const data = loadData.getCampuses(url + '/campuses').then(response =>{
    console.log(response);
    let campuses = document.getElementById("campus");
    console.log(campuses);
    for(let item in response ){
        // let etiqueta = document.createElement('a');
        
        campuses.innerHTML += '<a class="dropdown-item" onclick="'+getCohortsByIid(response[item].id)+'" href="#">'+response[item].name+'</a>';
        
    }
function getCohortsByIid(id){
    console.log(id);
}
  


});



   

/*function loadAllData(url){

    // Concadena las url para enviar a la api 

    url1= url+'/cohorts';
    url2= url+'/progress';
    url3= url+'/cohorts';


    Promise.all([   //Ejecuta todas las llamadas de manera paralela
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
    );
    
   
} */

    /**/