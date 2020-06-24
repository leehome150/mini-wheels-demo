---
title: button
---
# button-按钮

按钮用于开始一个即时操作。

### 使用方法

<br>

<ClientOnly>
<buttons-demo></buttons-demo>
</ClientOnly>

```html
<g-button>默认按钮</g-button>
<g-button icon="setting">设置按钮</g-button>
<g-button :loading=true>默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right">下一页</g-button>
</g-button-group>
```