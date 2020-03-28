const koa = require('koa2');
const views = require('koa-views');
const path = require('path');
const KoaStatic = require('koa-static');
const cors = require('koa2-cors');
const koaBody = require('koa-bodyparser')
const app = new koa();

const router = require('./routes/router')

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))
app.use(koaBody())

app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return '*'
        }
        return 'http://127.0.0.1:5501'
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))

app.use(KoaStatic('./'))
    // app.use(require('./routes/router').routes()).use(router.allowedMethods());
app.use(router.routes());
app.use(async(ctx, next) => {
    await ctx.render('header')
        // ctx.response.body = router
}).listen(3000)