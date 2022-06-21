<template>
  <bodyFooterModal ref="bodyFooterModal"></bodyFooterModal>
</template>

<script>
import { onMounted, ref } from "vue";
import bodyFooterModal from '../components/modal/bodyFooterModal.vue'
import pushMessageState from '../methods/pushMessageState'

export default {
  components: {
    bodyFooterModal,
  },
  setup() {
    const bodyFooterModal = ref(null);
    const openUtilityModal = () => {
      bodyFooterModal.value.openModal();
    };
    onMounted(() => {
        pushMessageState(false, '來自success新title')
    })

    return {
      bodyFooterModal,
      openUtilityModal
    };
  },
};
</script>
