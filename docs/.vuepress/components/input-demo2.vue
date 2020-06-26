<template>
    <div>
        <m-input v-model.value="message"></m-input>
        <br/>
        {{message}}
    </div>
</template>
<script>
    import Input from "../../../src/input"
    import Icon from "../../../src/icon"
    import Vue from "vue"

    Vue.component('m-icon', Icon)
    export default {
        data() {
            return {
                message: "support"
            }

        },
        components: {
            'm-input': Input,
        }
    }
</script>
<style lang="scss" scoped>

</style>