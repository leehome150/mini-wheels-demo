<template>
    <div class="content">
        <slot></slot>
    </div>

</template>

<script lang="ts">
  export default {};
</script>

<style lang="scss" scoped>
    .content {
        min-height: 120px;
        line-height: 120px;
        flex-grow: 1;
        background: #108EE9;
        text-align: center;
    }

</style>