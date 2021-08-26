### Service Worker
#### Service Worker简介：
Service workers 本质上充当Web应用程序与浏览器之间的代理服务器，作用是创建有效的离线缓存。如果网站中注册了service worker那么它可以拦截当前网站所有的请求，进行判断（需要编写相应的判断程序），如果需要向服务器发起请求的就转给服务器，如果可以直接使用缓存的就直接返回缓存不再转给服务器。从而大大提高浏览体验。

#### 延伸说明：
1. 基于web worker
2. 在web worker的基础上增加了离线缓存的能力。
3. 创建有效的离线体验。
4. 由事件驱动，具有生命周期。
5. 可以访问cache和indexDB
6. 支持推送

#### 注册
```js
if ('serviceWorker' in window.navigator) {
/* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里，我们指定了 '/'，表示 根网域下的所有内容。这也是默认值。 */
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(function (reg) {
      console.log('success', reg);
    })
    .catch(function (err) {
      console.log('fail', err);
    });
}
```
#### 静态资源缓存
使用 Service Worker 配合 CacheStroage 来实现对静态资源的缓存。
```js
// sw.js
this.addEventListener('install', function (event) {
  console.log('install');
  event.waitUntil(
    caches.open('sw_demo').then(function (cache) {
      return cache.addAll([
        '/style.css',
        '/panda.jpg',
        './main.js'
      ])
    }
    ));
});
当 Service Worker 在被安装的时候，我们能够对制定路径的资源进行缓存。CacheStroage 在浏览器中的接口名是 caches ，我们使用 caches.open 方法新建或打开一个已存在的缓存；cache.addAll 方法的作用是请求指定链接的资源并把它们存储到之前打开的缓存中。由于资源的下载、缓存是异步行为，所以我们要使用事件对象提供的 event.waitUntil 方法，它能够保证资源被缓存完成前 Service Worker 不会被安装完成，避免发生错误。
这种方法只能缓存指定的资源，无疑是不实用的，所以我们需要针对用户发起的每一个请求进行缓存。

```
#### 动态缓存静态资源
```js
this.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(res => {
      return res ||
        fetch(event.request)
          .then(responese => {
            const responeseClone = responese.clone();
            caches.open('sw_demo').then(cache => {
              cache.put(event.request, responeseClone);
            })
            return responese;
          })
          .catch(err => {
            console.log(err);
          });
    })
  )
});
我们需要监听 fetch 事件，每当用户向服务器发起请求的时候这个事件就会被触发。有一点需要注意，页面的路径不能大于 Service Worker 的 scope，不然 fetch 事件是无法被触发的。
在回掉函数中我们使用事件对象提供的 respondWith 方法，它可以劫持用户发出的 http 请求，并把一个 Promise 作为响应结果返回给用户。然后我们使用用户的请求对 Cache Stroage 进行匹配，如果匹配成功，则返回存储在缓存中的资源；如果匹配失败，则向服务器请求资源返回给用户，并使用 cache.put 方法把这些新的资源存储在缓存中。因为请求和响应流只能被读取一次，所以我们要使用 clone 方法复制一份存储到缓存中，而原版则会被返回给用户
在这里有几点需要注意：

当用户第一次访问页面的时候，资源的请求是早于 Service Worker 的安装的，所以静态资源是无法缓存的；只有当 Service Worker 安装完毕，用户第二次访问页面的时候，这些资源才会被缓存起来；
Cache Stroage 只能缓存静态资源，所以它只能缓存用户的 GET 请求；
Cache Stroage 中的缓存不会过期，但是浏览器对它的大小是有限制的，所以需要我们定期进行清理；

对于用户发起的 POST 请求，我们也可以在拦截后，通过判断请求中携带的 body 的内容来进行有选择的返回。

```
####  更新 Cache Stroage
前面提到过，当有新的 service worker 文件存在的时候，他会被注册和安装，等待使用旧版本的页面全部被关闭后，才会被激活。这时候，我们就需要清理下我们的 Cache Stroage 了，删除旧版本的 Cache Stroage 。
```js
this.addEventListener('install', function (event) {
  console.log('install');
  event.waitUntil(
    caches.open('sw_demo_v2').then(function (cache) { // 更换 Cache Stroage
      return cache.addAll([
        '/style.css',
        '/panda.jpg',
        './main.js'
      ])
    }
    ))
});

const cacheNames = ['sw_demo_v2']; // Cahce Stroage 白名单

this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all[keys.map(key => {
        if (!cacheNames.includes(key)) {
          console.log(key);
          return caches.delete(key); // 删除不在白名单中的 Cache Stroage
        }
      })]
    })
  )
});
首先在安装 Service Worker 的时候，要换一个 Cache Stroage 来存储，然后设置一个白名单，当 Service Worker 被激活的时候，将不在白名单中的 Cache Stroage 删除，释放存储空间。同样使用 event.waitUntil ，在 Service Worker 被激活前执行完删除操作。

```

#### 参考文档：
https://juejin.im/post/5b06a7b3f265da0dd8567513