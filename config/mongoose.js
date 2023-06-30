const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0:27017/athentication');
const DB = 'mongodb+srv://yadavv7880:1SsOdLXnB6rwIUr4@cluster0.delxxlc.mongodb.net/nodejs_Atentication';
//const DB = 'mongodb+srv://yadavv7880:@cluster0.delxxlc.mongodb.net/placement_cell';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})