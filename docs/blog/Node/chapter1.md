### node基础知识

#### node用途
nodejs:使用es的语法规范，外加node api
1. js的运行环境
2. 运行在服务器，作为web server
3. 运行在本地，作为打包，构建工具。

#### 案例架构图
浏览器 --->发起请求---->nginx反向代理--->：
静态文件：html,css,js
api：日志记录--》路由处理--》登录校验（redis）--》用户信息--》获取数据（mySql）
 #### 服务端开发要考虑的要点：
 1. 安全问题，sql注入，ssl攻击
 2. 优化占用的cpu和内存
 3. 日志：写入，操作，分析等（stream写入日志）
 4. 服务稳定性
 5. 服务拆分。

 #### nodejs处理http请求
实例：
```
var http = require('http');
var querystring = require('querystring');
var server = http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);
    req.query = querystring.parse(req.url.split("?")[1]);
    res.end(JSON.stringify(req.query));
});
server.listen(8000);
```

#### 处理post请求
由于post请求是异步的，需要使用promise函数
```js
const getPostData = (req)=>{
  return new Promise((resolve,reject)=>{
    if(req.method !== 'POST'){
      resolve({})
      return
    }
    if(req.headers['content-type'] !== 'application/json'){
      resolve({})
      return
    }
    let postData = ''
    req.on('data',chunk =>{
      postData += chunk.toString()
    })
    req.on('end',()=>{
      if(!postData){
        resolve({})
      return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
}

将数据返回的数据放人到请求完成以后
const serverFn = function(req, res) {
  // 设置返回格式
  res.setHeader('Content-type','application/json')
    // 处理post请求
    getPostData(req).then(postData =>{
      req.body = JSON.stringify(postData)
      // 处理博客接口
      const blogData = blogRouter(req,res)
      if(blogData){
        res.end(JSON.stringify(blogData))
      }
      // 处理user接口
      const userData = userRouter(req,res)
      if(userData){
        res.end(JSON.stringify(userData))
      }
    })
}
```
当遇到请求完一个数据，根据第一个数据返回值，依次再请求第二个数据时，考虑使用promise和递归
```js
const fs = require('fs')
const path = require('path')

function getContent(data){
  const fullFileName = path.resolve(__dirname,'files',data)
  return new Promise((resolve,reject)=>{
    // 读取文件
    fs.readFile(fullFileName,(err,data) =>{
      if(err){
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  
}
let data = 'a.json'
getContent(data).then(aData=>{
  console.log('a data',aData)
  // 再次请求，而且再次请求的结果可以使用后面的then获取
  return getContent(aData.next)
}).then(bData =>{
  console.log('b data',bData)
})

```

