<template>
    <div>
        <m-row align="left">
            <m-col span="6">col-6</m-col>
            <m-col span="6">col-6</m-col>
        </m-row>
        <m-row align="right">
            <m-col span="6">col-6</m-col>
            <m-col span="6">col-6</m-col>
        </m-row>
        <m-row align="center">
            <m-col span="6">col-6</m-col>
            <m-col span="6">col-6</m-col>
        </m-row>
    </div>
</template>
<script>
    import Row from "../../../src/row"
    import Col from "../../../src/col"

    export default {
        components: {
            'm-row': Row,
            'm-col': Col
        }
    }
</script>
<style lang="scss" scoped>

</style>