const express=require('express');
const router=express.Router();
var fetchuser=require('../middleware/fetchuser');
const Notes=require('../models/Notes');
const {validationResult, body } = require('express-validator');

//ROUTE 1: Get All Notes using POST "/api/notes". Doesnt Require Auth

router.get('/fetchallnotes' ,fetchuser,async(req,res)=>{
    try{
    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
}catch(err){
    console.log(err)
    res.status(400).json("Something Went Wrong")
}
})

//ROUTE 2: Add Notes using POST "/api/notes". Doesnt Require Auth

router.post('/addnote',fetchuser,[
    body("title","Enter a Valid Title").isLength({min:3}),
    body("description","Description must be 5 Character").isLength({min:5}),
],async(req,res)=>{
    try {
        const {title,description,tag,}=req.body;
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const note=new Notes({
           title,description,tag,user:req.user.id 
        })
        const savedNote=await note.save()
        res.json(note)    
    } catch (error) {
        console.log(error)
    res.status(400).json("Something Went Wrong")
    }
    
})


//ROUTE 3: Update Notes using POST "/api/notes". Doesnt Require Auth

router.put('/updatenote/:id' ,fetchuser,async(req,res)=>{
    try{
    const {title,description,tag}=req.body;
    //Create a n=New Note
    const newNote={};
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}

    //Find the Note to be Updated !
    let note=await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).json("Not Found")
    }
    if(note.user.toString()!==req.user.id){
        return res.status(401).json("Not Allowed !")
    }
    note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note});
}catch(err){
    console.log(err)
    res.status(400).json("Something Went Wrong")
}
})


//ROUTE 4: Delete Notes using DELETE "/api/notes". Doesnt Require Auth

router.delete('/deletenote/:id' ,fetchuser,async(req,res)=>{
    try{
    const {title,description,tag}=req.body;
    //Find the Note to be Delete !
    let note=await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).json("Not Found")
    }
    //Allow Deletion only if user owns  this note

    if(note.user.toString()!==req.user.id){
        return res.status(401).json("Not Allowed !")
    }
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success ":"Note has been Deleted !"});
}catch(err){
    console.log(err)
    res.status(400).json("Something Went Wrong")
}
})





module.exports=router;