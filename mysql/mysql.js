const mysql = require('mysql')
const host = require('../config/config')

let changeDatabase = function(sql, values) {
    return new Promise((resolve, reject) => {
        mysql.createPool(host).getConnection((err, connection) => {
            if (err) {
                return false
            } else {
                connection.query(sql, values, (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                    connection.release()
                })
            }
        })
    })
}
let createArticle = `create table if not exists article(
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT(0) NOT NULL,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(200) NOT NULL,
    see INT(255) NOT NULL,
    PRIMARY KEY ( id )
   )`
let commentList = `create table if not exists comment(
    id INT NOT NULL,
    name TEXT(0) NOT NULL,
    content TEXT(0) NOT NULL,
    createTime VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
)`

function createTable(sql) {
    return changeDatabase(sql, [])
}
createTable(createArticle);
createTable(commentList);

// 查询文章信息哟
let queryArticle = function(sql) {
        console.log('我被调用了 惊喜不')
        return changeDatabase(sql)
    }
    // 查询用户信息哟
let queryUserInfo = function(sql) {
        return changeDatabase(sql)
    }
    // 修改用户信息
let changeUserInfo = function(sql) {
        return changeDatabase(sql)
    }
    // 发布文章
let publishApi = function(sql) {
    return changeDatabase(sql)
}

// 发布文章
let detail = function(sql) {
    return changeDatabase(sql)
}

//文章评论
let postComment = function(sql) {
    return changeDatabase(sql)
}

// 获取评论
let getComment = function(sql) {
        return changeDatabase(sql)
    }
    // 删除文张
let delArticle = function(sql) {
    return changeDatabase(sql)
}





// 时间戳他妈的
function add0(m) { return m < 10 ? '0' + m : m }
let timestamp = function() {
    let miao = new Date().getTime();
    let time = new Date(miao);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

module.exports = {
    queryArticle,
    queryUserInfo,
    changeUserInfo,
    publishApi,
    detail,
    timestamp,
    postComment,
    delArticle,
    getComment
}