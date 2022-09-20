const express = require('express');
const router = express.Router();

require('../db/conn');
const Use = require("../model/GuestAdmission");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js');
});

router.post('/submit', async (req, res) => {

    const { name, gender, email, contactnumber, fromdate, todate } = req.body;

    if(!name || !gender || !email || !contactnumber || !fromdate || !todate){
        return res.status(422).json({error:"Fill Properly"});
    }
    try{
        const useExist = await Use.findOne({email: email});

        if(useExist){
            return res.status(422).json({error: "Email already existed"});
        }

        const use = new Use({ name, gender, email, contactnumber, fromdate, todate });
        await use.save();

        res.status(201).json({message: "user registered successfully"});
    }catch (err) {
        console.log(err);
    }
   
});


module.exports = router;