module.exports = {
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  title: 'Dublin PC',
  description: 'Computers Repairs in Lucan',
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Language',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Services',
            items: [{
                text: 'Monitor calibration',
                link: '/monitor-colour-calibration-services-dublin/'
              },
              {
                text: 'Windows reinstall',
                link: '/windows-operating-system-reinstall-dublin/'
              },
              {
                text: 'Computer repair services',
                link: '/computer-repair-services/'
              }


            ]
          },
          {
            text: 'Contacts',
            link: '/contacts/'
          }
        ],
        sidebar: {
          '/': [ /* ... */ ],
          '/nested/': [ /* ... */ ]
        }
      },
      '/lt/': {
        selectText: 'Kalba',
        label: 'Lietuvių',
        nav: [{
            text: 'Pradžia',
            link: '/lt/'
          },
          {
            text: 'Paslaugos',
            items: [{
                text: 'Monitoriaus kalibravimas',
                link: '/lt/monitoriaus-spalvu-suderinimas-kalibravimas-dubline/'
              },
              {
                text: 'Windows perinstaliavimas',
                link: '/lt/windows-operacines-sistemos-perinstaliavimas-dubline/'
              }
            ]
          },
          {
            text: 'Kontaktai',
            link: '/lt/kontaktai/'
          },

        ],
        algolia: {},
        sidebar: {
          '/lt/': [ /* ... */ ],
          '/lt/nested/': [ /* ... */ ]
        }
      },
      '/ru/': {
        selectText: 'Язык',
        label: 'Русский',
        nav: [{
            text: 'Начало',
            link: '/ru/'
          },
          {
            text: 'Услуги',
            items: [{
                text: 'Калибровка экрана',
                link: '/ru/kalibrovka-ekrana-komputera-dublin/'
              },
              // {
              //   text: 'Windows perinstaliavimas',
              //   link: '/ru/windows-operacines-sistemos-perinstaliavimas-dubline/'
              // }
            ]
          },
          {
            text: 'Контакты',
            link: '/ru/kontakt/'
          }
        ],
        algolia: {},
        sidebar: {
          '/lt/': [ /* ... */ ],
          '/lt/nested/': [ /* ... */ ]
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
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Dublin PC',
      description: 'ремонт, техническое обслуживание компьютеров, удаление вирусов, калибровка экрана. Телефон 085 733 8886.'
    }
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-15913626-1'
    }],
    '@vuepress/nprogress'
  ]
}