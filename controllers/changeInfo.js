const mysql = require('../mysql/mysql');
const path = require('path');
const fs = require('fs')

const changeInfo = async function(ctx, next) {
    // console.log(ctx.request.body);
    let body = ctx.request.body;
    let dataBuffer = '';
    if (body.face != "") {
        dataBuffer = new Buffer(body.face, 'base64');
    }

    let sql = `UPDATE userinfo SET 
    face='public/face/userImg.png',
    name='${body.name}',
    phone='${body.phone}',
    address='${body.address}',
    email='${body.email}',
    content='${body.content}'
    WHERE id=${body.id};`

    console.log('我是sq我打印了')
    console.log(sql)

    // let randomStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm']
    fs.writeFile('public/face/userImg.png', dataBuffer, (err, res) => {
            if (err) {
                console.log(err)
                return
            }
        })
        /* 头像按照正常逻辑应该是随机名字与根据用户特性来指定文件夹存放
           但我这只是个简单的我个人博客  没有那样操作了。
        */
    await mysql.changeUserInfo(sql)
    ctx.body = `{
        status:1000,
        message:'修改成功',
        data:{}
    }`;
}

module.exports = {
    changeInfo
}