const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// Number 1: Empty Array
const emptyArr = [];

// Number 2: More than 5 Array
const arrOfMoreThan5 = [1, 2, 3, 4, 5, 6];

// Number 3: Print Arrays
console.log('Empty Arr = ' + emptyArr.length);
console.log('arrOfMoreThan5 = ' + arrOfMoreThan5.length);

// Number 4: First Item
console.log(arrOfMoreThan5[0]);

// Number 4: Middle Item
console.log(arrOfMoreThan5[3]);

// Number 4: Last Item
console.log(arrOfMoreThan5[arrOfMoreThan5.length - 1]);

// Number 5: mixedDataTypes
const mixedDataTypes = [
    1, 
    2, 
    "three", 
    [1, 2, 3], 
    {
        name: 'hello world', 
        age: 12
    }, 
    4,
    "Five"
];

// Number 5: Print mixedDataTypes
console.log(mixedDataTypes.length);

// Number 6: IT Companies
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Number 7: Print IT Companies
console.log(itCompanies);

// Number 8: Length of IT Companies
console.log(itCompanies.length);

// Number 9: First Company
console.log(itCompanies[0]);
// Number 9: Middle Company
console.log(itCompanies[4]);
// Number 9: Last Company
console.log(itCompanies[itCompanies.length - 1]);

// Number 10: Print each companies
itCompanies.forEach(element => {
    console.log(element);
});

// Number 11: Uppercase
itCompanies.forEach(element => {
    console.log(element.toUpperCase());
});

// Number 12: To String
console.log(itCompanies.toString());

// Number 13: Company exists
if(itCompanies.includes("Apple")){
    console.log("Apple found in the company list");
}
else{
    console.log("Not Found");
}

// Number 14: Filter out "o"

// Number 15: Sorting
itCompanies.sort();
console.log(itCompanies);

// Number 16: Reverse
console.log(itCompanies.reverse());

// Number 17: Splice - First 3 Companies
console.log(itCompanies.splice(0, 3));

// Number 18: Splice - Last 3 Companies1
console.log(itCompanies.splice(4, 3));

// Number 19: Splice out middle company
console.log(itCompanies.splice(4, 1));

// Number 20: Remove First Company
itCompanies.shift();
console.log(itCompanies);

// Number 21: Remove Middle Company
itCompanies.splice(4, 1);
console.log(itCompanies);

// Number 22: Remove Last Company
itCompanies.pop();
console.log(itCompanies);

// Number 23: Remove All Companies
itCompanies.splice()
console.log(itCompanies);
