<template>
  <h1 class="mb-20">Добавить запись</h1>

  <custom-input v-model="name" type="text" placeholder="Введите имя" />

  <custom-input v-model="email" type="email" placeholder="Введите email" />

  <custom-textarea v-model="message" placeholder="Введите сообщение" />

  <custom-checkbox
    v-model="confirm"
    label="Согласен на обработку персональных данных"
  />
</template>

<script>
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomTextarea from "@/components/UI/CustomTextarea";
import CustomCheckbox from "@/components/UI/CustomCheckbox";

export default {
  components: {
    CustomInput,
    CustomTextarea,
    CustomCheckbox,
  },

  data() {
    return {
      name: "",
      email: "",
      message: "123",
      confirm: true,
    };
  },
};
</script>
