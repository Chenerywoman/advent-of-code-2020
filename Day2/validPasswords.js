let fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

let test = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc"

let passwords = require("./passwords.txt")

console.log(typeof passwords)

const validPasswords = (string) => {

    let array = string.split(/[\r\n]+/);

    let ranges = array.map((curr) => {
        let range = /[\d]+\-[\d]+/.exec(curr);
        return range[0];
    });

    let letters = array.map((curr, ind, arr) => {
        let letter = /[a-z]/.exec(curr);
        return letter[0];
    });

    let passwords = array.map((curr) => {
        return curr.substring(curr.indexOf(':') + 2, curr.length)
    });

    let counter = 0;

    for (let i = 0; i < passwords.length; i++) {

        let min = /\d+/.exec(ranges[i])[0];
        let max = /(?<=\-)\d+/.exec(ranges[i])[0];
        let letter = letters[i];
        let letterOccurences = [...passwords[i].matchAll(letter)];
        let letterCount = letterOccurences == null ? 0 : letterOccurences.length;

        if (letterCount >= min && letterCount <= max) {
                counter++
        }
    }
    
    return counter;

}

console.log(validPasswords(passwords))
console.log(validPasswords(test))

const validPasswordsPart2 = (string) => {

    let array = string.split(/[\r\n]+/);

    let ranges = array.map((curr) => {
        let range = /[\d]+\-[\d]+/.exec(curr);
        return range[0];
    });

    let letters = array.map((curr, ind, arr) => {
        let letter = /[a-z]/.exec(curr);
        return letter[0];
    });

    let passwords = array.map((curr) => {
        return curr.substring(curr.indexOf(':') + 2, curr.length)
    });

    let counter = 0;

    for (let i = 0; i < passwords.length; i++) {

        let index1 = /\d+/.exec(ranges[i])[0];
        let index2 = /(?<=\-)\d+/.exec(ranges[i])[0];
        let letter = letters[i];
        let letterAtIndex1 = passwords[i].substring(index1-1, index1);
        let letterAtIndex2 = passwords[i].substring(index2-1, index2)
       
        if ((letter == letterAtIndex1 || letter == letterAtIndex2) && (letterAtIndex1 != letterAtIndex2)) {
            counter++
        }

    }
    
    return counter;

}

console.log(validPasswordsPart2(test))
console.log(validPasswordsPart2(passwords))