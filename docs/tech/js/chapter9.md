### node类型
DOM可以将任何HTML或xml描述成一个由多层节点构成的结构。

节点属性：
nodeType：表明节点的类型。元素节点：值为1.属性节点：2.
nodeName：标签的名字。返回的是大写。
nodeValue：null。


节点关系属性：
childNodes：获取当前节点子集数组。取子元素的方式可以用item或者[0]
```
var firstChild = someNode.childNodes[0]; 
var secondChild = someNode.childNodes.item(1);
```
parentNode:获取当前节点的父节点
previousSibling：前一个兄弟节点
nextSibling：下一个兄弟节点
firstChild：childNodes 列表中的第一个
lastChild：childNodes 列表中的最后一个


操作节点：
appendChild()：向节点的末尾添加一个节点.返回新增的节点。
```
var newNode = document.createElement('LI')
var returnedNode = someNode.appendChild(newNode); 

```
insertBefore():可以把节点放到特定的位置。这个方法接受两个参数：要插入的节点和作为参照的节点。  
如果参照节点是
null，则 insertBefore()与 appendChild()执行相同的操作。  
replaceChild()：接受的两个参数是：要插入的节点和要替换的节点  
removeChild():接受一个参数，即要移除
的节点  

其他方法：
cloneNode()：someNode.cloneNode(true):深copy，会复制节点及其整个子节点树。someNode.cloneNode(false):浅copy，只复制节点本身。


#### document类型：

document.documentElement，firstChild，childNodes[0]：指向html标签  
document.body:指向body
document.title：标题名
document.url:取得当前页面的完整url
document.domain:当前页面的域名。可设置。
 document.referrer：来源页面的url，没有的时候为空


#### Element类型
HTMLElement 类型直接继承自Element 并添加了一些属性
id，元素在文档中的唯一标识符。  
title，有关元素的附加说明信息，一般通过工具提示条显示出来。  
lang，元素内容的语言代码，很少使用。  
className，与元素的class 特性对应，即为元素指定的CSS类。没有将这个属性命名为class  
```
var div = document.getElementById("myDiv"); 
alert(div.id); //"myDiv"" 
alert(div.className); //"bd" 
alert(div.title); //"Body text" 
alert(div.lang); //"en" 
alert(div.dir); //"ltr"
```

属性：
```
获取属性
var div = document.getElementById("myDiv"); 
alert(div.getAttribute("id")); //"myDiv"
//设置属性
div.setAttribute("id",'aa')
//删除属性
div.removeAttribute("id")
```
 attributes 属性：获取属性的合集。
 ```
 getNamedItem(name)：返回 nodeName 属性等于 name 的节点；
 removeNamedItem(name)：从列表中移除 nodeName 属性等于 name 的节点；
 setNamedItem(node)：向列表中添加节点，以节点的 nodeName 属性为索引；
 item(pos)：返回位于数字 pos 位置处的节点。
attributes 属性中包含一系列节点，每个节点的 nodeN
 ```
 
 创建元素：
 document.createElement()
 
 
 #### Text类型
 创建文本：
  document.createTextNode('aa')
  
  #### 创建动态脚本
  ```
  function loadScriptString(code){ 
 var script = document.createElement("script"); 
 script.type = "text/javascript"; 
 try { 
 script.appendChild(document.createTextNode(code)); 
 } catch (ex){ 
 script.text = code; 
 } 
 document.body.appendChild(script); 
}
  ```
  
  #### 创建动态样式
  ```
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href='style.css'
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
  
  
  ```

  
