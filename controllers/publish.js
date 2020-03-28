const mysql = require('../mysql/mysql')
const fs = require('fs')
    // 发布文章
const publish = async function(ctx, next) {
    // console.log(ctx.request.body)
    let body = ctx.request.body;
    let timestamp = mysql.timestamp(); // 获取当前的时间 存到数据库里
    let getImage = new Buffer(body.image, 'base64'); // base64转图片
    let randomStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let str = '';
    for (let i = 0; i < 20; i++) {
        let randomVal = Math.floor(Math.random() * 20);
        str += randomStr[randomVal]
    }

    console.log(str);
    fs.writeFile(`public/erha/${str}.png`, getImage, (err, res) => {
        if (err) {
            console.log(err)
        }
    })
    let sql = `INSERT INTO article (title,content,createTime,see,author,image) 
    VALUES ('${body.title}','${body.content}','${timestamp}','1','二哈','public/erha/${str}.png')`
    await mysql.publishApi(sql);
    ctx.body = {
        status: 1000,
        message: '发布成功',
        data: {}
    }

}


module.exports = {
    publish
}