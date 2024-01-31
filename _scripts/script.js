
//direcao = representa um espaço reservado na memoria que irá guardar como o usuario chegou naquele elemento html, as duas possibilidades serão UP(subindo) ou down(descendo)
$('section.pizza').waypoint(function (direcao) {
    if (direcao == 'down') {
        $('section.pizza p').addClass('animate__animated animate__fadeInUp');
    }
    if (direcao == 'up') {
        $('section.pizza p').removeClass('animate__animated animate__fadeInUp');
    }
    
}, {
    offset: '450px;'
})


