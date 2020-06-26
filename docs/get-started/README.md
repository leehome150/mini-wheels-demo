---
title: 快速上手
---

# 快速上手

### JS(全局)引用

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

### 模块化引用

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

tips：使用本框架前，请在 CSS 中开启 border-box
```css
*,*::before,*::after{
box-sizing:border-box;
}
```