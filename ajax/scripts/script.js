

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

    var cod_postal = "US"
    var log = 50

    $('#postal').blur(function() {
        cod_postal = $(this).val()
        opcoes_filtro()
    })

    $('#log').blur(function(){
        log = $(this).val()
        pesquisarClima()
    })
    
    //FUNÇÃO QUE CONSOME A API E RETORNA OS VALORES DO CLIMA 
    function pesquisarClima(){

        //PEGANDO INFORMAÇÕES DA API DE CLIMA 
        $.get('https://api.openweathermap.org/data/2.5/weather?lat=50&lon=50&lang=pt_br&appid=069bf7ad6a29404c5644b4709aa6f692&units=metric', function(data, status){       
            weather = data.weather
            console.log(weather[0].description)
            $("#busca").val(weather[0].description)
            $('#city').val(data.name)
        })
    }

    //PEGANDO A LISTA DE PAISES E TRANSFORMANDO DE STRING PARA JSON
    let lista_paises
    $.get('http://127.0.0.1:5500/ajax/DB_paises/city.list.json.log', function(data, status){
        
        lista_paises = JSON.parse(data) 
        console.log('Hello')
        var paises_filtrados = filtro_paises(lista_paises)
        var codigo_paises = filtrar_por_codigo(cod_postal, lista_paises)
        
        //LOOP QUE ADICIONA AS OPÇÕES DE PAISES
        for(var i=0;i<paises_filtrados.length;i++){
            $('#codigo_postal').append('<option value='+paises_filtrados[i]+'></option>')  
        }
        
        //LOOP QUE ADICIONA AS OPÇÕES DE PAISES FILTRADOS NA LISTA
        for(var i =0; i < lista_paises.length; i++){
            $('#contry').append('<option value='+codigo_paises[i].name.replace(" ", "_")+'></option>')
        } 

    })
    function opcoes_filtro(){
        $.get('http://127.0.0.1:5500/ajax/DB_paises/city.list.json.log', function(data, status){
            lista_paises = JSON.parse(data)
            var codigo_paises = filtrar_por_codigo(cod_postal, lista_paises)
            for(var i =0; i < lista_paises.length; i++){
                $('#contry').append('<option value='+codigo_paises[i].name.replace(" ", "_")+'></option>')
            } 
        })
 
    }

    //FUNÇÃO QUE REMOVE OS COD.POSTAL DE PAISES DUPLICADOS
    function filtro_paises(paises){
        
        //ALIMENTAMOS UM ARRAY COM OS CODIGOS DOS PAISES
        codigo_pais = []
        for(var i=0;i<paises.length;i++){
            codigo_pais.push(paises[i].country)
        }

        //AQUI REMOVEMOS AS DUPLICADAS
        paises_filtrados = codigo_pais.filter(function(este, i){
            return codigo_pais.indexOf(este) === i;
        })

        return paises_filtrados

        
    }

    //FUNÇÃO QUE FILTRA PAIS POR CODIGO POSTAL
    function filtrar_por_codigo(codigo, array_paises){

        var codigo_filtrado = array_paises.filter(function(obj) {
            return obj.country == codigo
        })
        
        return codigo_filtrado
    }


})

