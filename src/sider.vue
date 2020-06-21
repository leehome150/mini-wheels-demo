<template>
    <transition name="fade">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">X</button>
        </div>
    </transition>
</template>

<script lang="ts">
  export default {
    name: 'sider',
    data() {
      return {
        visible: true
      };
    }
  };
</script>

<style lang="scss" scoped>
    .sider {
        background: #3BA0E9;
        width: 200px;
        position: relative;

        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        margin-left: -200px;
    }
</style>