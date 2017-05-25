function getCompoundInterest(arr) {
    let deposit = {
        'principalSum' : arr[0],
        'interestInPercent': arr[1],
        'compoundingPeriodInMonths' : 12/arr[2],
        'totalPeriodInYears' : arr[3]
    };

    let futureValue = deposit.principalSum
        *(1+(deposit.interestInPercent/100)/deposit.compoundingPeriodInMonths)
        **(deposit.compoundingPeriodInMonths*deposit.totalPeriodInYears);

    return futureValue;
}

console.log(getCompoundInterest([1500, 4.3, 3, 6]));
console.log(getCompoundInterest([100000, 5, 12, 25]));