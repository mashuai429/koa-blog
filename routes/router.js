const Router = require('koa-router');
const router = new Router();

/*
后台管理引入
*/
const articleList = require('../controllers/articleList') // 查询文章列表
const getAccount = require('../controllers/account') // 后台账户信息
const changeInfo = require('../controllers/changeInfo') // 修改用户信息
const publish = require('../controllers/publish') //发布文章
const delArticle = require('../controllers/delArticle') // 删除后台文章

/*
前端使用的引入
*/
const getUserInfo = require('../api/getUserInfo') // 查询用户信息
const getArticle = require('../api/getArticle') //查询文章
const articleDetail = require('../api/articleDetail') //查询文章详情
const postComment = require('../api/apiComment') // 发布评论
const getComment = require('../api/getComment') // 

// 分隔线 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
/* 
 * 后台管理使用
 */
router.get('/account', getAccount.userInfo); // 账户信息接口
router.get('/articleList', articleList.articleList); // 后台管理的文章列表
router.post('/changeInfo', changeInfo.changeInfo); // 修改用户信息接口
router.post('/publish', publish.publish) // 发布文章界面
router.post('/delArticle', delArticle.delArticle) // 删除后台文

/*
 * 下面是前端使用的
 */
router.get('/api/getUserInfo', getUserInfo.getUserInfo); // 给前端的获取用户信接口
router.post('/api/article', getArticle.getArticle) // 前端查询文章
router.post('/api/articleDetail', articleDetail.articleDetail) // 文章想起
router.post('/api/postComment', postComment.postComment) // 发布评论
router.post('/api/getComment', getComment.getComment) // 发布评论

module.exports = router;