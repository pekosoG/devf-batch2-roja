var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.post('/body',(req, resp)=>{
    
    resp.json({body:req.body.pasameElDato});
});

app.listen(process.env.port,()=>{
    console.log(`server running at http://localhost:${process.env.port}`);
});