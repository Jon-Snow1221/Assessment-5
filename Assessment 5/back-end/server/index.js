const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let id = 4;
const movies = [
  {
    id: 1,
    name: 'Rocky'
  },
  {
    id: 2,
    name: 'The Dark Knight'
  },
  {
    id: 3,
    name: 'Interstellar'
  }
]

app.get('/api/compliment', (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A faithful friend is a strong defense.",
					 "A golden egg of opportunity falls into your lap this month.",
           "A light heart carries you through all the hard times.",
           "Accept something that you cannot change, and you will feel better."
  ];

  // choose random fortune
  let randomIndexFortune = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndexFortune];

  res.status(200).send(randomFortune);
  
});

app.get('/api/movies', (req, res) => {
  
  res.status(200).send(movies);

})

app.post('/api/movies', (req, res) => {
  const { movie } = req.body;

  movies.push({
    id,
    name: movie
  });

  id++;

  res.sendStatus(200);
})

app.delete('/api/movies/:movieId', (req, res) => {
  const tgtMovieId = parseInt(req.params.movieId)

  const tgtIndex = movies.findIndex(movieObj => movieObj.id === tgtMovieId)

  movies.splice(tgtIndex, 1);

  res.status(200).send(movies);
})


app.listen(4000, () => console.log("Server running on 4000"));
