---
title: layout-布局
---
# layout-布局
协助进行页面级整体布局。支持最常见的几种页面布局，快速的提高开发效率。
### 使用方法

<br>

#### 常见布局1
预览
<br>

<ClientOnly>
<layout-demo1></layout-demo1>
</ClientOnly>

代码

```html
<m-layout>
    <m-header>header</m-header>
    <m-content>content</m-content>
    <m-footer>footer</m-footer>
</m-layout>
```
<br>

#### 常见布局2
预览
<br>

<ClientOnly>
<layout-demo2></layout-demo2>
</ClientOnly>

代码

```html
<m-layout>
    <m-header>header</m-header>
    <m-layout>
        <m-sider>sider</m-sider>
        <m-content>content</m-content>
    </m-layout>
    <m-footer>footer</m-footer>
</m-layout>
```
<br>

#### 常见布局3
预览
<br>

<ClientOnly>
<layout-demo3></layout-demo3>
</ClientOnly>

代码

```html
<m-layout>
    <m-header>header</m-header>
    <m-layout>
        <m-content>content</m-content>
        <m-sider>sider</m-sider>  
    </m-layout>
    <m-footer>footer</m-footer>
</m-layout>
```
<br>

#### 常见布局4
预览
<br>

<ClientOnly>
<layout-demo4></layout-demo4>
</ClientOnly>

代码

```html
<m-layout>
    <m-sider>sider</m-sider>
    <m-layout>
        <m-header>header</m-header>
        <m-content>content</m-content>
        <m-footer>footer</m-footer>
    </m-layout>
</m-layout>
```