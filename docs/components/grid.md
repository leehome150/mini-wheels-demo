---
title: grid
---
# grid-栅格

24 栅格系统。

### 使用方法

<br>

#### 基础栅格

<ClientOnly>
<grid-demo1></grid-demo1>
</ClientOnly>

```html
<g-row>
    <g-col span="12">col-12</g-col>
    <g-col span="12">col-12</g-col>
</g-row>
<g-row>
    <g-col span="8">col-8</g-col>
    <g-col span="8">col-8</g-col>
    <g-col span="8">col-8</g-col>
</g-row>
<g-row>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
</g-row>
```

#### 区块间隔

<ClientOnly>
<grid-demo2></grid-demo2>
</ClientOnly>

```html
<g-row gutter=20>
    <g-col span="12">col-12</g-col>
    <g-col span="12">col-12</g-col>
</g-row>
<g-row gutter=20>
    <g-col span="8">col-8</g-col>
    <g-col span="8">col-8</g-col>
    <g-col span="8">col-8</g-col>
</g-row>
<g-row gutter=20>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
</g-row>
```

#### 左右偏移

<ClientOnly>
<grid-demo3></grid-demo3>
</ClientOnly>

```html
<g-row>
    <g-col span="8">col-8</g-col>
    <g-col span="8" offset="8">col-8 col-offset-8</g-col>
    </g-row>
<g-row>
    <g-col span="6" offset="6">col-6 col-offset-6</g-col>
    <g-col span="6" offset="6">col-6 col-offset-6</g-col>
</g-row>
    <g-row>
    <g-col span="12" offset="6">col-12 col-offset-6</g-col>
</g-row>
```

#### 排版

<ClientOnly>
<grid-demo4></grid-demo4>
</ClientOnly>

```html
<g-row align="left">
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
</g-row>
<g-row align="right">
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
</g-row>
<g-row align="center">
    <g-col span="6">col-6</g-col>
    <g-col span="6">col-6</g-col>
</g-row>
```

#### 响应式（默认为移动端）

<ClientOnly>
<grid-demo5></grid-demo5>
</ClientOnly>

```html
<g-row gutter="20">
    <g-col span='24' :ipad="{span:'12'}"  
     :narrow-pc="{span:'8'}" :pc="{span:'4'}" :wide-pc="{span:'2'}">col
    </g-col>
    <g-col span='0' :ipad="{span:'12'}"
     :narrow-pc="{span:'16'}" :pc="{span:'20'}" :wide-pc="{span:'22'}">col
    </g-col>
</g-row>
```