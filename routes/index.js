const router = require('express').Router();
const Todo = require("../models/todo");


router.get("/", (req, res) => {
    Todo.find({},function(err,Todo){
        if(err){
            console.log(err);
            return;
        }
        
        return res.render('home',{
         Todo_List:Todo
     });
    });
});





module.exports = router;