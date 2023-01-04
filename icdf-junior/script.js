document.getElementById('owner').addEventListener('input', function () {
    let cardOwner = document.getElementById('cardOwner');
    cardOwner.innerText = this.value.toUpperCase();
})

document.getElementById('number').addEventListener('input', function () {
    let cardNumber = document.getElementById('cardNumber');
    let formatted = formatNumber(this.value)
    cardNumber.innerText = formatted
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



// Source: https://stackoverflow.com/a/53069683/20793949
function formatNumber(ccid) {
    // supports Amex, Master Card, Visa, and Discover
    // parameter 1 ccid= id of credit card number field
    // parameter 2 ctid= id of credit card type field

    var ccNumString=ccid;
    ccNumString=ccNumString.replace(/[^0-9]/g, '');
    // mc, starts with - 51 to 55
    // v, starts with - 4
    // dsc, starts with 6011, 622126-622925, 644-649, 65
    // amex, starts with 34 or 37
    var typeCheck = ccNumString.substring(0, 2);
    var cType='';
    var block1='';
    var block2='';
    var block3='';
    var block4='';
    var formatted='';

    if  (typeCheck.length==2) {
        typeCheck=parseInt(typeCheck);
        if (typeCheck >= 40 && typeCheck <= 49) {
            cType='Visa';
        }
        else if (typeCheck >= 51 && typeCheck <= 55) {
            cType='Master Card';
        }
        else if ((typeCheck >= 60 && typeCheck <= 62) || (typeCheck == 64) || (typeCheck == 65)) {
            cType='Discover';
        }
        else if (typeCheck==34 || typeCheck==37) {
            cType='American Express';
        }
        else {
            cType='Invalid';
        }
    }

    // all support card types have a 4 digit firt block
    block1 = ccNumString.substring(0, 4);
    if (block1.length==4) {
        block1=block1 + ' ';
    }

    if (cType == 'Visa' || cType == 'Master Card' || cType == 'Discover') {
        // for 4X4 cards
        block2 = ccNumString.substring(4, 8);
        if (block2.length==4) {
            block2=block2 + ' ';
        }
        block3 = ccNumString.substring(8, 12);
        if (block3.length==4) {
            block3=block3 + ' ';
        }
        block4 = ccNumString.substring(12, 16);
    }
    else if (cType == 'American Express') {
        // for Amex cards
        block2 =  ccNumString.substring(4, 10);
        if (block2.length==6) {
            block2=block2 + ' ';
        }
        block3 =  ccNumString.substring(10, 15);
        block4='';
    }
    else if (cType == 'Invalid') {
        // for Amex cards
        block1 =  typeCheck;
        block2='';
        block3='';
        block4='';
        alert('Invalid Card Number');
    }

    formatted=block1 + block2 + block3 + block4;
    return formatted
}