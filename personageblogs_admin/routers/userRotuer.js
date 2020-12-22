//创建router对象，并实例化,对MongoDB进行增删改查的操作
// 1.引入第三方模块，和建立好的Schema对象模型
// 2.将router对象实例化
// 3.routerSchema对象模型进行增删改查的操作
// 4.exprots router 抛出路由对象
const express = require('express')
const userModel = require('../db/Model/PersonageUsers');
const JWT = require('../utils/jwt');
const { db } = require('../db/Model/PersonageUsers');
// const JWT =require('jsonwebtoken');
const router = express.Router();
/**
 * @param post 127.0.0.1:5555/users/add 用户增加
 */
// router.get('/say', (req, res) => {
//     let { name, Lt, password, ject } = req.query;

//     console.log(name, Lt, password)

//     res.end(`${ject}('say 你好呀')`)
// })

router.post('/add', (req, res, next) => {
    let Letmi = Math.floor(Math.random() * 1e10) //(0-1)1
    let Letpassword = null;
    let delLt = null;
    let { name, id, age, sex, mobile, address, email, Letpassword1, Letpassword2, Lt } = req.body;

    if (!name && !Letpassword1 && !Letpassword2 && Letpassword1 === Letpassword2) {
        res.send('昵称或秘密不能为空')
    } else {
        Letpassword = Letpassword1;
    }
    userModel.find({ $or: [{ _id: id }, { mobile: mobile }, { Lt: Lt }, { Letmi: Letmi }] })
        .then((data) => {
            if (data.length > 0) {
                return res.send({ msg: '该用户已经存在', data: data, err: -1 })
            } else {
                return userModel.insertMany({
                    // _id: origin_id,
                    name: name,
                    age: age,
                    sex: sex,
                    mobile: mobile,
                    address: address,
                    email: email,
                    Letmi: Letmi,
                    Letpassword: Letpassword,
                    Lt: Lt,
                    delLt: delLt
                })
            }
        })
        .then(() => {
            res.send({ msg: '数据添加成功', err: 0 })
        })
        .catch(() => {
            res.send({ msg: '数据添加失败', err: -2 })
        })
})

/**
 * @param post /users/update 用户修改 
 */
router.post('/update', (req, res, next) => {
    let Letpassword = null;
    let { id, Lt, name, age, sex, mobile, address, email, Letpassword1, Letpassword2 } = req.body;
    if (!name && !Letpassword1 && !Letpassword2 && Letpassword1 === Letpassword2) {
        res.send('昵称或秘密不能为空')
    } else {
        Letpassword = Letpassword1;
    }
    if (!id && !Lt && !mobile) {
        res.send({ msg: '未传参数token值', err: -7 })

    } else {
        userModel.find({ $or: [{ _id: id }, { Lt: Lt }, { mobile: mobile }] })
            .then((data) => {
                if (data.length > 0) {
                    console.log(data + "是否有数据")
                    return userModel.update(
                        {
                            $or: [
                                { _id: id },
                                { mobile: mobile },
                                { Lt: Lt },
                            ]
                        },
                        {
                            $set: {
                                name: name,
                                age: age,
                                sex: sex,
                                address: address,
                                mobile: mobile,
                                email: email,
                                Letpassword: Letpassword,
                            }
                        },
                        {
                            mutil: true//传入属性，修改多个
                        }
                    )
                } else {
                    res.send({ msg: '多余的操作', err: -3 })
                }

            })
            .then((data) => {
                // console.log(data)
                res.send({ msg: '数据修改成功', data, err: 0 })

            })
            .catch((err) => {
                res.send({ msg: '数据修改失败', err, err: -3 })
            })
    }

})

/**
 * @param /users/find 查找用户数据 查找所有用户的信息
 */
router.post('/find', (req, res) => {
    let { id, name, age, sex, mobile, address, email, Lt, password } = req.body;
    let err = null;
    console.log(name, Lt, password)
    userModel.find({
        $and: [
            {
                $or: [
                    { _id: id },
                    { mobile: mobile },
                    { name: name },
                    { age: age },
                    { address: address },
                    { sex: sex },
                    { email: email },
                    { Lt: Lt },
                ]
            },
            { delLt: null }
        ]
    })
        .then((data) => {
            if (data.length > 0) {
                console.log(data.length)
                res.send({ msg: '全部数据被检测到一共 ' + data.length + ' 条', data: data, err: 0 })
            } else {
                res.send({ msg: "数据未被检测到", err: -5 })
            }

        })
        .catch((err) => {
            res.send({ msg: '该数据未被检测到', err: -5 })
        })
})

/**
 * @param /usesrs/del post 将用户注销
 *
 */
router.post('/del', (req, res) => {
    let { id, Lt, Letmi } = req.body;
    userModel.update(
        {
            $or: [
                { _id: id },
                { Lt: Lt },
                { Letmi: Letmi }
            ]
        }, {
        $set: {
            delLt: 'isdel'
        }
    }
    )
        .then((data) => {
            res.send({ msg: '该数据已被注销', data, err: 0 })
        })
        .catch((err) => {
            res.send({ msg: '该数据注销失败', err, err: -6 })
        })
    // }
})

/**
 * @param /user/login 用户登录接口
 */
router.post('/login', function (req, res, next) {
    let { Letmi, LetmiPassword } = req.body.params
    if (Letmi && LetmiPassword) {
        userModel.find({ Letmi: Letmi })
            .then((data) => {
                if (data.length > 0) {
                    //方法一：利用session+cookie的模式 跨域就不能使用 
                    //登录成功之后储存session会话
                    // req.session.login=true;
                    // req.session.userLetmi= Letmi;
                    // console.log('req.session.userLetmi:' + req.session.userLetmi );
                    // 方法二利用 jwt jsonwebtoken 验证方式
                    let token = JWT.CreatToken({ login: true, us: Letmi })
                    res.send({ msg: '数据被检索到', err: 0, token: token, data: data })
                    console.log("sjd")
                    console.log(data)
                } else {
                    res.send({ msg: '数据未被检索到', err: -2 })
                }
            }).catch(err => {
                if (!err) {
                    res.send({ msg: '数据未被检索到', err: -9 })
                } else {
                    console.log(err)
                    res.send({ msg: 'token是非法的', err: -999 })
                }
            })
    }
})
/**
 * @param /user/regist 用户注册接口
 */
router.post('/regist', (req, res, next) => {
    let Letmi = Math.floor(Math.random() * 1e10) //(0-1)1
    let LetmiPassword = null;
    let delLt = null;
    let { name, LetmiPassword1, LetmiPassword2, mobile, Lt, id } = req.body.params;
    if (!name && !LetmiPassword1 && !Letmipassword2 && LetmiPassword1 == LetmiPassword2) {
        res.send({ msg: '昵称或密码不能为空', err: -1 })
    } else {
        LetmiPassword = LetmiPassword1
    }
    userModel.find({ $or: [{ _id: id }, { Lt }, { mobile }] })
        .then(data => {
            if (data.length > 0) {
                res.send({ msg: '该用户名的已经存在了，', err: -2 })
            } else {
                return userModel.insertMany({ name, Letmi, delLt, LetmiPassword, Lt, mobile })
            }
        })
        .then(data => {
            console.log(data)
            res.send({ Letmi, msg: '数据添加成功', err: 0 })
        }).catch(err => {
            console.log(err)
            res.send({ msg: '数据添加失败', err: -3 })
        })
})
module.exports = router;