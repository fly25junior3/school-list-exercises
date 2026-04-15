function calculator(num1:number, num2:number){
    let result:number = 0;
    const operation:number = Number(prompt(`
    [1] to sum;
    [2] to decress;
    [3] to multiple;
    [4] to divide;
    `)); 
    switch(operation){
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
    };
    return result;
};

const num1:number = Number(prompt('type the first number   : '));
const num2:number = Number(prompt('type the secound number : '));

alert(calculator(num1, num2));