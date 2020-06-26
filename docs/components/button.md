---
title: button-按钮
---
# button-按钮

按钮用于开始一个即时操作。选择了几种最常见的几种按钮：默认按钮、设置按钮、加载按钮、分页按钮等。

### 使用方法

 
 预览
<br>

<ClientOnly>
<buttons-demo></buttons-demo>
</ClientOnly>

代码
```html
<m-button>默认按钮</m-button>
<m-button icon="setting">设置按钮</m-button>
<m-button icon="setting" :loading="loading1" @click="loading1=!loading1">点击加载</m-button>
<m-button disabled>不可点击</m-button>
<m-button-group>
      <m-button icon="left">上一页</m-button>
      <m-button>更多</m-button>
      <m-button icon="right">下一页</m-button>
</m-button-group>
```