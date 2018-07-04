var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')

// Usamos middleware body-parser
app.use(bodyParser.json())

var users=[]

/**
 * Abrimos el archivo users.json, definimos el enconding a UTF-8
 * y al final definimos el Callback donde 'procesamos' la info
 */
fs.readFile("user.json",{encoding: 'utf8'},(err,data)=>{
    users=JSON.parse(data);
    /*
    JSON.parse(data).forEach(elemento=>{
        users.push(elemento);
        console.log(users);
    });*/
});

/**
 * Escupe todos los usuarios en el arreglo
 */
app.use('/users',(req,res)=>{
    res.send(users);
});

app.post('/user', (req, resp) => {
    var user = req.body.user
    
    if(user.username !== undefined && user.username.length > 0) {
        if(user.email !== undefined && user.email.length > 0) {

            users.push(user);
            resp.send(user);

        } else {
            resp.status(400).send('Invalid email field');
        }
    } else {
        resp.status(400).send('Invalid username field');
    }
});

/**
 * Escupa la info del username del parametro
 */
app.use('/:username',(req, res)=>{
    //Obtenemos el valor del parametro usando req.params.<parametro>
    var username=req.params.username;
    var resultao=users.filter(user=>{
        if(user.username===username)
            return true;
        else
            return false;
    });
    if(resultao.length>0)
        res.send(resultao[0]);
    else
        res.status(404).send('Username not found');
});
/**
 * Muestra el current date del server
 */
app.use('/',(req,res)=>{
    res.send(new Date());
});

var server=app.listen(process.env.PORT,()=>{
    console.log('Server running at http://localhost:'+server.address().port)
});