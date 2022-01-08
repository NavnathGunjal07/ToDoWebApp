const router = require("express").Router();
const Todo = require("../models/todo");

//routes
router.post('/deletetask', (req, res)=>{
    let id = req.body['todo-list'];
   
    for(let i of id){
        Todo.findByIdAndDelete(id,function(err){
            if(err){
                console.log('deleting contact error');
                return;
            }
        });
    }
    return res.redirect('back');
});


module.exports = router;