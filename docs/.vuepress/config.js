module.exports = {
    base: "/miniwheels-website/",
    title: 'MiniWheels UI',
    description: '一个好用的UI框架',
    theme: 'reco',
    themeConfig: {
        logo: '/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            {text: '首页', link: '/', icon: 'reco-home'},
            {text: '博客', link: 'https://juejin.im/user/5e6ee7836fb9a07cc50f25c5', icon: 'reco-juejin'},
            {text: 'GitHub', link: 'https://github.com/leehome150/mini-wheels-demo', icon: 'reco-github'}
        ],
        sidebar: ['/', {
            title: '入门',
            collapsable: false,
            children: [
                '/install/',
                '/get-started/',
            ]
        },
            {
                title: '组件',
                collapsable: false,
                children: ['/components/grid', '/components/layout', '/components/toast', '/components/input', '/components/button',
                ]
            }]
    }
}