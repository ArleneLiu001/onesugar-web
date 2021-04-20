### 在HTML中使用JS

 script标签有以下属性：
一. async：标识应该立即下载脚本，但不应妨碍页面中的其他操作。  
二. defer: 标识脚本可以延迟到文档完全被解析和显示知乎执行。  
三. src：标识包含要执行代码的外部的外部文件。  
四. type：表示编写代码使用的脚本语言的内容类型（也称为MINE类型）。默认为text/javascript. 

```
**注意**：1.在代码中的任何地方都不能出现‘<script>’字符串会被浏览器认为是js结束符。
```
如果需要，需要转码，例如:'<\/script>'。2.带src属性的标签里面不应该在包含其他代码。如果包含嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码也会忽略。
```
执行顺序：只要不存在defer和async，浏览器都会按照<script>元素在页面中出现的先后顺序对他们以此进行解析。
```
##### 标签的位置：
一般放在head标签内，但是这样做的缺点明显：必须等到js下载完，页面才呈现。目前一种优化的处理方案是，将js放到body元素页面html内容的后面。
##### 延迟脚本：
使用defer属性，相当于告诉浏览器立即下载脚本，但是延迟执行，不会影响页面的构造。
##### 异步脚本：
async：只适用于外部脚本文件。并告诉浏览器立即下载文件。但是不保证脚本的下载顺序。相当于异步操作。