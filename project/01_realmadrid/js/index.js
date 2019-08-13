$(function(){
    
    // 메인 비주얼 슬라이딩
    $(".mainFilm").prepend($(".mainScene:last"));
    $(".mainFilm").css({"marginLeft":"-100%"});
    
    $(".mainVisualNextBtn").click(function(){

            $(".mainFilm").animate({"marginLeft":"-=100%"},340,"swing",function(){
            
                $(".mainFilm").append($(".mainScene:first"));
				$(".mainFilm").css({"marginLeft":"-100%"});    
        });
    });
    $(".mainVisualPrevBtn").click(function(){

            $(".mainFilm").animate({"marginLeft":"+=100%"},340,"swing",function(){

                $(".mainFilm").prepend($(".mainScene:last"));
                $(".mainFilm").css({"marginLeft":"-100%"});
        });
    });
    
    // 티켓창 슬라이
    $(".ticketsNextBtn").click(function(){
        $(".ticketsWrap").animate({"marginLeft":"-100%"},300,"swing");
        $(".ticketsSlideBtn span").css({"backgroundColor":"#dedede"});
        $(this).css({"backgroundColor":"#F4BC46"});
    });
    
    $(".ticketsPrevBtn").click(function(){
        $(".ticketsWrap").animate({"marginLeft":"-0%"},300,"swing");
        $(".ticketsSlideBtn span").css({"backgroundColor":"#dedede"});
        $(this).css({"backgroundColor":"#F4BC46"});
    });
    
    
    // 포토갤러리 슬라이딩
    $(".photoScreenBtnArea").hide();
    $(".photoScreen").mouseenter(function(){
        $(".photoScreenBtnArea").fadeIn(200);
    });
    $(".photoScreen").mouseleave(function(){
        $(".photoScreenBtnArea").fadeOut(200);
    });
    
    
    $(".photoFilm").prepend($(".photoScene:last"));
    $(".photoFilm").css({"marginLeft":"-100%"});
    
    $(".photoScreenNextBtn").click(function(){

            $(".photoFilm").animate({"marginLeft":"-=100%"},400,"swing",function(){
            
                $(".photoFilm").append($(".photoScene:first"));
				$(".photoFilm").css({"marginLeft":"-100%"});    
        });
    });
    $(".photoScreenPrevBtn").click(function(){

            $(".photoFilm").animate({"marginLeft":"+=100%"},400,"swing",function(){

                $(".photoFilm").prepend($(".photoScene:last"));
                $(".photoFilm").css({"marginLeft":"-100%"});
        });
    });
    
    var autoClicks = setInterval(function(){$(".photoScreenNextBtn").click();},3000);
});

    