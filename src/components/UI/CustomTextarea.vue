<template>
  <div class="custom-textarea-container">
    <span class="letters-count">Символов: {{ lettersCount }}</span>

    <textarea
      class="custom-textarea"
      :value="modelValue"
      @input="handleInput"
      :style="{ width, height }"
    />
  </div>
</template>

<script>
export default {
  name: "CustomTextarea",

  data() {
    return {
      lettersCount: this.modelValue.length,
    };
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },

    width: {
      type: String,
      default: "100%",
    },

    height: {
      type: String,
      default: "400px",
    },
  },

  emits: ["update:modelValue"],

  methods: {
    handleInput(event) {
      const text = event.target.value;
      this.lettersCount = text.length;
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-textarea-container {
  display: flex;
  flex-direction: column;

  & > textarea.custom-textarea {
    padding: 10px;
    border: 1px solid var(--grey);
  }

  & > .letters-count {
    font-size: 12px;
    color: var(--grey);
    margin-bottom: 5px;
  }
}
</style>
