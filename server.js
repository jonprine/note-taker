const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})