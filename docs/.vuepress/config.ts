import { defineUserConfig, defaultTheme } from 'vuepress'
import navbar from './conf/navbar-conf'



export default defineUserConfig({
    base: '/',//部署站点的基础路径
    head: [['link', { rel: 'icon', href: 'clxbx6O5YYXPaOb.png' }]],
    lang: 'zh-CN',
    title: '你好， bbzywkq ！',
    description: '这是我的第一个 VuePress 站点',

    theme: defaultTheme({
        colorModeSwitch: true,//是否启动主题颜色切换
        //colorMode: 'light',//默认的主题颜色
        home: '/',//首页路径
        navbar,
        logo:'logo/logo.png',//日间模式logo
        logoDark:'logo/logo-dark.png',//夜间模式logo
        repo:'bbzyalone/myblog',//仓库地址信息
        //repo: 'https://gitlab.com/foo/bar',// 也可直接设置为一个 URL
    })
})

//配置项地址
//https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#repo

