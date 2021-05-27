const pieRepo = require('../repos/pieRepo')
const APP_NAME = process.env.APP_NAME; 

module.exports = async(req, res) => {
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
}; 