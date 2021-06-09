function palindrome(name) {
    return name == name.split('').reverse().join('')
}
var checkName = prompt("Inserisci il tuo nome")
if (palindrome(checkName)) {
    document.getElementById("palindrome").innerHTML += "Il tuo nome è palindromo"
} else {
    document.getElementById("palindrome").innerHTML += "Il tuo nome non è palindromo"
}


var oddOrEven = prompt("PARI O DISPARI?")
var utentNumber = parseInt(prompt("scrivi il tuo numero da 1 a 5"))
function randomNum() {
    var randomNum = Math.floor(Math.random() * 5)
    return randomNum
}

var randomNum = utentNumber + randomNum

if (sum % 2 === 0 && sum === utentNumber) {
    document.getElementById("winner").innerHTML += "PARI" + " " + randomNum
} else {
    document.getElementById("winner").innerHTML += "DISPARI"+ " " + randomNum
}