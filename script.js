function palindrome(name) {
    return name == name.split('').reverse().join('')
}
var checkName = prompt("Inserisci il tuo nome")
if (palindrome(checkName)) {
    document.getElementById("palindrome").innerHTML += "Il tuo nome è palindromo"
} else {
    document.getElementById("palindrome").innerHTML += "Il tuo nome non è palindromo"
}

// -----------------------------------------------------PARI O DISPARI

var oddOrEven = prompt("PARI O DISPARI?").toLowerCase()

while (oddOrEven !== "pari" && oddOrEven !== "dispari") {
    alert("ATTENZIONE!! INSERISCI O PARI O DISPARI")
    oddOrEven = prompt("PARI O DISPARI?").toLowerCase()
}

var utentNumber = parseInt(prompt("scrivi il tuo numero da 1 a 5"))

while (utentNumber < 1 || utentNumber > 5 ) {
    alert("ATTENZIONE!! INSERISCI UN NUMERO DA 1 A 5")
    utentNumber = prompt("scrivi il tuo numero da 1 a 5")
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

function isPari (num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

var numberComputer = randomNum(1, 5)

var total = utentNumber + numberComputer

if ((isPari(total) === true && oddOrEven === "pari") 
    || 
(isPari(total) === false && oddOrEven === "dispari") ) {
    document.getElementById("winner").innerHTML = total + " " + "HAI VINTO"
} else {
    document.getElementById("winner").innerHTML = total + " " + "HAI PERSO, VINCE IL COMPUTER"
}