<template>
    <div class="wrapper" :class="{'error':error}">
        <label>
            <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
                   @change="$emit('change',$event.target.value)"
                   @input="$emit('input',$event.target.value)"
                   @focus="$emit('focus',$event.target.value)"
                   @blur="$emit('blur',$event.target.value)"></input>
            <template v-if="error">
                <m-icon name="error" class="icon-error"></m-icon>
                <span class="errorMessage">{{error}}</span>
            </template>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
            }
        }
    };
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #333;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        &.error {
            > label > input {
                border-color: $red;
            }

        }

        > label > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;

            &:last-child {
                margin-bottom: 8px;

            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;

            }

            &[readonly] {
                border-color: #999;
                color: #999;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>