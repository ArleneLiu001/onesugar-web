### vue3中，如何通过ref动态获取元素？
##### 疑问？待解决
在做类目模块时，需要动态获取每个类目框的dom进行滚动。想通过ref的方式，但是需要动态绑定ref值。
例如:
```html
 <ul class="kind-box-list"
        :id="`kindID`+level+ number"
        ref="kindID">
      <li class="kind-box-item"
          :class="{ active: current === item.code }"
          v-for="item in dataList.filter((item,index) => item.name.indexOf(keyword) > -1)"
          :key="item.code"
          @click="emit('change', toRaw(item))">
      </li>
    </ul>
```

#### 最后，由于没有动态获取到ref，最终通过document.querySelector()的方式来动态获取id实现的。
```js
 document.querySelector(`#kindID${levelVal}${val}`).scrollTop = val * 32 - 32 * 5
```