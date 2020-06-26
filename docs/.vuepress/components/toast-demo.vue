<template>
    <div>
        <button @click="showToast('top')">上方弹出</button>
        <button @click="showToast('middle')">中间弹出</button>
        <button @click="showToast('bottom')">下方弹出</button>

    </div>
</template>
<script>

    import Toast from "../../../src/toast"
    import Vue from "vue"
    import plugin from "../../../src/plugin"

    Vue.use(plugin)


    export default {
        components: {
            'm-toast': Toast
        },
        methods: {
            showToast(position) {
                this.$toast('弹出内容', {
                    closeButton: {
                        text: '关闭',
                        callback: () => {
                        }
                    },
                     enableHtml: false,
                    position:position
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
button{
    padding: 6px 14px;
    font-size:14px ;
    background: white;
    border: 1px solid #999;
    border-radius: 4px;
    &:active {
        background-color: #eee;
    }

    &:focus {
        outline: none;
    }
}
</style>