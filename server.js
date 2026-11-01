
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Node.js and Express server!");
});

// About route
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "K.RISHITHA",
        section: "CSE-QE 2A"
    });
});

// Time route
app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toString()
    });
});

// 404 handler for unknown paths
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Home: http://localhost:${PORT}/`);
    console.log(`About: http://localhost:${PORT}/about`);
    console.log(`Time: http://localhost:${PORT}/time`);
    console.log(`404 Test: http://localhost:${PORT}/unknown`);
});