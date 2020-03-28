// const
const mysql = require('../mysql/mysql');
const path = require('path');

// console.log(mysql.aaa())
const articleList = async function(ctx, next) {
    // ctx.body = '<h1>我是bo11</h1>';
    let sql = `SELECT * FROM ARTICLE LIMIT 0,5`;
    let result = await mysql.queryArticle(sql)

    console.log([...result])
        // mysql.queryArticle(sql).then(res => {
        //     // console.log(res)
        // })
    await ctx.render('articleList', {
        articleData: [...result]
    });
}


module.exports = {
    articleList
}