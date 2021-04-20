### ajax
var xhr = new XMLHttpRequest();
xhr的用法：
1. xhr.open('get',url,true/false)
  open接收三个参数：1.请求方法。2.请求url。3.同步或者异步。
2. xhr.send(null)
send()方法接收一个参数，即要作为请求主体发送的数据。如果不需要通过请求主体发送
数据，则必须传入 null，因为这个参数对有些浏览器来说是必需的。
3.响应数据属性：
 responseText：作为响应主体被返回的文本。
 responseXML：如果响应的内容类型是"text/xml"或"application/xml"，这个属性中将保
存包含着响应数据的 XML DOM 文档。
 status：响应的 HTTP 状态。
 statusText：HTTP 状态的说明
4. readyState属性：该属性表示请求
/响应过程的当前活动阶段。
0：未初始化。尚未调用 open()方法。
 1：启动。已经调用 open()方法，但尚未调用 send()方法。
 2：发送。已经调用 send()方法，但尚未接收到响应。
 3：接收。已经接收到部分响应数据。
 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。
注意：只要readyState属性的值由一个值变成另一个值，都会触发一次readystatechange

5. xhr.abort(); 取消异步请求


#### 请求头：
```
 Accept：浏览器能够处理的内容类型。
 Accept-Charset：浏览器能够显示的字符集。
 Accept-Encoding：浏览器能够处理的压缩编码。
 Accept-Language：浏览器当前设置的语言。
 Connection：浏览器与服务器之间连接的类型。
 Cookie：当前页面设置的任何 Cookie。  Host：发出请求的页面所在的域 。  Referer：发出请求的页面的 URI。注意，HTTP 规范将这个头部字段拼写错了，而为保证与规
范一致，也只能将错就错了。（这个英文单词的正确拼法应该是 referrer。）
 User-Agent：浏览器的用户代理字符串。
```
```js
自定义请求头信息:
xhr.setRequestHeader("MyHeader", "MyValue");
```

#### 跨源资源共享
CORS背后的基本思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或者响应是否成功。

#### 带凭据的请求
默认情况下，跨域请求不提供凭证（cookie,http认证以及客户端SSL证明等）。通过将withCredentials属性设置为true，可以指定某个请求应该发送凭据。
```js
如果服务器接受带凭据的请
求，会用下面的 HTTP 头部来响应。
Access-Control-Allow-Credentials: true
```
#### 其他跨域技术
1.使用img标签，动态创建图形：

图像 Ping 最常用于跟踪用户点击页面或动态广告曝光次数。图像 Ping 有两个主要的缺点，一是只
能发送 GET 请求，二是无法访问服务器的响应文本。因此，图像 Ping 只能用于浏览器与服务器间的单
向通信。
``` js
var img = new Image(); 
img.onload = img.onerror = function(){ 
 alert("Done!"); 
}; 
img.src = "http://www.example.com/test?name=Nicholas";
```
2. JSONP:
JSONP 是通过动态script元素,来使用的，使用时可以为
src 属性指定一个跨域 URL。
优点： 能够直接访问响应文本，支持在浏览器与服务器之间双向通信。
缺点：1. JSONP 是从其他域中加载代码执行。如果其他域不安全，很可能会在响应中夹带一些恶意代
码，而此时除了完全放弃 JSONP 调用之外，没有办法追究。
2. 要确定 JSONP 请求是否失败并不容易。虽然 HTML5 给script元素新增了一个 onerror
事件处理程序，但目前还没有得到任何浏览器支持。为此，开发人员不得不使用计时器检测指定时间内是否接收到了响应。
```js
因为 JSONP 是有效的 JavaScript 代码，所以在请求完成后，即在 JSONP 响应加载到页面中
以后，就会立即执行
var script = document.createElement("script"); 
script.src = "http://freegeoip.net/json/?callback=handleResponse"; 
document.body.insertBefore(script, document.body.firstChild);

```

#### Comet
Ajax 是一种从页面向服务器请求数据的技术，而 Comet 则是一种服务器向页面推送数据的技
术。非常适合处理体育比赛的分数和股票报价。
有两种实现Comet的方式：
1. 长轮询。长轮询是浏览器定时向服务器发送请求，看有没有更新的数据。
2. HTTP 流。
```
使用场景--待补充。
```
服务器发送事件:SSE:是围绕只读 Comet 交互推出的 API 或者模式。SSE API
用于创建到服务器的单向连接，服务器通过这个连接可以发送任意数量的数据。服务器响应的 MIME
类型必须是 text/event-stream，
#### Web Sockets
websockers在一个单独的持久连接上提供全双工，双向通信。在 JavaScript 中创建了 Web Socket 之后，会有一个 HTTP 请求发送
到浏览器以发起连接。在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 Web 
Socket 协议。也就是说，使用标准的 HTTP 服务器无法实现 Web Sockets，只有支持这种协议的专门服
务器才能正常工作。
```
由于 Web Sockets 使用了自定义的协议，所以 URL 模式也略有不同。未加密的连接不再是 http://，
而是 ws://；加密的连接也不是 https://，而是 wss://。
```
1. Web Sockets API
  var socket = new WebSocket("ws://www.example.com/server.php");
```
 WebSocket.OPENING (0)：正在建立连接。
 WebSocket.OPEN (1)：已经建立连接。
 WebSocket.CLOSING (2)：正在关闭连接。
 WebSocket.CLOSE (3)：已经关闭连接。

```
2 .发送和接收数据
```
socket.send("Hello world!");
```
3. WebSocket 对象还有其他三个事件，在连接生命周期的不同阶段触发。
 open：在成功建立连接时触发。
 error：在发生错误时触发，连接不能持续。
 close：在连接关闭时触发。
#### SSE与Web Sockets选择

```
面对某个具体的用例，在考虑是使用 SSE 还是使用 Web Sockets 时，可以考虑如下几个因素。
1. 你是否有自由度建立和维护 Web Sockets 服务器？因为 Web Socket 协议不同于 HTTP，所以现有服务器
不能用于 Web Socket 通信。
2. 到底需不需要双向通信。如果用例只需读取服务器数据（如比赛成绩），那
么 SSE 比较容易实现。如果用例必须双向通信（如聊天室），那么 Web Sockets 显然更好。别忘了，在
不能选择 Web Sockets 的情况下，组合 XHR 和 SSE 也是能实现双向通信的。
```
#### 安全
1.CSRF(cross-site request forgery):跨站请求伪造。
为确保XHR访问的url安全，通常的做法就是验证发送请求着是否有权限访问相应的资源。
方法：1.要求以SSL连接来访问可以通过XHR请求的资源。
2. 要求每一次请求都要附带经过相应算法计算得到的验证码。

