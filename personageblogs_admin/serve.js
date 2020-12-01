// 创建服务器
// 1.步先引入express
// 2.将express实例化
// 3.监听接口
const express = require('express');
const connect = require('./db/connect');
const userRotuer = require('./routers/userRotuer')
// 对数据进行解析 body-parse
const bodyParser = require('body-parser');
const userModel = require('./db/Model/PersonageUsers');
const app = express();
let whitelist = ['http://localhost:8080']
// 对表单数据进行解析 application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
// 对json数据格式进行解析 application/json
app.use(bodyParser.json())
app.use('/users',userRotuer)
//跨域请求解决
app.use((req,res,next)=>{
    let origin = req.headers.origin
    if(whitelist.includes(origin)){
        // 设置哪些源头可以访问
        res.setHeader('Access-Control-Allow-Origin',origin)
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    }
    // res.end('访问成功')
    next();
})
 
app.post('/login',(req,res,next)=>{
     let {Letmi} =req.body.params;
     console.log(req.body)
    userModel.find({Letmi:Letmi})
    .then((data)=>{
        if(data.length>0){
            res.send({msg:'数据被检索到',err:0,data:data})
        }
    })
    .catch(()=>{
        res.send({msg:'数据未被检索到',err:-9})
    })
})
 
 
 
app.listen('5555',(err)=>{

    if(!err){
        console.log("Service started successfully , sever start prot : 5555")
    }
})