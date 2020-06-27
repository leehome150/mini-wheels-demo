<template>
    <div class="content1">
        <slot></slot>
    </div>

</template>

<script lang="ts">
  export default {};
</script>

<style lang="scss" scoped>
    .content1 {
        min-height: 120px;
        line-height: 120px;
        flex-grow: 1;
        background: #108EE9;
        text-align: center;
    }

</style>