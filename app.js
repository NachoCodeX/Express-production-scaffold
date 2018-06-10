import express from 'express';
import path from 'path';
import Api from './routes/api';

const app=express();


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'public')))
app.use('/api',Api);

// app.get('*',(req,res)=>{
//     return res.sendFile(path.join(__dirname,'public'));
// });


module.exports=app;