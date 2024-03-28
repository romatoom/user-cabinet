<template>
  <input type="checkbox" class="custom-checkbox" :checked="modelValue" />
  <label @click="handleInput">{{ label }}</label>
</template>

<script>
export default {
  name: "CustomCheckbox",

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  methods: {
    handleInput() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid var(--light);
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked + label::before {
  border-color: var(--primary);
  background-color: var(--very-light);
  background-image: url("/public/icons/square.svg");
}
</style>
