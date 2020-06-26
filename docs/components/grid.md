---
title: grid-栅格
---
# grid-栅格

24 栅格系统。支持基础栅格、区块间隔、左右偏移、排版以及<strong>响应式</strong>,可方便快捷的实现想要的布局。

### 使用方法



#### 基础栅格

预览
<br>

<ClientOnly>
<grid-demo1></grid-demo1>
</ClientOnly>

代码

```html
<m-row>
    <m-col span="12">col-12</m-col>
    <m-col span="12">col-12</m-col>
</m-row>
<m-row>
    <m-col span="8">col-8</m-col>
    <m-col span="8">col-8</m-col>
    <m-col span="8">col-8</m-col>
</m-row>
<m-row>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
</m-row>
```
<br>

#### 区块间隔
预览
<br>

<ClientOnly>
<grid-demo2></grid-demo2>
</ClientOnly>

代码
```html
<m-row gutter=20>
    <m-col span="12">col-12</m-col>
    <m-col span="12">col-12</m-col>
</m-row>
<m-row gutter=20>
    <m-col span="8">col-8</m-col>
    <m-col span="8">col-8</m-col>
    <m-col span="8">col-8</m-col>
</m-row>
<m-row gutter=20>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
</m-row>
```
<br>

#### 左右偏移

预览
<br>

<ClientOnly>
<grid-demo3></grid-demo3>
</ClientOnly>

代码

```html
<m-row>
    <m-col span="8">col-8</m-col>
    <m-col span="8" offset="8">col-8 col-offset-8</m-col>
    </m-row>
<m-row>
    <m-col span="6" offset="6">col-6 col-offset-6</m-col>
    <m-col span="6" offset="6">col-6 col-offset-6</m-col>
</m-row>
    <m-row>
    <m-col span="12" offset="6">col-12 col-offset-6</m-col>
</m-row>
```
<br>

#### 排版
预览
<br>

<ClientOnly>
<grid-demo4></grid-demo4>
</ClientOnly>

代码
```html
<m-row align="left">
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
</m-row>
<m-row align="right">
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
</m-row>
<m-row align="center">
    <m-col span="6">col-6</m-col>
    <m-col span="6">col-6</m-col>
</m-row>
```
<br>

#### 响应式（默认为移动端）
预览
<br>

<ClientOnly>
<grid-demo5></grid-demo5>
</ClientOnly>

代码
```html
<m-row gutter="20">
    <m-col span='24' :ipad="{span:'12'}"  
     :narrow-pc="{span:'8'}" :pc="{span:'4'}" :wide-pc="{span:'2'}">col
    </m-col>
    <m-col span='0' :ipad="{span:'12'}"
     :narrow-pc="{span:'16'}" :pc="{span:'20'}" :wide-pc="{span:'22'}">col
    </m-col>
</m-row>
```