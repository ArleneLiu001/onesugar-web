var barObj = {
  '/tech/js/': getTechSidebar(),
  '/tech/ts/': getTsAxiosSidebar(),
  '/tech/vueNext/': getvueNextSidebar(),
  '/tech/react/': getreactSidebar(),
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
      collapsable: true,
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
        'chapter23',
        'chapter24',
        'chapter25',
        'chapter26',
        'chapter27',
        'chapter28',
        'chapter29',
        'chapter30',
        'chapter31',
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
    {
      title: 'Git',
      collapsable: false,
      children: [
        'Git/chapter1',
        'Git/chapter2',
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
        'chapter21',
        'chapter22',

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
//react  getreactSidebar
function getreactSidebar () {
  return [
    {
      title: 'React',
      collapsable: false,
      children: [
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
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
      title: '2021年7月',
      collapsable: false,
      children: [
        '2021/July/chapter1'
      ]
    },
    {
      title: '2022年1月',
      collapsable: false,
      children: [
        '2022/January/chapter1'
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
    }
  ]
}

module.exports = barObj