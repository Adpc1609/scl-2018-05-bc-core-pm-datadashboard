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
    console.log(responseJsons);
    let users = responseJsons[0];
    let progress = responseJsons[1];
    let cohorts = responseJsons[2];
    let computeUsersStats = window.loadData.computeUsersStats(users, progress, Object.keys(cohorts[1].coursesIndex));

    let usersOrder = window.loadData.sortUsers(computeUsersStats, 'name', 'DESC');

    let filterUser = window.loadData.filterUsers(computeUsersStats,"zaida");
    console.log(filterUser);
}).catch(
    (error) => {
        alert("Error de Carga" + error);
        console.log(error);
    }
);