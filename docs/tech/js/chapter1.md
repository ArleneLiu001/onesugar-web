### JS简介之BOM 和DOM
#### DOM
目前，支持DOM已经成为浏览器开发商的首要目标。  
D（文档）可以理解为整个Web加载的网页文档,，O（对象）可以调用属性和方法，就是document对象，M（模型）可以理解为网页文档的树形结构，DOM树由节点构成
```
节点种类：元素节点，文本节点，属性节点。
```
##### DOM操作：
```js
creatElement(element)	创建一个新的元素节点  
creatTextNode()	创建一个包含给定文本的新文本节点  
appendChild()	指定节点的最后一个节点列表后添加一个新的子节  
insertBefore()	将一个给定节点插入到一个给定元素节点的给定子节点的前面  
removeChild()	从一个给定元素中删除子节点  
replaceChild()	把一个给定父元素里的一个子节点替换为另外一个节点  

//访问节点
`var oHtml = document.documentElement;`  //返回存在于 XML 以及 HTML 文档中的文档根节点，oHtml包含了一个表示<html />的HTMLElement对象
`document.body` 
`document.getElementById("ID")` 
`document.getElementByName("name")`
`var x=document.getElementsByTagName("p");` 


// Node节点的特性和方法
firstChild  //Node，指向在childNodes列表中的第一个节点  
lastChild  //Node，指向在childNodes列表中的最后一个节点  
parentNode  //Node，指向父节
ownerDocument //Document，指向这个节点所属的文档 
firstChild  //Node，指向在childNodes列表中的第一个节点   
lastChild  //Node，指向在childNodes列表中的最后一个节点   
parentNode  //Node，指向父节点   
childNodes //NodeList，所有子节点的列表  
previousSibling  //Node:指向前一个兄弟节点：如果这个节点就是第一个节点，那么该值为 null  
`nextSibling`  //Node，指向后一个兄弟节点：如果这个节点就是最后一个节点，那么该值为null 
`hasChildNodes()`  //Boolean，当childNodes包含一个或多个节点时，返回真值 
```
##### 事件类型
```js
**事件类型** 
  鼠标事件：click、dbclick、mousedown、mouseup、mouseover、mouseout、mousemove  
  键盘事件：keydown、keypress、keyup  
  HTML事件：load、unload、abort、error、select、change、submit、reset、
resize、scroll、focus、blur

```
###### DOM 0级事件处理程序
1. DOM 0级事件处理程序：把一个函数赋值给一个事件的处理程序属性
```js
btn2.onclick=function(){
} //添加匿名函数

btn2.onclick=null//删除onclick属性
```
2. DOM 2级事件处理程序
DOM 2级事件定义了两个方法，用于指定和删除事件处理程序的操作。addEventListener()和removeEventListener()




##### DOM事件：
DOM同时两种事件模型：冒泡型事件和捕获型事件 

#### BOM
从根本上讲，BOM只处理浏览器窗口框架，但人们习惯也把所有针对浏览器的js扩展算BOM的一部分。如：  
 1. 弹出新浏览器窗口的功能。 
 2. 移动，缩放，关闭浏览器窗口的功能。
 3. 提供浏览器详细信息的navigator对象。
 4. 提供浏览器所加载页面的详细信息的location对象。
 5. 提供用户显示器分辨率详细信息的screen对象。
 6. 对cookies的支持。
 7. 像XMLHttpRequest的支持。

##### window对象方法
```js
window.close();  //关闭窗口  

window.alert("message");  //弹出一个具有OK按钮的系统消息框，显示指定的文本 

window.confirm("Are you sure?");  //弹出一个具有OK和Cancel按钮的询问对话框，返回一个布尔值  

window.prompt("What's your name?", "Default");  //提示用户输入信息，接受两个参数，即要显示给用户的文本和文本框中的默认值，将文本框中的值作为函数值返回  

window.status  //可以使状态栏的文本暂时改变  

window.defaultStatus  //默认的状态栏信息，可在用户离开当前页面前一直改变文本  

window.setTimeout("alert('xxx')", 1000);  //设置在指定的毫秒数后执行指定的代码，接受2个参数，要执行的代码和等待的毫秒数  

window.clearTimeout("ID");  //取消还未执行的暂停，将暂停ID传递给它  

window.setInterval(function, 1000);  //无限次地每隔指定的时间段重复一次指定的代码，参数同setTimeout()一样  

window.clearInterval("ID");  //取消时间间隔，将间隔ID传递给它  

window.history.go(-1);  //访问浏览器窗口的历史，负数为后退，正数为前进 

window.history.back();  //同上  

window.history.forward();  //同上  

window.history.length  //可以查看历史中的页面数   

```

