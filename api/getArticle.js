const mysql = require('../mysql/mysql');

const getArticle = async function(ctx, next) {

    // console.log(123456789)

    let sql = `SELECT id,title,content,createTime,see,author,image
    FROM article LIMIT 0,5`;

    let result = await mysql.queryArticle(sql);

    // console.log(result);
    ctx.body = {
        message: '获取信息成功',
        data: result,
        status: 1000
    }
}

module.exports = {
    getArticle
}