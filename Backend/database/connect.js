const mongoose = require('mongoose');

const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true
}).then( () =>{
    console.log('Done');
}).catch( (err) => console.log("Fail"));
