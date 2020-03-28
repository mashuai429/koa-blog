const mysql = require('../mysql/mysql')

const userInfo = async function(ctx, next) {
    // console.log(ctx)
    let sql = 'SELECT * from userInfo'
    let result = await mysql.queryUserInfo(sql);
    // next()
    await ctx.render('account', {
        name: result[0].name,
        phone: result[0].phone,
        address: result[0].address,
        email: result[0].email,
        content: result[0].content,
        face: result[0].face
    })
}

module.exports = {
    userInfo
}