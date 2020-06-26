<template>
    <div>
        <m-row gutter="20">
            <m-col span="12">col-12</m-col>
            <m-col span="12">col-12</m-col>
        </m-row>
        <m-row gutter="20">
            <m-col span="8">col-8</m-col>
            <m-col span="8">col-8</m-col>
            <m-col span="8">col-8</m-col>
        </m-row>
        <m-row gutter="20">
            <m-col span="6">col-6</m-col>
            <m-col span="6">col-6</m-col>
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