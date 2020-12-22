const express = require('express');
const userModel = require('../db/Model/PersonageUsers')
const router = express.Router();


 router.post('/',(req,res,next)=>{
    console.log(req.body.params.token)
     if(!req.body.params.token){
         res.send({msg:'token失效',err:-997})
     }else{
        res.send({msg:"hello index"})
     }  
      next()
 })
 
// 渲染首页面
router.post('/home', function (req, res, next) {
    res.send({ msg: 'home', err: 0, data: 'seccess' })
});
router.post("/images",(req,res,next)=>{
    res.send({ msg: 'images', err: 0, data: 'seccess' })
})
module.exports = router  

 
 