<template>
    <div>
        <g-row>
            <g-col span="12">col-12</g-col>
            <g-col span="12">col-12</g-col>
        </g-row>
        <g-row>
            <g-col span="8">col-8</g-col>
            <g-col span="8">col-8</g-col>
            <g-col span="8">col-8</g-col>
        </g-row>
        <g-row>
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
            <g-col span="6">col-6</g-col>
        </g-row>
    </div>
</template>
<script>
    import Row from "../../../src/row"
    import Col from "../../../src/col"

    export default {
        components: {
            'g-row': Row,
            'g-col': Col
        }
    }
</script>
<style lang="scss" scoped>

</style>