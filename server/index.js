const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const favorites = [];

app.use(cors());
app.use(bodyParser.json());




app.post('/api/favjokes', (req, res) => {
    const {joke} = req.body;
    favorites.push(joke);
    res.status(201).send(favorites);

})

app.delete('/api/favjokes/:id', (req, res) => {
    favorites.splice(favorites.indexOf(joke => joke.id === req.params.id), 1);
    res.send(favorites);
})






const port = 5000;
app.listen(port, () => console.log('listening to port:' + port))