const express = require( 'express' );
const app = express();
const chalk = require( 'chalk' );
const volleyball = require( 'volleyball' );

app.listen(3000, function() {
  console.log(chalk.bgYellow("Hi, I'm listening!"));
})

// app.use(function (request, response, next) {
//     console.log(chalk.cyan(request.method + " " + request.originalUrl + " " + response.statusCode));
//     next();
// })
app.use(volleyball);

app.use('/special', function(request, response) {
  response.send("You've reached the special area.")
})

app.get('/home', function(request, response) {
  response.send("This is the home page.");
})

app.get('/news', function(request, response) {
  response.send("Here's the news, you're lost! :[");
})
