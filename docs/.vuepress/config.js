module.exports = {
    base: "/MiniWheels-website/",
    title: 'MiniWheels UI',
    description: '一个好用的UI框架',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
            {text: 'GitHub', link: 'https://github.com/leehome150/mini-wheels-demo'}
        ],
        sidebar: [{
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
                children: ['/components/grid','/components/layout','/components/toast','/components/input','/components/button',
                      ]
            }]
    }
}