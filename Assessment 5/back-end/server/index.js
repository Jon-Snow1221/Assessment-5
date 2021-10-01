const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
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

app.post("/api/movie",(req, res) => {
  let movie = req.body.movie
  res.status(200).send('User successfully added movie')
})


app.listen(4000, () => console.log("Server running on 4000"));
