# MiniWheels 一个 Vue UI 组件
[![Build Status](https://travis-ci.org/leehome150/mini-wheels-demo.svg?branch=master)](https://travis-ci.org/leehome150/mini-wheels-demo)

作者: leehome

## 介绍
这是我在学习Vue过程中做的一个UI框架，希望对你有帮助。

## 开始使用
1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box
    
    ```
    *,*::before,*::after{
    box-sizing:border-box;
    }
    ```
    IE 8及以上浏览器都支持此样式。
   
2. 安装 miniwheels-demo 
    ```sh
    npm i --save miniwheels-demo 
    
    # or
    
    yarn add miniwheels-demo
    ``` 
3. 引入 miniwheels-demo
     JS(全局)引用
    
    ```js
    import Vue from "vue"
    import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin} from 'miniwheels-demo'
    Vue.component('m-button', Button)
    Vue.component('m-icon', Icon)
    Vue.component('m-button-group', ButtonGroup)
    Vue.component('m-input', Input)
    Vue.component('m-row', Row)
    Vue.component('m-col', Col)
    Vue.component('m-layout', Layout)
    Vue.component('m-header', Header)
    Vue.component('m-footer', Footer)
    Vue.component('m-sider', Sider)
    Vue.component('m-content', Content)
    Vue.component('m-toast', Toast)
    Vue.use(plugin)
    ```
    
     模块化引用
    
    ```js
    import Vue from "vue"
    import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin} from 'miniwheels-demo'
    Vue.use(plugin)
    export default {
        components: {'m-button-group': ButtonGroup,
            'm-button': Button,
            'm-icon': Icon,
            'm-input': Input,
            'm-row': Row,
            'm-col': Col,
            'm-layout': Layout,
            'm-header': Header,
            'm-content': Content,
            'm-sider': Sider,
            'm-footer': Footer,
            'm-toast': Toast,
        }
    }
    ```
## 文档

具体文档可参考[VuePress官方文档](https://vuepress.vuejs.org/zh/)

## 提问

## 变更记录 

## 联系方式

## 贡献代码

