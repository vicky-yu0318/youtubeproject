<template>
    <button class="border-4 p-5 bg-cyan-200">打開第一個視窗</button>
    <FormNickModal ref="FormNickModal"></FormNickModal>
</template>

<script>
import FormNickModal from '@/components/modal/FormNickModal.vue'
// import pushMessageState from '../methods/pushMessageState'
import { ref } from 'vue'

export default {
    components: {
        FormNickModal
    },
    setup() {
    const FormNickModal = ref(null);
    const openFormNickModal = () => {
      FormNickModal.value.openModal();
    //   pushMessageState(true, '來自Amodal title',  '來自Amodal content')
    }

    return {
      FormNickModal,
      openFormNickModal
    };
  },
}
</script>