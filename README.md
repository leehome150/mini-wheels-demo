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
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
     html {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --button-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    ```
    IE 15及以上浏览器都支持此样式。
2. 安装 miniwheels-demo 
    ```
    npm i --save miniwheels-demo
    ```   
3. 引入 miniwheels-demo
    ```
    import { ButtonGroup, Button, Icon } from "miniwheels-demo";
    
    export default {
      components: {
        "g-button": Button,
      },
    ```
## 文档

## 提问

## 变更记录 

## 联系方式

## 贡献代码

