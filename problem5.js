function monthlySavings(array , livingCost) {
    if(!Array.isArray(array) || typeof livingCost !== 'number') {
        return 'invalid input';
    }
    let totalEarn = 0;
    for(let i of array) {
        if(i >= 3000) {
            i = i - ((i * 20) / 100);
        }
        totalEarn += i;
    }
    const savings = totalEarn - livingCost;
    if(savings < 0) {
        return 'earn more';
    }

    return savings;
}

console.log(monthlySavings(100, [ 900 , 2700 , 3400]));