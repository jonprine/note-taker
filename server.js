const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db.json');
const fs = require('fs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.post('/api/notes', (req, res) => {
    

})

// route to index

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

// route to notes

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
