module.exports = {
    title: 'MiniWheels UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [{
            title: '入门',
            children: [
                '/install/',
                '/get-started/',
            ]
        },
            {
                title: '组件',
                children: [ '/components/button' ]
            }]
    }
}