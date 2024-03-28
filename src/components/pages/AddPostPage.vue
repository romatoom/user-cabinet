<template>
  <h1 class="mb-20">Добавить запись</h1>

  {{ sex }}

  <custom-input v-model="name" type="text" placeholder="Введите имя" />

  <custom-input v-model="email" type="email" placeholder="Введите email" />

  <custom-textarea v-model="message" placeholder="Введите сообщение" />

  <custom-checkbox
    v-model="confirm"
    label="Согласен на обработку персональных данных"
  />

  <div class="radio-box">
    Пол
    <custom-radio v-model="sex" label="Мужской" value="Male" />
    <custom-radio v-model="sex" label="Женский" value="Female" />
  </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomTextarea from "@/components/UI/CustomTextarea.vue";
import CustomCheckbox from "@/components/UI/CustomCheckbox.vue";
import CustomRadio from "@/components/UI/CustomRadio.vue";

export default {
  components: {
    CustomInput,
    CustomTextarea,
    CustomCheckbox,
    CustomRadio,
  },

  data() {
    return {
      name: "",
      email: "",
      message: "123",
      confirm: true,
      sex: "Male",
    };
  },
};
</script>
