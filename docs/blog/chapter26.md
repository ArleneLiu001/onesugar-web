### 前端下载文件方法
#### 方式一：form表单提交
* 原理：利用form表单的action属性。直接提交表单。或者动态生成from表单，用action提交
* 优点：兼容性好，不会出现url限制问题。
* 缺点：无法知道下载的进度。无法直接下载浏览器可直接预览的文件类型。
```js
/**
 * 下载文件
 * @param {String} path - 请求的地址
 * @param {String} fileName - 文件名
 */
function downloadFile (downloadUrl, fileName) {
    // 创建表单
    const formObj = document.createElement('form');
    formObj.action = downloadUrl;
    formObj.method = 'get';
    formObj.style.display = 'none';
    // 创建input，主要是起传参作用
    const formItem = document.createElement('input');
    formItem.value = fileName; // 传参的值
    formItem.name = 'fileName'; // 传参的字段名
    // 插入到网页中
    formObj.appendChild(formItem);
    document.body.appendChild(formObj);
    formObj.submit(); // 发送请求
    document.body.removeChild(formObj); // 发送完清除掉
}

```
#### 方式二：window.open 或者window.location.href 
* 原理：跟a标签访问下载链接一样。
* 优点：简单方便。
* 缺点：1. 会出现url长度限制问题。  2.需要注意url编码问题。
3. 浏览器可直接浏览的文件类型是不提供下载的，如txt,png,jpg,gif.
4. 不能添加header，也就不能鉴权。
5. 无法知道下载进度。

```
window.open('url')
window.location.href='url'
```
#### 方式三：a标签的download属性。
* 原理：a对浏览器支持浏览的文件类型：如txt，png，jpg，gif是不提供下载的。为解决这个问题：利用download属性。
```
<a href="example.jpg" download="test">点击下载</a>
如上，会下载一个叫test的图片。
监测是否支持download：
const isSupport = 'download' in document.createElement('a')
对于在跨域下不能下载可浏览的文件，其实可以跟后端协商好，在后端层做多一层转发，最终返回给前端的文件链接跟下载页同域就好了。
```
* 优点：能解决浏览器直接浏览不能下载的文件类型：如txt，png，jpg，gif。
* 缺点：只能下载已知的文件地址。不能跨域。有兼容性问题。不能鉴权。
#### 方式四：利用Blob对象：
* 优点：不仅能利用已知的文件地址路径，还能发生ajax请求获取文件流进行下载。
* 特点：利用Blob对象可以将文件流转化为二进制对象。
* 原理：发请求获取二进制数据，转化为Blob对象，利用URL.createObjectUrl生成url地址，赋值在href属性，结合download进行下载。
```js
/**
 * 下载文件
 * @param {String} path - 下载地址/下载请求地址。
 * @param {String} name - 下载文件的名字/重命名（考虑到兼容性问题，最好加上后缀名）
 */
downloadFile (path, name) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', path);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function () {
        if (this.status === 200 || this.status === 304) {
            // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
            if ('msSaveOrOpenBlob' in navigator) {
                navigator.msSaveOrOpenBlob(this.response, name);
                return;
            }
            // const blob = new Blob([this.response], { type: xhr.getResponseHeader('Content-Type') });
            // const url = URL.createObjectURL(blob);
            const url = URL.createObjectURL(this.response);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };
}
该方法不能缺少a标签的download属性的设置。因为发请求时已设置返回数据类型为Blob类型（xhr.responseType = 'blob'），所以target.response就是一个Blob对象，打印出来会看到两个属性size和type。虽然type属性已指定了文件的类型，但是为了稳妥起见，还是在download属性值里指定后缀名，如Firefox不指定下载下来的文件就会不识别类型。
大家可能会注意到，上述代码有两处注释，其实除了上述的写法外，还有另一个写法，改动一丢丢。如果发送请求时不设置xhr.responseType = 'blob'，默认ajax请求会返回DOMString类型的数据，即字符串。这时就需要两处注释的代码了，对返回的文本转化为Blob对象，然后创建blob url，此时需要注释掉原本的const url = URL.createObjectURL(target.response)

```
* 优点：能解决通过api请求获取文档流的文件。能解决不能下载浏览器可浏览的文件。可设置header，也就可以添加鉴权信息。
#### 方式五：利用base64
区别与Blob对象：base64生成的是Data URL.也即是base64编码后的url形式。Bolb对象生成的是Blob url。
```js
/**
 * 下载文件
 * @param {String} path - 下载地址/下载请求地址。
 * @param {String} name - 下载文件的名字（考虑到兼容性问题，最好加上后缀名）
 */
downloadFile (path, name) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', path);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function () {
        if (this.status === 200 || this.status === 304) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this.response);
            fileReader.onload = function () {
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = this.result;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
        }
    };
}

```
* 优点：能解决不能直接下载浏览器可浏览的文件。可设置header，也就可以添加鉴权信息。
* 兼容性IE10以下不可用
#### 文件名：
当返回文件流的时候，我们在浏览器上观察接口返回的信息，会看到有这么一个header：Content-Disposition
```
看上面的例子大家可能发现，怎么值怪怪的。是的，如果名字是英文，那好办， 如果是有中文或者其他特殊符号，是需要处理好编码的

filename，需要后端处理好编码形式，但是就算后端处理好了，也会应每个浏览器的不同，解析的情况也不同。是个比较难处理好的家伙，所以才有后面的filename*
filename*，是个现代浏览器支持的，为了解决filename的不足，一般是UTF-8，我们用decodeURIComponent就能解码了，能还原成原本的样子。当然，解码前你要把值中的UTF-8''这种部分给去掉。

所以，在我们实现之前，我们就要明白，取Content-Disposition的内容，并不是百分百能符合你预期的，除非你的文件名全是英文数字。
我们提取文件名值：
// xhr是XMLHttpRequest对象
const content = xhr.getResponseHeader('content-disposition'); // 注意是全小写，自定义的header也是全小写
if (content) {
    let name1 = content.match(/filename=(.*);/)[1]; // 获取filename的值
    let name2 = content.match(/filename\*=(.*)/)[1]; // 获取filename*的值
    name1 = decodeURIComponent(name1);
    name2 = decodeURIComponent(name2.substring(6)); // 这个下标6就是UTF-8''
}

```
#### 自定义header
```
本质上跟上述的Content-Disposition差不多，只是我们这里不使用默认的header，我们自己自定义一个response header，跟后端决定好编码方式返回，前端直接获取这个自定义header，然后使用对应的解码即可，如使用decodeURIComponent。
但是我们都要知道，在跨域的情况下，前端获取到的header只有默认的6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
所以你想要获取到别的header，需要后端配合，设置

Access-Control-Expose-Headers: Content-Disposition, custom-header
这样，前端就能获取到对应暴露的header字段，需要注意的是，Content-Disposition也是需要暴露的。
```

参考文档：
https://juejin.im/post/5e50fa23518825494b3cccd7#comment