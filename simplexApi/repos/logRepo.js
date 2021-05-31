let fs = require('fs'); 
         require('dotenv').config();

const { logFile } = require('../helpers/config'); 
const breakLn = "\r\n"; 

let logRepo = {

    write: function(data, resolve, reject){
        let toWrite  = "*".repeat(80) + breakLn; 
        toWrite     += "DateTime       : " + new Date().toLocaleDateString() + breakLn; 
        toWrite     += "Exception info : " + JSON.stringify(data) + breakLn; 
        toWrite     += "*".repeat(80) + breakLn; 

        fs.writeFile(logFile, toWrite, function(err){
            if(err){
                reject(err);
            } else {
                resolve(true);
            } 
        });
    }
}; 

module.exports = logRepo; 