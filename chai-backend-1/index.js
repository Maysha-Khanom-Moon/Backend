require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const userData = {
    name: 'moondotcom',
    age: 24,
    email: 'moon@gmail.com',
    city: 'rajshahi',
    college: 'RUET',
    profession: 'student',
    address: '216/1 Kajla, Rajshahi, Bangladesh'
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.json('moondotcom');
});

app.get('/user', (req, res) => {
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});