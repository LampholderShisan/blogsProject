const JWT = require('jsonwebtoken');

//创建一个token
let secret = "ahfdaoiweolkjalfj'\']wfausoi"
function CreatToken(plalyload){
    //产生token
    plalyload.curtime =Date.now() //创建时间戳
    return JWT.sign(plalyload,secret)
}

//验证token的合法性
function checkToken(token){
    return new Promise((resovle,reject)=>{
        JWT.verify(token,secret,(err,data)=>{
            if(!err){
                resovle(data)
            }
            reject('token 验证失败')
        })
    })
}

module.exports={
    CreatToken,checkToken
}









// const JWT = require('jsonwebtoken');
// //
// let secret = 'qwertyuiopas;ljfdsxm[pwopjkdg';

// let plalyload ={
//     us:123,
//     pw:456,
// }
// //产生一个token
// // let token =JWT.sign(plalyload,secret);//hs256 加密 数据 载体 secret

// let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6MTIzLCJwdyI6NDU2LCJpYXQiOjE2MDc3Nzk1NDF9.VBjbRPJGhTrJvT2Ocr4cDCay-Yi_H-fhEeD4ObWi0zY";

// console.log(token);

// //验证token的合法性加密
// JWT.verify(token,secret,(err,data)=>{
//     console.log(err);
//     console.log(data);
// })