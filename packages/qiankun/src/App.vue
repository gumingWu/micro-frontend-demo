<script setup>
import { nextTick } from 'vue';
import { useQiankun } from './qiankun'

nextTick(() => {
  useQiankun()
})
</script>

<template>
  <div>Im Qiankun</div>
  <a href="/app1">app1</a>
  <a href="/app2">app2</a>
  <div id="container"></div>
</template>
