function checkScroll(){
    //para mudar orientção de em qual página user está
    var sobre = ($("#cartaoBaixo").position().top + $("#cartaoBaixo").height()) - 250;
    var objetivos = ($("#objetivosSection").position().top + $("#objetivosSection").height())  - 250;
    var qualificacoes = ($("#qualificacoesSection").position().top + $("#qualificacoesSection").height())  - 250;
    var experiencias = ($("#experienciasSection").position().top + $("#experienciasSection").height()) - 250;
    var curiosidades = ($("#curiosidadesSection").position().top + $("#curiosidadesSection").height()) - 250;
    var posicoes = [sobre,objetivos,qualificacoes,experiencias,curiosidades];
    var ids = ["#sobre","#objetivos","#qualificacoes","#experiencias","#curiosidades"];
    var anterior = 0;
    $.each(posicoes, function (index,value) {

       if($(window).scrollTop() < value && $(window).scrollTop() >= anterior){
            if(!$(ids[index]).hasClass("selecionaPagina")){
                $("nav .selecionaPagina").removeClass("selecionaPagina");
                $(ids[index]).addClass("selecionaPagina");
                $("section").removeClass("revela");
                $("section").addClass("revelaInverso");
                $(ids[index]+"Section").removeClass("revelaInverso");
                $(ids[index]+"Section").addClass("revela");


            }
       }
       anterior = value;
    });


    //para colorir nav
    var startY = $('.navbar').height() *2;

    if(($(window).scrollTop() > startY) || ($(window).width()<=992)){
        $('.navbar').addClass("colorir-bg");
        $('.navbar').removeClass("descolorir-bg");

        $('#ulNav').addClass("ulDiminui");
        $('#ulNav').removeClass("ulAumenta");


    }else if($('.navbar').hasClass("colorir-bg")){
        $('.navbar').removeClass("colorir-bg");
        $('.navbar').addClass("descolorir-bg");

        $('#ulNav').addClass("ulAumenta");
        $('#ulNav').removeClass("ulDiminui");
    }
}

$(document).ready(function () {
    $(".vira").click(function () {
        $(this).toggleClass('flipped');
    });
    $(".nav-link").click(function () {
        var str = "#"+$(this).attr('id') +"Section";
        var pos = $(str).position().top - ($(".navbar-brand").height() + 50);

       $('html, body').animate({
           scrollTop: pos
       },500);
    });
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    } // Colore nav e marca página

});

