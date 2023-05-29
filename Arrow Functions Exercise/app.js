function double(arr) {
    return arr.map(function(val){
        return val * 2
    })
} 

//Becomes 

const double = arr.map(val => val * 2);



function squareAndFindEvenes(numbers) {
    let squares = numbers.map(function(num){
        return num ** 2;
    });
    let evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

//becomes 

const squareAndFindEvenes = num => num.map(val => val ** 2).filter(square =>
    square % 2 === 0)