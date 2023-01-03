let isValid = {
    owner: false,
    number: false,
    month: false,
    year: false,
    cvc: false
}
let validName = /(?<! )[-a-zA-Z' ]{2,26}/g

document.getElementById('owner').addEventListener('change', function () {
    isValid.owner = false
    let feedbackArea = document.getElementById('feedbackOwner')
    if (this.value.length === 0 || this.value == null) {
        feedbackArea.innerText = 'Cant be blank'
        this.classList.add('invalid')
    }
    else if (!validName.test(this.value) || this.value.length <= 3 && this.value.length >= 26) {
        feedbackArea.innerText = 'Invalid name'
        this.classList.add('invalid')
    } else {
        feedbackArea.innerText = ''
        this.classList.remove('invalid')
        isValid.owner = true
    }
})

document.getElementById('number').addEventListener('change', function () {
    isValid.number = false
    let feedbackArea = document.getElementById('feedbackNumber')
    if (this.value.length === 0 || this.value == null) {
        feedbackArea.innerText = 'Cant be blank'
        this.classList.add('invalid')
    } else if (!validCard(this.value)) {
        feedbackArea.innerText = 'Invalid card'
        this.classList.add('invalid')
    } else {
        feedbackArea.innerText = ''
        this.classList.remove('invalid')
    }
    isValid.number = true
})

document.getElementById('year').addEventListener('change', function () {
    isValid.year = false
    let feedbackArea = document.getElementById('feedbackYear')
    if (this.value.length === 0 || this.value == null) {
        feedbackArea.innerText = 'Cant be blank'
        this.classList.add('invalid')
    } else if (this.value > 99 || this.value < 0) {
        feedbackArea.innerText = 'Invalid year'
        this.classList.add('invalid')
    } else {
        feedbackArea.innerText = ''
        this.classList.remove('invalid')
        isValid.year = true
    }
})

document.getElementById('month').addEventListener('change', function () {
    isValid.month = false
    let feedbackArea = document.getElementById('feedbackMonth')
    if (this.value.length === 0 || this.value == null) {
        feedbackArea.innerText = 'Cant be blank'
        this.classList.add('invalid')
    } else if (this.value > 12 || this.value < 0) {
        feedbackArea.innerText = 'Invalid month'
        this.classList.add('invalid')
    } else {
        feedbackArea.innerText = ''
        this.classList.remove('invalid')
        isValid.month = true
    }
})

document.getElementById('cvc').addEventListener('change', function () {
    isValid.cvc = false
    let feedbackArea = document.getElementById('feedbackCVC')
    if (this.value.length === 0 || this.value == null) {
        feedbackArea.innerText = 'Cant be blank'
        this.classList.add('invalid')
    } else if (this.value > 999 || this.value < 0) {
        feedbackArea.innerText = 'Invalid CVC'
        this.classList.add('invalid')
    } else {
        feedbackArea.innerText = ''
        this.classList.remove('invalid')
        isValid.cvc = true
    }
})

document.getElementById('cardDetails').addEventListener('submit', function (event) {
    event.preventDefault()
    if (isValid.owner && isValid.number && isValid.month && isValid.year && isValid.cvc) {
        document.getElementById('cardInputs').classList.toggle('hidden')
        document.getElementById('feedback').classList.toggle('hidden')
    }
})


/* Luhn Algorithm Implemation
   Source: https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/luhnCheck.md
*/
const validCard = num => {
    const arr = (num + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    const lastDigit = arr.shift();
    let sum = arr.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
        0
    );
    sum += lastDigit;
    return sum % 10 === 0;
};