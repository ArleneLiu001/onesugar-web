### 页面平滑滚动以及锚点对应导航
#### 页面平滑滚动实现方式
1. window.scrollTo()
```
window.scrollTo(x-coord,y-coord)

x-coord 是文档中的横轴坐标。
y-coord 是文档中的纵轴坐标。
```
window.scrollTo(options)
```
　window.scrollTo(options)

top 等同于  y-coord
left 等同于  x-coord
behavior  类型String,表示滚动行为,支持参数 smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant
例子：

window.scrollTo({ 
    top: 1000, 
    behavior: "smooth" 
});
如果某个元素滚动到某个位置，也可以用以上方法：

　　document.querySelector('.className').scrollTo()
```
2 .使用CSS
```
html {
    scroll-behavior: smooth;
}
```
3.使用requestAnimationFrame
```js
requestAnimationFrame的作用就是告诉浏览器在下次重绘之前执行传入的回调函数，这个行为是浏览器自动帮你做的
const scrollToTop = () => {
    let scrollTop = document.documentElement.scrollTo || document.body.scrollTop
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollTop)
        window.scrollTop(0, scrollTop - scrollTo / 8)
    }
}
```

#### 获取特定元素的位置：
1. element.getBoundingClientRect()

#### 获取滚动距离：
```js
document.documentElement.scrollTop ||
document.body.scrollTop
```
#### 实现某一个元素平滑滚动代码
```js
function animateScroll(element,speed) {
    let rect=element.getBoundingClientRect();
    //获取元素相对窗口的top值，此处应加上窗口本身的偏移
    let top=window.pageYOffset+rect.top;
    let currentTop=0;
    let requestId;
    //采用requestAnimationFrame，平滑动画
    function step(timestamp) {
      currentTop+=speed;
      if(currentTop<=top){
        window.scrollTo(0,currentTop);
        requestId=window.requestAnimationFrame(step);
      }else{
        window.cancelAnimationFrame(requestId);
      }
    }
    window.requestAnimationFrame(step);
  }
```

#### 锚点对应导航：
功能：左边导航菜单，右边内容区域。点击左边的对应菜单，右边内容对应滚动到相应的锚点。同理，滚动右边到对应的内容区域，左边导航对应。  

思路：
1. 将导航和内容写在同一页面内。
2. 导航对应右边内容，通过a标签的href调到对应的内容id。获取到对应id的位置，页面平滑滚动。
```js
go (id, j) {
      this.list.map(item => {
        item.children.forEach((val, i) => {
          if (i === j) {
            this.activeMenu = val.key
          }
        })
      });

      const ele = document.querySelector(id)
      this.animateScroll(ele, 100)
      // ele.scrollIntoView({ behavior: 'smooth' })
    },
```
3. 右边内容滚动对应到左边导航，只需监听滚动事件，将对应的active元素激活即可。
```js
  window.addEventListener('scroll', () => {
      this.arr.forEach((item, index) => {
        this.list[0].children.forEach(() => {
          if (document.documentElement.scrollTop - 20 > item) {
            this.activeMenu = this.list[0].children[index].key
          }
        })

      })
    }, true)
```