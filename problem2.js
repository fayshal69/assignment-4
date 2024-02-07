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

console.log(checkName(199));