module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'Учет сотрудников',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Приложения для учета сотрудников' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    serverMiddleware: [
      // EXPRESS API middleware
      '~/server/index.js'
    ]
}