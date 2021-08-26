### 前端鉴权
#### token鉴权方式前端设置
token鉴权方式，前端需要将服务端返回的token在请求的时候带上，axios的方式是通过设置来实现：
```
axios.defaults.withCredentials = true
```
同时，后端需要支持：
```
Access-Control-Allow-Credentials: true
```
如果服务端不设置响应头，响应会被忽略不可用；同时，服务端需指定一个域名（Access-Control-Allow-Origin:www.zawaliang.com），而不能使用泛型（Access-Control-Allow-Origin: *）
我们可以基于token验证机制，专门做一个鉴权服务，用它向多个服务的请求进行统一鉴权
#### 方式：
1. HTTP Basic Authentication
2. session-cookie
3. Token 验证
4. OAuth(开放授权)

##### token验证


使用基于 Token 的身份验证方法，大概的流程是这样的：

  1. 客户端使用用户名跟密码请求登录
  2. 服务端收到请求，去验证用户名与密码
  3. 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
  4. 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
  5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
  6. 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据
  7.

#### 开放授权
OAuth（开放授权）是一个开放标准，允许用户让第三方应用访问该用户在某一网站上存储的私密的资源（如照片，视频，联系人列表），而无需将用户名和密码提供给第三方应用。
  参考文档：
https://juejin.im/entry/5aeffcf66fb9a07acd4da653