const mysql = require('../mysql/mysql');

const delArticle = async function(ctx, next) {
    let request = ctx.request.body;
    let sql = `DELETE from article WHERE id=${request.id}`;
    let result = await mysql.delArticle(sql);

    console.log(result)
    ctx.body = {
        message: '删除成功',
        status: 1000,
        data: {}
    }
}

module.exports = {
    delArticle
}