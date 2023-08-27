const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3001;
const cors = require('cors');

const app = express();
const userRouter = require('./routes/userRoutes');
const articleRouter = require('./routes/articlesRoutes');
app.use(express.json());

try{
    mongoose.connect("mongodb+srv://amritamathur:admin@cluster0.7d4xbmx.mongodb.net/blog?retryWrites=true&w=majority", { useNewUrlParser: true });
    console.log("connected with db")
}catch(error){
    console.log(error);
}
app.use(cors({origin: '*'}));

app.use('/users', userRouter);
app.use('/articles', articleRouter);


app.get('/', (req,res)=>{
    res.send("Connected to Todo App");
})
app.listen( port, ()=> {
    console.log("Server is running")
})