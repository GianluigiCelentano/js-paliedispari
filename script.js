function palindrome(name) {
    return name == name.split('').reverse().join('')
}
var checkName = prompt("Inserisci il tuo nome")
if (palindrome(checkName)) {
    document.getElementById("palindrome").innerHTML += "Il tuo nome è palindromo"
} else {
    document.getElementById("palindrome").innerHTML += "Il tuo nome non è palindromo"
}