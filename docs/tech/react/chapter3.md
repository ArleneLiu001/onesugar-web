### react高级特性
#### 函数组件
1. class组件
```js
class List extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {list} = this.props;
        return <ul>{list.map(item,index)=>{
            return <li>{item}</li>
        }}</ul>
    }
    
}
```
2. 函数组件
```js
functon List(props){
    const {list} = this.props;
    return <ul>{list.map(item,index)=>{
            return <li>{item}</li>
        }}</ul>
}
```

#### 非受控组件:必须要操作dom的情况下使用。
优先使用受控组件，符合react设计原则。
react中，通过React.createRef()创建Refs并通过ref属性联系到React组件。
 当一个ref通过render放入一个元素中，一个对节点的引用可以通过ref的current属性得到；
```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个ref去储存textInput DOM元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
 
  focusTextInput() {
    // 很明显的，让text input获得焦点使用了原生的DOM API
    // 注意：我们通过current去获得DOM节点
    this.textInput.current.focus();
  }
 
  render() {
    // 告诉React我们想要将<input>的ref和构造器中创建的textInput联系起来
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
 
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
 
```
#### portals 传送门
组件默认会按照既定层次嵌套渲染，如何让组件渲染到父组件之外？
使用场景？
1. overflow:hidden
2. 父组件z-index值太小
3. fixed需要放在body第一层级，例如modal
```
render(){
    return ReactDOM.createPortal(
    <div className="modal">{this.props.children}</div>,document.body)
}
```

#### Context
Context通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递props属性。
创建：
```js
React.createContext：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
const {Provider, Consumer} = React.createContext(defaultValue);
```
Provider:用于生产共享数据。里面的value值就是放置的共享数据。
```
<Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
</Provider>
```
Consumer：  Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue
```
<Consumer>
  {value => /*根据上下文  进行渲染相应内容*/}
</Consumer>
```

#### 异步组件
vue中，使用import
在react中，使用React.lazy
React.Suspense:React.lazy不能单独使用，需要配合React.suspense，suspence是用来包裹异步组件，添加loading效果等。
```js
const ContextDemo = React.lazy(()=>import('./aa'))
render(){
    return <div>
    <React.Suspense fallback={<div>loading...</div>}></React.Suspense>
    </div>
}
```

react性能优化：
1. shouldComponentUpdate
2. PureComponent 和React.memo 
```
React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过props和state的浅对比来实现 shouldComponentUpate()。
浅对比：通过遍历对象上的键执行相等性，并在任何键具有参数之间不严格相等的值时返回false。 当所有键的值严格相等时返回true。
PureComponent优势
1.不需要开发者自己实现shouldComponentUpdate，就可以进行简单的判断来提升性能。

为什么PureComponent比较复杂的数据结构，可能会因深层的数据不一致而产生错误的否定判断？

因为js是引用类型，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象。如 foo={a: 1}; bar=foo; bar.a=2 你会发现此时 foo.a 也被改成了 2
为了解决这个问题，一般的做法是使用 shallowCopy（浅拷贝）或 deepCopy（深拷贝）来避免被修改，但这样做造成了 CPU 和内存的浪费。

```
3. 不可变值immutable.js
是 Facebook 在 2014 年出的持久性数据结构的库，持久性指的是数据一旦创建，就不能再被更改，任何修改或添加删除操作都会返回一个新的 Immutable 对象。可以让我们更容易的去处理缓存、回退、数据变化检测等问题，简化开发。并且提供了大量的类似原生 JS 的方法，还有 Lazy Operation 的特性，完全的函数式编程。
```
import { Map } from "immutable";
const map1 = Map({ a: { aa: 1 }, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1 !== map2; // true
map1.get('b'); // 2
map2.get('b'); // 50
map1.get('a') === map2.get('a'); // true
```
缺点：学习成本。

参考文章：
https://segmentfault.com/a/1190000011408775

注意：React默认父组件有更新，子组件则无条件更新。shouldComponentUpdate默认返回的是true。因此在更新的时候，进行数据对比，来进行性能优化。

#### React高阶组件
高阶组件不是一种功能，而是一种模式
```js
const HOCFactory = (Component)=>{
    class HOC extends React.Component {
        render(){
            return <Component {...this.props}/>
        }
    }
    return HOC
}
const EnhancedComponent1 =HOCFactory(wrapComponent)
```

#### vue如何实现高阶组件
#### Hoc 和render props：实现公共组件的复用。


