const barObj = require('./config/sideBar.js');
module.exports = {
  head:[
    [
      'script',
      {src:'/live2dw/lib/L2Dwidget.min.js',type:"text/javascript", charset:"UTF-8"},
    ],
    [
      'script',
      {src:'//unpkg.com/valine/dist/Valine.min.js',type:"text/javascript", charset:"UTF-8"},
    ],
    // [
    //   'script',
    //   {src:'/js/adapter.min.js',type:"text/javascript", charset:"UTF-8"},
    // ],
    // [
    //   'html',
    //   {src:'/html/index.html'},
    // ]
  ],
  description: '专注于日常学习与总结',
  title: "",
  // 记录在工作中遇到的一些问题的解决方案以及一些新知识，新技术，和在生活中的一些教育相关问题.
  base: '/',
  themeConfig: {
    title: "Arlene",
    logo: '/logo.jpg',
    editLinks: true,
    docsDir: 'docs',
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        ariaLabel: '前端技术',
        items: [
          { text: 'JS基础', link: '/tech/js/chapter1' },
          { text: 'TypeScript', link: '/tech/ts/' },
          { text: 'Vue3', link: '/tech/vueNext/' },
          { text: 'React', link: '/tech/react/' },
          { text: '博客', link: '/blog/chapter10' },
        ]
      },
      { text: '教育', link: '/edu/chapter1',  },
      { text: '阅读笔记', link: '/read/chapter1', },
      { text: 'ts-axios', link: '/ts-axios/chapter1/' },
    ],
    sidebar: barObj,
    extraWatchFiles: [
      '/docs'
    ]
  },
  dest: './docs/.vuepress/dist',
  globalUIComponents: [
    'live2D',
  ]
}
