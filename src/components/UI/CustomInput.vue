<template>
  <input class="custom-input" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
  name: "CustomInput",

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input.custom-input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--grey);
}
</style>
