### 正则方法
正则中方法分为两类：
* regExp对象方法：
 1. exec():用于检索字符串中的正则表达式的匹配，如有匹配，返回该匹配值构成的数组。如无，返回null.
   语法：reg.exec(str)
```JS
//有匹配
var a = '12324';var reg = /12/;reg.exec(a);
["12", index: 0, input: "12324", groups: undefined]
//无匹配
var a = '12324';var reg = /88/;reg.exec(a);
null

```
2. test():用于检测一个字符串是否匹配某个模式，如果字符串中有匹配的值返回true,否则返回false。
```JS
var a = '12324';var reg = /88/;reg.test(a);
//false
var a = '12324';var reg = /12/;reg.test(a);
//true

```

* 支持正则的string方法：
1. string.search():用于检索字符串中指定的子字符串，或者检索与正则表达式相匹配的子字符串。  
如果匹配到：返回 该子串在原字符串中第一次出现的位置，类似于indexOf().  
如果没有匹配到：返回 -1
```JS
'346456'.search('3')
//0
'345345'.search('8')
// -1
```
2. replace():用在字符串中用一些字符串替换另一些字符。原字符串不变，创建一个新的字符串。
```JS
'346456'.replace(/34/,'')
"6456"
```
3. split():用于把一个字符串按符合匹配条件的方式分割成一个字符串数组。不改变原字符串。
```JS

```
4. match()方法:可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
 语法：string.match() 
```JS
var str="Hello45647 123 world!Hello 1423 world! ssfsdf";
var patt1=/\d+/;
var result1=str.match(patt1); 
//打印
["45647", index: 5, input: "Hello45647 123 world!Hello 1423 world! ssfsdf", groups: undefined]
0: "45647"
groups: undefined
index: 5
input: "Hello45647 123 world!Hello 1423 world! ssfsdf"
length: 1
__proto__: Array(0)

注意：这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。有g，则是全局查找，返回数组。
无：则只查找一次，返回格式类似于exec查找。
```