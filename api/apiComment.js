const mysql = require('../mysql/mysql');

const postComment = async function(ctx, next) {
    // console.log(ctx.request.body);
    let res = ctx.request.body;
    let nowTime = mysql.timestamp();
    let getIp = await mysql.postComment(`SELECT ip,name FROM comment WHERE IP='${res.IP}'`);
    let username = '';
    // 这里是为了判断用户是否IP相同 来绑定是否新用户
    if (getIp.length > 0) {
        username = getIp[0].name;
    } else {
        let str = '';
        let random = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'a', '1', '2', '3', '4', '5', '6', '7', '8', 'g', 'h', 'i', 'j', 'a', '1', '2', '3', '4', '5', '6', '7', '8'];
        for (let i = 0; i < 10; i++) {
            str += random[Math.floor(Math.random() * 20)]
        }
        username = str;
    }
    // end

    let sql = `INSERT INTO comment (name,content,articleId,createTime,ip) VALUES 
    ('${username}','${res.content}','${res.id}','${nowTime}','${res.IP}') `;
    let result = await mysql.postComment(sql);

    // console.log(result)
    ctx.body = {
        status: 1000,
        message: '评论成功',
        data: {}
    }

}

module.exports = {
    postComment
}