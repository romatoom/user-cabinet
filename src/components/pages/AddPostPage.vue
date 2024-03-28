<template>
  <h1 class="mb-20">Добавить запись</h1>

  <div class="flex-row" style="gap: 15px">
    <div class="form">
      <custom-input
        v-model="formData.name"
        type="text"
        placeholder="Введите имя"
      />

      <custom-input
        v-model="formData.email"
        type="email"
        placeholder="Введите email"
      />

      <label>Пол</label>
      <div class="flex-row">
        <custom-radio v-model="formData.gender" label="Мужской" value="Male" />
        <custom-radio
          v-model="formData.gender"
          label="Женский"
          value="Female"
        />
      </div>

      <custom-textarea
        v-model="formData.message"
        placeholder="Введите сообщение"
      />

      <custom-checkbox
        v-model="formData.confirm"
        label="Согласен на обработку персональных данных"
      />

      <custom-button class="align-right" @click="onSubmitForm">
        Отправить
      </custom-button>
    </div>

    <div class="sended-data">
      <div v-for="[key, value] in Object.entries(sendedData)" :key="key">
        <strong>{{ key }}</strong
        >: {{ value }}
      </div>
    </div>
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
      formData: {
        name: "",
        email: "",
        message: "",
        confirm: true,
        gender: "Male",
      },

      sendedData: {
        name: "",
        email: "",
        message: "",
        confirm: true,
        gender: "Male",
      },
    };
  },

  methods: {
    onSubmitForm() {
      this.sendedData = { ...this.formData };
      this.resetForm();
    },

    resetForm() {
      this.formData = {
        name: "",
        email: "",
        message: "",
        confirm: true,
        gender: "Male",
      };
    },
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

.sended-data {
  width: 50%;
  padding: 20px;
  border: 1px solid var(--grey);
  border-radius: 12px;
  background-color: white;
}
</style>
