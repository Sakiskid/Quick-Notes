const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen(PORT, () => {
    console.log("App listening on: ", PORT);
})