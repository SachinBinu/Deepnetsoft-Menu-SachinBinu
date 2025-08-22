const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://Admin:Admin123@menubackend.gzculso.mongodb.net/?retryWrites=true&w=majority&appName=MenuBackend")
let db=mongoose.connection
db.on("error",()=>{
    console.log("DB Connection error")
})
db.once("open",()=>{
    console.log("DB Connected");
})