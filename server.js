const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { simulate } = require('./digitalTwin');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// LOGIN API
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === "user1" && password === "user123") {
        res.json({ message: "Login Successful" });
    } else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
});

// CALCULATE + SAVE HISTORY
app.post('/calculate', (req, res) => {
    const { expression } = req.body;

    let predicted = simulate(expression);

    let actual;
    try {
        actual = eval(expression);
    } catch {
        actual = "Error";
    }

    if (predicted !== actual) {
        return res.status(400).json({ status: "Rejected" });
    }

    // Read DB
    let db = JSON.parse(fs.readFileSync('db.json'));

    db.push({
        expression,
        result: actual,
        time: new Date()
    });

    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

    res.json({ status: "Approved", result: actual });
});

// GET HISTORY
app.get('/history', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db.json'));
    res.json(db);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});