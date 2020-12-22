let fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

let map = require("./map.txt");
let testmap = require("./testmap.txt");

const findTrees = (string) => {

    let treesMap = string.split(/[\r\n]+/);
    let lastHorizontalIndex = treesMap[0].length - 1;
    
    let index  = 3;
    let treesCounter = 0;
    
    for (let i = 1; i < treesMap.length; i++){
        console.log(`index ${index}`)
        
        if (index > lastHorizontalIndex) {
            index = index - (lastHorizontalIndex + 1);
            console.log(`index in else if ${index}`)
        }
    
        if (treesMap[i][index] === '#'){
            console.log(treesMap[i][index])
            treesCounter++
        }
    
        index = index + 3;
    }

    return treesCounter;

}

// console.log(findTrees(testmap))
// console.log(findTrees(map))

const findTrees2 = (string, across, down) => {

    let treesMap = string.split(/[\r\n]+/);
    let lastHorizontalIndex = treesMap[0].length - 1;
    
    let index  = across;
    let treesCounter = 0;
    
    for (let i = down; i < treesMap.length; i = i + down){
        console.log(`index ${index}`)
        
        if (index > lastHorizontalIndex) {
            index = index - (lastHorizontalIndex + 1);
            console.log(`index in else if ${index}`)
        }
    
        if (treesMap[i][index] === '#'){
            treesCounter++
        }
    
        index = index + across;
    }

    return treesCounter;

}

console.log(findTrees2(testmap, 1, 1));
console.log(findTrees2(testmap, 3, 1));
console.log(findTrees2(testmap, 5, 1));
console.log(findTrees2(testmap, 7, 1));
console.log(findTrees2(testmap, 1, 2));

// console.log(findTrees(testmap))
// console.log(findTrees(map))

const findTrees3 = (string, array) => {

    let treesMap = string.split(/[\r\n]+/);
    let lastHorizontalIndex = treesMap[0].length - 1;
    
    let countedTrees = array.reduce((acc, curr, ind, arr) => acc * findTrees2(string, curr.right, curr.down), 1)
   
    return countedTrees;

}

let arrayOfSlopes = [{right: 1, down: 1}, {right: 3, down: 1}, {right: 5, down: 1}, {right: 7, down: 1}, {right: 1, down: 2}]
console.log(findTrees3(testmap, arrayOfSlopes));

console.log(findTrees3(map, arrayOfSlopes));