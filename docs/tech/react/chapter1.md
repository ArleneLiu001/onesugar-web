### react-router基础使用
#### 安装：
```
npm install react-router-dom --save-dev //这里可以使用cnpm代替npm命令
```
#### 常见路由
页面router，hash路由 和h5路由。
1. 页面路由：
```
window.location.href=''
```
2. hash
```
window.onhashchange = 
```
3. history:

#### 动态路由
this.props.match.params.id
```js
组件里面嵌套路由：
return(
<div>
 components A
 <Switch>
    <Route path={`${this.props.match.path}/:id`} render={(route)=>{
        return(
        <div>
            {route.match.params.id}
        </div>)
    }}>
 </Switch>
</div>
)

exact 完全匹配
```

#### 使用：
1.是需要跳转的地方使用Link，需要显示的地方使用{this.props.children}
```js
export default Person extends Component{
    render(){
        return(
         <div>
            {
                this.state.users.map(user=>(
              <li key={user.id}>  <Link to ={`/user/${user.id}`}>{user.name}</Link></li>
                ))
            }
            <div>
                {this.props.children}
            </div>
         </div>
        )
    }
}
```
2. 路由需要全局注册下。
```js
React.render((
<Router>
    <Route path="/" component={App}>
         <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
    </Route>
</Router>
),document.body)
```
3.简化结构：
```js
const routes = {
    path:'/',
    component:APP,
    childRoutes:[
     {path:'about',component:About}
    ]
}
React.render(<Router routes = {routes}/>,document.body)
```
4.总结：嵌套路由。注册路由的时候，要使用route包裹子路由的标签组件。在需要跳转的地方，使用Link注册。

5.当url为/时，我们想渲染一个默认组件，在其他url时，去掉这个组件。使用IndexRoute 来设置一个默认页面。
```js
import {IndexRoute} from 'react-router'
React.render((
<Router>
    <Route path="/" component={App}>
     <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
</Router>
),document.body)
```

6.让UI组件从url中解耦出来。路由的时候，将组件的父组件去掉。方法：使用绝对路径。

```js
React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* 使用 /messages/:id 替换 messages/:id */}
        <Route path="/messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)

```
7.重定向页面： <Redirect> 
    ```
    <Redirect from="messages/:id" to="/messages/:id" />
    ```

8.进入和离开的hook.使用场景：例如权限验证或者在路由跳转前将一些数据持久化保存起来。
```
Route 可以定义 onEnter 和 onLeave 两个 hook ，这些hook会在页面跳转确认时触发一次。
onLeave hook：会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束。
onEnter Hook：会从最外层的父路由开始直到最下层子路由结束。
```
9.路由配置实例
```js
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

React.render(<Router routes={routeConfig} />, document.body)
```
10. 路径语法：
```js
1. * 匹配任意符号。
<Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
2.（）。在它内部的内容被认为是可选的。
<Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan
3. :paramName – 匹配一段位于 /、? 或 # 之后的 URL。
<Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan
```

#### 默认路由（IndexRoute）与 IndexLink
1. indexRoute：不使用默认路由，页面就不会匹配到任何组件。this.props.children 就是undefined
2. Index Links ：如果在app.jsx中使用了<Link to="/">Home</Link>，则 '/'这个路径就是处于被激活状态。
3. 解决：可以在app.jsx中配置一个默认路径为/的路由。
4. 取参数：this.props.match.params.id
5.匹配路径：
```js
class A extends React.component{
    return (
    <div>
    components A
    <Switch>
        <Route path={`${this.props.match.path}`} render={(route)=>{
            return <div>不带参数的组件A {route.match.path}</div>
        }}></Route>
          <Route path={`${this.props.match.path/:id}`} render={(route)=>{
            return <div>带参数的组件A {route.match.params.id}</div>
        }}></Route>
    </Switch>
    </div>
    )
}
```
route的属性：
1.render方法。已props为参数。

