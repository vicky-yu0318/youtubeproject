<template>
  <UtilityModal ref="bodyFooterModal">
    <template v-slot:header>
      <div v-for="(item, key) in messages" :key="key">
        <div class="flex items-center justify-between">
            <div v-text="item.title" :style="{ color: item.titleStyle }"></div>
            <div class="fas fa-times cursor-pointer" @click="closeModal"></div>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div v-for="(item, key) in messages" :key="key">
        <div v-text="item.content" :style="{ color: item.contentStyle }"></div>
      </div>
    </template>
    <template v-slot:footer>
        <!-- 不用預設，就給空標籤 -->
        <div></div>
    </template>
    
    <!-- 所有code必須包在元件內，用template包覆 -->
  </UtilityModal>
</template>

<script>
import UtilityModal from "./UilityModal.vue";
import { onMounted, ref, inject, reactive } from "vue";

export default {
  components: {
    UtilityModal,
  },
  setup() {
    const bodyFooterModal = ref(null);
    const closeModal = () => {
      // 用utilitymodal(ref)方法
      bodyFooterModal.value.closeModal();
    };
    // =============================================
    // 引入app.vue 的mitt方法，才可被觸發監聽
    // inject:['emitter'],
    // https://blog.logrocket.com/provide-inject-vue-js-3-composition-api/
    const messages = reactive([]);

    const emitter = inject("emitter");
    onMounted(() => {
      emitter.on("push-message", (message) => {
        console.log("toastMessage.vue被觸發了", message);
        const { title, titleStyle , content , contentStyle} = message;
        messages.push({ title, titleStyle, content, contentStyle });
        // this.toastShow();
      });
    });

    return {
      bodyFooterModal,
      closeModal,
      emitter,
      messages,
    };
  },
};
</script>
