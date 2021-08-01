### vue响应式原理
 当你把一个普通的js对象传给vue实例的data选项时，vue会遍历对象的所有属性，并通过Object.defineProperty()方法来劫持各属性的getter，setter，并在数据发生变动时通知订阅者，触发响应的监听回调。

 #### 为什么组件中的data必须是函数？
 如果像Vue实例那样，传入一个对象，由于JS中对象类型的变量实际上保存的是对象的引用，所以当存在多个这样的组件时，会共享数据，导致一个组件中数据的改变会引起其他组件数据的改变。
 使用一个返回对象的函数，每次使用组件都会创建一个新的对象，这样就不会出现共享数据的问题来了。

#### object.defineProperty的缺点
 1. 深度监听，需要递归到底，一次性计算量大。
 2. 无法监听新增属性或者删除属性。（通过Vue.set Vue.delete实现）
 3. 无法监听到数组，需要特殊处理


#### 具体实现实例
```js

function defineReactive (target, key, value) {
  // 深度监听
  observer(value)
  // 监听
  Object.defineProperty(target, key, {
    get: function () {
      return value
    },
    set: function (newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue)
        value = newValue
        updateView()
      }
    }
  })

}
//如果改变的是数组，需要在不改变数组原型方法的情况下，在原型上重新定义方法。
const oldArrayProperty = Array.prototype;
const arrProto = Object.create(oldArrayProperty);
['push','pop','shift','unshift','splice'].forEach(methodName=>{
  arrProto[methodName]=function(){
    updateView()
    oldArrayProperty[methodName].call(this,...arguments)
  }
})


function updateView () {
  console.log('触发更新')
}
function observer (target) {
  if (typeof target !== 'object' || target === null) {
    return
  }
  if(Array.isArray(target)){
    target._proto_ = arrProto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: '111',
  age: 22,
  baesinfo: {
    sub: '333'
  }
}
observer(data)
data.name = 'lili'
data.age = 11
data.baesinfo.sub = '444' //如果要修改成功，就要进行值的深度监听
delete data.age //无法监听到删除元素
```
 
 <img src="https://image.onesugar.cn/rNeyAqf6xUWG7fbgHnJnEbPaPRlTQPKW/grz-3.90e09873.png" >