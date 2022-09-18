const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/StudentRoom");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

router.post('/register', async (req, res) => {

    const { name, rollnumber, programme, gender, email, contactnumber} = req.body;

    if(!name || !rollnumber || !programme || !gender || !email || !contactnumber){
        return res.status(422).json({error:"Fill Properly"});
    }
    try{
        const userExist = await User.findOne({email: email});

        if(userExist){
            return res.status(422).json({error: "Email already existed"});
        }

        const user = new User({ name, rollnumber, programme, gender, email, contactnumber});
        await user.save();

        res.status(201).json({message: "user registered successfully"});
    }catch (err) {
        console.log(err);
    }
   
});


module.exports = router;