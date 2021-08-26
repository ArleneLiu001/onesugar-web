### vue3实例demo
```js
<template>
  <div class='header'>
    <div class="container">
      <form class="text-right">
        您的角色是：
        <label class="mr-5"><input name="role"
                 @change="doChange"
                 type="radio"
                 value="0"
                 :checked="checked" />教师 </label>
        <label><input name="role"
                 type="radio"
                 @change="doChange"
                 value="1" />学生 </label>
      </form>
      <!-- <router-link v-if="checked"
                   to='/about'>about</router-link>
      <router-link v-if="!checked"
                   to='/'>home</router-link> -->
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  reactive,
  onUpdated,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  setup(props, { emit }) {
    const route = useRoute(); //相当于：this.$route
    const router = useRouter(); //this.$router
    let checked: Boolean = true;
    const state = reactive({
      roleOne: 0,
      checked: true,
      roleTwo: 1,
      num: computed(() => parseInt(state.num0) + parseInt(state.num1)),
    });
    const doChange = (): void => {
      checked = !checked;
      checked ? router.push('/about') : router.push('/stu');
      // router.push('/about');
    };
    // onMounted(() => {
    //   console.log('mounted')
    // })
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    const goP = () => {
      console.log('click');
      emit('handel', state.num);
    };
    return {
      state,
      goP,
      checked,
      doChange,
    };
  },
};
</script>
<style lang='scss' scoped>
.header {
  height: 40px;
  width: 100%;
  background: #eee;
}
</style>
```

#### 路由-实例
```js
import { createRouter, createWebHistory, useRouter } from 'vue-router'
const home = () => import('../components/common/aside.vue')
// replace
let routes1 = [
  {
    path: '/',
    components: home,
    children: [
      // this would now redirect to `/home` instead of `/parent/home`
      { path: '', redirect: 'home', },
      {
        path: 'home',
        components: () => import('../components/common/home.vue'),
      },
    ],
  },
]
// // with
// let routes2 = [
//   {
//     path: '/parent',
//     children: [
//       { path: '', redirect: { name: 'home' } },
//       { path: 'home', name: 'home' },
//     ],
//   },
// ]
const router = createRouter({
  history: createWebHistory(),
  routes: routes1,
})

export default router

```