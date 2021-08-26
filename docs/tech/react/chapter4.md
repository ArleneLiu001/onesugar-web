### react-router-dom
### render
render里面可以是函数，写在return前面，例如
```
render(){
    setTimeout(()=>{
        this.setState({name:'1111'})
    })
    return (<h1>{this.state.name}</h1>)
}
```

### 绑定事件：
```
1.事件驼峰命名：onClick=
2.在constructor中，改变this指向。
3.或者在事件中使用箭头函数来修正作用域。

```
### JSX
1.JSX中，在return 大括号内，可以写入任何表达式。
```js
render(){
    let a=1;
    return (<div>{a}</div>)
}
```
2. if 和for。
```js
render(){
const a=12;
    if(a===12){
        return (<div></div>)
    }else{
        return (<div>00</div>)
    }
}
```
3. jsx表示对象
4. babel会把jsx转译成名为React.createElement()调用：
```
const ele = (<h1 className="greeting"> hellllo
</h1>)
//转为React.createElement
const ele = React.createElement('h1',{className:"greeting"},"hellllo")
```
5.自定义组件
```
当react元素为用户自定义组件时，它会将js所接收的属性，
```