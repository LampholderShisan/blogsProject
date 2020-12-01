// 与数据建立连接
// 1.首先引入第三方模块mongoose
// 2.与MongoDB建立连接
// 3.连接测试 检测连接是否成功

const mongoose = require('mongoose');
let url="mongodb://127.0.0.1:27017/Personageblog"//MongDB URL连接地址
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
// 连接测试
// 连接成功

mongoose.connection.once('open',(err)=>{
    if(!err){
        console.log('mongdb connection succeess')
    }
})
// 连接失败
mongoose.connection.once('close',(err)=>{
    if(!err){
        console.log("mongdb connection failure ")
    }
})



// 直接断开连接
// mongoose.disconnect((err)=>{
//     if(!err){
//         console.log('直接断开连接')
//     }
// })
 


