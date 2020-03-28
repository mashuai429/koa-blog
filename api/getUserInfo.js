const mysql = require('../mysql/mysql')

const getUserInfo = async function(ctx, next) {
    // console.log(ctx)
    let sql = 'SELECT * from userInfo'
    let result = await mysql.queryUserInfo(sql);

    // console.log(result)
    ctx.body = {
        status: 1000,
        data: {
            name: result[0].name,
            phone: result[0].phone,
            address: result[0].address,
            email: result[0].email,
            content: result[0].content,
            face: result[0].face
        },
        message: '用户信息获取成功'
    }
}

module.exports = {
    getUserInfo
}