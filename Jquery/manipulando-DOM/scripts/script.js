$(document).ready(function() {
    $('#trocar_h1').click(function(){
        $('h1').text('Mudei o texto via jQuery')
    })

    $('#trocar_h2').click(function() {
        //Usando .html podemos passar elementos HTML e ele será reconhecido
        $('h2').html('<b>AQUI TA EM NEGRITO</b> pois passei a tag <b>')
    })

    $('#texto_input').click(function() {
        $('#caixa_texto').val('ASSIM QUE SE ATRIBUI VALOR AO INPUT')
    })

    $('#trocar_link').click(function() {
        $('#link').attr('href', 'http://youtube.com.br').text("AGORA VAI PRO YOUTUBE")
    })

    $('#trocar_imagem').click(function() {
        $('#image').attr('src', 'https://s2.glbimg.com/dLl2P7yBYMBFiuDzlbhNOX_z8DM=/0x0:3640x2376/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/9/b/7xAkyiQSKABKVOOWFp0w/2019-10-02t162142z-1-lynxmpef911b0-rtroptp-4-tech-google-acao.jpg')
    })

    $('#adicionar_elemento').click(function(){
        $('body').append('<div style="margin: 1%; width: 150px; height:150px; display: inline-block; background: red" ></div>')
    })

    $('#remover_titulo').click(function(){
        $('h1').remove()
    })

    $('#esvaziar_div').click(function() {
        $('#paragrafos').empty();
    })

    $('#adicionar_classe').click(function (){
        $('#paragrafos').addClass('red')
    })

    $('#remover_classe').click(function (){
        $('#paragrafos').removeClass('red')
    })

    $('#classe_toggle').click(function(){
        $('#paragrafos').toggleClass('red')
    })

})