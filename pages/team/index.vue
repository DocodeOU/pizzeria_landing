<template lang="pug">
#foto
    nav
        a(href='/')
            img(src='/img/logopizzeria.svg')
    .container.columns.col-gapless
        h4.column.col-12.titolo Il nostro team
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/team1.jpeg')
                .card-header
                    .h5 Le nostre commesse
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/MicheleFilippo.jpg')
                .card-header
                    .h5 Michele e Filippo
        h4.column.col-12.titolo Il nuovo locale
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/saletta1.jpeg')
                .card-header
                    .h5 Il logo
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/saletta3.jpeg')
                .card-header
                    .h5 Il logo e la saletta
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/saletta2.jpeg')
                .card-header
                    .h5 La saletta
        h4.column.col-12.mt-2.titolo I nostri dolci
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/dolce1.jpg')
                .card-header
                    .h5 Squisiti dolci artigianali
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/dolce2.jpeg')
                .card-header
                    .h5 Squisiti dolci artigianali
        .column.foto-galleria.col-4.col-sm-12
            .card
                .card-image
                    img.img-responsive(src='/foto/dolce3.jpeg')
                .card-header
                    .h5 Squisiti dolci artigianali
        h4.column.col-12.titolo I video
        .column.foto-galleria.col-6.col-sm-12
            .card
                .card-image
                    video(controls='')
                        source(src='/video/forno_rotante.mp4', type='video/mp4')
                        |                     Your browser does not support the video tag.
                .card-header
                    .h5 Il nuovo forno rotante


</template>
