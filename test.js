// DIGITAL TWIN TEST

function digitalTwin(expression) {
    return eval(expression);
}

function actualSystem(expression) {
    return eval(expression);
}

// Test cases
let tests = [
    "1+2",
    "5*3",
    "10/2",
    "8-3"
];

for (let exp of tests) {
    let predicted = digitalTwin(exp);
    let actual = actualSystem(exp);

    if (predicted !== actual) {
        console.log("Test Failed:", exp);
        process.exit(1);
    }
}

console.log("All Tests Passed");