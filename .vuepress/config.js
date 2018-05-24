module.exports = {
  title: 'Dublin PC',
  description: 'Computers Repairs in Lucan',
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Home', link: '/'},
          { text: 'Contacts', link: '/contacts/'},
          {
            text: 'Services', 
            items: [
              { text: 'Monitor calibration', link: '/monitor-colour-calibration-services-dublin/' },
              { text: 'Windows reinstall', link: '/windows-operating-system-reinstall-dublin/' }
          ]
          }
        ],
        sidebar: {
          '/': [
            '',
            'contact',
            /* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/lt/': {
        selectText: 'Kalba',
        label: 'Lietuvių',
        nav: [
          { text: 'Pradžia', link: '/lt/#'},
          { text: 'kontaktai', link: '/lt/contacts/'},
          {
            text: 'Paslaugos',
            items: [
              { 
                text: 'Monitoriaus kalibravimas',
                link: '/lt/monitoriaus-spalvu-suderinimas-kalibravimas-dubline/'
              },
              {
                text: 'Windows perinstaliavimas',
                link: '/lt/windows-operacines-sistemos-perinstaliavimas-dubline/'
              }
            ]
          }
        ],
        algolia: {},
        sidebar: {
          '/lt/contacts/': [
            '/lt/windows-operacines-sistemos-perinstaliavimas-dubline/',
            /* ... */],
          '/lt/nested/': [/* ... */]
        }
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Dublin PC',
      description: 'Computers Repairs in Lucan'
    },
    '/lt/': {
      lang: 'lt-LT',
      title: 'Dublin PC',
      description: 'Kompiuterių remontas ir priežiūra Dubline, Airijoje'
    }
  },
  ga: 'UA-15913626-1'
}