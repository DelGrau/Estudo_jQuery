$(document).ready(function() {
    $('#botao').click(function() {
        $('#teste').load('texto.html')
    })

    $('#cep').blur(function() {
        var numero_cep = $(this).val(); 
        
        //metodo do tipo get para pegar valores de uma API externa
       $.get('https://viacep.com.br/ws/'+numero_cep+'/json/', function(dados, status) {
            console.log(dados)
            if(status == 'success'){
                $('#cidade').val(dados.localidade)
                $('#uf').val(dados.uf)
            }else {
                alert('Algo deu errado com a Requisição!')
            }
        })

    })

    $('#busca').keyup(function (){
        var valor_busca = $(this).val().toLowerCase()
        $('#lista li').filter( function() {
            $(this).toggle($(this).text().toLocaleLowerCase().indexOf(valor_busca) > -1)
        })
    })


    

})

