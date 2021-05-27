let express = require('express'); 
let getPies = require('./routes/getPies')
let app     = express(); 
let router  = express.Router(); 
              require('dotenv').config();  

const HOST      = process.env.HOST;
const PORT      = process.env.PORT;
const APP_NAME  = process.env.APP_NAME; 

app.use('/api/', router); 

router.get('/', getPies); 

let server = app.listen(PORT, function(){
    console.log(`${APP_NAME} is running on ${HOST}:${PORT}`);
});
