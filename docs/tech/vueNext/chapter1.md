### vue3 使用watch同时监听多个参数
1. 当需要监听单个值时：
```js
 watch(
      () => kindCodes.value,
      (val) => {
        console.log(val)
      },
      {
        immediate: true
      }
    )
```
2. 如果同时需要监听多个值，使用数组的方式
```js
watch(()=>[state.count,state.title],([newcount,newtitle],[oldcount,oldtitle])=>{
  console.log(newcount)
  console.log(newtitle)
  console.log(oldcount)
  console.log(oldtitle)
  //注意：多个数组中的数据与我们单个侦听器有所不同,它将所有的新数据与所有的旧数据都给我们分开了
})
```