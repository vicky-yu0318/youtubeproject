<template>
  <!--rules參考: https://vee-validate.logaretm.com/v2/guide/rules.html -->
  <!-- https://vee-validate.logaretm.com/v4/guide/global-validators#object-expressions -->
  <!-- playground rules 測試  https://vee-validate.logaretm.com/v4/guide/global-validators#alpha -->
  <!-- UserForm    (一定要slot)-->
  <!-- UserField   (一定要name)(通常v-model. rules) -->
  <!-- UserErrorMessage (一定要name) (用到errors  如 :class="{ invalid: errors['姓名'] }") -->

  <section class="bg-gray-100/[.6]">
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
        <!-- 送出按鈕寫form標籤內，有錯誤訊息會送不出 -->
        <UserForm
          action=""
          class="sm:w-[556px] mx-auto refUserForm"
          @submit="submitForm"
          v-slot="{ errors }"
          ref="refUserForm"
        >
          <!-- 手機號碼 -->
          <div class="block">
            <span class="block text-sm font-medium text-slate-700"
              >手機號碼</span
            >
            <div class="flex w-[100%]">
              <select
                class="block text-sm w-full placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 border border-slate-300 rounded-md shadow-sm x-[20px] py-[13px] mr-[10px] sm:w-[108px] sm:mr-[20px] focus:ring-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                v-model="userData.countryCode"
              >
                <!-- v-model綁定的是value -->
                <option value="+886">+886</option>
                <option value="+99">+99</option>
              </select>

              <!-- rules="required|min:8|max:10" -->
              <!-- :rules="{ min:8, max:10}" -->
              <!-- 只會同時秀一個提示 -->
              <!-- 六角客製提示訊息https://hackmd.io/FFv0a5cBToOATP7uI5COMQ -->

              <UserField
                name="電話"
                v-model="userData.tel"
                :rules="[isPhone]"
                type="string"
                placeholder="請輸入手機號碼"
                class="placeholder:text-[#ddd] block w-[100%] sm:w-[428px] px-[20px] py-[13px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              ></UserField>
            </div>
            <!-- 因為是slot 不用給文字，否則會改掉預設內容 -->
            <!-- name可以帶多國語系變數 -->
            <UserErrorMessage
              name="電話"
              :class="{ invalid: errors['電話'] }"
            ></UserErrorMessage>
          </div>
          <!-- 密碼 -->
          <label class="block pt-[10px]">
            <span class="block text-sm font-medium text-slate-700">密碼</span>
            <input
              type="text"
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
  <div class="container mx-auto">
    <button
      class="bg-blue-300 p-5 border-3 rounded text-white"
      @click="getUserInfo"
    >
      打api
    </button>
    <PracticeFormCom :userData="userData"></PracticeFormCom>
    <!-- 用label 包input span -->
    <!-- empty:hidden -->
    <!-- focus:ring-1 border外線  -->
    <!-- appearance-none 可以讓select 三角形去除 -->
    <label class="block pt-[10px]">
      <span class="block text-sm font-medium text-slate-700">密碼</span>
      <input
        placeholder="請輸入密碼"
        class="block py-[13px] px-[20px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:text-[#333/[.2]] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 sm:w-[556px] w-[100%]"
        :type="oldPasswordType"
        v-model="oldPassword"
      />
    </label>
    <button
      class="h-[48px] mt-7 px-4 py-2 rounded-md text-white bg-custcolor-primary-blue border-custcolor-primary-blue disabled:opacity-50"
      :disabled="invalid"
      @click="isOpen = !isOpen"
    >
      <i class="fa-solid fa-eye" v-show="isOpen"></i>
      <i class="fa-solid fa-eye-slash" v-show="!isOpen"></i>
    </button>
  </div>
  <!-- 舊密碼改新密碼 -->
  <!--oldPassword-->
          <!-- <ValidationProvider name="oldPassword" v-slot="{ failed }" rules="required|password">
            <h2>{{$t('setPassword.old')}}</h2>
            <div class="relative">
              <input class="shadow appearance-none border rounded-md w-full mt-1 py-3 px-3 text-gray-700 bg-custcolor-light-gray leading-tight focus:outline-none focus:ring-2 focus:ring-custcolor-blue focus:border-transparent focus:shadow-outline"
                :class="{ 'is-invalid': failed }"
                :placeholder="$t('setPassword.oldPlaceholder')"
                :type="oldPasswordType" v-model="oldPassword">
              <button class="absolute top-4 right-2" @click="oldisHide = !oldisHide">
                <img :src="require(`~/assets/images/login/ic_show.svg`)" alt="" v-show="!oldisHide">
                <img :src="require(`~/assets/images/login/ic_hide.svg`)" alt="" v-show="oldisHide">
              </button>
            </div>
            <span v-if="failed" class="inline-block text-red-600">{{$t('setPassword.old')}} {{ $t('register.error')}}</span>
          </ValidationProvider> -->
          <form action="" ref="testform">
            <input type="text" class="border-8">
          </form>

