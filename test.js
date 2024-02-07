// problem 1
function calculateMoney(ticketSale) {
    const careTaker = 500;
    const staff = 8 * 50;
    if(ticketSale < 0) {
        return 'Ticket ammount must be positive number.';
    }
    else {
    const totalCost = careTaker + staff;
    const totalEarn = ticketSale * 120;
    const totalRemain = totalEarn - totalCost;
    return totalRemain;
    }
}

// problem 2
function checkName(name) {
    const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const nameLength = name.length - 1;
    if(typeof name !== 'string') {
        return 'invalid';
    }
    if(letters.includes(name.charAt(nameLength).toLowerCase())) {
        return 'Good Name';
    }
    else {
        return 'Bad Name';
    }
}

// problem 3
function deleteInvalids(array) {
    if(!Array.isArray(array)) {
        return 'Invalid input. Enter an Array.';
    }
    const newArray = [];
    for(let i of array) {
        if(typeof i === 'number' && !isNaN(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}

// problem 4
function password(obj) {
    const name = obj.name;
    const year = obj.birthYear.toString();
    const site = obj.siteName;

    if(typeof name === 'undefined' || typeof year === 'undefined' || typeof site === 'undefined' || year.length !== 4) {
        return 'invalid';
    }

    const newSite = site.charAt(0).toUpperCase() + site.slice(1);

    return `${newSite}#${name}@${year}`;
}

// problem 5
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