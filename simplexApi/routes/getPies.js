const   pieRepo   = require('../repos/pieRepo');
const { appName } = require('../helpers/config'); 

let getPies = async(req, res) => {
    pieRepo.get(function(data){
        res.status(200).json({
        "status": 200, 
        "statusText": "OK", 
        "message": appName, 
        "data": data
        });
    }, function(err){
        next(err);
    });
}; 

module.exports = getPies;