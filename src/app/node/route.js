const express = require('express');
const router = express.Router();

router.get('/contacts',(req,res,next)=>{
    res.send('hii dinesh');
});

module.exports = router;