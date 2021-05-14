### Vue修饰符
#### 事件修饰符：
* .stop 阻止事件继续传播  
* .prevent 阻止标签默认行为  
* .capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理  
* .self 只当在 event.target 是当前元素自身时触发处理函数  
* .once 事件将只会触发一次  
* .passive 告诉浏览器你不想阻止事件的默认行为  
  ** 注意 **：可以使用链式调用：@click.self.prevent
```HTML
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>

```
#### v-model的修饰符：
* .lazy .默认情况下，v-model同步输入框的值和数据。可以通过这个修饰符，转变为在change事件再同步
  ```html
  <input v-model.lazy="msg">
  ```
*  .number:自动将用户的输入值转化为数值类型
*  .trim:自动过滤用户输入的首尾空格

#### 键盘事件的修饰符:
Vue中允许在监听的时候添加关键修饰符：
```html
<input v-on:keyup.13="submit">
```
全部的按键别名：

* .enter
* .tab
* .delete (捕获“删除”和“退格”键)
* .esc
* .space
* .up
* .down
* .left
* .right
