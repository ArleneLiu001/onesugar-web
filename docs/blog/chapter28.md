### 打印页面内容
打印：
#### 思路:

     ```
     1. 通过var a = document.getElementById() 获取元素。  
     2.将元素给body
     window.document.body.innerHTML = a;  
     3.调用window.print()  
     window.close();  
      
     ```
     
使用iframe打印：这样不用新开一个页面。
```js
 aa () {
      //判断iframe是否存在，不存在则创建iframe
      var iframe = document.getElementById("print-iframe");
      if (!iframe) {
        var el = document.getElementById("printId");
        iframe = document.createElement('IFRAME');
        var doc = null;
        iframe.setAttribute("id", "print-iframe");
        iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
        document.body.appendChild(iframe);
        doc = iframe.contentWindow.document;
        //这里可以自定义样式
        doc.write("<link rel='stylesheet' type='text/css' href='./test.css'>");
        doc.write('<div>' + el.innerHTML + '</div>');
        doc.close();
        iframe.contentWindow.focus();
      }
      iframe.contentWindow.print();
      if (navigator.userAgent.indexOf("MSIE") > 0) {
        document.body.removeChild(iframe);
      }

    },
```

#### 可考虑方案：
```
问题：在一个页面中只需要打印一部分内容的时候。实现：
1.打印前将页面先保存。
2.打印时，将打印区域给body
3.调完window.print(),在location.relaod()页面。
4.将原来的页面给body。
	bdhtml=window.document.body.innerHTML; 
	var jubuData = document.getElementById("print").innerHTML;
	 //把获取的 局部div内容赋给body标签, 相当于重置了 body里的内容
	 window.document.body.innerHTML= jubuData; 
	 window.print();
	 location.reload(); //重新刷新当前窗口, 很重要. 不刷新会导致除局部之外的全失效了
	 window.document.body.innerHTML=bdhtml;//重新给页面内容赋值；
```

2.不需要打印的地方加上 @media print这个。这个代表打印时候会取的样式，平时不影响。
```js
@media print{
    .noprint{display:none;}
}
```
3.图片不显示？
```js
先等图片加载完，再调打印
$('img').load(function(){
    //加载完执行某方法
})
```
  