

$(document).ready(function() {
    $('#botao').click(function() {
        $('#teste').load('texto.html')
    })


    //METODO BLUR PARA ASSIM QUE FOR TIRADO O FOCO DO ELEMENTO O SEU VALOR
    //É ARMAZENADO
    $('#cep').blur(function() {
        var numero_cep = $(this).val(); 
        console.log(numero_cep )
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
    var lat = 50
    var log = 50
    $('#lat').blur(function() {
        lat = $(this).val()
        pesquisarClima()
    })
    $('#log').blur(function(){
        log = $(this).val()
        pesquisarClima()
    })
     

    //console.log(lat)
    console.log(log)
    
    //PEGANDO INFORMAÇÕES DA API DE CLIMA 
    function pesquisarClima(){
        $.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+log+'&lang=pt_br&appid=069bf7ad6a29404c5644b4709aa6f692&units=metric', function(data, status){       
        weather = data.weather
        console.log(weather[0].description)
        var nome = String(data.name)
        $("#busca").val(weather[0].description)
        $('#city').val(data.name)

        })
    } 

    let lista_paises
    $.get('http://127.0.0.1:5500/ajax/DB_paises/city.list.json.log', function(data, status){
        lista_paises = JSON.parse(data)
        console.log(lista_paises.length)  
           
        for(var i =0; i < lista_paises.length; i++){
            $('#contry').append('<option value='+lista_paises[i].name.replace(" ", "_")+'></option>')
        }  

    })


})

