function test(expression, expected) {
    let result = eval(expression);

    if (result === expected) {
        console.log(`✅ PASS: ${expression} = ${result}`);
    } else {
        console.log(`❌ FAIL: ${expression} → Expected ${expected}, Got ${result}`);
    }
}

console.log("Running Digital Twin Test Cases...\n");

// Test cases
test("1+2", 3);
test("5*3", 15);
test("10/2", 5);
test("8-3", 5);
test("2+3*4", 14);

console.log("\nAll Tests Completed");