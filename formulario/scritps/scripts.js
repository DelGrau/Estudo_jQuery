// https://documentacao.senior.com.br/gestaoempresarialerp/5.10.2/#webservices/indice-web-services.htm?TocPath=Integra%25C3%25A7%25C3%25B5es%2520com%2520outros%2520sistemas%7CWeb%2520services%7CWeb%2520services%2520dispon%25C3%25ADveis%2520no%2520Gest%25C3%25A3o%2520Empresarial%7C_____0
$(document).ready(function(){
    $.ajax({
        url: 'https://demonstra.prismainformatica.com.br:8188/g5-senior-services/sapiens_Synccom_senior_g5_co_mmt_equipamento?wsdl',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded', 
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/formulario/',
        },
        Origin :'http://127.0.0.1:5500/formulario/',
        type : 'GET',
        success: function(data){
            console.log(data)
        }
    })
    
})