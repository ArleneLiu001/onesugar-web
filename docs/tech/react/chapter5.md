### 基本概念

#### jsx语法基本规则：
遇到html标签（以<开头），就用html规则解析。遇到代码块（{以{）就用js解析。

#### react将带有标签的语句转义：
```
<div dangerouslySetInnerHTML={{ __html: arr[0] }}></div>
```
#### react-router 与react-router-dom
react-router：实现了路由的核心功能。
react-router-dom：基于react-router，加入了在浏览器运行环境下的一些功能，例如Link组件，BrowserRouter 和 HashRouter 组件，前者使用pushState 和popState 事件构建路由，后者使用window.location.hash 和hashchange事件构建路由。

#### 使用脚手架创建项目并引入sass：
前言：
##### react-scripts概念
：相当于把webpack等一些配置文件安装到一个包里面，启动的时候运行该包的start.js文件。
##### eject
eject为react-scripts里面的一个js文件，运行该包后，可以把webpack包信息抽取到项目里面，自由配置。运行：npm run eject.

#### react-create-app项目引入sass：
#### 使用react-scripts时：
react-scripts有关于sass的配置，只需要安装node-sass包就好了。注意：node-sass包不能是5.0.0以上的，会报错。用4.14.1正常。

#### 使用eject抽取出来时：
1 . 首先运行：npm run eject
2.安装node-sass包。

