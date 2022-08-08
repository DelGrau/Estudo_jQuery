$(document).ready(function() {
    //hide esconde o elemento
    $('#bt_hide').click(function() {
        $('.blue').hide('slow', function() {
            alert('terminou de esconder')
        })
    });

    //show mostra elemento ocultado
    $('#bt_show').click(function() {
        $('.blue').show('fast', function() {
            alert('Terminou de Mostrar')
        })
    });
    //Fuciona como o evento hide e show quando oculto mostra e quando
    //está mostrando ele esconde o elemento
    $('#bt_toggle').click(function() {
        $('.red').toggle('slow', function() {
            alert('Abrindo e fechando com toggle')
        })
    });

    $('#bt_fade_in').click(function() {
        $('.green').fadeIn()
    });

    $('#bt_fade_out').click(function() {
        $('.green').fadeOut()
    });

    $('#clicker').click(function() {
        $('#slider').slideToggle('slow');
    })

})