// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Riyad\'s Blog',
      titleTemplate: '%s - Riyad\'s Blog',
      meta: [{ name: 'description', content: 'Riyad\'s awesome blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://mrsunshine.cn',
    identity: {
      type: 'Person',
    },
    twitter: '@qdnvubp',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
  ],

  css: [
    // 加上 mavon-editor 组件要使用的样式 ++++
    'mavon-editor/dist/css/index.css',
  ],
  plugins: [
    // 客户端渲染，因为markDown需要使用window，所以只能在客户端进行使用
    { src: '~/plugins/mavon-editor', mode: 'client' },
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  runtimeConfig: {
    public: {
      // 公共运行时配置，可以在客户端访问
      apiURL: process.env.NUXT_API_URL,
      // 其他公共配置...
    },
    private: {
      // 私有运行时配置，只能在服务器端访问
      apiKey: process.env.NUXT_API_KEY,
      // 其他私有配置...
    },
  },
  devtools: {
    enabled: true,
  }
})
