const num1:number = Number(prompt('type some number: '));
const num2:number = Number(prompt('type some number: '));

if(num1 > num2){
    alert('the first number is larger.');
}else if(num1 === num2){
    alert('the same value');
}else{
    alert('the secound is larger.');
}