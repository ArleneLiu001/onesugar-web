<template>
  <div>
    <div class="tag" :style="{background:tagList[Number(tagType)] && tagList[tagType].bgColor}">{{tagList[Number(tagType)] && tagList[tagType].name}}</div>
  </div>
</template>

<script>
export default {
  name:'articleTag',
  props:{
    tagType:{
      type:Number
    }
  },
  data() {
    return {
      tagList:[{val:0,name:'博客',bgColor:'#20b041',},
      {val:1,name:'JavaScript',bgColor:'#20b041',},
      {val:2,name:'CSS',bgColor:'#20b041',},
      {val:3,name:'Vue3',bgColor:'#20b041',},
      {val:4,name:'TypeScript',bgColor:'#20b041',},
      {val:5,name:'阅读笔记',bgColor:'#9d3e9d',},
      {val:6,name:'教育',bgColor:'#f8c0d8',},
      {val:7,name:'React',bgColor:'#20b041',},
    ]
  }
}
}
</script>


