### vue3基础知识

### 创建方式
#### vue-cli
Vue3: 安装：npm i @vue/cli -g vue-cli 4.5以上版本 vue create xxx
#### vite
vite:是一个由原生ESM驱动的web开发构建工具，在开发环境下基于浏览器原生ES imports开发。
* 它做到了本地快速开发启动，在生产环境下基于Rollup打包。
* 快速冷启动，不需要等待打包操作
* 即时的热模块更新
* 真正的按需编译。
```
npm init vite-app <project-name>
cd <project-name>
npm i
npm run dev
```

#### ref
ref是一个函数，作用：定义一个响应式的数据，返回的是一个ref对象，对象中有一个value属性，如果需要对数据进行js操作，需要使用该ref对象调用value属性的方式进行数据的操作。html模板显示的时候，是不需要使用.value的。
使用场景：一般用来定义一个基本类型的数据。  
**ref的另一个作用**：可以获取页面元素。
```JS

<template>
  <div>aaa</div>
  <input type="text"
         ref="helloworld">
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup (props, { attrs, slots, emit }) {
    let helloworld = ref(null)
    console.log(props)
    onMounted(() => {
      helloworld.value && helloworld.value.focus()
    })
    console.log(attrs)
    console.log(slots)
    console.log(emit)
    return {
      helloworld
    }
  }
})
</script>


```

**注意**：ref也可以传入对象，传入的对象会转为proxy来实现响应式。


#### reactive
作用：定义多个数据的响应式。
返回的是一个proxy的代理对象，被代理者就是reactive的传入的对象。
在setup中，无法直接更新目标对象（不是reactive和ref中的）。

#### 比较vue2和vue3
vue2的响应式通过obj.defineProperty(data,'count',get(){},set(){})
问题：
1. 对象直接

#### setup
setup是在beforecreated创建的，说明setup在执行的时候，实例对象还没有创建，因此this是undefined。

其实所有的compositon API相关回调函数中也不可以。

##### setup的返回值
* 返回对象中的属性会与data函数返回对象的属性合并为组件对象的属性
* 返回对象中的方法和methods对象中的方法会合并为组件的方法。
* 在vue3中一般不要混合使用data和setup返回的属性。以及methods里面的方法。
* setup不能是一个async函数。如果是，则返回的不再是对象，而是promise函数。
##### setup参数
setup(props,context)/setup(props,{attrs,slots,emit})
* props:包含props配置声明且传入了的所有属性的对象。
* attrs：包含没有在props配置中声明的属性的对象，相当于this.$attrs
* slots:包含所有传入的插槽内容的对象，相当于this.$slots
* emit:用来分发自定义事件的函数，相当于this.$emit
* 
#### 计算属性和监视
计算属性中如果只传入一个回调函数，表示的是get
```js
const fullName2 = computed({
    get(){},
    set(val){}
})
```
watch:监视指定的数据，可以监视多个数据。
```js
const fullName3 = ref('')
watch(user,({firstName,lastName})=>{
 fullName3.value = firstName + "-"+lastName
},{immediate:true})

如果监视非响应式的数据，需要使用函数
watch([()=>user.firstName,()=>user.lastName,fullName],()=>{
    console.log(111)
})
```
watchEffect:不需要配置immediate，就会默认执行。

#### 自定义hook函数
hook：类似于vue2的minxin技术
#### toRefs
把一个响应式对象转换成普通对象，该普通对象的每个property都是一个ref。

#### shallowReactive ,shallowRef 浅响应式
readonly 深层次的不能修改
shallowReadonly：浅层次的属性不能修改，深层次的可以修改。

#### toRow 和markRaw
toRow：把代理对象变成普通对象，数据变化，界面不变化。  
markRow：markRow标记的对象数据，从此以后都不能再成为代理对象。  

#### toRef
为源响应式对象上的某个属性创建一个ref对象，二者内部操作的是同一个数据值，更新时二者是同步的。  
区别：ref拷贝了一份新的数据值单独操作，更新时相互不影响。  
应用：当要将某个prop的ref传递给复合函数（定义的参数必须要是ref对象）时，toRef很有用。

#### customRef：
 用于自定义返回一个ref对象,可以显式地控制依赖追踪和触发响应,接受工厂函数。  
 (2)两个参数分别是用于追踪的 track 与用于触发响应的 trigger，并返回一个一个带有 get 和 set 属性的对象。
 ```js
 import {customRef} from 'vue';
    function useDebouncedRef(value) {
	      return customRef((track, trigger) => {
	        return {
	          get() {
	            track()	//追踪当前数据
	            return value
	          },
	          set(newValue) {
	            value=newValue
	            trigger() //触发响应,即更新界面
	          },
	        }
	      })
	 }
	
	通过customRef返回的ref对象,和正常ref对象一样,通过x.value修改或读取值
d
 ```
 #### provide 和inject
 实现跨层级组件的数据传递。
 provide：提供数据。
 ```
 provide('color','red')
 ```
 inject:使用
 ```
 const color = inject('color')
 ```
 
 #### 响应式数据的判断
 * isRef：检查一个值是否为一个ref对象。
 ```
 console.log(isRef(ref(0)))
 ```
 * jsReactive：检查一个对象是否是由reactive创建的响应式代理
 * isReadonly：检查一个对象是否是由readonly创建的只读代理
 * isRroxy：检查一个对象是否是由reactive或者readonly方法创建的代理
 * 
 #### 手写reactive实现方法：
```JS
const reactiveHandler = {
  get (target, prop) {
    const result = Reflect.get(target, prop)
    console.log('get')
    return result
  },
  set (target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('set')
    return result
  },
  deleteProperty (target, prop) {
    const result = Reflect.defineProperty(target, prop)
    return result
  }
}
function reactive (target) {
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }
  }
}
```
 #### 定义一个ref函数
 ```js
 function ref(target){
     target = reactive(target)
     return {
         _value:target,
         get(){
             return this._value
         },
         set(val){
         _this.value = val
         }
     }
 }
 ```
 
 
 #### Teleport(瞬移)
 Teleprot提供了一种干净的方法，让组件的html在父组件界面外的特定标签下插入显示某些元素。
 
 #### suspense标签
 对于异步的请求数据，使用suspense包裹，可以在数据回来之前加上过渡界面，例如loading
 ```js
 <suspense>
    <template #default>
      <Child/>
    </template>
    <template v-slot:fallback>
      <div>loading</div>
    </template>
  </suspense>
  
  //child中是异步请求得到的数据。
  例如：
   setup () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          meg: 'heello'
        })
      }, 2000)
    })
  }
 ```