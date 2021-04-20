### 跨文档消息传递
1. postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递
2. postMessage(data,origin)方法接受两个参数：1.data:要传递的数据。2.origin：字符串参数，指明目标窗口的源，协议+主机+端口号[+URL]，如果要指定和当前窗口同源的话设置为"/"；
3. 传递与监听：
```
//监听值
window.addEventListener('message',function(e){
　　console.log(e.data)
},false)

//传递值
window.top.postMessage('message from iframe1');
```

#### 原生拖放
拖动元素时，将触发以下事件：
```
1. dragstart
2. drag
3. dragend
当某个元素被拖动到一个有效放置目标上时，下列事件会依次触发：
1. dragenter
2. dragover
3. dragleave 或者drop

拖动开始时，可以通过ondragstart事件处理程序来运行js代码。
```
dataTransfer对象：用于从被拖动元素向放置目标传递字符串格式的数据。
dataTransfer 对象有两个主要方法：getData()和 setData()。
```
var dataTransfer = event.dataTransfer; 
//读取 URL 
var url = dataTransfer.getData("url") ||dataTransfer.getData("text/uri-list"); 
//读取文本
var text = dataTransfer.getData("Text");
```
可拖动属性：HTML5 为所有 HTML 元素规定了一个 draggable 属性，表
示元素是否可以拖动。

#### 媒体元素
```
<audio><audio>// 嵌入音频
<video><video>// 嵌入视频

因为并非所有浏览器都支持所有媒体格式，所以可以指定多个不同的媒体来源。为此，不用在标签
中指定 src 属性，而是要像下面这样使用一或多个<source>元素。
<!-- 嵌入视频 --> 
<video id="myVideo"> 
 <source src="conference.webm" type="video/webm; codecs='vp8, vorbis'"> 
 <source src="conference.ogv" type="video/ogg; codecs='theora, vorbis'"> 
 <source src="conference.mpg"> 
 Video player not available. 
</video> 
<!-- 嵌入音频 --> 
<audio id="myAudio"> 
 <source src="song.ogg" type="audio/ogg"> 
 <source src="song.mp3" type="audio/mpeg"> 
 Audio player not available. 
</audio>
```

#### 历史状态管理
```
history.pushState():可以在不加载新页面的情况下改变浏览器的 URL。并将新的信息加入到历史状态栈。可以后退，前进。
参数：
状态对象、新状态的标题和可选的相对 URL。
history.pushState({name:"Nicholas"}, "Nicholas' page", "nicholas.html");

此时，点击后退按钮，会触发 window 对象的 popstate 事件，
popstate 事件的事件对象有一个 state 属性，这个
属性就包含着当初以第一个参数传递给 pushState()的状态对象。
EventUtil.addHandler(window, "popstate", function(event){ 
 var state = event.state; 
 if (state){ //第一个页面加载时 state 为空
 processState(state); 
 } 
});

更新当前状态，可以调用 replaceState()
history.replaceState({name:"Greg"}, "Greg's page");

```