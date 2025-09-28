const express = require('express');
const app = express();

// FIRST: handle /fail explicitly
app.get('/fail', (req, res) => {
  res.send('age is denied');
});

// THEN: handle age with middleware + handler in ONE definition
function checkAge(req, res, next) {
  const age = parseInt(req.params.age, 10);
  if (age < 18) {
    // redirect and return so it stops
    return res.redirect('/fail');
  }
  next();
}

app.get('/:age', checkAge, (req, res) => {
  res.send('age is accepted ' + req.params.age);
});

app.listen(3456, () => {
  console.log('Server listening on port 3456');
});
