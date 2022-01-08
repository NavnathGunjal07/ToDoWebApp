const mongoose = require('mongoose');



const TodoSchema = mongoose.Schema({
    description:{
        type: String, 
        required: true 
    },
    category:{
        type: String,
        required: true
    },
    duedate:{ 
        type:Date,
        required: true
    }
});


module.exports = new mongoose.model('ToDo', TodoSchema);