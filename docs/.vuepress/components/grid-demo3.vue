<template>
    <div>
        <m-row>
            <m-col span="8">col-8</m-col>
            <m-col span="8" offset="8">col-8 col-offset-8</m-col>
        </m-row>
        <m-row>
            <m-col span="6" offset="6">col-6 col-offset-6</m-col>
            <m-col span="6" offset="6">col-6 col-offset-6</m-col>
        </m-row>
        <m-row>
            <m-col span="12" offset="6">col-12 col-offset-6</m-col>
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