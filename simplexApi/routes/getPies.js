const pieRepo = require('../repos/pieRepo')
const APP_NAME = process.env.APP_NAME; 

let getPies = async(req, res) => {
    pieRepo.get(function(data){
        res.status(200).json({
        "status": 200, 
        "statusText": "OK", 
        "message": APP_NAME, 
        "data": data
        });
    }, function(err){
        next(err);
    });
}; 

module.exports = getPies;