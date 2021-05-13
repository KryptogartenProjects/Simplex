let fs = require('fs'); 
const FILE_NAME = './assets/pies.json'; 

let pieRepo = {
    get: function(){
        return [
            {'id': '1', 'name': 'Apple' },
            {'id': '2', 'name': 'Cherry' },
            {'id': '3', 'name': 'Cinnamon' },
            {'id': '4', 'name': 'Peach' }
        ];
    },

    getj: function(resolve, reject){
        fs.readFile(FILE_NAME, function(err, data){
            if(err){
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        })
    }, 

    getById: function(id, resolve, reject){
        fs.readFile(FILE_NAME, function(err, data){
            if(err){
                reject(err);
            } else {
                let pie = JSON.parse(data).find(p => p.id == id);
                resolve(pie);
            }
        })
    }
}; 

module.exports = pieRepo;