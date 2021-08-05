
### cookie&session
#### cookie特点
1. 结构化数据
1. 每次发送http请求，会将请求域的cookie一起发送给server
2. server可以修改cookie，并返回给浏览器
3. 浏览器端也可以修改cookie(有限制)

#### sever端nodejs操作cookie
获取：req.headers.cookie || ''
设置：res.setHeader('Set-Cookie',`username=${data.username};path=/`)
//path生效路由。

#### cookie做限制
res.setHeader('Set-Cookie',`username=${data.username};path=/`,httpOnly)
httpOnly:限制只能后端来改，前端不能修改。
过期时间设置：
```js
function getExpireTime(){
    const newday =new Date();
    newday.setTime(newday.getTime()+(24*60*60*1000))
return newday.toGMTString();
}
res.setHeader('Set-Cookie',`username=${data.username};path=/`,httpOnly;expires=getExpireTime())
```
#### session
使用cookie设置username会非常危险，解决方法：cookie中存储userid，server端对应username。
问题：
1. 目前session直接是js变量，放在nodejs进程内存中，进程内存有限，访问量过大会有问题。
2. 正式显示运行是多进程，进程之间内存无法共享。
#### redis
解决方式：
特点：1.web 
1.web server最常用的缓存数据库，数据存放在内存中。
2. 相比于mysql，速度更快。 
3. 但是成本更高，可存储的数据量更小。

#### 为何session适合用redis：
1. session访问频繁。对性能要求高。
2. session可不考虑断电丢失数据的问题
3. session数据量不会太大。

