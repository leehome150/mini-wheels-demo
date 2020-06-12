<template>
    <button class="bt" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    };
</script>

<style lang="scss" scoped>

    .bt {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: top;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        > .icon {
            order: 1;
            margin-right: .1em;
        }

        > .content {
            order: 2;
        }

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }

        }
    }
</style>