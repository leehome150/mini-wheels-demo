<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = function (value) {
        let keys = Object.keys(value)
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }

    export default {
        data() {
            return {
                gutter: 0
            }

        },
        computed: {
            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this
                let createClasses = (obj, str = '') => {
                    if (!obj) {
                        return []
                    }
                    let array = []
                    if (obj.span) {
                        array.push(`col-${str}${obj.span}`)
                    }
                    if (obj.offset) {
                        array.push(`offset-${str}${obj.offset}`)
                    }
                    return array


                }
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-')
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'
                }
            },

        },
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {
                type: Object,
                validator,
            },
            narrowPc: {
                type: Object,
                validator,
            },

            pc: {
                type: Object,
                validator,
            },
            widePc: {
                type: Object,
                validator,
            }
        },


    };
</script>

<style lang="scss" scoped>
    .col:nth-child(odd) {
        background: #40ADFF;
    }

    .col:nth-child(even) {
        background: #0092FF;
    }
    .col {
        color:white;
        padding: 8px 0;
        margin-bottom:8px ;
        text-align: center;
        $class-prefix: col-;
        @for $n from 1 through 24 {

            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;

            }
        }
        $class-prefix: offset-;

        @for $n from 1 through 24 {

            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;

            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
        @media (min-width: 1200px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24)*100%
                }
            }
            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24)*100%;
                }
            }
        }
    }
</style>