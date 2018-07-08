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
    computeUsersStats = window.loadData.computeUsersStats(users, progress, Object.keys(cohorts[1].coursesIndex));

    let usersOrder = window.loadData.sortUsers(computeUsersStats, 'name', 'DESC');

    let filterUser = window.loadData.filterUsers(computeUsersStats,"zaida");

    window.loadData.processCohortData(cohorts); 
//    console.log(filterUser);
}).catch(
    (error) => {
        alert("Error de Carga" + error);
        console.log(error);
    }
);


