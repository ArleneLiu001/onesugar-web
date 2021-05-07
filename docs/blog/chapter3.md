### uni-app项目打包合成App
将使用uni-app开发的移动端home,b2b,partner,mall,sass等项目合成到一个app。

### 合成思路
home项目内有多个跳转链接可以直达子项目，考虑把home项目通过app的形式打包发布到安卓市场，其他项目作为app内嵌的H5形式打开。
### 优点
1. 开发快，跨平台，代码改动小：需要home项目做兼容app和h5处理，其他子项目只需少量改动。
2. 改动子项目时，无需经过审核和更新App。
### 缺点
页面打开要先加载远程资源再生成页面，所以用户体验无法像原生App那么流畅。

### app和h5通信交互方式
 1. app跳转对应的h5项目，通过浏览器组件web-view实现。
 2. h5将值传给app，通过postMessage实现，返回app，通过uni.webView.navigateTo() 实现。


### App平台消息推送实现
uni-app 提供了 uni push 服务，这是一个包括客户端和服务器的统一服务，整合了苹果APNs、华为、小米、OPPO、VIVO、魅族、谷歌FCM等多家厂商的系统推送和个推的独立推送，不管客户端还是服务器，一套代码多端推送。
#### 接入方式：
1. 客户端方式：前端通过js创建本地消息，监听用户点击消息应用组件等方式实现。 参考：https://www.html5plus.org/doc/zh_cn/push.html
2. web自助发送：使用Dcloud后台，免费设置进行推送。
3. 编写代码调用服务器接口发送push消息：  
 * 如果使用uniCloud开发服务器，可以使用封装好的插件，更简单易用：https://ext.dcloud.net.cn/plugin?id=1680
* 如果使用传统服务器开发，文档仍然是个推的服务器文档 http://docs.getui.com/


#### 注意事项：
1. 需在开发者后台开通uniPush服务。
2. 提高消息推送成功率，需要并向各rom厂商申请开通推送服务（免费）。
3. 如果使用web自助发送，则有条数限制（具体数目未知），如果需要增加每日推送量需发邮件给dcloud申请。  
开发者后台：https://dev.dcloud.net.cn/


### 一键登录功能
#### 开通服务
参考链接：https://ask.dcloud.net.cn/article/37965  
**一键登录服务计费标准：**
0.02元/次，失败不计费，目前只支持中国大陆地区用户。
1. 在manifest.json选择选择一键登录，按照指引在开发者中心配置具体流程即可。
2. 在开发者中心添加应用，需填写DCloud AppId及对应应用包名和签名信息，申请后一般1-2个工作日审核通过。
##### 流程
参考链接：https://uniapp.dcloud.io/univerify
1. 客户端（前端）通过uni.login()获得openid和access_token
2. 在服务器侧通过 uniCloud 将access_token等信息 置换为当前设备的真实手机号码。然后服务器直接入库，避免手机号传递到前端发生的不可信情况。


### Android平台签名证书
Android平台打包发布apk应用，需要使用数字证书（.keystore文件）进行签名。

生成方式参考文档：
https://ask.dcloud.net.cn/article/35777

### 打包
1. 在hbuilderX：发行-->原生云打包-->可打包正式环境和测试环境的apk包。

2. 打包配置：根据生成的证书信息，配置打包参数：包括证书别名，私钥密码，证书文件信息。

### 上架到安卓市场流程
**app上架材料梳理：**  
参考链接：https://www.jianshu.com/p/990756f4f162   

软著申请平台：
中国版权登记业务平台
地址：https://register.ccopyright.com.cn/registration.html#/registerSoft
