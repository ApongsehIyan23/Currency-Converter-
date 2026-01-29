function is_even_or_odd(number) {
    if (Number(number) % 2 == 0) {
        return console.log("even")
    }
    else {
        return console.log("odd")
    }
}


const print_name = (name) => {console.log(`Your name is ${name}`)}

print_name("Iyan");

function factors_of_number(n) {
    const factors = []
    for (let i = 0; i < n; i++) {
        (n % i == 0) ? factors.push(i)
    }
    return factors;
}

console.log(factors_of_number(8))



