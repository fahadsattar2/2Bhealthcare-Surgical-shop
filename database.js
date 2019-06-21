const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Database Connected!');
    }
    else{
        console.log('Error in DB Connection: '+ err);
    }
});

require('./models/product.model');