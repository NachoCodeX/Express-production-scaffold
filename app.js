import express from 'express'
import path from 'path'
import Api from './routes/api'
import morgan from 'morgan'


const app=express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'public')))
app.use('/api',Api)




module.exports=app