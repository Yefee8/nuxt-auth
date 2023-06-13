export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  runtimeConfig:{
    public:{
      baseUrl: 'http://localhost:3003'
    }
  }
})