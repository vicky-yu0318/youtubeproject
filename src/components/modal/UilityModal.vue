<template>
  <div
    class="w-100% h-100% fixed top-0 left-0 z-50 bg-black bg-opacity-50"
    v-show="isModalShow"
  >
    <div class="w-screen h-screen flex justify-center items-center">
      <div
        class="w-11/12 min-w-[300px] max-w-[450px] mx-auto my-0 px-7 py-5 bg-white rounded-lg shadow-lg"
      >
        <!-- :class="size" -->
        <!-- header slot給取用 -->
        <section class="relative pb-[10px]">
          <slot name="header" class="font-bold lg:text-2xl text-center ml-auto"
            >header~~~~~</slot
          >
          <!-- :class="textColor ? textColor : 'text-black'" -->
        </section>
        <!-- body slot給取用 -->
        <section class="mx-auto my-5">
          <slot name="body">Content~~~~</slot>
        </section>
        <!-- footer slot給取用 -->
        <section class="pt-5 text-center">
          <slot name="footer">
            <button
              @click="closeModal"
              class="w-full h-[48px] px-4 py-2 rounded-md text-white bg-custcolor-primary-blue border-custcolor-primary-blue disabled:opacity-50"
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
    const isModalShow = ref(true);

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
