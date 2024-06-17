const express=require('express')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
require('dotenv').config()

const app=express()
const port=process.env.PORT || 3000

//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

//end points
app.get('/',(req,res)=>{
    console.log('hello')
    res.json({message : 'Hello World'})
})

app.listen(port, ()=>{
    console.log(`listen on port ${port}`)
})