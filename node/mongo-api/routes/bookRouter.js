var express=require('express');
const bookRouter = express.Router();

//Importamos nuestro modelo
var BookModel=require('../models/bookModel');

bookRouter.get('/',(req,res)=>{

    BookModel.find({},(err,result)=>{
        if(err!=null || result==null){
            console.log('Error en GET Book',err);
            res.status(500).send('Internal error');
        }
        res.json(result);
    });
});

bookRouter.post('/',(req,res)=>{
    var tmpBook=req.body;
    var newBook=new BookModel(tmpBook);
    newBook.save();
    res.status(201).send(newBook);
});

bookRouter.get('/:bookId',(req,res)=>{
    var bookId=req.params.bookId; //Obtengo la variable de la URL
    BookModel.findById(bookId,(err,result)=>{
        if(err!=null || result==null){
            res.status(404).send(`Libro con el id ${bookId} no existe`);
        }
        res.json(result);
    });
});

bookRouter.put('/:bookId',(req,res)=>{
    var bookId=req.params.bookId; //Obtengo la variable de la URL
    BookModel.findById(bookId,(err,result)=>{
        if(err!=null || result==null){
            res.status(404).send(`Libro con el id ${bookId} no existe`);
        }
        result.title=req.body.title;
        result.desc=req.body.desc;
        result.save();
        res.status(201).send(result);
    });
});

bookRouter.delete('/:bookId',(req,res)=>{
    var bookId=req.params.bookId; //Obtengo la variable de la URL
    BookModel.findById(bookId,(err,result)=>{
        if(err!=null || result==null){
            res.status(404).send(`Libro con el id ${bookId} no existe`);
        }
        else{
            result.remove(err=>{
                if(err!=null){
                    res.status(500).send(err);
                }
                else{
                    res.send(`Libro con el id ${bookId} borrao!`);
                }
            });
        }
    });
});


module.exports=bookRouter;