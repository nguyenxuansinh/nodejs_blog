const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs    = require('express-handlebars')

const app = express()
const port = 3000
//http logger
app.use(morgan('combined'))

//template engine

app.set('views', path.join(__dirname,'resources/views'));
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/resources/views/layouts/',
  partialsDir: __dirname + '/resources/views/partials/'
}));
app.set('view engine', 'handlebars');


app.get('/home', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})