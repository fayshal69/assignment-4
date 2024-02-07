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

console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));