// create a function largerThan that will receive 2 numbers as parameters and return the largest number only

const largerThan = (num1, num2) => {
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(largerThan(1,2))