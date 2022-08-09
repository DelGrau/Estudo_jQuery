//VARIAVEIS DE CONTROLE DO JOGO
let perguntas_feitas = [];

//PERGUNTAS DO JOGO
const perguntas = [
    //CADA OBJETO DA MATRIZ É UMA PERGUNTA
    // PERGUNTA 0
    {
        pergunta: "Qual dessas linguagens não é considerada uma linguagem de programação?",
        respostas: ['PHP', 'JAVASCRIPT','C++', 'HTML'],
        correta: 'resp3'
    },
    //PERGUNTA 1
    {
        pergunta: "Em que ano o brasil foi descoberto?",
        respostas: ['1498', '1500','1356', '1995'],
        correta: 'resp1'
    },
    //PERGUNTA 2
    {
        pergunta: "O que significa a sigla HTML ?",
        respostas: ['Homens Trabalham Muito Longe', 'Hey Text Markup Lingua','Hyper text markup language', 'Hyper Text Mass Language'],
        correta: 'resp2'
    },
    //PERRGUNTA 3
    {
        pergunta: "Qual dessas linguagens é uma linguagem de marcação ?",
        respostas: ['PHP','Assembly', 'HTML', 'Python'],
        correta: 'resp2'
    },
]

var qtd_perguntas = (perguntas.length - 1)

gerarPergunta(qtd_perguntas)

function gerarPergunta(max_perguntas){
    //Aqui geramos um numero aleatorio para usarmos de index na pesquisa da pergunta
    //esse numero aleatorio vai de 0 ao numero maximo de perguntas que temos
    var num_aleatorio = (Math.random()*max_perguntas).toFixed()
    num_aleatorio = Number(num_aleatorio)

    //VERIFICA SE A PERGUNTA JÁ FOI FEITA
    if(!perguntas_feitas.includes(num_aleatorio)){
        //ADICIONAMOS O NUMERO COMO PERGUNTA SORTEADA
        perguntas_feitas.push(num_aleatorio)

        //PREENCHER O HTML COM OS DADOS DA PERGUNTA
        var pergunta_selecionada = perguntas[num_aleatorio].pergunta; 

        //USANDO JQUERY PARA ATRUIBUI O VALOR 
        $('#pergunta').html(pergunta_selecionada)

        //ADICIONAMOS O INDECE DA PERGUNTA
        $('#pergunta').attr('indice_pergunta', num_aleatorio)

        //ATRIBUINDO AS RESPOSTAS
        for(var i=0; i< perguntas.length; i++){
            $('#resp'+i).html(perguntas[num_aleatorio].respostas[i])
        }

        //EMBARALHANDO AS RESPOSTAS
        //PEGAMOS O ELEMENTO QUE CONTÉM AS RESPOSTAS
        var conteiner_respostas = $('#respostas')

        //AGORA PEGAMOS OS ELEMENTOS QUE ESTÃO DENTRO
        var opcoes = conteiner_respostas.children()

        //AGORA FAZEMOS UM LOOP PARA EMBARALHAR AS RESPOSTAS
        for(var i= 1; i< opcoes.length; i++){
            conteiner_respostas.append(opcoes.eq(Math.floor(Math.random() * opcoes.length)))
        }
    }else{
        //SE A PERGUNTA JÁ FOI FEITA
        console.log('A pergunta ja foi feita gerando outra')
        if(perguntas_feitas.length< qtd_perguntas + 1){
            return gerarPergunta(max_perguntas)
        }else{
            console.log('Acabou o jogo!')
            $('.game').addClass('oculto')
            $('#title_status').html('PARABENS VOCÊ GANHOU')
            $('.status').removeClass('oculto')
        }
    }

}

$('.resposta').click(function(){
    //PERCORRE TODAS AS RESPOSTAS E DESMARCA CASO JÁ ESTEJA SELECIONADA
    resetaOpcoes();

    //ADICIONA A CLASSE SELECIONADA
    $(this).addClass('selecionada')
})

$('#confirm').click(function(){
    //PEGANDO INDICE DA PERGUNTA
    var indice_pergunta = $('#pergunta').attr('indice_pergunta')

    //PEGANDO QUAL A RESPOSTA CORRETA
    var resp_correta = perguntas[indice_pergunta].correta

    //VERIFICANDO SE A RESPOSTA ESCOLHIDA PELO USUARIO É A CERTA
    $('.resposta').each(function(){
        if($(this).hasClass('selecionada')){
            var resp_escolhida = $(this).attr('id')

            if(resp_correta == resp_escolhida){
                console.log('Acertou')
                proximaPergunta()
            }else{
                console.log('errou')
                $('#'+resp_correta).addClass('correta')
                $('#'+resp_escolhida).removeClass('selecionada')
                $('#'+resp_escolhida).addClass('errada')
                setTimeout(function(){
                    gameOver()
                }, 3000)
            }
        }
    })
})

function proximaPergunta() {

    resetaOpcoes();

    gerarPergunta(qtd_perguntas)
}

function resetaOpcoes(){

    $('.resposta').each(function(){
        if($(this).hasClass('selecionada')){
            $(this).removeClass('selecionada')
        }
        if($(this).hasClass('errada')){
            $(this).removeClass('errada')
        }
        if($(this).hasClass('correta')){
            $(this).removeClass('correta')
        }
    })
}

function newGame(){
    perguntas_feitas = []
    resetaOpcoes()
    gerarPergunta(qtd_perguntas)    
    $('.game').removeClass('oculto')
    $('.status').addClass('oculto')
}


function gameOver(){
    $('.game').addClass('oculto')
    $('#title_status').html("GAME OVER")
    $('.status').removeClass('oculto')
}

$('#novo_jogo').click(function(){
    newGame()
})