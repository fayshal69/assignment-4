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

console.log(password({ name: 'rahat' , birthYear: 200 }));