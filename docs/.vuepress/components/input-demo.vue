<template>
    <div>
        <g-input value="leehome"></g-input>
        <g-input readonly value="jay"></g-input>
        <g-input disabled value="eason"></g-input>
        <g-input value="jj" error="不能少于两个字符"></g-input>

    </div>
</template>
<script>
    import Input from "../../../src/input"
    import Icon from "../../../src/icon"
    import Vue from "vue"

    Vue.component('g-icon', Icon)
    export default {
        components: {
            'g-input': Input,
        }
    }
</script>
<style lang="scss" scoped>

</style>