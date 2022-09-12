
const billInput = document.querySelector('#text')
const tipInput = document.querySelector('#text1')
const perPerson = document.querySelector('#cifra')
let numberOfPeopleDiv = document.querySelector('#picon')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
let numberOfPeople = Number(numberOfPeopleDiv.innerText)



const calculateBill = () => {
    const bill = Number(billInput.value)
    const tip = Number(tipInput.value) / 100
    

    const tipAmount = bill * tip
    const billTotal = bill + tipAmount
    
    const total = billTotal / numberOfPeople

    perPerson.innerHTML = `R$${total.toFixed(2)}`

   

    console.log(billTotal)
}

const  increase = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerHTML = numberOfPeople
    
    calculateBill()
}


const  decrease = () => {
    numberOfPeople -= 1

    numberOfPeopleDiv.innerHTML = numberOfPeople

    calculateBill()
}