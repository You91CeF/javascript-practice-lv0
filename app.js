
function doubleTheInputNumber() {
    // double the number
    let inputNumber
    let result
    inputNumber= Number(prompt("Give me a number"))
    result = inputNumber * 2
    alert("The double of "+ inputNumber + " is : "+ result)
}


function division(){
    let inputNumber1
    let inputNumber2
    inputNumber1= Number(prompt("Give me a al ma9soume"))
    inputNumber2 =Number(prompt("Give me al 9assime"))
    let result
    result = inputNumber1 / inputNumber2
// alert("the result of " +  inputNumber1/inputNumber2 +"is : "+ result)
    alert("the result of " +  inputNumber1 + "/" + inputNumber2 +" " +"is : "+ result)
    alert("the result of " +  5*3+2-1 +"is : "+ result)
}

function inputPersonName(){
    let personName
    personName=prompt("What is your name")
    alert("Your name is "+ personName+ "@" +"%")
}


function gotoNextPage(){
    alert("You will go to Google page")
    window.location.replace("https://www.google.com/")
}
// function  inputPersonNameAndDivision(){
//     inputPersonName()
//     division()
// }

function fullname(){
    let firstname
    firstname = prompt("What is your firstname ?")
    let lastname
    lastname = prompt("What is your lastname ?")
    alert("Your fullname is : " + firstname + " " + lastname)
}

function pairimpair() {
    let number 
    number = prompt("give a number")

    if (number%2 == 0) {
        alert("The number " + number + " is pair")
    }
    else {
        alert("The number " + number + " is impair")
    }
}



function findlargest() {
    let num1 = prompt("give a num1");
    let num2 = prompt("give a num2");
    if (num1 > num2) {
        return alert("the largest number is num1");
    }
    else if(num2>num1) {
        return alert("the largest number is num2");
    }
    else {
        return alert("num1 and num2 are equal");
    }
}

function leapyear() {
    let year = prompt("give a year");
    let leap;
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert(year + " is a leap year");
        return leap = true;
    }
    else {
        alert(year + " not a leap year");
        return leap = false;
    }
}

function findDaysInMonth() {
    let month = prompt("Give the number of month");
    if (month <= 0 || month > 12) {
        alert("Invalid month");
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        alert("30 days");
    }
    else if (month == 2){
        let leap = leapyear();
        if (leap == true){
            alert("29 days");
        }
        else {
            alert("28 days");
        }
    }
    else {
        alert("31 days")
    }
}
function evalNumbers() {
    let num1 = prompt("give value number 1:");
    let num2 = prompt("give value number 2:");
    let operation = prompt("What operation you want to do ?");
    switch (operation) {
        case "add" :
            let add = Number(num1)+Number(num2);
            console.log(add);
            console.log(typeof(num1));
            alert("the result is " + add);
            break;
        case "substract" :
           let substract = num1 - num2;
            alert("the result is " + substract);
            break;
        case "multiply" :
            let multiply = num1 * num2;
            alert("the result is " + multiply);
            break;
        case "divide" :
            let divide = num1 / num2;
            alert("the result is " + divide);
            break;
                    case "modulus" :
            let modulus = num1 % num2;
            alert("the result is " + modulus);
            break;
    }
}

function factoriel() {
    let number = prompt("Give a number");
    let i = 1;
    let result = 1;
    for (i =1; i <= number; i++){
        result *= i;
    }
    console.log(result);
    alert("the factorial of "+ number + " is " + result)
}

function For() {
    for (let i = 1; i <= 100; i++) {
        //console.log(i);
        if ((i%3 == 0) && (i%5 ==0)){
            console.log("FizzBuzz");
        }
        else if (i%3 == 0) 
        {
            console.log("Fizz");
        }
        else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

function While() {
    let i = 1;
    while(i <= 100) {
        if ((i%3 == 0) && (i%5 ==0)){
            console.log("FizzBuzz");
        }
        else if (i%3 == 0) 
        {
            console.log("Fizz");
        }
        else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    i++;
    }
}

function DoWhile() {
    let i = 0;
    do {
        i++;
        if ((i%3 == 0) && (i%5 ==0)){
            console.log("FizzBuzz");
        }
        else if (i%3 == 0) 
        {
            console.log("Fizz");
        }
        else if (i%5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    } while(i <= 99);
    
}

function tablemultiplication(){
    let n = prompt("Give a number");
    let result;
    for (let i=1; i<=10;i++){
        result = n * i;
        console.log(n + " X " + i + " = " + result);
    }
}

function nombreParfait(){
    let number = prompt("give a number");
    let sum;
    for (let i =2; i<=number; i++) {
        sum = 0;
        for (let j=1; j<i; j++) {
            if(i%j == 0) {
                sum +=j;
            }
        }
        if (sum == i) {
            console.log("le nombre " + i + " est parfait");
        }
    }
}


function nombreParfaitSociable() {
    let number = prompt("Give a number > 1");
    number = Number(number);
    let N = number;
    let array = [N];
    let sum = 0;
    let j = 0;
    let flag = 1;
    let cont = 0;
    let swi = 0;
    while ((flag == 1) && (cont < 100)){
        sum = 0;
        N = array[array.length-1] 
        for (let i=N-1; i>0; i--){
            if (N%i == 0) {
                sum +=i;
            }
        }
        array.push(sum);
        swi = array[array.length-1];
        switch (swi) {
            case 1:
                flag =0;
                if (array.length == 2) {
                    console.log("N = " + number + " suite aliquote : " + array + " " + number + " est un nombre premier");
                }
                else {
                    console.log("N = " + number + " suite aliquote : " + array);
                }
                break;
            case number:
                flag = 0;
                if (array.length == 2) {
                    console.log("N = " + number + " suite aliquote : " + array + " " + number + " est sociable est parfait d'ordre " + (array.length-1));
                }
                else {
                    console.log("N = " + number + " suite aliquote : " + array + " " + number + " est sociable et amical d'ordre " + (array.length-1));
                }
                break;
            default:
                flag = 1;
        }
    }
    cont++;
}
    
