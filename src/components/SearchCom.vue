<template>
   <!-- https://ithelp.ithome.com.tw/articles/10268187 -->
    <!-- 可重複利用到小元件 -->
    <input type="text" class="border-[4px]"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue">
</template>
<script>
export default {
    // props: ['modelValue']
    props: {
    modelValue: {
      type: String,
      default: "",
    }
  },
}
</script>