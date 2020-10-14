const {blogSideBar, abstractSideBar} = require('./readdir')

module.exports = {
  title: 'YiDaCloud',
  description: '配置化ERP',
  base: '/', // github
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  base: '/', // 这是部署到github相关的配置
  port: 4396,
  extraWatchFiles: [
    '.vuepress/config.js', // 使用相对路径
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135701184-2' 
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', 
      {
        locale: 'zh',
        platform: 'github',
        owner: 'imlinhe',
        repo: 'imlinhe.github.io',
        clientId: 'fae53e244022d47c67b5',
        clientSecret: '5e889a5769ce43575d4e0425ae63c5b97db4e720',
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    smoothScroll: true, // 启动页面滚动
    logo: '/logo.png',
    nav:[
      { text: 'Home', link: '/'},
      { text: '组件', link: '/pages/blog/' },
      { text: '文档', link: '/pages/abstract/'},
    ],
    sidebar: {
      '/pages/blog/': blogSideBar,
      '/pages/abstract/': abstractSideBar
    }
  }
}
