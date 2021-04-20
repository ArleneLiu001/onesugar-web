### 面向对象的程序设计
#### ECMAScript 属性：数据属性和访问器属性。
###### 数据属性：
1. [Configurable]：是否可删除。
2. [Enumerable]：表示能否通过for-in循环返回属性。默认true  
3. [Writable]：表示能否修改属性的值。默认true
4. [Value]：包含这个属性的数据值。默认值为undefined
修改这些属性需要使用：Object.defineProperty().
例如：
```js
var person = {};
Object.defineProperty(person,'name',{
    writable:false,
    value:'Nicholas'
})
console.log(person.name);
person.name = 'aa'
console.log(person.name) //Nicholas(如果严格模式会报错)
```
###### 访问器属性
1. [Configurable]：是否可删除。
2. [Enumerable]：表示能否通过for-in循环返回属性。默认true  
3. [Get]：读取属性时调用的函数。默认undefined
4. [Set]：写入属性时调用的方法。默认值为undefine
实例：
```js
var book = {
    _year:2005,
    edition:1
}
Object.defineProperty(book,'year',{
    get:function(){
        return this._year;
    },
    set:function(newVal){
        if(newVal>2004){
            this._year = newVal;
            this.edition = newVal-2004
        }
    }
})
book.year = 2005;
console.log(book.edition)//1
```
2.定义多个属性：
同时为一个对象定义多个属性。Object.defineProperties()
3.读取属性的特性：Object.getOwnPropertyDescriptor(book,'year')：可以取得给定属性的描述符。

#### 创建对象：
##### 工厂模式：
```js
function createPerson(name, age, job){ 
 var o = new Object(); 
 o.name = name; 
 o.age = age; 
 o.job = job; 
 o.sayName = function(){ 
 alert(this.name); 
 }; 
 return o; 
} 
var person1 = createPerson("Nicholas", 29, "Software Engineer"); 
var person2 = createPerson("Greg", 27, "Doctor");
```
缺点：没有解决怎样知道一个对象的类型。
##### 构造函数模式
```js
function Person(name, age, job){ 
 this.name = name; 
 this.age = age; 
 this.job = job; 
 this.sayName = function(){ 
 alert(this.name); 
 }; 
} 
var person1 = new Person("Nicholas", 29, "Software Engineer"); 
var person2 = new Person("Greg", 27, "Doctor");
```
注意：1.构造函数以大写字母开头。
2. 实例的constructor属性指向构造函数
person2.constructor = Person;
3.构造函数和其他函数的区别在于：是否通过new操作符来调用。

##### 原型模式
原型上有个prototype属性。通过prototype添加的属性和方法可以供所有的实例所共享。
hasOwnProperty():检测一个属性是否存在于实例中，如果是则true，如果否，则false。

1. 原型与in操作符：有两种方式使用in操作符：单独使用和for-in循环中使用。
单独使用时：in操作符会通过对象能够访问给定属性时返回true，无论该属性存在于实例中还是原型中。
```js
alert('name' in person)//true
```
2. Object.keys():接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。
```js
function Person(){ 
} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function(){ 
 alert(this.name); 
}; 
var keys = Object.keys(Person.prototype); 
alert(keys); //"name,age,job,sayName"

```
 ##### 动态原型模式
 优点：把所有的属性和方法都封装在构造函数中，通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型。
 ```js
 function Person(name,age,job){
     this.name = name
     this.age = age
     this.job = job
     if(typeof this.sayName !='function'){
         Person.prototype.sayName = function(){
             alert(this.name)
         }
     }
 }
 var friend = new Person('n',30,'softE')
 friend.sayName()
 //只有在sayName（）不存在的情况下，才会把他添加到原型
 ```
 
 ### 继承
 ##### 原型链
 ```js
 function SuperType(){ 
 this.property = true; 
}
SuperType.prototype.getSuperValue = function(){ 
 return this.property; 
}; 
function SubType(){ 
 this.subproperty = false; 
} 
//继承了 SuperType 
SubType.prototype = new SuperType(); 
SubType.prototype.getSubValue = function (){ 
 return this.subproperty; 
}; 
var instance = new SubType(); 
alert(instance.getSuperValue()); //true
 ```
 ##### 借用构造函数：
 基本思想：在子类型构造函数的内部调用超类型构造函数。具体可以通过call()或者apply()方法实现。
 ```js
 function SuperType(){
     this.colors = ['red','blue','green']
 }
 function SubType(){
     SuperType.call(this)
 }
 var instance1 = new SubType()
 instance1.colors.push('black') //"red,blue,green,black"
  var instance2 = new SubType()
  console.log(instance2.colors)//"red,blue,green"
 ```
 ##### 原型式继承
 ```js
 Object.create()：
 思想：用一个对象作为另一个对象的基础。
 可以接收两个参数，一个用作新对象原型对象和一个新对象定义额外属性的对象。
 var anotherPerson = Object.create(person, { 
 name: { 
 value: "Greg" 
 } 
});
 ```
 ##### 组合继承（使用最多）
 指的是将原型链和借用构造函数的技术组合到一起。其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

 ##### 原型链继承
 通过将一个类型的实例赋值给另一个构造函数的原型实现。原型链的问题是对象实例共享所有继承的属性和方法，因此不适宜单独使用。。解决这个问题的技术是借
用构造函数，即在子类型构造函数的内部调用超类型构造函数。这样就可以做到每个实例都具有自己的
属性，同时还能保证只使用构造函数模式来定义类型。使用最多的继承模式是组合继承，这种模式使用
原型链继承共享的属性和方法，而通过借用构造函数继承实例属性。
 

