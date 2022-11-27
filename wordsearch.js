const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    
    const newArray = [];
    for (let i = 0; i < letters.length; i++) {
        for (let x = 0; x < letters[i].length; x++) {
            if (i === 0) {
                newArray.push([letters[0][x]]);
            } else {
                newArray[x].push(letters[i][x]);
            }
        }
    }

    const verticalJoin = newArray.map(vs => vs.join(''));
    for (v of verticalJoin) {
        if (v.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;