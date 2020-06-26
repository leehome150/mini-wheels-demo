<template>
    <div>
        <m-layout>
            <m-header>header</m-header>
            <m-layout>
                <m-sider>sider</m-sider>
                <m-content>content</m-content>
            </m-layout>
            <m-footer>footer</m-footer>
        </m-layout>

    </div>
</template>
<script>

    import header from "../../../src/header"
    import content from "../../../src/content"
    import sider from "../../../src/sider"
    import footer from "../../../src/footer"
    import layout from "../../../src/layout"


    export default {
        components: {
            'm-header': header,
            'm-content': content,
            'm-sider': sider,
            'm-footer': footer,
            'm-layout': layout
        }
    }
</script>
<style lang="scss" scoped>

</style>