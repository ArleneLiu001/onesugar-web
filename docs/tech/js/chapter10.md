### 选择器
1.querySelector():接收一个css选择符。
```
//取得 body 元素
var body = document.querySelector("body"); 
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv"); 
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected"); 
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");
document.body.querySelector("#app .doc-container");
注意：通过 Element 类型调用 querySelector()方法时，只会在该元素后代元素的范围内查找匹配的元素。
```
2. querySelectorAll():返回一个nodeList数组。

3. matchesSelector():接收一个css选择符参数，如果调用元素与该选择符匹配，返回true,否则返回false.
```
if (document.body.matchesSelector("body.page1")){ 
 //true 
}
```

####  classList 属性
为html5新增属性。
```
 add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
 contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。  remove(value)：从列表中删除给定的字符串。
 toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。
这样，前面那么多行代码用下面这一行代码就可以代替了：
div.classList.remove("user");
```
注意：支持 classList 属性的浏览器有 Firefox 3.6+和 Chrome。

#### 焦点管理：
document.activeElement：获取当前获取到焦点的元素。
 document.hasFocus()：用于确定文档是否获得了焦点。
 document.head:获取head标签。
 document.charset：获取编码形式
 
 
 #### 自定义属性
 命名时已data-开头，取值时，使用dataset，直接去data-后面的值。
 ```js
 <div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
 var div = document.getElementById('myDiv');
 var appId = div.dataset.appId
 ```
 
 #### 插入标记：
 element.innerHTML:获取element标签内的元素字符串（带标签）。
 也可以通过innerHTML这种方式,设置html元素。
 
 element.outerHTML:在读模式下，outerHTML 返回调用它的元素及所有子节点的 HTML 标签。在写模式下，outerHTML
会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素。下面是一
个例子   

 insertAdjacentHTML()方法：
 ```js
  "beforebegin"，在当前元素之前插入一个紧邻的同辈元素；
 "afterbegin"，在当前元素之下插入一个新的子元素或在第一个子元素之前再插入新的子元素；
 "beforeend"，在当前元素之下插入一个新的子元素或在最后一个子元素之后再插入新的子元素；
 "afterend"，在当前元素之后插入一个紧邻的同辈元素。
例如：
//作为前一个同辈元素插入
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");
 ```
 问题：使用过多会造成性能问题。
 
 
 #### 控制页面滚动
 element.scrollIntoView()：让当前的元素滚动到页面可视区域范围内。
 语法：
 ```js
 element.scrollIntoView();  // 等同于element.scrollIntoView(true) 
element.scrollIntoView(alignToTop);  // Boolean型参数 
element.scrollIntoView(scrollIntoViewOptions);  // Object型参数
scrollIntoViewOptions (Object型参数):
{
    behavior: "auto"  | "instant" | "smooth",
    block:    "start" | "end",
}

平滑移动:
document.getElementsByClassName('SetupAdminTitle')[0].scrollIntoView({behavior:'smooth'})
 ```
 
 #### children属性：
 element.children:与childNodes类似。
 
 #### contains()
 element.contains():某个节点是不是另一个节点的后代。