const mysql = require('../mysql/mysql')

const articleDetail = async function(ctx, next) {
    let request = ctx.request.body;
    let lookSql = `SELECT see FROM article WHERE id=${request.id}` // 查询当前的浏览量
    const looks = await mysql.detail(lookSql);

    let addLook = `UPDATE article SET see = ${looks[0].see + 1}` // 追加浏览量
    await mysql.detail(addLook);


    // console.log(request)
    let sql = `SELECT id,title,content,createTime,see,author,image
    FROM article WHERE id=${request.id}`;

    const result = await mysql.detail(sql);


    // console.log(result)
    ctx.body = {
        status: 1000,
        message: '获取成功',
        data: result[0]
    }
}

module.exports = {
    articleDetail
}