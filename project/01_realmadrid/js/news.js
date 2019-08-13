$(function(){
    $(".newsListWrap").hide();
    
    
    $(".listBtn").click(function(){
        $(".theNewsWrap").css({"height":"2600px"})
        $(".newsBoxWrap").fadeOut(500);
        $(".newsListWrap").fadeIn(500);
        $(".newsBoxArea2").hide();
        
    });
    $(".boxBtn").click(function(){
        $(".theNewsWrap").css({"height":"auto"})
        $(".newsListWrap").fadeOut(500);
        $(".newsBoxWrap").fadeIn(500);
        $(".newsListArea2").hide();
        
    });
    
    $(".newsBoxArea2").hide();
    $(".newsListArea2").hide();
    $(".newsMoreBtn1").click(function(){ 
        $(".newsBoxArea2").slideToggle(500);
        $(".newsListArea2").hide();
    });
    $(".newsMoreBtn2").click(function(){
        
        var x = $(".newsListArea2").css("display");
        if(x=="none"){
            $(".theNewsWrap").css({"height":"5105px"});
        }else{$(".theNewsWrap").css({"height":"2578px"});}
        
        $(".newsListArea2").slideToggle(500);
    });
}); 