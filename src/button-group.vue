<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                {
                    if (name !== 'button') {
                        console.warn(`button-group的子元素应该全是g-button，但是你写的事${name}`)
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>

    .button-group {
        display: inline-flex;
        vertical-align: middle;

        > .bt {
            border-radius: 0;

            &:not(:first-child) {

                margin-left: -2px;
            }

            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }

            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>