#### 检测代码：
以下是完整的用户代理字符串检测脚本，包括检测呈现引擎、平台、Windows 操作系统、移动设备
和游戏系统。
```
var client = function(){ 
 //呈现引擎
 var engine = { 
 ie: 0, 
 gecko: 0, 
 webkit: 0, 
 khtml: 0, 
 opera: 0, 
 
 //完整的版本号
 ver: null 
 }; 
 //浏览器
 var browser = { 
 
 //主要浏览器
 ie: 0, 
 firefox: 0, 
 safari: 0, 
 konq: 0, 
 opera: 0,
 chrome: 0, 
 
 //具体的版本号
 ver: null 
 }; 
 //平台、设备和操作系统
 var system = { 
 win: false, 
 mac: false, 
 x11: false, 
 
 //移动设备
 iphone: false, 
 ipod: false, 
 ipad: false, 
 ios: false, 
 android: false, 
 nokiaN: false, 
 winMobile: false, 
 
 //游戏系统
 wii: false, 
 ps: false 
 };
 //检测呈现引擎和浏览器
 var ua = navigator.userAgent; 
 if (window.opera){ 
 engine.ver = browser.ver = window.opera.version(); 
 engine.opera = browser.opera = parseFloat(engine.ver); 
 } else if (/AppleWebKit\/(\S+)/.test(ua)){ 
 engine.ver = RegExp["$1"]; 
 engine.webkit = parseFloat(engine.ver); 
 
 //确定是 Chrome 还是 Safari 
 if (/Chrome\/(\S+)/.test(ua)){ 
 browser.ver = RegExp["$1"]; 
 browser.chrome = parseFloat(browser.ver); 
 } else if (/Version\/(\S+)/.test(ua)){ 
 browser.ver = RegExp["$1"]; 
 browser.safari = parseFloat(browser.ver); 
 } else { 
 //近似地确定版本号
 var safariVersion = 1; 
 if (engine.webkit < 100){ 
 safariVersion = 1; 
 } else if (engine.webkit < 312){ 
 safariVersion = 1.2; 
 } else if (engine.webkit < 412){ 
 safariVersion = 1.3; 
 } else { 
 safariVersion = 2; 
 } 
 
 browser.safari = browser.ver = safariVersion; 
 }
 } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){ 
 engine.ver = browser.ver = RegExp["$1"]; 
 engine.khtml = browser.konq = parseFloat(engine.ver); 
 } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){ 
 engine.ver = RegExp["$1"]; 
 engine.gecko = parseFloat(engine.ver); 
 
 //确定是不是 Firefox 
 if (/Firefox\/(\S+)/.test(ua)){ 
 browser.ver = RegExp["$1"]; 
 browser.firefox = parseFloat(browser.ver); 
 } 
 } else if (/MSIE ([^;]+)/.test(ua)){ 
 engine.ver = browser.ver = RegExp["$1"]; 
 engine.ie = browser.ie = parseFloat(engine.ver); 
 } 
 //检测浏览器
 browser.ie = engine.ie; 
 browser.opera = engine.opera; 
 //检测平台
 var p = navigator.platform; 
 system.win = p.indexOf("Win") == 0; 
 system.mac = p.indexOf("Mac") == 0; 
 system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
 //检测 Windows 操作系统
 if (system.win){ 
 if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){ 
 if (RegExp["$1"] == "NT"){ 
 switch(RegExp["$2"]){ 
 case "5.0": 
 system.win = "2000"; 
 break; 
 case "5.1": 
 system.win = "XP"; 
 break; 
 case "6.0": 
 system.win = "Vista"; 
 break; 
 case "6.1": 
 system.win = "7"; 
 break; 
 default: 
 system.win = "NT"; 
 break; 
 } 
 } else if (RegExp["$1"] == "9x"){ 
 system.win = "ME"; 
 } else { 
 system.win = RegExp["$1"]; 
 } 
 } 
 } 
 //移动设备
 system.iphone = ua.indexOf("iPhone") > -1; 
 system.ipod = ua.indexOf("iPod") > -1; 
 system.ipad = ua.indexOf("iPad") > -1; 
 system.nokiaN = ua.indexOf("NokiaN") > -1; 
 //windows mobile 
 if (system.win == "CE"){ 
 system.winMobile = system.win; 
 } else if (system.win == "Ph"){ 
 if(/Windows Phone OS (\d+.\d+)/.test(ua)){; 
 system.win = "Phone"; 
 system.winMobile = parseFloat(RegExp["$1"]); 
 } 
 } 
 
 //检测 iOS 版本
 if (system.mac && ua.indexOf("Mobile") > -1){ 
 if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){ 
 system.ios = parseFloat(RegExp.$1.replace("_", ".")); 
 } else { 
 system.ios = 2; //不能真正检测出来，所以只能猜测
 } 
 }
 //检测 Android 版本
 if (/Android (\d+\.\d+)/.test(ua)){ 
 system.android = parseFloat(RegExp.$1); 
 } 
 //游戏系统
 system.wii = ua.indexOf("Wii") > -1; 
 system.ps = /playstation/i.test(ua); 
 //返回这些对象
 return { 
 engine: engine, 
 browser: browser, 
 system: system 
 }; 
}();
```
client.js