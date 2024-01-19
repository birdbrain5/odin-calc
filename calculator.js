var numbers = ['']
var operators = []
var i = 0
var results = []

function add(x, y){
    return Number(x)+Number(y)
}

function subtract(x,y){
    return Number(x)-Number(y)
}

function multiply(x,y){
    return Number(x)*Number(y)
}

function divide(x,y){
    return Number(x)/Number(y)
}

function displayInput(x){

    document.getElementById('display').innerHTML += x

    if (x == '1' || x == '2' || x == '3' || x == '4' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' || x == '0'){
        numbers[i] += x
        console.log(numbers)
    }
    else{
        operators[i] = x
        numbers[i+1] = ''
        i++
    }
}

function clearDisplay(){
    document.getElementById('display').innerHTML = ''
}

function resetCalc(){
    numbers=['']
    operators=[]
    i=0
}

function operate(){

    for (j=0; j<operators.length; j++){ 

        if (operators[j] == '+'){
            numbers[j+1] = add(numbers[j], numbers[j+1])
        }
        else if (operators[j] == '-'){
            numbers[j+1] = subtract(numbers[j], numbers[j+1])
        }
        else if (operators[j] == '*'){
            numbers[j+1] = multiply(numbers[j], numbers[j+1])
        }
        else if (operators[j] == '/'){
            numbers[j+1] = divide(numbers[j], numbers[j+1])
        }

        clearDisplay()
        console.log(numbers)
        document.getElementById('display').innerHTML = numbers[numbers.length-1]
    }
    
}