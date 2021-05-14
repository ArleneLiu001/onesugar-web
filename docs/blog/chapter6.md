### v-slot插槽
简单来讲：就是在一个结构中用来放置一些信息的位置，就是插槽。可以想象成一个柜子的抽屉。
#### 插槽使用场景：
1. 如果两个或多个页面布局类似。只是填充的内容不一样，那么，可以考虑将一样的部分写到一个组件里面，填充的部分使用插槽。
```JS
父组件：
<date-detail>
   agafafaf  //此处可以为模板代码,要传递给子组件的参数或者其他组件都可以。
</date-detail>
子组件：
<div>
  <header></header>
  <slot></slot>
</div>
```
2. 具名插槽：当我们同时需要多个插槽时使用。
```JS
父组件
<date-detail>
  <template v-slot:header>
  </template>
   <template v-slot:footer>
  </template>
</date-detail>
子组件：
<div>
  <slot name="header"></slot>
  <slot name="footer"></slot>
</div>
```
3. 作用域插槽：
使用场景：假如子组件中有某个数据想带给父组件去渲染，
```JS
<slot v-bind:user='user'>{{user.name}}</slot>

父组件：
<template v-slot:default="{user}">
   {{user.name}} 
</template>
或者
<template v-slot:default="slotProps">//slotProps相当于所有插槽对象的命名。
    {{slotProps.user.name}}
</template>

```
4. 动态插槽:动态插槽是2.6新增的，动态指令参数可以用在v-slot上，来定义动态的插槽。
```JS
父组件：
<template v-slot:default="[text]">
   {{user.name}} 
</template>
export default{
    data(){
        return {
            text:'main'
        }
    }
}
子组件
<div>
  <div >
    <slot name="main"></slot>
  </div>
  <slot name="footer"></slot>
</div>
```
5. 具名插槽的缩写:把参数之前的所有内容(v-slot：)替换为字符 # 。例如 v-slot：header可以被重写为 #header：
```JS
父组件：
<template>
  <div>
     <div #main></div>
     <div #footer></div>
  </div>
</template>
//子组件
<div>
  <div >
    <slot name="main"></slot>
  </div>
  <slot name="footer"></slot>
</div>
```
