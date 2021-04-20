### 基本概念
##### 数据类型
1. typeof：检测变量的类型。返回值有：'undefined','number','string','boolean','object'(当变量为null时，返回object),'function',

2. Boolean类型：要将一个值转换为对应的boolean值，可以调用转型函数Boolean(). 
3. Number类型：数值范围：Number.MIN_VALUE ~Number.MAX_VALUE。如果超出，则这个数值将自动转为Infinity。检测一个数值是不是有穷的，可以使用isFinite().这个函数在参数位于最小和最大值之间会返回true。

##### with语句
with语句的作用是将代码的作用域设置到一个特定的对象中。主要用来简化多次编写同一个对象的工作。
例如：location对象：
```js
with(location){
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
```
注意：with语句会导致性能下降。因此大型应用程序不建议使用。
##### 引用类型
检测某一引用类型具体是什么类型（Array,Object,RegExp）,可以使用instanceof.  

注意：1.所有引用类型的值都是Object的实例。因此，在检测一个引用类型值和object构造函数时，instanceof操作符始终会返回true，如果使用instanceof检测基本类型的值，则始终会返回false。  2.在js中，if语句中的变量声明会将变量添加到当前的执行环境中。

##### 垃圾回收机制
方式：1.标记清除。
2.引用计数。当采用引用计数时，为避免循环引用。则要手动清除：obj.name = null  
优化内存占用的最佳方式就是为执行中的代码只保存必要的数据，一旦数据不再有用，最好通过将其值设置为null来释放其引用。这个做法叫做‘解除引用’。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。