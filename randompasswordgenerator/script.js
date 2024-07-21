const passwordBox = document.getElementById("password");
const lenght = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!@#$%^&*()_+{}?></\|";
const allChars = uppercase + lowercase + number + symbol;

function createPassword(){
    let password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Example usage:
console.log(rollDie()); // Outputs a random number between 1 and 6