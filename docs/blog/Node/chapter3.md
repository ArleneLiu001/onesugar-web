### nodemon

#### 为什么要使用nodemon
在编写调试Node.js项目，修改代码后，需要频繁的手动close掉，然后再重新启动，非常繁琐。现在，我们可以使用nodemon这个工具，它的作用是监听代码文件的变动，当代码改变之后，自动重启。

#### 下载
```
cnpm install -g  nodemon
```

#### 启动node服务
```js
nodemon   ./main.js // 启动node服务

nodemon ./main.js localhost 6677 // 在本地6677端口启动node服务

"start": "ts-node -r tsconfig-paths/register nodemon src/main.ts",
```

#### 延迟重启
```js
nodemon -delay10 main.js

nodemon --delay 2.5 server.js

nodemon --delay 2500ms server.js
```