<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'WheelsLayout',
        data() {
            return {
                layoutClass: {
                    hasAside: false
                }
            }
        },

        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'sider') {
                    this.layoutClass.hasAside = true
                }
            })
        }

    };
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        &.hasAside {
            flex-direction: row;
        }
    }

</style>