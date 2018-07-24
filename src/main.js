var cohorts;
var users;
var progress;
var computeUsersStats;
Promise.all([
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
    fetch("../data/cohorts.json")
]).then(
    (responses) => { // responde a todas las promesas
        return Promise.all(responses.map((response) => {
            return response.json();
        }));

    }
).then((responseJsons) => {
//    console.log(responseJsons);
    users = responseJsons[0];
    progress = responseJsons[1];
    cohorts = responseJsons[2];
    
    let options = new Object();
    
    options.cohort = cohorts;
    options.cohortData = { users: users, progress: progress};
    options.orderBy = "name";
    options.orderDirection = "ASC";
    options.search = 'Vanessa';



   let result = window.loadData.processCohortData(options); 
    console.log(result);
}).catch(
    (error) => {
        alert("Error de Carga" + error);
        console.log(error);
    }
);


