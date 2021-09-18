### 获取Url地址中参数的几种方法
获取Url的代码如下：window.location.href;
#### 方法一：原生js（假设已经获得了Url地址）
```js
var url = 'https://onesugar.cn/gitchat/geekbooks?tag=JavaScript&name=pwwu&age=24';
        var temp1 = url.split('?');
        var pram = temp1[1];
        var keyValue = pram.split('&');
        var obj = {};
        for (var i = 0; i<keyValue.length; i++){
            var item = keyValue[i].split('=');
            var key = item[0];
            var value = item[1];
            obj[key] = value;
        }
```
#### URLSearchParams()函数（记不住函数名的可以直接在浏览器里面打印）
```js
 var url2 = 'https://onesugar.cn/gitchat/geekbooks?tag=%E5%A4%A7%E6%95%B0%E6%8D%AE&name=gy&age=22';
        var temp2 = url2.split('?')[1];
        var pram2 = new URLSearchParams('?'+temp2);
        console.log(pram2.get('tag')); // 大数据
        console.log(pram2.get('name'));// gy
        console.log(pram2.get('age')); // 22
        console.log(temp2);   //tag=%E5%A4%A7%E6%95%B0%E6%8D%AE&name=gy&age=22
```
#### 方法三：使用正则表达式
```js
//获取url中的参数方法
        function getUrlParam(name) {
            //构造一个含有目标参数的正则表达式对象
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            //匹配目标参数
            var r = window.location.search.substr(1).match(reg);
            //返回参数
            if (r != null) {
                return unescape(r[2]);
            } else {
                return null;
            }
        }
        var ABC = getUrlParam();
        console.log(ABC);

```