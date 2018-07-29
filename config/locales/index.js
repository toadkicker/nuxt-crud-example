module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json'
    }
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: true
  },
  langDir: 'config/locales/',
  parsePages: false,
  pages: {},
  vueI18n: {
    fallbackLocale: 'en'
  }
}