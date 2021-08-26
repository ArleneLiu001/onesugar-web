### 复制到剪切板
#### 前端实现复制
注意：复制的内容只能是input这些输入框的内容。
所以：首先，将需要复制的值赋值给input的val。使用原生方法获取id：document.getElementById("input");
其次：使用select()选择对象。
再次：调用document.execCommand('copy')方法。
```
copy.onclick = function(){
    var adgf = document.getElementById('inp');
   adgf.select() // 选择对象
    var res = document.execCommand('copy');// 复制文字并获取结果
    console.log(res);
   }
```

网上方法：
```js
/**
 * 复制字符串到剪贴板的函数
 * @param {String} value 需要被复制的字符串
 * @returns {Boolean} 操作结果
 */
function copy(value){
    var currentFocus = document.activeElement;// 保存当前活动节点
    
    let input = document.createElement('input');// 创建一个input标签
    document.body.appendChild(input);// 把标签添加给body
    input.style.opacity = 0;//设置input标签设置为透明(不可见)
    input.value = value;// 把需要复制的值放到input上

    // 记录当前滚动位置, 因为添加节点并选中的时候回影响页面滚动
    let scrollY = window.scrollY;

    input.focus();// input节点获取焦点
    input.setSelectionRange(0, input.value.length);// 选中input框中的所有文字

    var res = document.execCommand('copy', true);// 复制文字并获取结果

    currentFocus.focus();// 之前活动节点获得焦点
    document.body.removeChild(input);// 删除添加的input节点

    // 页面滚动到之前位置
    window.scrollTo(0, scrollY);
    
    return res;// 返回操作结果
}

```

#### 复制，剪切，粘贴：
copy 发生复制操作时触发;
cut 发生剪切操作时触发;
paste 发生粘贴操作时触发;
