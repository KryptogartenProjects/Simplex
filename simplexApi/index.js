let express = require('express'); 
let app = express(); 
let pieRepo = require('./repos/pieRepo');

require('dotenv').config();  

let router = express.Router(); 
const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME; 
console.log(PORT);

let pies = pieRepo.get();

router.get('/', function(req, res, next){
    pieRepo.getj(function(data){
        res.status(200).json({
        "status": 200, 
        "statusText": "OK", 
        "message": APP_NAME, 
        "data": data
        });
    }, function(err){
        next(err);
    });
});

app.use('/api/', router); 

var server = app.listen(PORT, function(){
    console.log(APP_NAME + " is running on http://localhost:" + PORT); 
});
