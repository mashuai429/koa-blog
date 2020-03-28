"use strict";

var mysql = require('../mysql/mysql');

var fs = require('fs'); // 发布文章


var publish = function publish(ctx, next) {
  var body, timestamp, getImage, randomStr, str, i, randomVal, sql;
  return regeneratorRuntime.async(function publish$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(ctx.request.body)
          body = ctx.request.body;
          timestamp = mysql.timestamp(); // 获取当前的时间 存到数据库里

          getImage = new Buffer(body.image, 'base64'); // base64转图片

          randomStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
          str = '';

          for (i = 0; i < 20; i++) {
            randomVal = Math.floor(Math.random() * 20);
            str += randomStr[randomVal];
          }

          console.log(str);
          fs.writeFile("public/erha/".concat(str, ".png"), getImage, function (err, res) {
            if (err) {
              console.log(err);
            }
          });
          sql = "INSERT INTO article (title,content,createTime,see,author,image) \n    VALUES ('".concat(body.title, "','").concat(body.content, "','").concat(timestamp, "','1','\u4E8C\u54C8','public/erha/").concat(str, ".png')");
          _context.next = 11;
          return regeneratorRuntime.awrap(mysql.publishApi(sql));

        case 11:
          ctx.body = {
            status: 1000,
            message: '发布成功',
            data: {}
          };

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  publish: publish
};