function SayHi(){
    console.log('Hello');
}

SayHi();


function SayHi2(userName){
    console.log(`Hello, ${userName}!!!`);
}

let user1 = 'Vasya';
let user2 = 'Masha';
let user3 = 'Tom';
SayHi2(user1);
SayHi2(user2);
SayHi2(user3);
let userName = 'Olga';
SayHi2(userName);


//----------------------------------
MySum(4,4)

function MySum(a,b){
    let sum;
    sum=a+b;
    console.log('Sum:', sum);
}

MySum(2,2);

//----------------------------------


function FunLine(n){
    let str='';
    while(n>0){
        str += '*';
        n--;
    }
    console.log(str);
}
FunLine(15);


function FunLine(symvolLine, n){
    let str='';
    while(n>0){
        str += symvolLine;
        n--;
    }
    console.log(str);
}
FunLine('*',15);

//----------------------------------
function MySum2(a,b){
    let sum;
    sum=a+b;
    return sum;
}

function MySum2(a,b){
   return a+b;
}
//----------------------------------
function SumNamber(limit1, limit2){
    let i, 
    sum=0;
    for(let i=limit1; i<=limit2; i++){
        sum+=i;
    }
    return sum;
}

let resultSumNumbers= SumNamber(20,35);
console.log(resultSumNumbers)


function SumNamber2(limit1, limit2, step){
    let sum=0;
    for(limit1; limit1<=limit2; limit1+= step){
        sum+=limit1;
    }
    return sum;
}
/*
let resultSumNumbers= SumNamber2(20,35,8);
console.log(resultSumNumbers)
*/
//----------------------------------


//switch

function FSum(a,b){
    return a+b;
}
function FSub(a,b){
    return a-b;
}
function FMult(a,b){
    return a*b;
}
function FDiv(a,b){
    return a/b;
}


let number1, number2;
number1 = 5;
number2 = 7;
let op= '+'
console.log('Hello')
/*
console.log(FSum(number1, number2));
console.log(FSub(number1, number2));
console.log(FMult(number1, number2));
console.log(FDiv(number1, number2));
*/
if(op=='+'){
    console.log(FSum(number1, number2));
}
else if(op=='-'){
    console.log(FSub(number1, number2));
}
else if(op=='*'){
    console.log(FMult(number1, number2));
}
else if(op=='/'){
    console.log(FDiv(number1, number2));
}
else{
    console.log('operator in undefined')
}

//2 variant switch

switch(op){
    case '+':{
        console.log(FSum(number1, number2));
    } 
    break;     
    case '-':{
        console.log(FSub (number1, number2));
    } 
    break;
    case '*':{
        console.log(FMulti(number1, number2));
    } 
    break; 
    case '/':{
        console.log(FDiv(number1, number2));
    } 
    break; 
    default console.log('operator in undefined'); 
}
