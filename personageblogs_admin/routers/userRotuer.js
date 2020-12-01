//创建router对象，并实例化,对MongoDB进行增删改查的操作
// 1.引入第三方模块，和建立好的Schema对象模型
// 2.将router对象实例化
// 3.routerSchema对象模型进行增删改查的操作
// 4.exprots router 抛出路由对象
const express = require('express')
const userModel = require('../db/Model/PersonageUsers');
const { ObjectId } = require('bson');
const { Model } = require('mongoose');
const { updateMany } = require('../db/Model/PersonageUsers');
const { isBoolean } = require('util');

const router = express.Router();


const origin_id = ObjectId()
/**
 * @param post 127.0.0.1:5555/users/add 用户增加
 */
router.get('/say', (req, res) => {
    let { name, Lt, password, ject } = req.query;

    console.log(name, Lt, password)

    res.end(`${ject}('say 你好呀')`)
})
 
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
                    return userModel.updateMany(
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
            .then(() => {
                res.send({ msg: '数据修改成功', err: 0 })

            })
            .catch(() => {
                res.send({ msg: '数据修改失败', err: -3 })
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
    let { id, Lt, mobile, name } = req.body;
    userModel.update(
        {
            $or: [
                // {_id:id},
                // {Lt:Lt},
                // {mobile:mobile}
                { name: name }
            ]
        }, {
        $set: {
            delLt: 'isdel'
        }
    }
    )
        .then(() => {

            res.send({ msg: '该数据已被注销', err: 0 })
        })
        .catch(() => {
            res.send({ msg: '该数据注销失败', err: -6 })
        })
})

module.exports = router;