### 事件
1. 事件冒泡：从里层开始向外层。
2. 事件捕获：从外层到里程。用的比较少。使用场景：
addEventListener：都接受 3 个参数：要处
理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是 true，表示在捕获
阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序。
注意：通过 addEventListener()添加的事件处理程序只能使用 removeEventListener()来移除；

IE兼容：
 IE 实现了与 DOM 中类似的两个方法：attachEvent()和 detachEvent()。
 
 event对象：
 ```js
 属性：event.type :事件类型。
 bubbles Boolean 只读 表明事件是否冒泡
cancelable Boolean 只读 表明是否可以取消事件的默认行为
currentTarget Element 只读 其事件处理程序当前正在处理事件的那个元素
defaultPrevented Boolean 只读 为 true 表示已经调用了 preventDefault()
（DOM3级事件中新增）
detail Integer 只读 与事件相关的细节信息
eventPhase Integer 只读 调用事件处理程序的阶段：1表示捕获阶段，2表
示“处于目标”，3表示冒泡阶段
preventDefault() Function 只读 取消事件的默认行为。如果cancelable是
true，则可以使用这个方法
stopImmediatePropagation() Function 只读 取消事件的进一步捕获或冒泡，同时阻止任何
事件处理程序被调用（DOM3级事件中新增）
stopPropagation() Function 只读 取消事件的进一步捕获或冒泡。如果bubbles
为true，则可以使用这个方法
target Element 只读 事件的目标
trusted Boolean 只读 为true表示事件是浏览器生成的。为false表
示事件是由开发人员通过 JavaScript 创建的
（DOM3级事件中新增）
type String 只读 被触发的事件的类型
view AbstractView 只读 与事件关联的抽象视图。等同于发生事件的
window对象
```
#### 内存和性能：
1.事件委托
2.移除事件操作：
```js
btn.onclick = function(){ 
 //先执行某些操作
 btn.onclick = null; //移除事件处理程序
 document.getElementById("myDiv").innerHTML = "Processing..."; 
 };
```