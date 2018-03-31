const express = require ('express');
const mongoose =require('mongoose');
require('./services/passport'); 
const keys =require('./config/keys');

const app =express();

mongoose.connect(keys.mongoURI);

require('./routes/authRoutes')(app);


app.get('/' , (req,res) => {

	res.send({hi:'there'});

});



//Dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);