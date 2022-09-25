const express = require('express');
const router = express.Router();

require('../db/conn');
const Users = require("../model/GuestMess");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

router.post('/re', async (req, res) => {

    const { name, gender, email, contactnumber, fromdate, todate } = req.body;

    if(!name || !gender || !email || !contactnumber || !fromdate || !todate){
        return res.status(422).json({error:"Fill Properly"});
    }
    try{
        const usersExist = await Users.findOne({email: email});

        if(usersExist){
            return res.status(422).json({error: "Email already existed"});
        }

        const users = new Users({ name, gender, email, contactnumber, fromdate, todate });
        await users.save();

        res.status(201).json({message: "user registered successfully"});
    }catch (err) {
        console.log(err);
    }
   
});


module.exports = router;