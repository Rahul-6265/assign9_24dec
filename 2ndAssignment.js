//Take n from the user and print first n prime numbers.

const n = parseInt(prompt("Enter Number"));

console.log("The prime numbers are");

for (var a = 1; a <= n; a++) {
    var prime = false;

    
    for (var b = 2; b < a; b++) {
        if (a % b == 0) {
            prime = true;
            break;
        }
    }
    if (a > 1 && prime == 0) {
        console.log(a);
    }
}