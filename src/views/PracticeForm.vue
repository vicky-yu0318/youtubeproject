<template>
  <!-- UserForm    (一定要slot)-->
  <!-- UserField   (一定要name)(通常v-model. rules) -->
  <!-- UserErrorMessage (一定要name) (用到errors  如 :class="{ invalid: errors['姓名'] }") -->

  <section class="h-[100vh]">
    <!-- w-[68%] 改寫死-->
    <div class="w-[90%] mx-auto">
      <div class="py-[218px]">
        <div class="block-txt text-center pb-[32px]">
          <h2 class="text-[36px] text-custcolo r-primary/[.88] pb-[10px]">
            帳戶登入
          </h2>
          <span class="block text-custcolor-gray/[.3]"
            >歡迎回來！ 請使用您的電話號碼來登入</span
          >
        </div>
        <UserForm action="" class="sm:w-[556px] mx-auto" @submit="submitForm"
        v-slot="{ errors }">
          <!-- 手機號碼 -->
          <div class="block">
            <span class="block text-sm font-medium text-slate-700"
              >手機號碼</span
            >
            <div class="flex w-[100%]">
              <select
                class="block text-sm w-full placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                border border-slate-300 rounded-md shadow-sm x-[20px] py-[13px] mr-[10px] sm:w-[108px] sm:mr-[20px]
                focus:ring-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              >
              <option value="">+886</option>
              <option value="">+99</option>
              </select>

              <UserField
                name="電話"
                v-model="userData.tel"
                rules="required|min:8|max:10"
                type="string"
                placeholder="請輸入手機號碼"
                class="placeholder:text-[#ddd] block w-[100%] sm:w-[428px] px-[20px] py-[13px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              ></UserField>
            </div>
            <UserErrorMessage name="電話" :class="{ invalid: errors['電話'] }" class="text-blue-600" >錯誤訊息</UserErrorMessage>
            <UserErrorMessage name="電話" class="text-blue-600" >錯誤訊息</UserErrorMessage>
          </div>
          <!-- 密碼 -->
          <label class="block pt-[10px]">
            <span class="block text-sm font-medium text-slate-700">密碼</span>
            <input
              type="number"
              value="+886"
              placeholder="請輸入密碼"
              class="block py-[13px] px-[20px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:w-[556px] w-[100%] placeholder:text-[#ddd]"
            />
            <!-- invisible peer-invalid:visible -->
            <p class="mt-2 text-custcolor-secondary text-sm">忘記密碼</p>
          </label>
          <!-- 登入按鈕 -->
          <button
            class="bg-custcolor-main rounded w-[100%] mt-[33px] py-[13px] text-white"
          >
            登入
          </button>
          <p class="text-center pt-[20px] text-custcolor-primary/[.8]">
            還沒有帳號嗎？
            <a href="" class="text-custcolor-secondary">立即註冊</a>
          </p>
        </UserForm>
        <!-- 預設input沒有外框  type為num 有上下鈕 -->
        <!-- <select name="" id="" class="border-[3px] border-blue-300">
          <option value="">11111</option>
          <option value="">11111</option>
          <option value="">11111</option>
          <option value="">11111</option>
        </select> -->
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const showTelList = ref(false);
    // 需要表單資料
    const userData = reactive({
        countryCode: '',
        tel: '0988',
      }
    )

    const submitForm = () => {
      console.log("表單送出");
    };

    return {
      submitForm,
      showTelList,
      userData
    };
  },
};
</script>

<style scoped>
  .invalid {
      color: red;
      font-weight: 600;
  }
</style>
