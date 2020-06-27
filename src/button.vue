<template>
    <button class="bt" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <m-icon class="icon" v-if="icon&&!loading" :name="icon"></m-icon>
        <m-icon class="icon loading" name="loading" v-if="loading"></m-icon>
        <div class="content2">
            <slot/>
        </div>

    </button>
</template>

<script>
    import Icon from './icon'

    export default {

        components: {
            'm-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                default: false,
                type: Boolean,
            },
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
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $button-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .bt {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $button-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        vertical-align: top;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        > .loading {
            animation: spin 1.5s infinite linear;
        }

        > .icon {
            order: 1;
            margin-right: .1em;
        }

        > .content2 {
            order: 2;
        }

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
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