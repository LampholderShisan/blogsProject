// 创建服务器
// 1.步先引入express
// 2.将express实例化
// 3.监听接口
const express = require('express');
const connect = require('./db/connect');
const userRotuer = require('./routers/userRotuer')
const indexRouter = require('./routers/indexRouter')
const userModel = require('./db/Model/PersonageUsers')
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const JWT = require('./utils/jwt')
// 对数据进行解析 body-parse
const bodyParser = require('body-parser');
const app = express();
let whitelist = ['http://localhost:8080', 'http://127.0.0.1:8080', "http://localhost:8081"]
// 对表单数据进行解析 application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// 对json数据格式进行解析 application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    let origin = req.headers.origin
    if (whitelist.includes(origin)) {
        //设置那个源头可以访问 * 可以允许任何请求头访问，但是就不能携带凭证(Credentials)
        res.setHeader('Access-Control-Allow-Origin', origin)
        //允许请求头携带那些内容或者头
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        //允许请求的方式
        res.setHeader('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE')
        //允许请求头携带cookie值
        res.setHeader('Access-Control-Allow-Credentials', true)
        //设置预检测时间间隔
        res.setHeader('Access-Control-Max-Age', 10)
        //允许前端接受那个头
        res.setHeader('Access-Control-Expose-Headers', 'name')
        if (origin === 'OPTIONS') {//预请求直接返回,不做处理
            res.send()
        }
    }
    next();
})
app.use(logger('dev'));
// app.use(cookieParser());
// /** 配置session不能放到最下面 入口App.js先选择或判断上面有路劲的地方则会进入文件不会对此进行编译 */
// //配置session
// app.use(session({
//     secret: 'Letmi project',//为了安全性的考虑设置secret属性
//     cookie: { maxAge: 1000 * 60 * 5 },//服务端发送给客户端的cookie有效时长
//     resave: true,//即使session 没有被修改，也保存session值，默认为true
//     saveUninitialized: false//无论有没有session cookie 每次请求都设置一个session cookie，默认给个标识为connect.sid
// }))
app.use('/user', userRotuer);
//登录拦截
app.post('*', (req, res, next) => {
    let prev = null;//登录之后存储的时间戳
    let cur = Date.now();//当前拦截请求的时间戳
    let maxAge = 1000 * 60  ; //设置登录后的有效时间为五分钟
    let token = req.body.params.token
    if (path != "/user/login" && path != "/user/regist" && token) {
        JWT.checkToken(token).then((data) => {
            prev = data.curtime;
            console.log("登录时存储的时间prev:" + prev + "\n" +
                "当前请求的时间cur:" + cur + "\n" + "prev+有效时间maxAge：" + (prev + maxAge));
            if (cur > prev + maxAge) {
                req.body.params.token=null;
                console.log("toekn失效")
            }
         next()
        }).catch(err => {
            console.log(err)
            res.send({ err: -998, msg: 'token非合法' })
            next()
        })

    }else{
        next()
    }
   
}, indexRouter)
 
 


app.listen('5555', (err) => {
    if (!err) {
        console.log("Service started successfully , sever start prot : 5555")
    }
})




