const express = require('express');
const router = express.Router();

require('../db/conn');
const Uses = require("../model/GuestRoom");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

router.post('/response', async (req, res) => {

    const { name, gender, email, contactnumber } = req.body;

    if(!name || !gender || !email || !contactnumber){
        return res.status(422).json({error:"Fill Properly"});
    }
    try{
        const usesExist = await Uses.findOne({email: email});

        if(usesExist){
            return res.status(422).json({error: "Email already existed"});
        }

        const uses = new Uses({ name, gender, email, contactnumber });
        await uses.save();

        res.status(201).json({message: "user registered successfully"});
    }catch (err) {
        console.log(err);
    }
   
});


module.exports = router;