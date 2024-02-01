
//direcao = representa um espaço reservado na memoria que irá guardar como o usuario chegou naquele elemento html, as duas possibilidades serão UP(subindo) ou down(descendo)
$('section.pizza').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('section.pizza p').addClass('animate__animated animate__fadeInUp');
    }
    if (direcao == 'up') {
        $('section.pizza p').removeClass('animate__animated animate__fadeInUp');
    }
    
}, {
    offset: '400px;'
})

$('section.domingo-perfeito').waypoint(function(direcao){ 
    if (direcao=="down"){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');

    }
})

$('section.domingo-perfeito').waypoint(function(direcao){ 
    if (direcao=="up"){
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');

    }
})

$('div.planos-janela').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.planos-janela').addClass('animate__animated animate__flip');
    }
    if (direcao == 'up') {
        $('div.planos-janela').removeClass('animate__animated animate__flip');
    }
    
}, {
    offset: '450px;'
})


$('div.planos-janela').waypoint(function(direcao){ 
    if (direcao=="up"){
        $('div.planos-janela').addClass('animate__animated animate__flip');
        $('div.planos-janela').removeClass('animate__animated animate__flip');
        
    }
})

$('section.testemunha').waypoint(function(direcao){
    if (direcao == 'down'){
        $('div.testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }

    if (direcao == 'up'){
        $('div.testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
},{
    offset:'400px;'
   
})


$('div.transicao-testemunha-plano').waypoint(function (direcao) {
    if (direcao == 'down') {
        
        $('div.decoracao1').addClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div.decoracao2').addClass('animate__animated animate__fadeOut animate_slow');
        $('div.decoracao3').addClass('animate__animated animate__fadeOutRight animate_slow');
        
    } else{
        $('div.decoracao1').removeClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div.decoracao2').removeClass('animate__animated animate__fadeOut animate_slow');
        $('div.decoracao3').removeClass('animate__animated animate__fadeOutRight animate_slow');
    }

    },{
        offset:'500px;'


    })

    
$('section.plano-principal').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slower');
    } else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slower')
        ;
    }
    },{
        offset:'450px;'
    })

      
$('footer').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('div.mapa').addClass('animate__animated animate__fadeIn');
        $('div.info').addClass('animate__animated animate__fadeIn');
        $('div.pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');
    } else{
        $('div.mapa').removeClass('animate__animated animate__fadeIn');
        $('div.info').removeClass('animate__animated animate__fadeIn');
        $('div.pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn');
        ;
    }
    },{
        offset:'650px;'
    })

