const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const favorites = [];

app.use(cors());
app.use(bodyParser.json());



app.get('/api/favjokes', (req, res) => {
    res.send(favorites);
})
app.post('/api/favjokes', (req, res) => {
    const {joke} = req.body;
    favorites.push(joke);
    res.status(201).send(favorites);

})

app.delete('/api/favjokes/:id', (req, res) => {
    const favoriteIndex = favorites.findIndex(joke => joke.id === req.params.id);

    if (favoriteIndex == -1) {
        return res.status(404).send({ message: 'No favorite found with id of ' + req.params.id });
    }
    
    favorites.splice(favoriteIndex, 1);
    res.send(favorites);
})






const port = 5000;
app.listen(port, () => console.log('listening to port:' + port))