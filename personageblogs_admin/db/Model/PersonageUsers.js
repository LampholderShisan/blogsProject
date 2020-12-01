//建立Schema模型对象
// 1.引入第三方模块
// 2.创建Schema模型对象
// 3.将模型对象实例化
// 4.exprots 抛出schema对象

const mongoose = require('mongoose');
 
let Schema = mongoose.Schema
const userSchema = new Schema({
    name:{type:String,required:true, min:10,max:255},
    Letmi:{type:Number,min:0,max:1e25},
    Letpassword:{type:String, min:0,max:1e16},
    age:Number,
    sex:{type:String,default:'female'},
    address:{type:String,min:20,max:255},
    mobile:{type:Number,required:true},
    email:String,
    Lt:{type:Number,required:true,min:0,max:1e15},
    delLt:{type:String}
})

const  userModel = mongoose.model('users',userSchema);

module.exports = userModel ;
