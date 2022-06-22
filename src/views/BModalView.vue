<template>
  <button class="border-4 p-4 bg-blue-100" @click="openBodyFooterModal">打開modal</button>
  <bodyFooterModal ref="bodyFooterModal"></bodyFooterModal>
</template>

<script>
import { ref } from "vue";
import bodyFooterModal from '../components/modal/bodyFooterModal.vue'
import pushMessageState from '../methods/pushMessageState'

export default {
  components: {
    bodyFooterModal,
  },
  setup() {
    const bodyFooterModal = ref(null);
     const openBodyFooterModal = () => {
      bodyFooterModal.value.openModal();
      pushMessageState(false, '來自Bmodal title',  '來自Bmodal content')
    };

    return {
      bodyFooterModal,
      openBodyFooterModal
    };
  },
};
</script>
