### 基础知识
在js中，表单对应的是HTMLFormElement类型。
HTMLFormElement的属性和方法：
1. acceptCharset：服务器能够处理的字符集；等价于 HTML 中的 accept-charset 特性。
2. action:接受请求的 URL；等价于 HTML 中的 action 特性。
3. elements:表单中所有控件的集合（HTMLCollection）。
4. enctype:请求的编码类型；等价于 HTML 中的 enctype 特性。
5. length:表单中控件的数量。
6. method:要发送的 HTTP 请求类型，通常是"get"或"post"；等价于 HTML 的 method 特性。
7. name：表单的名称；等价于 HTML 的 name 特性。
8. reset()：将所有表单域重置为默认值。
9. submit()：提交表单。
10. target：用于发送请求和接收响应的窗口名称；等价于 HTML 的 target 特性。

##### 取得表单：
1. document.forms:可以获取页面中所有的表单。
2. 提交表单标志：1.type="submit" 。表单元素调用submit方法。
3. 选择文本：select():用于在获取焦点时，选中所有的文本。
##### 剪贴板：
1. beforecopy:在发生复制操作前触发。
2. copy：在发生复制操作时触发。
3. beforecut：在发生剪切操作前触发。
4. cut：在发生剪切操作前触发。
5. beforepaste：在发生粘贴操作前触发。
6. paste：在发生粘贴操作时触发。
7. 
访问剪贴板对象：clipboardData 对象
clipboardData 对象有三个方法：getData()、setData()和 clearData()。

##### 焦点自动切换：
```js
(function(){ 
 function tabForward(event){ 
 event = EventUtil.getEvent(event); 
 var target = EventUtil.getTarget(event); 
 if (target.value.length == target.maxLength){ 
 var form = target.form; 
 for (var i=0, len=form.elements.length; i < len; i++) { 
 if (form.elements[i] == target) { 
 if (form.elements[i+1]){ 
 form.elements[i+1].focus(); 
 } 
 return; 
 } 
 } 
 } 
 } 
 var textbox1 = document.getElementById("txtTel1"); 
 var textbox2 = document.getElementById("txtTel2"); 
 var textbox3 = document.getElementById("txtTel3"); 
 EventUtil.addHandler(textbox1, "keyup", tabForward); 
 EventUtil.addHandler(textbox2, "keyup", tabForward); 
 EventUtil.addHandler(textbox3, "keyup", tabForward); 
})();
```
##### 输入模式：
min:最小值
max：最大值
step：min 到 max 的两个刻度间的差值
pattern:值是一个正则表达式，用于匹配文本框中的
值。
```js
<input type="text" pattern="\d+" name="count">
```
##### 禁用验证：
novalidate：可以告诉表单不进行验证。
```js
<form method="post" action="signup.php" novalidate> 
 <!--这里插入表单元素--> 
</form>

```
##### 选择框文本：

