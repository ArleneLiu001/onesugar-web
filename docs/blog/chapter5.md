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
#### 知识补充
  ##### Vue.extend 为什么使用 extend?
  在 vue 项目中，我们有了初始化的根实例后，所有页面基本上都是通过 router 来管理，组件也是通过 import 来进行局部注册，所以组件的创建我们不需要去关注，相比 extend 要更省心一点点。但是这样做会有几个缺点：

  组件模板都是事先定义好的，如果我要从接口动态渲染组件怎么办？
  所有内容都是在 #app 下渲染，注册组件都是在当前位置渲染。如果我要实现一个类似于 window.alert() 提示组件要求像调用 JS 函数一样调用它，该怎么办？
  这时候，Vue.extend + vm.$mount 组合就派上用场了。
  
  ###### 简单示例
```JS
import Vue from 'vue'

const testComponent = Vue.extend({
  template: '<div>{{ text }}</div>',
  data: function () {
    return {
      text: 'extend test'
    }
  }
})
```
然后我们将它手动渲染：
```JS
const extendComponent = new testComponent().$mount()
```
这时候，我们就将组件渲染挂载到 body 节点上了。

我们可以通过 $el 属性来访问 extendComponent 组件实例：
document.body.appendChild(extendComponent.$el)
 ### 开发实例
 ```JS
 import Vue from 'vue'
import UMessage from './UMessage.vue'

const MESSAGE_TYPES = ['success', 'warning', 'info', 'error']

const UMessageConstructor = Vue.extend(UMessage)

let instance

const Message = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  instance && instance.close()

  instance = new UMessageConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return instance.vm
}

MESSAGE_TYPES.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message


使用挂载时：
 Vue.prototype.$message = Message
 ```
