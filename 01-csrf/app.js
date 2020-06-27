const express = require('express');
const csrf = require('csurf')
const cookieParser = require('cookie-parser')

const app = express();
const csrfProtection = csrf({ cookie: true });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() });
})

app.post('/process', csrfProtection, (req, res, next) => {
  res.send(req.body.name);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})