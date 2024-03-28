<template>
  <div class="custom-radio-container" @click="handleClick">
    <input
      type="radio"
      class="custom-radio"
      :checked="isChecked"
      :value="value"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CustomRadio",

  props: {
    modelValue: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  computed: {
    isChecked() {
      return this.modelValue == this.value;
    },
  },

  methods: {
    handleClick() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-radio + label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-radio + label::before {
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

.custom-radio:checked + label::before {
  border-color: var(--primary);
  background-color: var(--very-light);
  background-image: url("/public/icons/square.svg");
}
</style>
