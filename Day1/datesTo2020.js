
const testDates = [1721, 979, 366, 299, 675, 1456];

const {dates} = require('./dates');

const addTo2020 = (dates) => {

    for (let i = 0; i < dates.length; i++){

        for (let j = 0; j < dates.length; j++){

            if ((dates[i] + dates[j] == 2020) && (i != j)){
                return dates[i] * dates[j]
            }
        }
    }
}

console.log(addTo2020(testDates));
console.log(addTo2020(dates));

const threeAddTo2020 = (dates) => {

    for (let i = 0; i < dates.length; i++){

        for (let j = 0; j < dates.length; j++){

           for (let k = 0; k < dates.length; k++ ){

            if ((2020 - (dates[i] + dates[j] + dates[k]) == 0) && (i != j && j !=k && k != i))
                return dates[i] * dates[j] * dates[k];
           }
        }
    }


}

console.log(threeAddTo2020(testDates));
console.log(threeAddTo2020(dates));
