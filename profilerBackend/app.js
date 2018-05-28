var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var mysql = require('mysql');

var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var cors = require('cors');

var authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,        
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://ierofantis.eu.auth0.com/.well-known/jwks.json" // @TODO: remove domain name
    }),
    audience: 'https://ierofantis.eu.auth0.com/api/v2/', 
    issuer: "https://ierofantis.eu.auth0.com/", // @TODO: remove domain name
    algorithms: ['RS256']
});

var app = express();

/*var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'profiler',
  port: ''
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected on mysql...')
})*/


// CORS
// Add headers
/*var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:4200'}));*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Content-Type', 'Authorization')
    next();
})
/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/
app.get('/api/deals/public', (req, res)=>{
  let deals = [
  {
    id: 12231,
    name: 'Playstation 4 500GB Console',
    description: 'The Playstation 4 is the next gen console to own. With the best games and online experience.',
    originalPrice: 399.99,
    salePrice: 299.99
  },
  {
    id: 12234,
    name: 'Galaxy Note 7',
    description: 'The Note 7 has been fixed and will no longer explode. Get it an amazing price!',
    originalPrice: 899.99,
    salePrice: 499.99
  },
  {
    id: 12245,
    name: 'Macbook Pro 2016',
    description: 'The Macbook Pro is the de-facto standard for best in breed mobile computing.',
    originalPrice: 2199.99,
    salePrice: 1999.99
  },
  {
    id: 12267,
    name: 'Amazon Echo',
    description: 'Turn your home into a smart home with Amazon Echo. Just say the word and Echo will do it.',
    originalPrice: 179.99,
    salePrice: 129.99
  },
  {
    id: 12288,
    name: 'Nest Outdoor Camera',
    description: 'The Nest Outdoor camera records and keeps track of events outside your home 24/7.',
    originalPrice: 199.99,
    salePrice: 149.99
  },
  {
    id: 12290,
    name: 'GoPro 4',
    description: 'Record yourself in first person 24/7 with the GoPro 4. Show everyone how exciting your life is.',
    originalPrice: 299.99,
    salePrice: 199.99
  },
  ];
  res.json(deals);
})

app.get('/api/deals/private', authCheck, (req,res)=>{
  let deals = [
  {
    id: 14423,
    name: 'Tesla S',
    description: 'Ride in style and say goodbye to paying for gas. The Tesla S is the car of the future.',
    originalPrice: 90000.00,
    salePrice: 75000.00
  },
  {
    id: 14553,
    name: 'DJI Phantom 4',
    description: 'The Drone revolution is here. Take to the skies with the DJI Phantom 4.',
    originalPrice: 1299.99,
    salePrice: 749.99
  },
  {
    id: 15900,
    name: 'iPhone 7 - Jet Black',
    description: 'Get the latest and greatest iPhone in the limited edition jet black.',
    originalPrice: 899.99,
    salePrice: 799.99
  },
  {
    id: 16000,
    name: '70" Samsung 4K HDR TV',
    description: 'Watch as if you were there with the latest innovations including 4K and HDR.',
    originalPrice: 2999.99,
    salePrice: 2499.99
  },
  {
    id: 17423,
    name: 'Canon t8i DSLR',
    description: 'Capture life\'s moments with the amazing Canon t8i DSLR',
    originalPrice: 999.99,
    salePrice: 549.99
  },
  {
    id: 17423,
    name: 'Xbox One S',
    description: 'Get the latest Xbox and play the best first party games including Gears of War and Forza.',
    originalPrice: 299.99,
    salePrice: 279.99
  },
  ];
  res.json(deals);
})


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
