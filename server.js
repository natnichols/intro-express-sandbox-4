// import modules
import express from 'express'
import { states } from './data/state-data.js'

// create Express app
const app = express()


// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})
app.get('/home', function(req, res) {
  res.render('home')
})
app.get('/states', function(req, res) {
  res.render('states/index', {
    states: states
  })
})


// tell the app to listen on port 3000
app.listen(3000, function() {
  console.log(`Listening on port 3000`)
})
