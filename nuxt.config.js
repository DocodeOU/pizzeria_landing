module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Pizziamo?! Ferrara',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
            {
                hid: 'description',
                name: 'description',
                content: 'Pizze d\'asporto leggere da digerire, pizze integrali, e farinate di ceci consegnate a casa calde in un batter d\'occhio!'
            },
            {name: 'google-site-verification', content: 'iNO2WBGhWPCLeu1sYY-D5QdS9dItiYdSk5sbZJHmwOw'}
        ],
        link: [
            // {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    css: [
        // SCSS file in the project
        '@/assets/css/main.sass'
    ],
    plugins: [
        '~/plugins/vue-scrollto'
    ],
    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/pwa',
        '@bazzite/nuxt-optimized-images'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: {color: '#e30613'},
    generate: {
        fallback: true // if you want to use '404.html'
    },
    router: {
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                // VueScrollTo.scrollTo(to.hash, 700)
                return {selector: to.hash}
            } else return savedPosition ? savedPosition : {x: 0, y: 0}
        }
    },
    sitemap: {
        hostname: 'https://www.pizziamo.net',
        generate: true
    },
    optimizedImages: {
        optimizeImages: true
    }
}
