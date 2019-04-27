var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");


var indexRouter = require('./routes/index');

//new
// var Pusher = require("pusher");

// var pusher = new Pusher({
//   appId: "618134",
//   key: "d99dca5d5ba5eddba9a2",
//   secret: "a36aaf13c2e3004012a4",
//   cluster: "ap2",
//   encrypted: true
// });
//

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


//new2
// var londonTempData = {
//   city: "London",
//   unit: "celsius",
//   dataPoints: [
//     {
//       time: 1130,
//       temperature: 12
//     },
//     {
//       time: 1200,
//       temperature: 13
//     },
//     {
//       time: 1230,
//       temperature: 15
//     },
//     {
//       time: 1300,
//       temperature: 14
//     },
//     {
//       time: 1330,
//       temperature: 15
//     }
//   ]
// };

// app.get("/getTemperature", function(req, res) {
//   res.send(londonTempData);
// });

// app.get("/addTemperature", function(req, res) {
//   var temp = parseInt(req.query.temperature);
//   var time = parseInt(req.query.time);
//   if (temp && time && !isNaN(temp) && !isNaN(time)) {
//     var newDataPoint = {
//       temperature: temp,
//       time: time
//     };
//     londonTempData.dataPoints.push(newDataPoint);
//     pusher.trigger("london-temp-chart", "new-temperature", {
//       dataPoint: newDataPoint
//     });
//     res.send({ success: true });
//   } else {
//     res.send({
//       success: false,
//       errorMessage: "Invalid Query Paramaters, required - temperature & time."
//     });
//   }
// });
// //2end


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(()=>{
  console.log("server is running at 3000");
})
