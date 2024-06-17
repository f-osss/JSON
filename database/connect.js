const mongoose=require('mongoose')

const connect=mongoose.connect(process.env.DB)

if(connect){
    console.log('Connected to DB')
}else{
    console.log('not connected to db')
}

module.exports=connect