### reduce
#### 语法
```js
arr.reduce(callback,[initialValue])
callback:包含四个参数
1.previousValue(上一次调用回调返回的值，或者是提供的初始值（initialValue）)
2.currentValue(数组中当前被处理的元素)
3.index（当前元素在数组中的索引）
4.array（调用reduce的数组）

```
#### 实例
```js
var arr = [1,2,3,4];
var sum = arr.reduce(function(prev,cur,index,arr){
  return prev+cur
})
console.log(sum);
//第一个prev就是数组第一个值
```
#### 简单用法
```js
//求和
var arr=[1,2,3,4];
var sum = arr.reduce(function(x,y){
  return x+y
})
//求乘积
var mul =arr.reduct((x,y)=>x*y)

```

#### 高级用法
```js
//计算数组中每个元素出现的次数
var arr=["allen","bill","allen","bill","arlene"];
var namearr=arr.reduce((pre,cur)=>{
  if(cur in pre){
    pre[cur]++
  }else{
    pre[cur]=1
  }
  return pre
},{})
console.log(namearr)

//数组去重
var arr=["allen","bill","allen","bill","arlene"];
var namearr=arr.reduce((pre,cur)=>{
  if(!pre.includes(cur)){
    pre.push(cur)
  }
  return pre
},[])
console.log(namearr)

//将二维数组转化为一维
var arr1 = [[0, 1], [2, 3], [4, 5]]
var newArr = arr1.reduce((x,y)=>{
 return x.concat(y)
},[])
console.log(newArr)
```