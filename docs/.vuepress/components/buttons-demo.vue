<template>
    <div>
        <m-button>默认按钮</m-button>
        <m-button icon="setting">设置按钮</m-button>
        <m-button icon="setting" :loading="loading1" @click="loading1=!loading1">点击加载</m-button>
        <m-button disabled>不可点击</m-button>
        <m-button-group>
            <m-button icon="left">上一页</m-button>
            <m-button>更多</m-button>
            <m-button icon="right">下一页</m-button>
        </m-button-group>
    </div>
</template>
<script>
    import Button from "../../../src/button"
    import ButtonGroup from '../../../src/button-group'

    export default {
        components: {
            'm-button': Button,
            'm-button-group': ButtonGroup
        },
        data(){
            return{
                loading1:false
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>