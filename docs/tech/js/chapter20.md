### 语法
注意：json字符串与js字符串的区别是json字符串必须使用双引号。
```js
对象形式
{ 
 "name": "Nicholas", 
 "age": 29 
}
```
#### 解析与序列化
序列化：JSON.stringify():序列化的时候，如果值为空，则会自动忽略。
```js
JSON.stringify()接收参数：1.序列化对象。2.过滤器（数组或者函数）。3.表示是否在 JSON 字符串中保留缩进。
1.实现过滤：当第二个参数为数组的时候
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011 
 }; 
var jsonText = JSON.stringify(book, ["title", "edition"]);

{"title":"Professional JavaScript","edition":3}

2. 当第二个参数为函数的时候：
var book = { 
 "title": "Professional JavaScript", 
 "authors": [ 
 "Nicholas C. Zakas" 
 ], 
 edition: 3, 
 year: 2011 
 }; 
var jsonText = JSON.stringify(book, function(key, value){ 
 switch(key){ 
 case "authors": 
 return value.join(",") 
 case "year": 
 return 5000; 
 case "edition": 
 return undefined; 
 default: 
 return value; 
 } 
});

{"title":"Professional JavaScript","authors":"Nicholas C. Zakas","year":5000}
```
解析：JSON.parse()