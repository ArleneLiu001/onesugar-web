### vue动态组件
#### 本文概要
1. 什么是动态组件？
2. 动态组件使用场景


#### 什么是动态组件？
实例：
```js
<component v-bind:is="currentTabComponent"></component>
```
动态组件主要靠v-bind:is 来确定编译后是哪个组件，其中currentTabComponent是可以动态改变，编译的组件也跟着改变。

#### 使用场景？
1. 循环动态组件-动态组件数组：在循环的时候，可以根据不同的需要，设置不同的组件。例如tab切换时。
```js
  <template>
        <component v-for="(view,index) in viewList" :data='view.data' :key="index" v-bind:is="view.name"></component>
    </template>
    <script>
    export default {
    data(){
        return{
            viewList:[
                { name:'home',data:{name:'xx'} },
                { name:'about',data:{text:'xx'}}
                ...
            ]
        }
    }

    }

```
2. 当一些标签内只能填充特定的标签时：诸如 "<ul></ul>、<ol></ol>、<table></table> 和 <select></select>"
```js
<table>
  <blog-post-row></blog-post-row>
</table>
此时，blog-post-row组件会作为无效的内容提升到table外。解决此问题：
<table>
  <tr :is="blog-post-row"></tr>
</table>

```



