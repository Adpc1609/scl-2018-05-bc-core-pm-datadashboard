window.loadData = {
    computeUsersStats: (users, progress, courses) => {
        newUsers = [];
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
            users.sort(
                (a, b) => {
                    var sortOrder = 1;
                    var result = (a[orderBy] < b[orderBy]) ? -1 : (a[orderBy] > b[orderBy]) ? 1 : 0;
                    return result * sortOrder;
                }
            )


 //           console.log('ASC', users);
        } else if (orderDirection === 'DESC') {

            users.sort(
                (a, b) => {
                    var sortOrder = 1;
                    var result = (a[orderBy] > b[orderBy]) ? -1 : (a[orderBy] < b[orderBy]) ? 1 : 0;
                    return result * sortOrder;
                }
            )
//            console.log('DESC', users);
        }

    },
    filterUsers(users, search){
        return users.filter( (a) => {return a.name === search}  );

    },
    processCohortData(option){
        option.forEach(function(element){
            let listOption = document.createElement("option");
            listOption.text = element.id;
            listOption.value = element.id;
            document.getElementById("cohortsList").appendChild(listOption);
        });
    }
}
function getStudents(){
    while(document.getElementById("tableContainer").firstChild){
        document.getElementById("tableContainer").removeChild(document.getElementById("tableContainer").firstChild);
    }
    let searchText = document.getElementById("cohortsList").value;

    computeUsersStats.forEach(function (element){
        if(element.signupCohort == searchText){
            let rowTable = document.createElement("div");
            rowTable.className = "row_table";
            let cellTable = document.createElement("div");
            cellTable.className = "cell_table";
            cellTable.textContent = element.name;
            rowTable.appendChild(cellTable);    
            document.getElementById("tableContainer").appendChild(rowTable);
        }
    });
}