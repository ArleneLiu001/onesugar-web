### 递归
递归的前提条件：必须要有结束条件。不然就会陷入死循环。
#### 定义:简单来讲，就是在函数的定义中使用函数自身的方法。
例如
```JS
function f(n){
  if(n===1){
    return 1
  }
  return f(n-1)
}
```
#### 递归实例
1. 求n的阶乘
  ```JS
  function f(n){
  if(n===1){
    return 1
  }
  return n*f(n-1)
}

  ```

2. 斐波纳契数列 ：从数的第三列开始，每一项等于前两项之和。  
  Description: 斐波纳契数列，又称黄金分割数列，指的是这样一个数列：1、1、2、3、5、8、13、21、……，随着数列项数的增加，前一项与后一项之比越来越逼近黄金分割的数值0.6180339887..…

  ```JS
  functon f(n){
    if(n == 1 || n == 2){
      return 1
    }
    return f(n-1)+f(n-2)
  }
  ```
  3. 小青蛙跳台阶:一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法.
   ```JS
   分析：（转自：https://www.zhihu.com/question/31412436）
   每次跳的时候，小青蛙可以跳一个台阶，也可以跳两个台阶，也就是说，每次跳的时候，小青蛙有两种跳法。  
   第一种跳法：第一次我跳了一个台阶，那么还剩下n-1个台阶还没跳，剩下的n-1个台阶的跳法有f(n-1)种。  
   第二种跳法：第一次跳了两个台阶，那么还剩下n-2个台阶还没，剩下的n-2个台阶的跳法有f(n-2)种。  
   所以，小青蛙的全部跳法就是这两种跳法之和了，即 f(n) = f(n-1) + f(n-2)。至此，等价关系式就求出来了。于是写出代码：
   int f(int n){
    if(n <= 2){
        return n;
    }
    ruturn f(n-1) + f(n-2);
  }

   ```
  4. js树形结构
   ```JS
    当树形机构的层级不确定时，可以使用递归来处理数据。
    例如：
    function getTrees (arr,rootId) {
      let resultArr = []
      // 将第一级计算
      arr.map(item => {
        if (item.pid == rootId) {
          resultArr.push(item)
        }
      })
      //循环第一级 进入递归
      resultArr.map(item => {
        return item = singleTree(arr,item)
      })
      return resultArr
    }
    // 单个树 通过递归计算
  function singleTree (arr, obj) {
    // 判断是否含有下一级 
    let flag = arr.filter(item => {
      return item.pid === obj.id
    })
    // 开关 递归终止条件
    if (flag.length <= 0) {
      return obj
    }
    //循环体
    obj.children = []
    arr.map((item, index) => {
      if (item.pid === obj.id) {
        obj.children.push(item)
      }
      return item
    })
    // 循环自己调用递归
    obj.children.map(item => {
      return item = singleTree(arr,item)
    })
    return obj
  }
   ```