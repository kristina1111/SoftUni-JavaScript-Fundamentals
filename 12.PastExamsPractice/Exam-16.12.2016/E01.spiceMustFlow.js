function solver(arr) {
    const consumedByDay = 26;
    let source = Number(arr[0]);
    let workingDays = Math.ceil((source-99)/10) < 0 ? 0 : Math.ceil((source-99)/10);
    let consumedSpice = (workingDays+1)*consumedByDay;
    let yieldDropAll = 0;

    // let totalSpiceExtracted = 0;
    for(let i = 0; i<workingDays; i++){
        yieldDropAll += 10*i;
        // yieldDropAll = 10*i;
        // totalSpiceExtracted += source;
        // totalSpiceExtracted -= yieldDropAll;
        // totalSpiceExtracted -= consumedByDay;

    }
    // console.log(yieldDropAll);
    // totalSpiceExtracted -= consumedByDay;

    let totalSpiceExtracted = (source*workingDays - yieldDropAll - consumedSpice)<0 ? 0 : (source*workingDays - yieldDropAll - consumedSpice);

    if(totalSpiceExtracted<0){
        totalSpiceExtracted = 0;
    }
    console.log(workingDays);
    console.log(totalSpiceExtracted)
}
// solver(['450']);
// solver(['111'])
// solver(['0'])
solver(['20'])