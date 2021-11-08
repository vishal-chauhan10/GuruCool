const express = require('express');
var mysql = require('mysql');

const app = express();
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Learnify_Backend',
});

app.post('/Login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    'INSERT INTO users(username, password) VALUES(?, ?)',
    (err, result) => {
      console.log(err);
    },
  );
});

app.listen(8080, () => {
  console.log('Running Server');
});
