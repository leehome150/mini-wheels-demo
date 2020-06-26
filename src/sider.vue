<template>
    <transition name="fade">
        <div class="sider">
            <slot></slot>
        </div>
    </transition>
</template>

<script lang="ts">
  export default {
    name: 'sider',
  };
</script>

<style lang="scss" scoped>
    .sider {
        background: #3BA0E9;
        line-height: 120px;
        min-width: 200px;
        text-align: center;

    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        margin-left: -200px;
    }
</style>