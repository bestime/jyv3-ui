<script lang="ts">
export default {
  name: 'jy-button',
};
</script>

<template>
  <div class="jy-button">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.jy-button {
  background-color: red;
  color: white;
  display: inline-block;
  padding: 0 10px;
  line-height: 32px;
  user-select: none;
  cursor: pointer;
  transition: 0.15s;
  border-radius: 6px;
  margin: 20px;
  &:hover {
    background-color: rgb(223, 22, 22);
  }
}
</style>
