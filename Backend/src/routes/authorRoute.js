const express = require('express');
const Authordata = require('../model/Authordata');
//const User = require('./src/model/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());



function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }




function router(){


    app.post('/insert',verifyToken,function(req,res){
    console.log(req.body);
       
    var item=

    {
             author:req.body.author.author,
             country:req.body.author.country,
             famousbooks:req.body.author.famousbooks,
             genre:req.body.author.genre,
             description:req.body.author.description,
             image:req.body.author.image

     }

 var author=Authordata(item);
 author.save()
});
app.get('/authorlist',function(req,res){
    
    console.log("Author get value");
    Authordata.find()
                .then(function(authors){
                    console.log(authors);
                    res.send(authors);
                });
});
app.delete('/remove/:author',(req,res)=>{
   
    author = req.params.author;
    Authordata.findOneAndDelete({"author":author})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })


app.get('/authordetails/:author',  (req, res) => {
    const author = req.params.author;
    Authordata.findOne({"author":author})
    .then((author)=>{
        res.send(author);
    });
})

    app.put('/update/:oldauthor',(req,res)=>{
      console.log("Hello inside put"+req.body.author +"   o"+req.params.oldauthor)
      const update = {
      author:req.body.author,
      author:req.body.author,
      genre:req.body.genre,
      description:req.body.description,
      image:req.body.image
      };
     Authordata.findOneAndUpdate({"author":req.params.oldauthor},update)
     .then(function(){
        res.send();
    });
})
      
 
    
      
   
   
app.delete('/remove/:author',(req,res)=>{
   
     author = req.params.author;
     authordata.findByIdAndDelete({"author":author})
     .then(()=>{
         console.log('success')
         res.send();
     });
   })

    

   return authorRouter;

}


    module.exports=router;

