### 捕捉错误方式
1. try...catch
2. window.onerror
3. throw 'error message'

#### 常见的错误类型：
类型转换错误：
```
function concat(str1, str2, str3){ 
 var result = str1 + str2; 
 if (str3){ //绝对不要这样!!! 
 result += str3; 
 } 
 return result; 
}
//正确的姿态
function concat(str1, str2, str3){ 
 var result = str1 + str2; 
 if (typeof str3 == "string"){ //恰当的比较
 result += str3; 
 } 
 return result; 
}
```
数据类型错误
```
//不安全的函数，任何非字符串值都会导致错误
function getQueryString(url){ 
 var pos = url.indexOf("?"); 
 if (pos > -1){ 
 return url.substring(pos +1); 
 } 
 return ""; 
}

function getQueryString(url){ 
 if (typeof url == "string"){ //通过检查类型确保安全
 var pos = url.indexOf("?"); 
 if (pos > -1){ 
 return url.substring(pos +1); 
 } 
 } 
 return ""; 
}
```
通信错误：
```
一般都是没有对url里面的参数进行编码所致
编码：encodeURIComponent(name)
解码：decodeURIComponent(val)

```

#### 把错误记录到服务器
```
实现思路：
1. 需要在服务器上创建一个页面（或者一个服务器入口点）。页面作用是冲查询字符串中取得数据，然后再将数据写入错误日志中。
2. 利用img的src属性实现：
function logError(sev, msg){ 
 var img = new Image(); 
 img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" + 
 encodeURIComponent(msg); 
}
优点：没有跨域限制。所有的浏览器都支持image对象。
结合try...catch..
for (var i=0, len=mods.length; i < len; i++){ 
 try { 
 mods[i].init(); 
 } catch (ex){ 
 logError("nonfatal", "Module init failed: " + ex.message); 
 } 
}
根据错误的严重程度，可以区分致命错误和非致命错误。再做对应的处理。


```
#### 把错误写入当前页面：
```
function log(message){ 
 var console = document.getElementById("debuginfo"); 
 if (console === null){ 
 console = document.createElement("div"); 
 console.id = "debuginfo"; 
 console.style.background = "#dedede"; 
 console.style.border = "1px solid silver"; 
 console.style.padding = "5px"; 
 console.style.width = "400px"; 
 console.style.position = "absolute"; 
 console.style.right = "0px"; 
 console.style.top = "0px"; 
 document.body.appendChild(console); 
 } 
 console.innerHTML += "<p>" + message + "</p>"; 
}
```

#### 抛出错误：
```
throw new Error("divide(): Both arguments must be numbers.");`

```
