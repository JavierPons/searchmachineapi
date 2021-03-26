const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post("/search",( req, res)=>{
    const searchName = req.body.name;
    let data;
    (async () => {
        try{
            const resp = await axios.get(`http://open-api.myhelsinki.fi/v1/places/?tags_search=${searchName}`, {}).then(resp => {
            console.log(resp.data);
            
           data = resp.data;
        })
      
        res.send(JSON.stringify(data))
    }catch(err){
        console.log(err);
    }
        
    })()

   
})

module.exports = router;