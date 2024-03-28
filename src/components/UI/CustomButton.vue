<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-block;
  padding: 10px;
  width: min-content;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 12px;
  transition: all 0.3s ease;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    color: var(--primary-light);
    border: 1px solid var(--primary-light);
  }
}
</style>
