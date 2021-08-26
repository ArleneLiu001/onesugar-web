### vue3基础记录二
Vue3:
安装：npm i @vue/cli -g  vue-cli 4.5以上版本
vue create xxx

### API
defineComponent 函数：定义组件
#### 如何定义props的类型：
```JS
interface Config {
    name:string
}

import {defineComponent,PropType} from 'vue'
export default defineComponent({
    props:{
    age:{
        type:Number as PropType<Number>
    },
    config:{
        type:Object as PropType<Config>,
        required:true
    }
        
    }
    
})
```
#### 如何提前props定义：
```JS
//父组件
<hello-world :age="12"></hello-world>
//子组件
const propType  = {
    name:{
        type:Number,
        required:true
    }
} as const
<!--注意-->
之所以需要as const .因为props在源码的类型是readonly.如果不加，as const,required就会不生效。

import {defineComponent,PropType} from 'vue'
export default defineComponent({
    props:{
    age:propType,
    }
    
})

```

#### vue中h函数的讲解
```js
import {h} from 'vue'
h:相当于vue2中的createElement，用来创建节点。
const App = defineComponent({
    render(){
        return h('div',{id:'app'},[
        h('img',{alt:'vue',src:'./logo.png'}),
        h(HelloWorld,{msg:'xxxx',age:12})
        ])
    }
})

//源码h函数
export function h(type:any,propsOrChildren?:any,children?:any):VNode{
  if(arguments.length === 2){
     if(isObject(propsOrChildren) && !isArray(propsOrChildren)){
        if(isVNode(propsOrChildren)){
            return createVNode(type,null,[propsOrChildren])
        }
         return createVNode(type,[propsOrChildren])
     }else{
         return createVNode(type,null,propsOrChildren)
     }
  }else{
     if(isVNode(children)){
         children = [children]
     } 
     return createVNode(type,propsOrChildren,children)
  }  
}
```
#### setup函数的运用
setup() 类似于data方法，只会在初始化的时候执行一次。

```js
import {defineComponent,ref,reactive} from 'vue'

//以下可以实现响应式：reactive
setup(props,{slots,attrs,emit}){
    const state = reactive({
        name:'arlene'
    })
    setInterval(()=>{
        state.name += '1'
    })
    return state
}

//ref：设置值通过.value实现。
setup(props,{slots,attrs,emit}){
    const nameReg = ref('arlene')
    setInterval(()=>{
        nameReg.value += '1'
    })
    return {
        name:nameReg
    }
}

//computed
setup(props,{slots,attrs,emit}){
    const nameReg = ref('arlene')
    setInterval(()=>{
        nameReg.value += '1'
    })
    const name2 = computed(()=>{
        return  nameReg.value + '1'
    })
    return {
        name:nameReg
        name2:name2,
    }
}
<!---->
//watchEffect:监听使用到的值。
//computed
setup(props,{slots,attrs,emit}){
    const nameReg = ref('arlene')
    setInterval(()=>{
        nameReg.value += '1'
    })
    const name2 = computed(()=>{
        return  nameReg.value + '1'
    })
    watchEffect(()=>{
        console.log(nameReg.value)
    })
    return {
        name:nameReg
        name2:name2,
    }
}

```



#### 使用jsx
1. 安装：npm i @vue/babel-plugin-jsx -D
2. 在babel.config.js中
```
module.exports = {
    pulgins:['@vue/babel-plugin-jsx']
}
```
