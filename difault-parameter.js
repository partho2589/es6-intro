function add( num1, num2 = 0){

    // option 1
    // num2 = num2 || 0;
    // option 2
    /* if( num2 == undefined){
        num2 = 0
    } */
    const total = num1 + num2;
    return total;
}
const result = add(15, 12);
// console.log(result);

function fullName (first, last = 'Khan'){
    const name = first + ' ' + last;
    return name;
}
const myName = fullName('Partho');
console.log(myName)