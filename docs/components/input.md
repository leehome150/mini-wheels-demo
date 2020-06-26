---
title: input-输入
---
# input-输入

通过鼠标或键盘输入内容，是最基础的表单域的包装。支持v-model双向绑定。

### 使用方法

<br>

预览
<br>

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

代码

```html
<m-input value="leehome"></m-input>
<m-input readonly value="jay"></m-input>
<m-input disabled value="eason"></m-input>
<m-input value="jj" error="不能少于两个字符"></m-input>
```

### 双向绑定 
<br>

预览
<br>

<ClientOnly>
<input-demo2></input-demo2>
</ClientOnly>

代码

```html
<m-input v-model.value="message"></m-input>
<br/>
{{message}}
```