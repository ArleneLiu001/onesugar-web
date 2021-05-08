---
home: true
# heroImage: ./home.jpg
footer: '@2021 Arlene | 个人网站 | 鄂ICP备2020018075号'
---
<div class="base">
 <div v-for="(item,index) in lists" class="item" :key="index" :href="item.link">
   <i class="iconfont icon-style" :class="item.icon"></i>
    <div>{{item.name}}</div>
 </div>
</div>
<div class="part">
 <ul class="hot">
   <div class="hot-title">最新文章</div>
  <li v-for="(item,index) in newList" class="item" :key="index" >
  <a :href="item.link">{{item.name}}</a>
  <div class="date-info">{{item.date}}</div>
  </li>
  <div class="more"><a :href="moreUrl">更多文章...</a></div>
 </ul>
  <div class="person-info">
    <!-- <img class="avtor" src="/avtor.jpg"/> -->
    <div><Clock/></div>
    <div class="user-detail">
      <div>mobile：13028813587</div>
      <div>email：arleneliu001@163.com</div>
    </div>
  </div>
</div>

<script>
  import Clock from './clock'
  
 export default {
   components:{
     Clock
   },
  data(){
    return {
      lists:[{name:'js基础',link:'/tech/js/chapter1/',icon:'el-icon-my-js',},
      {name:'TypeScript',link:'/tech/ts/chapter1/',icon:'el-icon-my-tsx',},
      {name:'Vue3',link:'/tech/vueNext/chapter1/',icon:'el-icon-my-vuejs-line',},
      {name:'React',link:'/tech/react/chapter1/',icon:'el-icon-my-react',},
      {name:'博客',link:'blog/chapter10',icon:'el-icon-my-bokeyuan',},],
      newList:[
        {name:'管理孩子玩游戏',link:'/edu/chapter1',date:'2021-04-21'},
        {name:'拖拽表格',link:'blog/chapter10',date:'2021-04-22'},
       {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20'}
      ],
      moreUrl:'/tech/js/chapter1/'
    }
  }
 }
</script>