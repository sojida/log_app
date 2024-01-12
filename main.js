const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
})


app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});

