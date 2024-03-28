<template>
  <h1 class="mb-20">Добавить запись</h1>

  <div class="form">
    <custom-input v-model="name" type="text" placeholder="Введите имя" />

    <custom-input v-model="email" type="email" placeholder="Введите email" />

    <label>Пол</label>
    <div class="radio-box-row">
      <custom-radio v-model="sex" label="Мужской" value="Male" />
      <custom-radio v-model="sex" label="Женский" value="Female" />
    </div>

    <custom-textarea v-model="message" placeholder="Введите сообщение" />

    <custom-checkbox
      v-model="confirm"
      label="Согласен на обработку персональных данных"
    />

    <custom-button class="align-right"> Отправить </custom-button>
  </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomTextarea from "@/components/UI/CustomTextarea.vue";
import CustomCheckbox from "@/components/UI/CustomCheckbox.vue";
import CustomRadio from "@/components/UI/CustomRadio.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {
    CustomInput,
    CustomTextarea,
    CustomCheckbox,
    CustomRadio,
    CustomButton,
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

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}
</style>
