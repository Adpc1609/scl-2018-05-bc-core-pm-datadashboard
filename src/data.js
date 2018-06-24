 Promise.all([
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
        fetch("../data/cohorts.json")
    ]).then(
        (responses)=>
    { // responde a todas las promesas
    return Promise.all(responses.map((response) => {
        return response.json();
    }));

    }
    ).then((responseJsons)=>{
        //console.log(responseJsons);
        let users= responseJsons[0];
        let progress= responseJsons[1];
        let cohorts= responseJsons[2];
        let computeUsersStats = window.loadData.computeUsersStats(users, progress, Object.keys(cohorts[1].coursesIndex));
        let usersOrder = window.loadData.sortUsers(computeUsersStats, 'name', 'ASC');
        let filterUsers= window.loadData.filterUsers(computeUsersStats,'Daniela Sarzosa');
    }).catch(
        (error) => {
            alert("Error de Carga" + error);
            console.log(error);
        }
    );
   
    window.loadData = {
        computeUsersStats: (users, progress, courses) => {
            let newUsers =[];
            users.forEach((userValue) => {
                if (userValue.role === 'student') {
                let tempProgess = progress[userValue.id];
   
                let percent = readC = readT = quizC = quizT = practiceC = practiceT = scoreSum = 0;
                courses.forEach((coursesValue) => {
   
                    // Coinciden un tempProgress con un courses
                    if (typeof tempProgess[coursesValue] !== 'undefined') {
                        percent = tempProgess[coursesValue].percent;
                        // convierte en arraglo un objecto
                        let tempUnit = Object.values(tempProgess[coursesValue].units);
   
                        for (let itemUnit in tempUnit) {
                            tempPart = Object.values(tempUnit[itemUnit].parts);
                            for (let itemPart in tempPart) {
                                switch (tempPart[itemPart].type) {
                                    case 'read':
                                        readT += 1;
                                        if (tempPart[itemPart].completed === 1)
                                            readC += 1;
                                        break;
                                    case 'quiz':
                                        quizT += 1;
                                        if (tempPart[itemPart].completed === 1) {
                                            quizC += 1;
                                            scoreSum += tempPart[itemPart].score;
                                        }
                                        break;
                                    case 'practice':
                                        practiceT += 1;
                                        if (tempPart[itemPart].completed === 1)
                                            practiceC += 1;
                                        break;
                                }
   
                            }
                        }
                        let stats = new Object();
                        stats.percent = percent;
                        stats.exercises = {
                            total: practiceT,
                            completed: practiceC,
                            percent: Math.round((practiceC / practiceT) * 100)
                        };
                        stats.reads = {
                            total: readT,
                            completed: readC,
                            percent: Math.round((readC / readT) * 100)
                        };
                        stats.quizzes = {
                            total: quizT,
                            completed: quizC,
                            percent: Math.round((quizC / quizT) * 100),
                            scoreSum: scoreSum,
                            scoreAvg: Math.round(scoreSum / quizC)
                        }
   
                        userValue.stats = stats
                        newUsers.push(userValue);
   
                    }
   
                });
   
                }
            });
            return newUsers;
        },

     sortUsers: (users, orderBy, orderDirection) => {
         if (orderDirection === 'ASC') {
             return users.sort(
                 (a, b) => {
                     var sortOrder = 1;
                     var result = (a[orderBy] < b[orderBy]) ? -1 : (a[orderBy] > b[orderBy]) ? 1 : 0;
                     return result * sortOrder;
                 }
             )


         } else if (orderDirection === 'DESC') {

             return users.sort(
                 (a, b) => {
                     var sortOrder = 1;
                     var result = (a[orderBy] > b[orderBy]) ? -1 : (a[orderBy] < b[orderBy]) ? 1 : 0;
                     return result * sortOrder;
                 }
             )

         }

     },

        filterUsers:(users,search) => {
            //let newUsers=[];
            return users.filter((a) => {return a.name === search});

        },
        processCohortData: (options) => {
   
   
        },

     
    }
