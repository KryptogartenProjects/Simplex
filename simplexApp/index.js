let express = require('express'); 
let app = express(); 
require('dotenv').config();  

let router = express.Router(); 
const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME; 

router.get('/', function(req, res, next){
    res.status(200).send(APP_NAME);
});

app.use('/', router); 

var server = app.listen(PORT, function(){
    console.log(APP_NAME + " is running on http://localhost:" + PORT); 
});