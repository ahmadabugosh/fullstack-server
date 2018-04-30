const express = require ('express');
const mongoose =require('mongoose');
require('./models/User');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport');
const bodyParser = require('body-parser'); 
const keys =require('./config/keys');

mongoose.connect(keys.mongoURI);
const app =express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


app.get('/' , (req,res) => {

	res.send({hi:'there'});

});



//Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);