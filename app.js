
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