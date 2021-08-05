var barObj = {
  '/ts-axios/': getTsAxiosSidebar(),
  '/tech/js/': getTechSidebar(),
  '/tech/ts/': getTsAxiosSidebar(),
  '/tech/vueNext/': getvueNextSidebar(),
  '/edu/': geteduSidebar(),
  '/read/': getreadSidebar(),
  '/blog/': getblogSidebar(),
  '/motto/': getMottoSidebar()

}
// 博客
function getblogSidebar () {
  return [
    {
      title: '博客',
      collapsable: false,
      children: [
        'chapter10',
        'chapter9',
        'chapter8',
        'chapter7',
        'chapter6',
        'chapter5',
        'chapter4',
        'chapter3',
        'chapter2',
        'chapter11',
        'chapter12',
        'chapter13',
        'chapter14',
        'chapter15',
        'chapter16',
        'chapter17',
        'chapter18',
        'chapter19',
        'chapter20',
        'chapter21',
        'chapter22',
      ]
    },
    {
      title: 'CSS',
      collapsable: false,
      children: [
        'CSS/chapter1',
        'CSS/chapter2',
        'CSS/chapter3',
        'CSS/chapter4',
        'CSS/chapter5',
      ]
    },
    {
      title: 'Node',
      collapsable: false,
      children: [
        'Node/chapter1',
        'Node/chapter2',
        'Node/chapter3',
        'Node/chapter4',
        'Node/chapter5',
      ]
    },
  ]
}
// 教育
function geteduSidebar () {
  return [
    {
      title: '教育熊孩子',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter5',
        'chapter6',
        'chapter7',
        'chapter8',
        'chapter9',
        'chapter10',
        'chapter11',
        'chapter12',
      ]
    },
  ]
}
//阅读
function getreadSidebar () {
  return [
    {
      title: '阅读笔记',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'chapter6',
        'chapter7',
        'chapter8',
        'chapter9',
        'chapter10',
      ]
    },
  ]
}
//tech
function getTechSidebar () {
  return [
    {
      title: 'JS高级程序设计',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter5',
        'chapter6',
        'chapter7',
        'chapter8',
        'chapter9',
        'chapter10',
        'chapter13',
        'chapter14',
        'chapter16',
        'chapter17',
        'chapter20',
        'chapter21'
      ]
    },
  ]
}
// vue3
function getvueNextSidebar () {
  return [
    {
      title: 'VUE3',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter5',
        'chapter6',
        'chapter7',
        'chapter8',
        'chapter9',
        'chapter10',
      ]
    },
  ]
}
//座右铭
function getMottoSidebar () {
  return [
    {
      title: '2021年3月',
      collapsable: true,
      children: [
        '2021/March/chapter2',
        '2021/March/chapter1',
      ]
    },
    {
      title: '2021年4月',
      collapsable: true,
      children: [
        '2021/April/chapter2',
        '2021/April/chapter3',
        '2021/April/chapter4',
        '2021/April/chapter5',
        '2021/April/chapter6',
        '2021/April/chapter7',
        '2021/April/chapter8',
        '2021/April/chapter9',
        '2021/April/chapter10',
      ]
    },
    {
      title: '2021年5月',
      collapsable: false,
      children: [
        '2021/May/chapter1',
        '2021/May/chapter2',
        '2021/May/chapter3',
        '2021/May/chapter4',
        '2021/May/chapter5',
        '2021/May/chapter6',
        '2021/May/chapter7',
        '2021/May/chapter8',
      ]
    },
    {
      title: '2021年6月',
      collapsable: false,
      children: [
        '2021/May/chapter1',
        '2021/May/chapter2',
        '2021/May/chapter3',
      ]
    },
  ]
}
function getTsAxiosSidebar () {
  return [
    {
      title: '初识 TypeScript',
      collapsable: false,
      children: [
        ['chapter1/', 'Introduction'],
        'chapter1/install',
        'chapter1/start'
      ]
    },
    {
      title: 'TypeScript 常用语法',
      collapsable: false,
      children: [
        'chapter2/type',
        'chapter2/declare',
        'chapter2/interface',
        'chapter2/class',
        'chapter2/function',
        'chapter2/generic',
        'chapter2/inference',
        'chapter2/advance'
      ]
    },
    // {
    //   title: 'ts-axios 项目初始化',
    //   collapsable: false,
    //   children: [
    //     'chapter3/require',
    //     'chapter3/init',
    //     'chapter3/base'
    //   ]
    // },
    // {
    //   title: 'ts-axios 基础功能实现',
    //   collapsable: false,
    //   children: [
    //     'chapter4/url',
    //     'chapter4/data',
    //     'chapter4/header',
    //     'chapter4/response',
    //     'chapter4/response-header',
    //     'chapter4/response-data'
    //   ]
    // },
    // {
    //   title: 'ts-axios 异常情况处理',
    //   collapsable: false,
    //   children: [
    //     'chapter5/error',
    //     'chapter5/enhance'
    //   ]
    // },
    // {
    //   title: 'ts-axios 接口扩展',
    //   collapsable: false,
    //   children: [
    //     'chapter6/extend',
    //     'chapter6/overload',
    //     'chapter6/generic'
    //   ]
    // },
    // {
    //   title: 'ts-axios 拦截器实现',
    //   collapsable: false,
    //   children: [
    //     'chapter7/interceptor'
    //   ]
    // },
    // {
    //   title: 'ts-axios 配置化实现',
    //   collapsable: false,
    //   children: [
    //     'chapter8/merge',
    //     'chapter8/transform',
    //     'chapter8/create'
    //   ]
    // },
    // {
    //   title: 'ts-axios 取消功能实现',
    //   collapsable: false,
    //   children: [
    //     'chapter9/cancel'
    //   ]
    // },
    // {
    //   title: 'ts-axios 更多功能实现',
    //   collapsable: false,
    //   children: [
    //     'chapter10/withCredentials',
    //     'chapter10/xsrf',
    //     'chapter10/upload-download',
    //     'chapter10/auth',
    //     'chapter10/validateStatus',
    //     'chapter10/paramsSerializer',
    //     'chapter10/baseURL',
    //     'chapter10/static'
    //   ]
    // },
    // {
    //   title: 'ts-axios 单元测试',
    //   collapsable: false,
    //   children: [
    //     'chapter11/preface',
    //     'chapter11/jest',
    //     'chapter11/helpers',
    //     'chapter11/requests',
    //     'chapter11/headers',
    //     'chapter11/instance',
    //     'chapter11/interceptor',
    //     'chapter11/mergeConfig',
    //     'chapter11/cancel',
    //     'chapter11/more'
    //   ]
    // },
    // {
    //   title: 'ts-axios 部署与发布',
    //   collapsable: false,
    //   children: [
    //     'chapter12/build-deploy',
    //     'chapter12/demo'
    //   ]
    // },
    // {
    //   title: '课程总结',
    //   collapsable: false,
    //   children: [
    //     'chapter13/summary'
    //   ]
    // }
  ]
}

module.exports = barObj