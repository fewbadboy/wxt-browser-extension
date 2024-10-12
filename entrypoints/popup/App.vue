<script lang="ts" setup>
import { createI18n } from '@wxt-dev/i18n';

const i18n = createI18n();

import HelloWorld from '@/components/HelloWorld.vue';
const msg = ref('test')
const value = ref('')

onMounted(async() => {
  await storage.setItem<string>("local:auth", "Bearer 123456")

  // await browser.runtime.sendMessage({
  //   type: 'request',
  //   data: {
  //     name: 'vue'
  //   }
  // });
  // const port = browser.runtime.connect();
  // port.onMessage.addListener((message) => {
  //   msg.value = `${message.type}: ${message.data.value}`
  // });
  // msg.value = `${i18n.t('hello')} ${i18n.t('ok')}`;

  console.log(await storage.getItem<string>("local:auth"));
  
})

/**
 * Custom Icons
 * @see https://primevue.org/customicons/ 
 */ 
</script>

<template>
  <div class="red">
    <a href="https://wxt.dev" target="_blank">
      <img src="/wxt.svg" class="logo" alt="WXT logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <InputIcon class="pi pi-search" />
  <FloatLabel variant="on">
    <InputText id="username" v-model="msg" />
    <label for="username">Username</label>
  </FloatLabel>
  <HelloWorld msg="WXT + Vue" />
</template>

<style lang="scss" scoped>
.red {
  @apply flex bg-red-500;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