##### document对象
```js
document对象：实际上是window对象的属性，document == window.document为true，是唯一一个既属于BOM又属于DOM的对象  

document.lastModified  //获取最后一次修改页面的日期的字符串表示  

document.referrer  //用于跟踪用户从哪里链接过来的  

document.title  //获取当前页面的标题，可读写  

document.URL  //获取当前页面的URL，可读写  

document.anchors[0]或document.anchors["anchName"] //访问页面中所有的锚  

document.forms[0]或document.forms["formName"]  //访问页面中所有的表单  

document.images[0]或document.images["imgName"]  // 访问页面中所有的图像  

document.links [0]或document.links["linkName"]  //访问页面中所有的链接 

document.applets [0]或document.applets["appletName"]  //访问页面中所有的Applet  

document.embeds [0]或document.embeds["embedName"]  //访问页面中所有的嵌入式对象  

document.write(); 或document.writeln();  //将字符串插入到调用它们的位置  

```
##### location对象
```js
location对象：表示载入窗口的URL，也可用window.location引用它  

location.href  //当前载入页面的完整URL，如http://www.somewhere.com/pictures/index.htm  

location.portocol  //URL中使用的协议，即双斜杠之前的部分，如http 

location.host  //服务器的名字，如www.wrox.com  

location.hostname  //通常等于host，有时会省略前面的www  

location.port  //URL声明的请求的端口，默认情况下，大多数URL没有端口信息，如8080 

location.pathname  //URL中主机名后的部分，如/pictures/index.htm  

location.search  //执行GET请求的URL中的问号后的部分，又称查询字符串，如?param=xxxx  

location.hash  //如果URL包含#，返回该符号之后的内容，如#anchor1  

location.assign("http:www.baidu.com");  //同location.href，新地址都会被加到浏览器的历史栈中  

location.replace("http:www.baidu.com");  //同assign()，但新地址不会被加到浏览器的历史栈中，不能通过back和forward访问  

location.reload(true | false);  //重新载入当前页面，为false时从浏览器缓存中重载，为true时从服务器端重载，默认为false  

```

##### navigator对象
```js
 `navigator`对象：包含大量有关Web浏览器的信息，在检测浏览器及操作系统上非常有用，也可用window.navigator引用它  

`navigator.appCodeName`  //浏览器代码名的字符串表示  

navigator.appName  //官方浏览器名的字符串表示  

navigator.appVersion  //浏览器版本信息的字符串表示  

navigator.cookieEnabled  //如果启用cookie返回true，否则返回false  

navigator.javaEnabled  //如果启用java返回true，否则返回false  

navigator.platform  //浏览器所在计算机平台的字符串表示  

navigator.plugins  //安装在浏览器中的插件数组  

navigator.taintEnabled  //如果启用了数据污点返回true，否则返回false  

navigator.userAgent  //用户代理头的字符串表示   

```
###### screen对象
```js
  screen对象：用于获取某些关于用户屏幕的信息，也可用window.screen引用它  

  screen.width/height  //屏幕的宽度与高度，以像素计  

  screen.availWidth/availHeight  //窗口可以使用的屏幕的宽度和高度，以像素计 

  screen.colorDepth  //用户表示颜色的位数，大多数系统采用32位  

  window.moveTo(0, 0);  

  window.resizeTo(screen.availWidth, screen.availHeight);  //填充用户的屏幕   

```




#### 区别
区别：DOM描述了处理网页内容的方法和接口，BOM描述了与浏览器进行交互的方法和接口。