---
title: toast-弹出
---
# toast-弹出

toast通过屏幕上的消息提供有关操作的简短反馈。可支持弹出内容内容为HTML（enableHtml改为true即可实现）。弹出内容默认5s后自动关闭，可也手动点击关闭。

### 使用方法
预览
<br>

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

代码

```html
<button @click="showToast('top')">上方弹出</button>
<button @click="showToast('middle')">中间弹出</button>
<button @click="showToast('bottom')">下方弹出</button>

```
```js
export default{
    methods: {
            showToast(position) {
                this.$toast('弹出内容', {
                    closeButton: {
                        text: '关闭',
                        callback: () => {
                        }
                    },
                     enableHtml: false,
                    position,
                })
            }
        }
}
```