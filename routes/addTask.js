const router = require("express").Router();
const Todo = require("../models/todo");

//routes
router.post('/addtask', (req, res)=>{
    const desc = req.body.description;
    const category = req.body.category;
    const dueDate = req.body.duedate;

    Todo.create({
        description:desc,
        category:category,
        duedate:dueDate
    },function(err,newTodo){
        if(err)
        {
            alert("Please Enter all details");
            return res.redirect('back');
        }
        
        return res.redirect('back');
    })
});


module.exports = router;