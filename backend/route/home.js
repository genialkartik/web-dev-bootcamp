const express = require('express');
const router = express();

router.route('/test')
.get(async (req, res)=>{
    res.json({message: 'It is working.'})
})

module.exports = router;