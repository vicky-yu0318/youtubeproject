<template>
  <div class="block">
    <div>store的語言：{{$store.state.locale}}</div>
    <select name="" id="" :class="[isDark === 'dark' ? darkStyle: '']"
    v-model="$store.state.locale" @click.prevent="setLocale('fr')"
    >
    <!-- v-model="$i18n.locale" -->
     
      <option value="" disabled selected hidden>請選擇語言</option>
      <option :value="item.value" v-for="item in langOptions" :key="item.value">
        {{ item.text }}
      </option>
      <!-- v-for="item in $i18n.availableLocales -->
    </select>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

export default {
  setup() {
    const store = useStore();
    let isDark = computed(() => store.state.isDark)
    const darkStyle = ['bg-black', 'text-blue-300']
    // 全域變數：是否暗黑模式


    const langOptions = reactive([
      {
        text: "English",
        value: "us",
      },
      {
        text: "法文",
        value: "fr",
      }
    ])

    const setLocale = (locale)=> {
      // this.$18n.locale = locale
      store.commit('SET_LANG', locale)
    }

      
    return {
      langOptions,
      isDark,
      darkStyle,
      setLocale
    };
  },
};
</script>
