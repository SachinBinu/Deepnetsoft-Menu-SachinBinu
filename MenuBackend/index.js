require("./db")
const Item = require("./Item.js")
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())

app.post("/CreateItem",async(req,res)=>{
        try {
        const {
            FoodName,
            Description,
            Price,
            Type
        } = req.body

        const NewItem = new Item({
           FoodName,
            Description,
            Price,
            Type
        })
        await NewItem.save()
        res.json({ message: "Item Created" })
    }
    catch (error) {
        res.json({message:"Error",error})

    }
})
app.get("/Item/:type",async(req,res)=>{
    const items=await Item.find({Type:req.params.type})
    res.json(items)
})
app.get("/Item",async(req,res)=>{
    const items=await Item.find({})
    res.json(items)
})
app.delete("/Item/:id",async(req,res)=>{
    const items=await Item.findByIdAndDelete(req.params.id)
    res.json(items)
})
app.listen(8080, () => {
    console.log("Server Started");
})

module.exports = app;
