<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton"
                  @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0

                }
            }
        },
        computed: {
            toastClasses() {
                return [`position-${this.position}`]

            }
        },
        mounted() {
            this.exeAutoClose()
            this.updateStyles()
        },
        methods: {
            exeAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }

    };
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;

        }
        100% {
            opacity: 1;

        }
    }

    .wrapper {
        position: fixed;
        left: 50%;

        &.position-top {
            top: 0;
            transform: translateX(-50%);
            z-index: 21;

            > .toast  {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down .3s;


            }
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);

            > .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up .3s;
            }
        }


        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            animation: fade-in .3s;
        }

    }

    .toast {
        font-size: $font-size;
        min-height: $toast-height;
        line-height: 1.8;
        color: white;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        padding: 0 16px;

    }

    .line {
        border-left: 1px solid #666;
        height: 100%;
        margin-left: 16px;
    }

    .close {
        margin-left: 16px;
        flex-shrink: 0;
    }

    .message {
        padding: 8px 0;
    }


</style>