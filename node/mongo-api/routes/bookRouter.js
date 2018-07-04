var express=require('express');
const bookRouter = express.Router();

bookRouter.get('/',(req,res)=>{
    //TODO: Enviar los libros
    res.send({});
});
bookRouter.get('/:id',(req,res)=>{
    //TODO: Enviar un solo libro
    res.send({});
})

module.exports=bookRouter;