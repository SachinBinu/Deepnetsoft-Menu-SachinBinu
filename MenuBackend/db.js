const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/deepnetsoftmenu")
let db=mongoose.connection
db.on("error",()=>{
    console.log("DB Connection error")
})
db.once("open",()=>{
    console.log("DB Connected");
})