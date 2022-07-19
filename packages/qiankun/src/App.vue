<script setup>
import { nextTick } from 'vue';
import { useQiankun } from './qiankun'

nextTick(() => {
  useQiankun()
})
</script>

<template>
  <div>Im Qiankun</div>
  <div id="container"></div>
</template>
