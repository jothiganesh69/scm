function simulate(expression) {
    try {
        return eval(expression);
    } catch {
        return "Error";
    }
}

module.exports = { simulate };