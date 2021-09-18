### 管理后台前端组件库选择
#### 常用的组件库一览表
组件名称 | 产品定位 | 显著优点  | 支持按需引入 | star数量  
- | :-: | :-: | :-: | -:| -:
iview | 服务于PC界面的中后台产品 | api简洁，组件干净优雅丰富 |  是 | 23k
elementUI | 桌面端组件库| 组件丰富，社区成熟，文档健全 |   是   |45k
Ant Design | 服务于企业级后台管理 |适用于react项目，设计简洁，组件丰富 | 是|59k
Ant-Design-vue | 服务于企业级后台管理，适用于vue项目 |适用于vue项目，设计简洁 |    是 |10k
Vux UI | 移动端ui组件库 |服务于微信页面|是| 17K
MintUI | 移动端组件库 |包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要 |是|15k
vuetify | 支持SSR,SPA,PWA(渐进式web应用) | 在PC 端和移动端支持都很好，ui简单精致|是 | 25k
bootstrap-vue |为 Vue.js 提供了 Bootstrap 4 组件和网格系统的实现 |对熟悉bootstrap的开发上手容易，样式自适应。 | 是| 11k
Quasar Framework |是构建 Vue.js 响应式网站、PWA、混合移动应用和 Electron 应用的流行框架 |应用于桌面端，web页面，H5混合开发等。组件美观简洁，体积小 | 是| 14k

####  pc端可选择组件对比分析
#### 综上表格并结合各类组件优缺点分析，可选择的PC端后台管理组件库有：iview，elementUI，Ant-Design-vue,bootstrap-vue，Quasar Framwork。
####  element VS  iview：
1. 组件代码角度：
iview 比element 的api简洁。并采用了干净而优雅的设计。组件都很丰富。
2. 项目优化角度：
首屏优化，第三方组件库依赖过大 会给首屏加载带来很大的压力，一般解决方式是 按需求引入组件
element-ui  根据官方说明，现需要引入babel-plugin-component插件 做相关配置，然后直接在组件目录注册全局组件 
iview  按需求加载官方给的文档不是很详细
3. 过渡动画：
element 有内置过渡动画，使得组件的切换变化更具动感
iview 更为中规中矩
4. 组件丰富性以及生态：
element 生态更好，使用频率远超过iview ,element开发团队实力更强

####  Ant-Design-vue
Ant Design Vue是 Ant Design 3.X 的 Vue 实现，Ant Design Vue共享Ant Design of React设计工具体系，实现了所有Ant Design of React的组件，支持现代浏览器和 IE9 及以上。可以让熟悉Ant Design的在使用Vue时，很容易的上手。支持服务端渲染。支持Electron。缺点是成熟度上差 Element Ui 一些，社区不够完善。
####  vuetify
明显缺点：文档不健全，用法略显复杂，需要功能需自己封装。
####  bootstrap-vue
bootstrap-vue移动优先并基于flexbox弹性布局，用于构建响应式网页。支持按需组装，交互友好。并具备广泛和自动的 WAI-ARIA 可访问性友好支持。

####  Quasar Framework：
Quasar组件丰富，样式优雅，支持诸如 HTML/CSS/JS 压缩、缓存清除、摇树优化（tree shaking）、源映射、代码分割和延迟加载、ES6 转码等功能。不管移动端还是桌面端，都能适配。
使用场景：
Electron+vue+Quasar开发桌面应用。
vue+Quasar开发web网站，CRM。
cordova/react/+vue+Quasar 开发hybrid Apps。
上手门槛稍微高。一些组件样式（例如图片上传等），区别于iview,element等大众的显示模式。


####  根据管理后台特点选择组件库

 * 管理后台组件特点：以基础组件为主，复杂组件有：图片上传编辑操作，树形结构，目录结构，地址等。  
 对于以上基础组件，各组件库都支持。对于复杂组件，也都支持基础功能，如果需要个性化设置，都需要进行封装。
 
#### 综上：各组件都支持按需引入，比较轻量，并且都支持定制主题风格。如果希望稳妥简单，则推荐选择路线为element>iview>Ant Design Vue>bootstrap-vue。如果考虑以后多端适配并且喜欢Quasar风格想要尝新，可以考虑Quasar Framework。
