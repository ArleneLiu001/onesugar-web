### FBC
<img src="https://image.onesugar.cn/kJC17zSey6fkqjtOdsXnbh13nbcjppRc/FBC.png">

#### 场景1
```js
<head>
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
</head>
<body>
    <div></div>
    <div></div>
</body>
//结论：两个div直接的margin是100px而不是200px。
这不是 CSS 的 bug，我们可以理解为一种规范，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。
<div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>

```
#### 场景2
```js
<div style="border: 1px solid #000;" class="parent">
    <div class="children" style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
//说明：由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。这个时候如果想父元素包裹住子元素,要让父元素产生一个BFC.如果使触发容器的 BFC，那么容器将会包裹着浮动元素。
触发方式：
1. 给外层div设置overflow:hidden; 
2. 父元素浮动：.parent:{float:left}
3. 让父元素绝对定位.parent:{positon:absolute}
4. 让父元素变成行内块元素.parent:{display:inline-block}
5. 让父元素的display设置为flow-root(触发BFC,无副作用).parent:{display:flow-root}
```
#### 场景3
```js
<div class="left" style="height: 100px;width: 100px;float: left;background: lightblue">1</div>
<div class="right" style="width: 200px; height: 200px;background: #eee">2</div>
float+div 做左右自适应布局
1. 如果没有BFC,左侧float，浮动元素的margin-right没有生效，们想要产生边距，需要将普通元素的margin-left设置为浮动元素宽度+想要产生的边距宽度。
2. 让右侧兄弟元素的display设置为flow-root。
3. 让右侧兄弟的display设置为flex。
4. 让右侧兄弟元素的overflow设置为hidden。
```