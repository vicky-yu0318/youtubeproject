<template>
  <div>
    <div class="flex items-center bg-custcolor-secondary-gray">
      <!-- <nuxt-link to="/account">
        <img src="https://i.picsum.photos/id/866/400/300.jpg?hmac=JMubLT0llOloTrCSJIptm4kmT13cmWrNcdbpI9vJwmw" alt="" />
      </nuxt-link> -->
      <h1 class="lg:text-2xl">title</h1>
    </div>
    <div class="bg-custcolor-secondary-gray w-1/2 mx-auto">
      <div class="flex flex-col mt-3 bg-white border-2 p-8">
        <!-- <ValidationProvider name="暱稱" v-slot="{ failed }" rules="required"> -->
          <h2>nick</h2>
          <input
            class="shadow appearance-none border rounded-md w-full mt-1 py-3 px-3 text-gray-700 bg-custcolor-light-gray leading-tight focus:outline-none focus:ring-2 focus:ring-custcolor-blue focus:border-transparent focus:shadow-outline"
            :class="{ 'is-invalid': failed }"
            type="text"
            v-model="nickName"
          />
          <!-- v-model接收資料 => 再傳遞資料給子層   -->
          <span  class="inline-block text-red-600"
            >nick error</span
          >
        <!-- </ValidationProvider> -->
        <p class="mt-2 text-custcolor-gray">note</p>
        <button
          class="w-full lg:h-[48px] mt-7 px-4 py-2 rounded-md text-white bg-custcolor-primary-blue border-custcolor-primary-blue disabled:opacity-50"
          @click="openModal()"
        >
          submit
        </button>
      </div>
    </div>

    <!-- <nickModal ref="nickModal" nickName="nickName"></nickModal> -->
  </div>

  <button class="border-4 p-5 bg-cyan-200" @click="openFormNickModal">
    打開第一個視窗
  </button>
  <FormNickModal ref="FormNickModal"  ></FormNickModal>
  <!-- :innerNickName="nickName" -->
</template>

<script>
import FormNickModal from "@/components/modal/FormNickModal.vue";
// import pushMessageState from '../methods/pushMessageState'
import { ref } from "vue";

export default {
  components: {
    FormNickModal,
  },
  setup() {

    // ===================================


    const FormNickModal = ref(null);
    const openFormNickModal = () => {
      FormNickModal.value.openModal();
      //   pushMessageState(true, '來自Amodal title',  '來自Amodal content')
    };

    const closeFormNickModal = () => {
      FormNickModal.value.closeModal();
      //   pushMessageState(true, '來自Amodal title',  '來自Amodal content')
    };
    return {
      FormNickModal,
      openFormNickModal,
      closeFormNickModal,
    };
  },
};
</script>
