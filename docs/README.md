---
home: true
# heroImage: ./home.jpg
footer: '@2021 Arlene | 个人网站 | 鄂ICP备2020018075号'
---
<div class="base">
 <div v-for="(item,index) in lists" class="item" :key="index" @click="goLink(item)">
   <i class="iconfont icon-style" :class="item.icon"></i>
    <div>{{item.name}}</div>
 </div>
</div>
<div class="part">
<div class="personal-part">
    <div class="person-info">
        <img class="avtor" src="/avtor.jpg"/>
        <!-- <div><Clock/></div> -->
        <div class="user-name">Arlene</div>
        <div class="user-detail">
          <div v-for="(item,index) in iconAbout" :key="index" >
          <a v-if="item.href" :href="item.href" class="iconfont person-icon" :class="item.icon"></a>
          <div v-else class="iconfont person-icon" :class="item.icon" slot="reference"  @mouseenter="item.isShowPopover = true"
            @mouseleave="item.isShowPopover = false" ></div>
            <el-popover  v-model="item.isShowPopover"
                placement="top-start"
                width="100"
                trigger="click"
             ><img :src="item.img"/>
         </el-popover>
          </div>
        </div>
        <div class="aboutMe">关于我</div>
    </div>
    <!--  day-motto -->
     <div class="person-info mt20">
      <p class="u-fontweight">每日语录：</p>
      <div class="lineH25">{{dayMessage}}</div>
      <a href="/motto/chapter1/">更多...</a>
    </div>
 </div>
 <ul class="hot">
   <div class="hot-title">最新文章</div>
  <li v-for="(item,index) in newList" class="item" :key="index" @click="goLink(item)">
  <div>
    <a :href="item.link">{{item.name}}</a>
    <article-tag :tagType="item.tag"/>
  </div>
  <div class="date-info">{{item.date}}</div>
  </li>
  <div class="more"><a :href="moreUrl">更多文章...</a></div>
 </ul>
  <div class="clear"></div>

</div>

<script>
  import Clock from './clock'
 export default {
   components:{
     Clock,
   },
  data(){
    return {
      dayMessage:"生命从来不曾离开过孤独而独立存在。无论是我们出生，我们成长，我们相爱还是我们成功失败，直到最后的最后，孤独犹如影子一样存在于生命一隅。",
      iconAbout:[{name:'git',icon:'el-icon-my-github',href:'https://github.com/ArleneLiu001/onesugar-web',},
      // {name:'zhi',icon:'el-icon-my-zhifubao'},
      {name:'qq',icon:'el-icon-my-qq',img:'/qq.jpg'},
      {name:'wechat',icon:'el-icon-my-wechat',img:'/wechat.jpg'},
      {name:'email',icon:'el-icon-my-youxiang',href:"mailto:arleneliu001@163.com"}],
      lists:[{name:'js基础',link:'/tech/js/chapter1/',icon:'el-icon-my-js',},
      {name:'TypeScript',link:'/tech/ts/chapter1/',icon:'el-icon-my-tsx',},
      {name:'Vue3',link:'/tech/vueNext/chapter1/',icon:'el-icon-my-vuejs-line',},
      {name:'React',link:'/tech/react/chapter1/',icon:'el-icon-my-react',},
      {name:'博客',link:'/blog/chapter5',icon:'el-icon-my-bokeyuan',},],
      newList:[
        {name:'关于孩子玩游戏',link:'/edu/chapter1',date:'2021-04-21',tag:5},
        {name:'拖拽表格',link:'blog/chapter10',date:'2021-04-22',tag:1},
        {name:'使用vue开发插件',link:'/blog/chapter5',date:'2021-04-20',tag:1},
        {name:'uni-app项目打包合成App',link:'/blog/chapter3',date:'2021-04-20',tag:1},
        {name:'TypeScript',link:'/tech/ts/chapter1/',date:'2021-04-20',tag:1}
      ],
      moreUrl:'/tech/js/chapter1/'
    }
  },
  methods:{
    goLink(item){
      window.location.href = item.link
    }
  }
 }
</script>