<template>
    <div>
        <m-row gutter="20">
            <m-col span='24' :ipad="{span:'12'
            }" :narrow-pc="{span:'8'}" :pc="{span:'4'}" :wide-pc="{span:'2'}">
                col
            </m-col>
            <m-col span='0' :ipad="{span:'12'
            }" :narrow-pc="{span:'16'}" :pc="{span:'20'}" :wide-pc="{span:'22'}">
                col
            </m-col>
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