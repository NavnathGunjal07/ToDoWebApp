const express = require('express');
const mongoose = require('mongoose');



const app = express();

var todoTasks = [];

//connection to mongoDB

mongoose.connect("mongodb://localhost/todo_app",
{
    useNewUrlParser :true,
    useUnifiedTopology:true
});

//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static("assets"));
app.set('view engine', 'ejs');


//routes
app.use(require('./routes'));
app.use(require('./routes/addTask'));
app.use(require('./routes/deleteTask'));


//server configuration
app.listen(8000, ()=> console.log('listening on port: 8000'));