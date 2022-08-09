

$(document).ready(function() {
    $('#botao').click(function() {
        $('#teste').load('texto.html')
    })


    //METODO BLUR PARA ASSIM QUE FOR TIRADO O FOCO DO ELEMENTO O SEU VALOR
    //É ARMAZENADO
    $('#cep').blur(function() {
        var numero_cep = $(this).val(); 
        
        //metodo do tipo get para pegar valores de uma API externa
       $.get('https://viacep.com.br/ws/'+numero_cep+'/json/', function(dados, status) {
            console.log(dados)
            if(status == 'success'){
                $('#cidade').val(dados.localidade)
                $('#uf').val(dados.uf)
                $('#endereco').val(dados.logradouro)
            }else {
                alert('Algo deu errado com a Requisição!')
            }
        })

    })


    //FILTRO DE BUSCA EM ITENS DE LISTA OU TABELAS HTML
    $('#busca').keyup(function (){
        var valor_busca = $(this).val().toLowerCase()
        //Passamos o ID e qual o elemento vamos fazer a procura
        $('#lista li').filter( function() {
            $(this).toggle($(this).text().toLocaleLowerCase().indexOf(valor_busca) > -1)
        })
    })


    
    //PEGANDO INFORMAÇÕES DA API DE CLIMA  
    $.get('https://api.openweathermap.org/data/2.5/weather?lat=-23.5489&lon=-46.6388&lang=pt_br&appid=069bf7ad6a29404c5644b4709aa6f692&units=metric', function(data, status){
        console.log(data)

       
        weather = data.weather
        console.log(weather[0].description)

        $("#busca").val(weather[0].description)
        console.log(data.name)
        

       


    })

})

