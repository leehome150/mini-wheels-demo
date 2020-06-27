<template>
    <div>
<m-layout>
    <m-header>header</m-header>
    <m-content>content</m-content>
    <m-footer>footer</m-footer>
</m-layout>

    </div>
</template>
<script>

    import Header from "../../../src/header"
    import Content from "../../../src/content"
    import Sider from "../../../src/sider"
    import Footer from "../../../src/footer"
    import Layout from "../../../src/layout"


    export default {
        components: {
            'm-header': Header,
            'm-content': Content,
            'm-sider': Sider,
            'm-footer': Footer,
            'm-layout': Layout
        }
    }
</script>
<style lang="scss" scoped>

</style>