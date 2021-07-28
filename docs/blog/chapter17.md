### 面包屑
面包屑导航是后台管理常见的导航条。可以通过它查看页面的层级，以及快速回到想回到的那一层。

#### 实现方法：
本质上，就是通过 "/"分割起来的数组：例如： 首页 / 类目 / 类目维护。  
1. 获取到当前路由或者菜单里面的routes数组。
2. 监听当前点击的菜单路径。循环处理,添加面包屑数组。
3. 详情页面往往是在当前点击list页面的下一级。这样在详情路径就无法匹配到他的上一级list页面。可以选择的处理方式是：可以在把详情路径设置为list页面的扩展（也即是可以通过indexOf索引到相同的部分）。例如：list页面：/list 。detail页面: /list/detail。这样在详情页面添加 面包屑 数组的时候，就可以把 list 和 list/detail 都添加上。
实例：
```js
  watchEffect(() => {
      getPreList(store.state.auth.menuList)
      getList(routes)
    })
  
 const getList = (itemlist) => {
      state.breadList = []
      itemlist.forEach(item => {
        if (item.meta && item.path !== '/') {
          if (route.name = item.name && route.path.indexOf(item.path) > -1) {
            state.breadList.push({ name: item.meta.title, path: item.path, title: item.meta.title })
          }
        }
      });
    }
```

