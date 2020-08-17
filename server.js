const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db.json');
const fs = require('fs');

app.use(express.static('public'));

app.use(express.urlencoded( { extended: true }));
app.use(express.json());



app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(JSON.parse(data));
        }
    })
});

// route to index

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

// route to notes

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
})

app.post('/api/notes', (req, res) => {
    
    fs. readFile('./db/db.json', 'utf8', function (err, data) {
        if (err) throw err;

        let note = JSON.parse(data)
        req.body.id = note.length + 1
        note.push(req.body)
        res.send()

        fs.writeFile('./db/db.json', JSON.stringify(note), function(err) {
            if (err) throw err;
            console.log('Note added');
        })
    })

});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
