### 实现盒子里的元素自动滚动到特定位置
#### 需求：
 在写类目组件时，通过搜索，可以自动匹配当前等级的类目到盒子的中间位置，便于用户查看。
 例如：
 <img src="https://image.onesugar.cn/kadb7amS418V1wdh5QkSL3MFooeDGxs2/1626947368%281%29.png">
 
#### 问题分析：
 1. 找到当前选中的li元素的排列number。
 2. 设置滚动scrollTop的高度。
  

#### 知识补充：
滚动到某位置实现方式：
1.scrollTop 滚动到某位置
```JS
el.scrollTop = 300
```  
2. scrollIntoView() 实现滚动到具体某元素
```js
document.getElementById('id').scrollIntoView()
```
3. scrollTo
```js
this.$nextTick(()=>{
  this.$refs.DOM.scrollTo()0,200
})

```


#### 实现方式：
1. 获取当前ul元素，设置ul的scrollTop值，为单个li标签高度乘以当前选中的li的number，再减去ul高度的一半，就能到达中间位置。
  例如：
  ```JS
   <ul class="kind-box-list"
        :id="`kindID`+level+ number "
        >
      <li class="kind-box-item"
          :class="{ active: current === item.code }"
          v-for="item in dataList.filter((item,index) => item.name.indexOf(keyword) > -1)"
          :key="item.code"
          @click="emit('change', toRaw(item))">
        <span v-html="setHight(keyword, item.name)"></span>
        <div>
       </div>
      </li>
    </ul>


  watch(() => number.value, (val) => {
      const levelVal = level.value
      nextTick(() => {
        document.querySelector(`#kindID${levelVal}${val}`).scrollTop = val * 32 - 32 * 5
      })
    }, {
        immediate: true
  })

  ```
  2. 设置li标签，让其滚动到可视区域。
  例如：
```js
  <div v-for="(item,index) in arr " :key="index" :id="`page${index}`"></div>
  ```
  ```JS
scrollPage(){
    //index与循环的index对应可自由设置动态获取
   const PageId = document.querySelector('#page' + index)
   PageId.scrollIntoView({ behavior:"smooth", block: "center", inline: "start"})
}
```
1. behavior 表示滚动方式。auto 表示使用当前元素的 scroll-behavior 样式。instant 和 smooth
表示 直接滚到底 和 使用平滑滚动。
2. block 表示块级元素排列方向要滚动到的位置。对于默认的 writing-mode: horizontal-tb
来说，就是竖直方向。start 表示将视口的顶部和元素顶部对齐；center
表示将视口的中间和元素的中间对齐；end表示将视口的底部和元素底部对齐；nearest 表示就近对齐。
3. inline 表示行内元素排列方向要滚动到的位置。对于默认的 writing-mode: horizontal-tb


#### 实例：左侧导航和右侧内容在滚动时相互对应。
```JS
参考链接：
https://www.cnblogs.com/ljy-/articles/12857280.html
```