</template>

<script>
import PracticeFormCom from "@/components/PracticeFormCom.vue";
import { onMounted, reactive, ref, watch } from "vue";
// (1) 要用的api方法匯入
import { getUserInfoApi } from "@/methods/apiMethods/user";

export default {
  components: {
    PracticeFormCom,
  },
  setup() {
    const showTelList = ref(false);
    const userData = reactive({
      countryCode: "+886",
      tel: "",
    });

    // ================================
    // 抓form dom元素清空資料XX
    const refUserForm = ref(null)

    const submitForm = () => {
      console.log("表單送出");
      console.log(refUserForm.value)
    };

    const testform = ref(null)
    
    onMounted (() => {
      // submitForm()
      // 無法抓veevalidate 的dom
      // console.log(document.querySelector('.refUserForm'))
      // document.querySelector('.refUserForm').resetForm()
      // console.log(testform.value)
    })

    // ================================
    // 驗證表單-手機號碼
    const isPhone = (value) => {
      const phoneNumber = /^(09)[0-9]{8}$/;
      // return phoneNumber.test(value)
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    };

    // ================================
    // 拿會員資料
    // (2) 準備要打api的資料 data (文件中表示只有token是require) 及 function
    // 打api 拿會員資料 (用vicky註冊token測試)
    // {token: '08150893-74ba-409f-813a-7f7e7f4b3986'}
    // const token = computed(() => store.state.user.userToken ) //先帶假的
    const token = ref("08150893-74ba-409f-813a-7f7e7f4b3986");
    // 測試過errorCode＝0

    // (3)透過axiosInstance.js. env拿url api 打出去
    const getUserInfo = async () => {
      try {
        let temp = { token: token.value };
        const { data } = await getUserInfoApi(temp);
        console.log(data);
        // if ( data.errorCode !== 0 ) {
        // store.commit('user/RESET_USERINFO')
        // localStorage.removeItem('token')
        // localStorage.removeItem('invitationCode')
        // router.push({ name: 'index' })
        // }
        // store.commit('user/SET_USERINFO', data.data)
        // prefixName.value = data.data.publicNickname
        // prefixName.value = prefixName.value.charAt(0)
      } catch (error) {
        console.log("error :", error);
      }
    };
    // ==================================================
    // 登入驗證
    // const login = async () => {
    //   try {
    //     let encryptPassword = ref('')
    //     const vaild = await validationObserver.value.validate()
    //     if ( vaild === true ) {
    //       isLoading = true
    //       encryptPassword.value = (sha256(password.value)).toString()
    //       let data = reactive({
    //         countryCode: areaCodeOption.value,
    //         phone: mobile.value,
    //         password: encryptPassword.value,
    //         system: 0
    //       })
    //       // store.dispatch('getUserInfo', data)
    //       const res = await loginApi(data)
    //       // console.log(res.data)
    //       if ( res.data.errorCode !== 0 ) {
    //         passwordErrorNote.value = res.data.errorMsg
    //         passwordError.value = true
    //         return
    //       }
    //       let temp = { token: res.data.data.userToken }
    //       const resData = await getUserInfoApi(temp)
    //       // console.table(resData.data.data)          
    //       store.commit('user/SET_USERTOKEN', res.data.data.userToken)
    //       localStorage.setItem("token", res.data.data.userToken)
    //       store.commit('user/SET_USERINFO', resData.data.data)
    //       localStorage.setItem("invitationCode", resData.data.data.invitationCode)
    //       isLoading = false
    //       if ( res.data.data.userToken !== '' ) {
    //         router.push({ name: 'index' })
    //       }
    //     }
    //   } catch (error) {
    //     console.log('error:', error)
    //   }
    // }


   // ================================

    // 預設input type是password
    // v-if="!showPassword" / v-if="showPassword"  用變數切換顯示圖
    const oldPassword = ref("");
    const isOpen = ref(false);
    const oldPasswordType = ref("text");

    //  (newVal, oldVal)
    // isOpen值是否有變化？有給password 沒有給text 用v-model綁定
    watch(isOpen, (newVal) => {
      setTimeout(() => {
        oldPasswordType.value = newVal ? "password" : "text";
      }, 200);
    });
    // ================================
    return {
      submitForm,
      showTelList,
      userData,
      getUserInfo,
      isPhone,
      // =========
      oldPassword,
      oldPasswordType,
      isOpen,
      testform
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
