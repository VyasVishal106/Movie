import express from 'express';
import cors from 'cors';
import Collection from './db.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/LogIn", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name,
    email,
    password
  };

  try {
    await Collection.insertMany([data]);
    res.status(201).send('User data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving user data');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
