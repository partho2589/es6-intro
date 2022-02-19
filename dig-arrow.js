const add = (num1, num2) => num1 + num2;
const sum = add (90, 155);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 4);

const tenTimes = (num) => num *17
const output = tenTimes(17)

const getName = () => 'Partho malo'
const value = getName()

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
};
const total = doMath(10, 5)
console.log(total)