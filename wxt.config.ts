import { defineConfig } from 'wxt';
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    default_locale: 'zh_CN',
    // @see https://developer.chrome.com/docs/extensions/reference/permissions-list
    permissions: [
      'scripting',
      'storage'
    ]
  },
  modules: [
    '@wxt-dev/module-vue',
    '@wxt-dev/i18n/module',
    // '@primevue/nuxt-module'
  ],
  vite() {
    return {
      plugins: [
        Components({
          resolvers: [
            PrimeVueResolver()
          ]
        })
      ]
    }
  },
});
