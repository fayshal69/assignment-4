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

console.log(calculateMoney(-130));