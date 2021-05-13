### 使用vue开发插件
#### 前言
需求：根据公司业务需求，开发一个公司设计的登录组件，用于公司所有项目。登录界面根据不同设计要求进行可配置。
要求：做成vue插件的方式，统一修改方便。
#### 大致流程步骤
1. 通过vue-cli，正常建立项目，开发运行组件。
2. 开发完成后，在根目录建立lib文件夹，文件夹里面建立index.js，作为插件入口。 Vue.js 的插件应该暴露一个 install 方法.结构如下：
 ```JS

      │—— ├── dist //打包好的插件js入口 
      │—— ├── src 
               |—— Page //测试已开发组件功能代码
               ├── App.vue                    // 页面入口文件
      │        ├── main.js                    // 程序入口文件，加载各种公共组件                           // 源码目录
      │   ├── lib                        // 源码
      │   │   ├── index.js               // 插件入口
      │   │   ├── account.vue   // 组件
 
      ├── index.html                     // 入口html文件
 ```
  * 2.1):lib下的index.js，作为入口：
  ```JS
      import account from './account'

    const components = [
      account
    ]
    const install = function (Vue) {
      if (install.installed) return
      install.installed = true
      components.map(component => {
        Vue.component(component.name, component)
      })
    }

    if (typeof window !== 'undefined' && window.vue) {
      install(window.Vue)
    }

    export default { install, ...components }
  ```
  * 2.2):动态参数配置：类似于组件props的方式实现。

 1. 打包为js:npm run lib
    ```JS
    "scripts": {
    "serve": "vue-cli-service serve",
    "dev": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name usoftaccount --dest dist lib/index.js"
        }
    ```  
3. 发布到npm：npm publish。要求：在package.json中，配置main：
   ```JS
    "name": "usoftaccount",
    "private":false, // 默认是true 私人的 需要改为false
    "version": "0.1.0",
    "main": "dist/usoftaccount.umd.min.js",
   ```
4. 安装使用：
   npm install usoftaccount
5. 在项目中使用
  ```JS
      import plug from  'plug'
      Vue.use(plug)
      //使用时：
      <Account/>
  ```
#### 扩展：插件一般引入方式：

```JS
ES6
import account from 'usoftaccount'

//  通过require 导入
var account = require('usoftaccount')

// 通过use挂载
Vue.use(usoftaccount)

// 或者直接导入js文件
<script src="./dist/usoftaccount.js"></script>
```
