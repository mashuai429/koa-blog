const mysql = require('../mysql/mysql');

const getComment = async function(ctx, next) {
    let res = ctx.request.body;
    // console.log(res)
    // console.log(res.id);
    let sql = `SELECT name,content,createTime FROM comment WHERE articleId=${res.articleId}`;
    let result = await mysql.getComment(sql);
    // console.log(result)
    // console.log(result)
    ctx.body = {
        message: '获取成功',
        data: result,
        status: 1000
    }
}

module.exports = {
    getComment
}