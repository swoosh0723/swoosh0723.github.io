$(function(){
    $(".full, .view").hide();
    
    $(".galleryArea ul li").click(function(){
        
        $("body").css({"overflowY":"hidden"});
        
        $(".view").css({"top":"50%","left":"50%"});
        var src1 = $(this).children("a").attr("href");
        
        $(".view").html("<p><img src='"+src1+"' alt='이미지1'></p>");
        $(".view, .full").fadeIn(300);            
        return false;
    });
    $(".view, .full").click(function(){
            $(".view p").css({"transform":"scale(0.7)"});
            $(".view, .full").fadeOut(300);
            $("body").css({"overflowY":"scroll"})
    });    
    
    
});