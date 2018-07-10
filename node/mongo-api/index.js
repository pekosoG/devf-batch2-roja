var express=require('express');
var bookRouter=require('./routes/bookRouter');
var bodyParser=require('body-parser');

var mongoose=require('mongoose');
const db = mongoose.connect('mongodb://admnin:a12345@ds127771.mlab.com:27771/mongo-api');

const app = express();
app.use(bodyParser.json());

app.use('/book',bookRouter);


app.listen(3000,()=>{
    console.log(`Servidor en http://localhost:3000`);
})