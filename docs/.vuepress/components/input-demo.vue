<template>
    <div>
        <m-input value="leehome"></m-input>
        <m-input readonly value="jay"></m-input>
        <m-input disabled value="eason"></m-input>
        <m-input value="jj" error="不能少于两个字符"></m-input>

    </div>
</template>
<script>
    import Input from "../../../src/input"
    import Icon from "../../../src/icon"
    import Vue from "vue"

    Vue.component('m-icon', Icon)
    export default {
        components: {
            'm-input': Input,
        }
    }
</script>
<style lang="scss" scoped>

</style>