<template>
  <!-- <p>目前語系{{ $t('header.login') }}</p> -->
  <router-view />
  <!-- 多國語系 -->
  <!-- <p>{{ $t('message') }}</p> -->
</template>

<script>
// 最外層引進，共用
import emitter from './methods/eventBus'
import $httpMessageState from './methods/pushMessageState'

export default {
  // provide格式如data
  provide () {
    return {
      emitter,
      $httpMessageState
    }
  }
}
</script>


