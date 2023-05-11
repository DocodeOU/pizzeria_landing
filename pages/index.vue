<template lang="pug">
#index
    .hero-container
        .hero-section
            img.logo-pizzeria(src='/img/logopizzeria.svg')
            h2.sottotitolo
                | Subito.. a casa tua. Pizze d'asporto leggere da digerire, pizze integrali, e farinate di ceci consegnate a casa
                | calde in un batter d'occhio!
            .container-hero-actions
                a.action-online-order(href='https://wbpp.it/so/?900') Ordina online
                a(href='tel:3441617042') 344 1617042
                a(href='tel:0532756053') 0532 756053
    a.down-arrow.hide-sm(v-scroll-to="'#titolo-scoprici'")
        i.icon.icon-2x.icon-downward
    h1#titolo-scoprici.titolo Scoprici
    .columns
        .columns.col-10.col-mx-auto
            .col-4.col-sm-12
                a(href='/volantino')
                    .panel
                        .panel-body
                            img.small-image(alt='Immagine pizza', src='/img/menu.svg')
                        .panel-footer
                            | Visualizza il
                            br
                            b Volantino
            .col-4.col-sm-12
                a(href='/impasto-integrale')
                    .panel.pannello-marginato
                        .panel-body
                            img.small-image(alt='Immagine grano', src='/img/wheat.svg')
                        .panel-footer
                            | Scopri il nostro
                            br
                            b Impasto Integrale
            .col-4.col-sm-12
                a(href='/team')
                    .panel.pannello-marginato
                        .panel-body
                            img.small-image(alt='Immagine Cecio', src='/img/chef.svg')
                        .panel-footer
                            | Conosci il
                            br
                            b Team
    h1.titolo Dove consegniamo
    .sezione.columns
        .col-6.col-sm-12
            #map
        h4.col-4.col-sm-12.testo
            | Consegniamo a domicilio a Ferrara, Boara, Malborghetto, Baura, Cocomaro, Contrapò, Focomorto, Francolino, Pontegradella e... chi più
            | ne ha più ne metta.
    .footer.columns.col-gapless
        h2.buoni-pasto Accettiamo i Buoni Pasto!
        .column.col-9.columns.col-gapless
            .col-4.col-sm-12
                .footer__title Contatti
                a.footer__text(href='tel:0532756053') 0532 756053
                .footer__text P. IVA 01708770381
            .col-8.col-sm-12
                .footer__title Vieni a trovarci
                a.footer__text(href='geo:44.8379351,11.660618;') Via Pontegradella, 289/a Ferrara
                p.footer__text Tutti i giorni 17:00 - 22:00
                a(href="https://www.iubenda.com/privacy-policy/18719653" class="iubenda-white iubenda-embed" title="Privacy Policy ") Privacy Policy
        .column.col-3
            a.social-logo(href='https://www.tripadvisor.it/Restaurant_Review-g194760-d9561963-Reviews-Pizziamo-Ferrara_Province_of_Ferrara_Emilia_Romagna.html', target='_blank')
                img(alt='Logo Tripadvisor', src='/img/tripadvisor-logotype.svg')
            a.social-logo(href='https://www.facebook.com/pizziamo.pontegradella/', target='_blank')
                img(alt='Logo Facebook', src='/img/facebook-app-logo.svg')
        .footer__copyright Sviluppato da #[a(href='https://docode.it', target='_blank') Docode] © {{ new Date().getFullYear() }}
</template>
<script>
export default {

     created() {
         const injectScript = (src) =>
             new Promise((resolve, reject) => {
                 const script = document.createElement('script')
                 script.async = true
                 script.defer = true
                 script.src = src
                 script.addEventListener('load', resolve)
                 script.addEventListener('error', () => reject('Error loading script.'))
                 script.addEventListener('abort', () => reject('Script loading aborted.'))
                 document.head.appendChild(script)
             })

         setTimeout(async () => {
            await injectScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC8E-lngnAUZuNIljFST8kJwVpPuZxnfKA')

            const pizzeria = {lat: 44.8378946, lng: 11.6606791}
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: pizzeria
            })
            new google.maps.Marker({
                position: pizzeria,
                map: map
            })
        }, 2000)

         setTimeout(async () => {
             await injectScript('https://www.googletagmanager.com/gtag/js?id=UA-164647899-1')

             window.dataLayer = window.dataLayer || [];
             window.gtag = function gtag() {
                 dataLayer.push(arguments);
             }
             gtag('js', new Date());
             gtag('config', 'UA-164647899-1');
         }, 1000)

    }
}
</script>
