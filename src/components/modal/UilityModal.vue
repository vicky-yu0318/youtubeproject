<template>
  <div
    class="w-100% h-100% fixed top-0 left-0 z-50 bg-black bg-opacity-50"
    v-show="isModalShow"
  >
    <div class="w-screen h-screen flex justify-center items-center">
      <div
        class="w-11/12 min-w-[300px] max-w-[450px] mx-auto  bg-white rounded-lg shadow-lg
        overflow-hidden"
      >
        <!-- :class="textColor ? textColor : 'text-black'" -->
        <section class="font-bold lg:text-2xl text-center ml-auto bg-blue-100 text-blue-700 py-3">
          <!-- header slot給取用 --> <!-- slot內不能直接寫class --> 
          <slot name="header">header~~~~~</slot>
        </section>
        <!-- body slot給取用 -->
        <section class="mx-auto p-5">
          <slot name="body">Content~~~~</slot>
        </section>
        <!-- footer slot給取用 -->
        <section class="pt-5 text-center">
          <slot name="footer">
            <button
              @click="closeModal"
              class="w-full h-[48px] px-4 py-2 text-white bg-custcolor-primary-blue border-custcolor-primary-blue disabled:opacity-50"
            >
              關閉
            </button>
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  //   props: ["title", "size", "textColor"],
  setup() {
    // 預設先關閉
    const isModalShow = ref(false);

    //===================
    //  *  modal open
    const closeModal = () => {
      isModalShow.value = false;
    };

    const openModal = () => {
      isModalShow.value = true;
    };

    return {
      isModalShow,
      closeModal,
      openModal,
    };
  },
};
</script>
