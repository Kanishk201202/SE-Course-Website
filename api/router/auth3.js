const express = require('express');
const router = express.Router();

require('../db/conn');
const Users = require("../model/ChangeRoom");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

router.post('/repo', async (req, res) => {

    const { name, rollnumber, currentroom, programme, gender, email, contactnumber, reason } = req.body;

    if(!name || !rollnumber || !currentroom || !programme || !gender || !email || !contactnumber || !reason){
        return res.status(422).json({error:"Fill Properly"});
    }
    try{
        const usersExist = await Users.findOne({email: email});

        if(usersExist){
            return res.status(422).json({error: "Email already existed"});
        }

        const users = new Users({ name, rollnumber, currentroom, programme, gender, email, contactnumber, reason });
        await users.save();

        res.status(201).json({message: "user registered successfully"});
    }catch (err) {
        console.log(err);
    }
   
});


module.exports = router;