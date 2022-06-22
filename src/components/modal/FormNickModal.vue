<template>
  <!-- 打api 在這做  props放子層 -->
  <div>
    <div class="w-100% h-100% fixed top-0 left-0 z-50 bg-black bg-opacity-50 table" v-show="isModalShow">
      <div class="w-screen h-screen flex justify-center items-center">
        <div class="w-11/12 min-w-[300px] max-w-[450px] mx-auto my-0 px-7 py-5 bg-white rounded-lg shadow">
          <section class="relative pb-[10px]">
            <div class="text-black font-bold	lg:text-2xl text-center ml-auto">確認送出嗎？</div>
          </section>

          <section class="mx-auto my-5">
            <div class="text-custcolor-light-primary">
              內容
            </div>
          </section>

        <!-- 特別有api -->
          <section class="pt-5 text-center">
            <div>
              <button class="w-[108px] h-[48px] ml-2 px-4 py-2 rounded-md text-custcolor-primary-blue bg-white border-[1px] border-custcolor-primary-blue disabled:opacity-50"
                @click="closeModal">cancel
              </button>
              <button class="w-[108px] h-[48px] ml-2 px-4 py-2 rounded-md text-white bg-custcolor-primary-blue border-custcolor-primary-blue disabled:opacity-50"
                @click="submit"
                >submit
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- 輸入完表單資料後，成功或失敗的回傳視窗（第二個） -->
    <bodyFooterModal ref="bodyFooterModal" ></bodyFooterModal>

  </div>
</template>

<script>
import { ref, computed  } from 'vue'
import { useStore } from 'vuex'
import bodyFooterModal from './bodyFooterModal.vue'
import pushMessageState from '@/methods/pushMessageState'
// import { modifyNicknameApi } from '@/methods/apiMethods/user'

export default {
  components: {
    bodyFooterModal,
  },
  // props: {
  //   innerNickName: String,
  //   default: null
  // },
  setup() {
    // props, {}
    // const { innerNickName } = toRefs(props)
    // console.log(props.innerNickName)
    const store = useStore()

    //===========================
    //  * 彈跳視窗處理(第一個)
    const isModalShow = ref(null)
    const closeModal = () => {
      isModalShow.value = false
    }
    const openModal = () => {
      isModalShow.value = true
    }

    // * 彈跳視窗處理(第二個)
    const bodyFooterModal = ref(null)
    const openBodyFooterModal = () => {
      bodyFooterModal.value.openModal();
      pushMessageState(true, '來自form 第二個彈跳視窗')
    }

    const submit = async () => {
      console.log('submit');
      // 送出後=> 建立要傳送的資料變數 => 使用從methods 引進來的方法集user.js，"準備" 打api return req("post", 'api/addModifyUserNickname', data) 給資料(還沒給api path)
      // => 依據axiosInstance.js  已定義好內容。透過api站點 api 開打
      // pushMessageState(true, '來自form 第二個彈跳視窗')
      // let temp =  { nickname: 'vicky',  token: 3333 }
      // const { data } = await modifyNicknameApi(temp)
      // console.log(data);
    }
    //==================================

    //  * 表單驗證處理
    const token = computed( () => store.state.user.userToken)
    const nickNameChange = computed( () => store.state.user.nickNameChange )

    // const submit = async () => {
    //   // openModal()
      // try {
      //   if ( nickNameChange.value === true ) {
      //     alert('已修改過')
      //     return
      //   }
      //   if ( nickNameChange.value === false ) {
      //     let temp = { nickname: props.nickName,  token: token.value }
      //     const { data } = await modifyNicknameApi(temp)
      //     console.log(data)
      //     if ( data.status === 1 ) {
      //       store.commit('user/SET_NICKNAME', props.nickName)
      //       openNickSuccessModal()
      //     }
      //   }
      // } catch (error) {
      //   console.log('error:', error)
      // }
    // }
    //===================================


    return {
      isModalShow,
      closeModal,
      openModal,
      token,
      nickNameChange,
      submit,
      bodyFooterModal,
      openBodyFooterModal
    }
  }
}
</script>
