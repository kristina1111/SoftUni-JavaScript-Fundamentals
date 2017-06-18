function solver(arraySystems) {
    let systemsAggregatedResults = {};
    arraySystems.forEach(function (system) {
        let newCandidate = {
            name: system.candidate,
            votes: system.votes
        };
        if (!systemsAggregatedResults.hasOwnProperty(system.system)) {
            systemsAggregatedResults[system.system] = {
                name: system.system,
                candidates: {}, // {}
                numberOfVotes: 0, // 0
                getWinner: function (array) {
                    let sortedArray = [];
                    for (let key in array) {
                        sortedArray.push(array[key]);
                    }
                    let sortedWinners = sortedArray.sort(function (a, b) {
                        return b.votes - a.votes;
                    });
                    return {
                        name: sortedWinners[0].name,
                        totalVotes: this.numberOfVotes
                    };
                }
            }
        }
        if (!systemsAggregatedResults[system.system].candidates.hasOwnProperty(newCandidate.name)) {
            systemsAggregatedResults[system.system].candidates[newCandidate.name] = newCandidate;
        } else {
            systemsAggregatedResults[system.system].candidates[newCandidate.name].votes += newCandidate.votes;
        }
        systemsAggregatedResults[system.system].numberOfVotes += newCandidate.votes;

    });

    for (let system in systemsAggregatedResults) {
        systemsAggregatedResults[system].winner = systemsAggregatedResults[system].getWinner(systemsAggregatedResults[system].candidates)
    }

    let totalVoterInUniverse = 0;
    let candidatesAggregatedResults = {};
    for (let system in systemsAggregatedResults) {
        totalVoterInUniverse += systemsAggregatedResults[system].numberOfVotes;
        if (!candidatesAggregatedResults.hasOwnProperty(systemsAggregatedResults[system].winner.name)) {
            candidatesAggregatedResults[systemsAggregatedResults[system].winner.name] = {
                name: systemsAggregatedResults[system].winner.name,
                totalVotes: 0,
                listSystemsWon: []
            }
        }

        candidatesAggregatedResults[systemsAggregatedResults[system].winner.name].totalVotes += systemsAggregatedResults[system].winner.totalVotes;
        candidatesAggregatedResults[systemsAggregatedResults[system].winner.name].listSystemsWon.push({
            name: systemsAggregatedResults[system].name,
            numberOfVotes: systemsAggregatedResults[system].numberOfVotes
        })

    }
    // console.log();
    // console.log(totalVoterInUniverse);
    // console.log(candidatesAggregatedResults);
    // for (let candidate in candidatesAggregatedResults) {
    //     console.log(candidatesAggregatedResults[candidate].listSystemsWon)
    // }
    let sortedCandidatesAggregatedResults = sortAssociativeArray(candidatesAggregatedResults);
    // console.log();
    // console.log(sortedCandidatesAggregatedResults);

    let candidate1 = sortedCandidatesAggregatedResults[0];
    let candidate2 = null;
    if(sortedCandidatesAggregatedResults.length>0){
        candidate2 = sortedCandidatesAggregatedResults[1];
    }

    candidate1.percentVoteWon = Math.floor(candidate1.totalVotes/totalVoterInUniverse*100);
    if(candidate2!=null){
        candidate2.percentVoteWon = Math.floor(candidate2.totalVotes/totalVoterInUniverse*100);
    }

    if(candidate1.percentVoteWon ==100){
        console.log(`${candidate1.name} wins with ${candidate1.totalVotes} votes`);
        console.log(`${candidate1.name} wins unopposed!`);
        return;
    }
    if(candidate1.percentVoteWon>50){
        console.log(`${candidate1.name} wins with ${candidate1.totalVotes} votes`);
        console.log(`Runner up: ${candidate2.name}`);
        candidate2.listSystemsWon.forEach(function (e) {
            console.log(`${e.name}: ${e.numberOfVotes}`);
        })
    }else{
        console.log(`Runoff between ${candidate1.name} with ${candidate1.percentVoteWon}% and ${candidate2.name} with ${candidate2.percentVoteWon}%`)
    }
    // console.log(candidate1);
    // console.log(candidate2);


    function sortAssociativeArray(array) {
        // turn associative array to sortable array
        let sortableArr = [];
        for(let key in array){
            // sortableArr.push([key, array[key]]);
            sortableArr.push(array[key]);
        }

        //  main sorting of the objects
        sortableArr.sort(function (a, b) {
            // a = a[1];
            // b = b[1];

            // sorting property of each object by criteria
            a.listSystemsWon.sort(function (system1, system2) {
                return system2.numberOfVotes - system1.numberOfVotes;
            });

            b.listSystemsWon.sort(function (system1, system2) {
                return system2.numberOfVotes - system1.numberOfVotes;
            });

            return b.totalVotes - a.totalVotes;
        });

        // //    turn sortable array back to associative array
        // let associativeArray = {};
        // for(let i = 0; i<sortableArr.length; i++){
        //     let key = sortableArr[i][0];
        //     let value = sortableArr[i][1];
        //     // needed because it shouldn't be in the output  - Judge wants that! :)
        //     delete value.scores;
        //
        //     associativeArray[key] = value;
        // }
        // return associativeArray;

        return sortableArr;
    }

}
solver([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);

solver([ { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ])

solver([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
])