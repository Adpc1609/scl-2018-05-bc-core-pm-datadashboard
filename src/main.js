const url = 'https://api.laboratoria.la/';
<<<<<<< HEAD

/* Se debe obtener la data de API desde este archivo */
/*response(respuestade la solicitud de la api)*/


=======


>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721
const data = loadData.getCampuses(url).then(response => {
   
    let campuses = document.getElementById("campus");
   
    campuses.innerHTML = '';
    for (let item in response) {
        //let etiqueta = document.createElement('a');
        campuses.innerHTML += '<a class="dropdown-item" onmouseover="+getCohortsByIid(\''+response[item]+'\');" href="#">'+response[item].name+'</a>';
    }

    const dataCoh = loadData.getCohortsByIid(url + 'cohorts').then(response => {
        console.log(response);
        let cohorts = document.getElementById("cohort");
        console.log(cohorts);
         for (let item in response) {
           cohorts.innerHTML += '<a class="dropdown-item "onclick="' + getAlumnas(response[item].id) + '" href="#">' + response[item].name + '</a';
        }
    
    })
<<<<<<< HEAD

    const dataUsers = loadData.getUserLab(url + 'cohorts/lim-2017-09-bc-core-am/users').then(response => {
        console.log(response);
        let Users = document.getElementById("alumnas");
        console.log(Users);
         for (let item in response) {
           Users.innerHTML += '<a class="dropdown-item "onclick="' +getAlumnas(response[item].id) + '" href="#">' + response[item].name + '</a';
        }
    
    })

    /*const dataUsers = loadData.getProgress(url + 'progress').then(response => {
        console.log(response);
        let Users = document.getElementById("alumnas");
        console.log(Users);
         for (let item in response) {
           Users.innerHTML += '<a class="dropdown-item "onclick="' +getAlumnas(response[item].id) + '" href="#">' + response[item].name + '</a';
        }
    
    })*/
})    

=======

    const dataUsers = loadData.getUserLab(url + 'cohorts/lim-2017-09-bc-core-am/users').then(response => {
        console.log(response);
        let Users = document.getElementById("alumnas");
        console.log(Users);
         for (let item in response) {
           Users.innerHTML += '<a class="dropdown-item "onclick="' +getAlumnas(response[item].id) + '" href="#">' + response[item].name + '</a';
        }
    
    })
>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721

    /*const dataUsers = loadData.getProgress(url + 'progress').then(response => {
        console.log(response);
        let Users = document.getElementById("alumnas");
        console.log(Users);
         for (let item in response) {
           Users.innerHTML += '<a class="dropdown-item "onclick="' +getAlumnas(response[item].id) + '" href="#">' + response[item].name + '</a';
        }
    
    })*/
})    

function getCohortsByIid(id){
    console.log(id);
    loadData.getCohortsByIid(url + 'cohorts' + 'campus='+id).then(response => {
        console.log(response);
        let cohort = document.getElementById("cohort");
        console.log(cohort);
        cohort.innerHTML='';
        for (let item in response) {
            cohort.innerHTML += '<a class="dropdown-item dropdown-toggle" onmouseover="+getAlumnas(\''+response[item].id+'\');" href="#">'+response[item].id+'</a>';
        }
    })

<<<<<<< HEAD
}

function getAlumnas(id){
    console.log(id);
}

=======

function getCohortsByIid(id){
    console.log(id);
    loadData.getCohortsByIid(url + 'cohorts' + 'campus='+id).then(response => {
        console.log(response);
        let cohort = document.getElementById("cohort");
        console.log(cohort);
        cohort.innerHTML='';
        for (let item in response) {
            cohort.innerHTML += '<a class="dropdown-item dropdown-toggle" onmouseover="+getAlumnas(\''+response[item].id+'\');" href="#">'+response[item].id+'</a>';
        }
    })

}

function getAlumnas(id){
    console.log(id);
}

>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721
function getUser(id){
    console.log(id);
}
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
