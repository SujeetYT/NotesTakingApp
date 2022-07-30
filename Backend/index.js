require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
const Note = require("./Schemas/createSchema");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const url = process.env.URL;

mongoose.connect(url).then(()=>console.log("Database Connected")).catch((err)=>console.log(err));

app.get("/", (req, res)=>{
    Note.find({}, (err, user)=>{
        if(err) console.log(err);
        else{
            res.send(user);
            console.log(user);
        }   
    });
});

app.post("/", (req, res)=>{
    
    const newNote = new Note({
        title: req.body.title,
        description: req.body.description
    });
    newNote.save();
    console.log(req.body);
    res.json(newNote);
});

app.delete("/:id", (req, res)=>{
    try {
        Note.deleteOne({_id: ObjectId(req.params.id)}, (err)=>{
            if(err) throw err;
            res.send("Deleted");
        })
    } catch (err) {
        console.log(err);
        res.send("something went wrong data not deleted")
    }
});

app.listen(port, ()=>{
    console.log(`port running on http://localhost:${port}/`);
})
