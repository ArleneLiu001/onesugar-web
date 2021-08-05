### 日志
分类：
访问日志：access log。  
日志要存储到文件中
```js
nodejs中，读取文件，写入文件，查看文件是否存在为以下方法
const fs = require('fs')
const path = require('path')
const fileName = path.resolve(__dirname,'data.txt')
fs.readFile(fileName,(err,data)=>{
  if(err){
    return
  }
  // data是二进制，需要转换为字符串
  console.log(data.toString())
})
// 写入文件
const content ='100'
const option = {
  flag:'a'//a表示追加写入。覆盖用'w'
}
fs.writeFile(fileName,content,option,(err)=>{
  console.log('写入成功')
})
//判断文件是否存在
fs.exists(fileName,(exist)=>{
  console.log(exist)
})
```

#### IO操作的性能瓶颈
IO包括网络IO和文件IO:
突出特点：慢。

#### stream:
考虑问题：当两端之间需要传递非常大的数据的时候，会占用cpu和性能，如何优化？  
使用stream数据流的方式进行传递。  
由于node中，req，res本身就具有stream特性，可以直接使用。  
stream读取文件：是一点点读取累计完成的。
```js
标准输入输出
process.stdin.pipe(process.sdout)
//直接使用stream 完成copy
const fs = require('fs')
const path = require('path')
const fileName1 = path.resolve(__dirname,'data.txt')
const fileName2 = path.resolve(__dirname,'data2.txt')
var readStream = fs.createReadStream(fileName1)
var writeStream = fs.createWriteStream(fileName2)
readStream.pipe(writeStream)
// 把data.txt的内容copy给data2.txt
readStream.on('end',function(){
  console.log('11')
})


//使用req.pipe来读取数据
const http = require('http')
const fs = require('fs')
const fileName1 = path.resolve(__dirname,'data.txt')
http.createServer((req,res)=>{
  if(req.method === 'GET'){
    const readStream = fs.createReadStream(fileName1)
    req.pipe(readStream)
  }
})



```

#### 项目写入实例


#### 日志拆分（根据日期）
实现方式：linux的crontab命令，即定时任务。
```
格式：
*****command
将access.log拷贝并重命名带日期的日志。
清空文件，继续积累日志
```
#### 日志分析
使用nodejs的readline，基于stream效率高。