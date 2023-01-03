document.getElementById('owner').addEventListener('input', function () {
    let cardOwner = document.getElementById('cardOwner');
    cardOwner.innerText = this.value.toUpperCase();
})

document.getElementById('number').addEventListener('input', function () {
    let cardNumber = document.getElementById('cardNumber');
    cardNumber.innerText = this.value
})

document.getElementById('month').addEventListener('input', function () {
    let expiryMM = document.getElementById('expiryMM');
    expiryMM.innerText = this.value >= 10 ? this.value : `0${this.value}`
})


document.getElementById('year').addEventListener('input', function () {
    let expiryYY = document.getElementById('expiryYY');
    expiryYY.innerText = this.value >= 10 ? this.value : `0${this.value}`
})

document.getElementById('cvc').addEventListener('input', function () {
    let cardCVC = document.getElementById('cardCVC');
    let value;
    if (this.value.length >= 3 || this.value >= 100) {
        value = this.value
    }
    else if (this.value >= 10 && this.value <= 99) {
        value = `0${this.value}`
    } else {
        value = `00${this.value}`
    }
    cardCVC.innerText = value
})

document.getElementById('continue').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('cardInputs').classList.toggle('hidden')
    document.getElementById('feedback').classList.toggle('hidden')
})

