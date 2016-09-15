var numbers = [1, 2, 3, 4, 5, 6, 7];

/* THIS IS A WORKABLE SOLUTION, BUT THIS FUNCTIONALITY IS BUILT INTO JAVASCRIPT

var filterDownArray = function(inputArr, conditionToFilter) {
    var filteredArr = [];

    for (var i = 0; i < inputArr.length; i++) {
        var element = inputArr[i];
        
        // If the current array item matches our condition
        if (conditionToFilter(element)) {
            // Add the item onto the filtered array
            filteredArr.push(element);
        }
    }

    return filteredArr;
};


var greaterThanThree = filterDownArray(numbers, function(item) { return item >= 3; });
var evenNumbers = filterDownArray(numbers, function(item) { return item % 2 === 0; });  */


var greaterThanThree = numbers.filter(function(item) { return item >=3; }); //THE FILTER METHOD DOES THIS FOR US

// WHAT IF WE WANT TO OUPUT THE SQUARE OF EACH NUMBER IN AN ARRAY

//LONG WINDED METHOD

/*

var output = [];

for (i=0; i < numbers.length; i++) {
    var nbumber + numbers[i];
    output.push(number * number);
}

console.log(output);

*/

// BETTER SOLUTION

var output = numbers.map(function(item)) {
    return item * item;
});

// A SIMPLE WAY TO FILTER ARRAY FOR NUMBERS UNDER TEN AND TIMES THEM BY ITSELF

var isUnderTen = function(item) {
    return item < 10;
};

var timesItself = function(item){
    return item * item;
};

var output = numbers.filter(isUnderTen).map(timesItself);

console.log(output);