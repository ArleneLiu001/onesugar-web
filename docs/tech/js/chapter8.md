### window
window.open(参数1，参数2，参数3，参数4):
参数1：要加载的url
参数2：窗口目标
参数3：一个特性字符串
参数4：一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。
```js
//等同于< a href="http://www.wrox.com" target="topFrame"></a> 
window.open("http://www.wrox.com/", "topFrame");
说明：如果当前有topFrame窗口，则打开topFrame窗口，否则，就会创建一个新窗口并将其命名为‘topFrame’。此外，第二个摧残是也可以是以下特殊的窗口名称：_self,_parent,_top,_blank

第三个参数：
设 置 值 说 明
fullscreen yes或no 表示浏览器窗口是否最大化。仅限IE 
height 数值 表示新窗口的高度。不能小于100 
left 数值 表示新窗口的左坐标。不能是负值
location yes或no 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果
设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器）
menubar yes或no 表示是否在浏览器窗口中显示菜单栏。默认值为no
resizable yes或no 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为no
scrollbars yes或no 表示如果内容在视口中显示不下，是否允许滚动。默认值为no
status yes或no 表示是否在浏览器窗口中显示状态栏。默认值为no
toolbar yes或no 表示是否在浏览器窗口中显示工具栏。默认值为no
top 数值 表示新窗口的上坐标。不能是负值
width 数值 表示新窗口的宽度。不能小于100
```

#### 窗口屏幕：
大多数浏览器都内置有弹出窗口屏幕程序。如果是内置屏蔽，则window.open() 会返回null。如果是浏览器扩展应用屏蔽窗口，则会抛出错。
```js
var blocked = false; 
 
try { 
 var wroxWin = window.open("http://www.wrox.com", "_blank"); 
 if (wroxWin == null){ 
 blocked = true; 
 } 
} catch (ex){ 
 blocked = true; 
} 
if (blocked){ 
 alert("The popup was blocked!"); 
}
```
#### 对话框：
window.find() //打开查找对话框（尝试无效）
window.print() //打开打印对话框。

#### location对象
1. 属性：
hash： url中#后面的字符串。
host：返回服务器名称和端口号
hostname:返回不带端口号的服务器名称
href：返回当前加载页面的完整url。而location对象的toString()方法也返回这个值。
pathname：例如："/wileyCDA/" .返回url中的目录或者文件名
port：端口号
protocol：例如：'http:' .返回页面使用的协议。
search：例如：'?q=java'.返回url的查询字符串。

查找字符串参数
```js
function getQueryStringArgs(){ 
 //取得查询字符串并去掉开头的问号
 var qs = (location.search.length > 0 ? location.search.substring(1) : ""), 
 
 //保存数据的对象
 args = {}, 
 
 //取得每一项
 items = qs.length ? qs.split("&") : [], 
 item = null, 
 name = null,
  value = null, 
 //在 for 循环中使用
 i = 0, 
 len = items.length; 
 //逐个将每一项添加到 args 对象中
 for (i=0; i < len; i++){ 
 item = items[i].split("="); 
 name = decodeURIComponent(item[0]); 
 value = decodeURIComponent(item[1]); 
 if (name.length) { 
 args[name] = value; 
 } 
 } 
 
 return args; 
}
```
2. 位置操作
改变路径的方式：

window.location = "http://www.wrox.com"; 
location.href = "http://www.wrox.com";
location.assign("http://www.wrox.com");

修改url的参数方式：
//假设初始 URL 为 http://www.wrox.com/WileyCDA/ 
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1" 
location.hash = "#section1"; 
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript" 
location.search = "?q=javascript"; 
//将 URL 修改为"http://www.yahoo.com/WileyCDA/" 
location.hostname = "www.yahoo.com"; 
//将 URL 修改为"http://www.yahoo.com/mydir/" 
location.pathname = "mydir"; 
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/" 
location.port = 8080;

改变路径后不能回退：
location.replace("http://www.wrox.com/");

刷新页面：
location.reload(); //重新加载（有可能从缓存中加载）
location.reload(true); //重新加载（从服务器重新加载）


#### navigator对象
属性主要跟浏览器相关：
例如：
userAgent：浏览器的用户代理字符串
plugins：浏览器中安装的插件信息的数组
onLine：浏览器是否连接了网络
language：浏览器的主语言
cookieEnabled：是否启用cookie
appVersion：浏览器的版本
appCodeName：浏览器的名字


#### screen对象
属性主要与浏览器窗口的一些信息。
例如：
height：屏幕的像素高度
left：当前屏幕距左边的像素距离
top：当前屏幕距离上边的像素距离
width：屏幕的像素宽度

#### history对象
历史记录
//后退一页
history.go(-1); 
//前进一页
history.go(1); 
//前进两页
history.go(2);

也可以给 go()方法传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个
位置——可能后退，也可能前进，具体要看哪个位置最近。

//后退一页
history.back(); 
//前进一页
history.forward();

