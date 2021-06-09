function palindrome(name) {
    return name == name.split('').reverse().join('')
}
var checkName = prompt("Inserisci il tuo nome")
if (palindrome(checkName)) {
    document.getElementById("palindrome").innerHTML += "Il tuo nome è palindromo"
} else {
    document.getElementById("palindrome").innerHTML += "Il tuo nome non è palindromo"
}


var sum = 0
var oddOrEven = prompt("PARI O DISPARI?")
var utentNumber = prompt("scrivi il tuo numero da 1 a 5")
function randomNum() {
    var randomNum = Math.floor(Math.random() * 5)
    return randomNum
}
    sum = parseInt(utentNumber) + randomNum

if (sum % 2 === 0 && parseInt(utentNumber) % 2 === 0) {
    document.getElementById("winner").innerHTML += "Vince l'utente" + " " + randomNum(sum)
} else {
    document.getElementById("winner").innerHTML += "Vince il computer"+ " " + randomNum(sum)
}