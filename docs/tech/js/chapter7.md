### 函数表达式
定义函数方式：1.函数表达式 。2.函数声明  
浏览器在解析一个函数的时候，默认一个name属性，如果name属性为空，则是匿名函数。
函数声明特征：会函数声明提升。但是函数表达式不会。不能在表达式之前调用函数。例如:
```
sayHi() //错误：函数还不存在
var sayHi = function(){}
```
### 递归:
1. 递归经典形式：
 ```
 function factory(num){
     if(num<=1){
         return 1
     }else{
         return num*factory(num-1);
     }
 }
```
此种情况，如果把var a=factory ;factory= null。则调用a(4)就会报错。解决方式：
1.arguments.callee :是一个指向正在执行的函数的指针。因此用它来代替函数名实现对函数的递归调用：
```
function factory(num){
     if(num<=1){
         return 1
     }else{
         return num*arguments.callee(num-1);
     }
 }
```
缺点：严格模式下会报错。
2. 使用命名函数表达式：
```
var a= (factory(num){
     if(num<=1){
         return 1
     }else{
         return num*factory(num-1);
     }
 })
```
优点：兼容严格模式和非严格模式。



