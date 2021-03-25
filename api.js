const express = require("express");
const router = express.Router();

router.post("/search",( req, res)=>{
    const searchName = req.body.name;
    console.log(searchName);
    res.send('ok')
})

module.exports = router;