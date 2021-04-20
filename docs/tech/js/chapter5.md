### 引用类型
1. Array.isArray(数组)：检测某一值是否是数组。
##### 转换方法：toString():会将数组返回用逗号分隔的字符串。
valueOf():返回的还是数组。
toLocaleString() 与toString() 的区别：
```js
1.当数字是四位数及以上时，有区别.
var a = 123456;a.toString();//"123456"
var a = 123456;a.toLocaleString();//"123,456"

2.转换时间格式上有区别
var sd=new Date()
sd.toLocaleString()//"2017/2/15 上午11:21:31"
sd.toString()//"Wed Feb 15 2017 11:21:31 GMT+0800 (CST)"
```
##### 栈方法：
```js
push():数组末尾添加，并返回修改后数组的长度。
pop():从数组末尾移除最后一项。返回移除的项。
```
##### 队列方法：
```js
shift():移除数组中的第一个项并返回该项。
unshift():在数组前端添加任意个项并返回新数组的长度。
```
##### 重排序方法：
```js
reverse():反转数组项的顺序。
sort():按照升序排列数组项。但sort比较的是字符串，如需比较number类型，则最好：
function compare(value1, value2) { 
 if (value1 < value2) { 
 return -1; 
 } else if (value1 > value2) { 
 return 1; 
 } else { 
 return 0; 
 } 
}
var values = [0, 1, 5, 10, 15]; 
values.sort(compare);
alert(values); //0,1,5,10,15
```
##### 操作方法：
```js
concat():基于当前数组中的所有项创建一个新数组。
slice():基于当前数组中的一个或者多个创建一个新数组。可以一个或者两个参数。一个时，表示从当前到结束位置。两个时，从起点到终点，不包含终点。不改变原数组。
splice():
删除：只需指定2个参数，要删除的第一项的位置和要删除的项数。
插入：只需提供3个参数：起始位置，要删除的项数(数字),要插入的项。如：splice(2,0,"red","green")
替换：只需指定3个参数：起始位置，要删除的项数和要插入的任意数量的项。如：splice(2,1,"red")。相当于删除第二项，再在第二项插入“red”

```
##### 位置方法：
```js
indexOf():接收两个参数：要查找的项和表示查找起点位置的索引。返回位置。从数组的开头开始向后查找。
lastIndexOf（）：从数组的末尾开始向前查找。
没找到返回-1.
注意：在比较第一个参数与数组中的每一项时，要使用全等操作符。要求查找的项必须严格相等。例如：
var person = {name:'arlene'};
var people =[{name:'arlene'}];
people.indexOf(person) //返回-1（因为对象指针是指向不同的地址的。只有对象指针指向同一个地址，才会相等，例如：）

var person = {name:'arlene'};
var people =[person];
people.indexOf(person)//0

## 判断两个对象是否相等：一般需要循环遍历值是否相等。
var deepEqual = function(x,y){
    if(x == y){
        return true;//指向同一内存时
    }
    else if((typeof x =='object' && x!=null) && (typeof y =='object' && y!=null)){
        if (Object.keys(x).length != Object.keys(y).length)
      return false;
      for(var i in x){
      if (y.hasOwnProperty(prop))
      {  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
        return true
      }else
      return false
    }
}

```
##### 迭代方法：
```js
1. every()：传入函数。用于判断。如果该函数每一项都返回true，则返回true，否则false
var numbers = [1,2,3,5,6,7,4,3,1];
var a = numbers.every((item,index,array)=>{
    return (item >2)
})
console.log(a) //false
2. filter：传入函数.相当于过滤。返回该函数会返回true的项组成的数组。
var numbers = [1,2,3,5,6,7,4,3,1];
var a = numbers.filter((item,index,array)=>
    item >5
)
console.log(a) //[6,7]
3. map():使用于批量处理数组。返回每次函数调用的结果组成的数组。
var numbers = [2,3,4];
var a = numbers.map((item,index,array)=>
    return item*2
)
console.log(a) //[4,6,8]
4. some():传入函数。如果该函数对任一项返回true，则返回true。
var numbers = [2,3,4];
var a = numbers.some((item,index,array)=>
    return item>2
)
console.log(a) //true
5. forEach():日常遍历处理。执行某些操作。
```

##### 归并方法
```js
reduce():从数组的第一项开始，逐个遍历到最后。
reduceRight():从数组的最后一项开始，向前遍历到第一项。
有四个参数：前一个值，当前值，项的索引和数组对象。
求和操作：
var val = [1,2,3,4,5];
var sum = val.reduce((prev,cur,index,array)=>{
    return prev+cur;
})
console.log(sum) //15
```

Date类型：
1. 取时间毫秒数方式：
    +new Date();  
    Date.now();
    Date.parse(日期);
    getTime():返回日期的毫秒数。
 2. 时间方法：
 ```js
  (new Date()).toLocalDateString()  
  //"2020/4/10"
    (new Date()).toLocalTimeString()  
    //"上午10:37:06"
toDateString() //"Fri Apr 10 2020"  
toTimeString() //"10:38:02 GMT+0800   (中国标准时间)"
```
##### reg类型：
```js
1. 语法：(flags用于标明行为:g:全局模式。i：不区分大小写。m：多行模式。)
var reg = /pattern/flags;
创建方式2：var a = new RegExp('aa')

RegExp实例属性：global：布尔值，表示是否设置了g标志。  
ignoreCase:表示是否设置了i标志。  
lastIndex:整数。表示开始搜索下一个匹配项的字符位置。从0算起。  
multiline:表示是否设置了m标志。 
source：正则表达式的字符串表示。安装字面量形式而非传入构造函数的字符串模式返回。
例如：
var patterns =/bc/g;
console.log(patterns.ignoreCase) //false
console.log(patterns.source) //'bc'

2. 实例方法：
exec（）：reg.exec(a);//检索到返回数组，检索不匹配返回null。数组有两个属性：input（表示英语正则表达式的字符串） 和index(表示匹配项在字符串中的位置)
test()
```