### react基础知识
####  题目
react组件如何通讯  
jsx本质是什么  
context是什么，有何用途  
shouldComponentUpdate的用途  
描述redux单项数据流
setState是同步还是异步

##### setState
#### jsx基本使用
```
```
#### 事件
```js
1.
render(){
    return <p onClick={this.bindClick.bind(this)}></p>
    <!---->绑定在此处的坏处：每次click的时候，都需要重新绑定。浪费性能。优化：可以将绑定抽离，只在组件初始化的时候绑定一次。
}
2. 静态方法，指向当前实例
bindclick =()=>{
    console.log(this)//this指向当前实例。
}
```
event：
 event是syntheticEvent。区别于原生的MouseEvent
 event.nativeEvent是原生事件对象  
 所有的事件，都被挂载到document上
 和dom事件不一样，和vue事件也不一样  
 
 
 #### 表单
 input ,textarea,通过value获取值
 checkbox，radio通过checked
 ```
 changeValue=(e)=>{
     this.setState({
         name:e.target.value
     })
 }
 render(){
     return {
         <p>{this.state.name}</p>
         <input value={this.state.name} onChange="this.changeValue"/>
     }
 }
 ```
 #### 传递父组件的方法给子组件，让子组件去执行
 父组件传了一个initList的方法给子组件<ComBox>,然后子组件可以执行父组件的方法
 ```js
 render() {
   return <div style={{width: "100%", padding: "20px", border: "1px solid #ccc", boxSizing: "border-box"}}>
        <h1>评论列表</h1>
        <ComBox reload={this.initList}></ComBox>
        {this.state.list.map((item, index) => {
            return <ComItem key={'comitem-'+index} {...item}></ComItem>
        })}
    </div>
}
  
// 初始化评论列表数据
initList = () => {
    let list = JSON.parse(localStorage.getItem('cmsList') || '[]')
    this.setState({
        list
    })
}

// 重新刷新评论列表
this.props.reload()
 
 ```
#### setState
1. 不可变值：不能直接修改state值。（特别是数组可对象）
 ```
 this.setState({
     list:[...this.state.list,100]//追加
 })
 //对象
 this.setState({
     obj:Object.assign(this.state.obj,'name','111'),
     obj1:{...this.state.obj1,a:100}
 })
 ```
 
 2. 可能是异步更新
 ```
 当setstate完成立即去打印最新的值时，发现还是原来的值，因为setstate在此时是异步的。
 解决：
 this.setState({
     count:this.state.count+1
 },()=>{
     //类似于vue的nextTick
 })
 注意：setState在自定义事件中或者setTimout时是同步的。
 ```
 3. 可能会被合并
 ```
当setState传入对象时，在执行的时候会被合并。
当setState传入函数时，执行时不会被合并。

 ```
 
 #### 组件生命周期
 1. 挂载卸载过程
 ```
 1. constructor():  完成了react数据的初始化，他有两个参数：props和context。当想在函数内部使用这两个参数时，需使用super()传入。
 2. componentWillMount()：  
 componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
 3. componentDidMount()  
 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
 4. componentWillUnmount()  
 clear你在组建中所有的setTimeout,setInterval
移除所有组建中的监听 removeEventListener

 
 ```
 2. 更新过程
 ```
 2.1. componentWillReceiveProps (nextProps)
 在接受父组件改变后的props需要重新渲染组件时用到的比较多
接受一个参数nextProps
通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件


 
2.2.shouldComponentUpdate(nextProps,nextState)
主要用于性能优化(部分更新)
唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断


2.3.componentWillUpdate (nextProps,nextState)
shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate,这里同样可以拿到nextProps和nextState。

2.4.componentDidUpdate(prevProps,prevState)

组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。


2.5.render()

render函数会插入jsx生成的dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较更新前后的新旧DOM树，比较以后，找到最小的有差异的DOM节点，并重新渲染。


 ```
 3. React新增的生命周期(个人补充)
 ```
 getDerivedStateFromProps(nextProps, prevState)
 代替componentWillReceiveProps()。
老版本中的componentWillReceiveProps()方法判断前后两个 props 是否相同，如果不同再将新的 props 更新到相应的 state 上去。这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面也会增加组件的重绘次数。

这两者最大的不同就是:
在 componentWillReceiveProps 中，我们一般会做以下两件事，一是根据 props 来更新 state，二是触发一些回调，如动画或页面跳转等。

在老版本的 React 中，这两件事我们都需要在 componentWillReceiveProps 中去做。
而在新版本中，官方将更新 state 与触发回调重新分配到了 getDerivedStateFromProps 与 componentDidUpdate 中，使得组件整体的更新逻辑更为清晰。而且在 getDerivedStateFromProps 中还禁止了组件去访问 this.props，强制让开发者去比较 nextProps 与 prevState 中的值，以确保当开发者用到 getDerivedStateFromProps 这个生命周期函数时，就是在根据当前的 props 来更新组件的 state，而不是去做其他一些让组件自身状态变得更加不可预测的事情



getSnapshotBeforeUpdate(prevProps, prevState)

代替componentWillUpdate。
常见的 componentWillUpdate 的用例是在组件更新前，读取当前某个 DOM 元素的状态，并在 componentDidUpdate 中进行相应的处理。
这两者的区别在于：

在 React 开启异步渲染模式后，在 render 阶段读取到的 DOM 元素状态并不总是和 commit 阶段相同，这就导致在
componentDidUpdate 中使用 componentWillUpdate 中读取到的 DOM 元素状态是不安全的，因为这时的值很有可能已经失效了。
getSnapshotBeforeUpdate 会在最终的 render 之前被调用，也就是说在 getSnapshotBeforeUpdate 中读取到的 DOM 元素状态是可以保证与 componentDidUpdate 中一致的。
此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）

 ```

 
 #### jsx简述
 jsx是JavaScript XML,是react的语法糖。jsx被编译后，返回一个js对象.
 1. 其中，可以把标签作为变量的方式声明。 
 
 React.createElement 即h函数，返回vnode
 第一个参数可能是组件，也可能是html的tag
 组件名，首字母必须大写。
 例如
 ```
 const element = <div tabIndex="0"></div>;
 ```
把jsx放到babel中，生成
```js
var a = React.createElement(
    'a',{href:'https://baidu.com'},
    React.createElement(
    'span',
    )
)
```
2. html使用dangerouslySetInnerHTML来呈现
好处：
关于JSX防范XSS攻击
由于当你尝试通过{html}进行插入html代码时, React会自动将html转为字符串,故React可部分防止XSS攻击。

 #### react 和vue对比
 
 