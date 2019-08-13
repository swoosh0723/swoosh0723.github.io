$(function(){
    $(".sub-menu-wrap").hide();
    
    $(".main-menu, .sub-menu-wrap").on("mouseover focusin",function(){
        $(".sub-menu-wrap").stop().slideDown(170);
    }).on("mouseout focusout", function(){
        $(".sub-menu-wrap").stop().slideUp(170)
    });
    
    $(".main-menu").on("mouseover focusin",function(){
        $(this).children("a").css({"color":"#00519e"});
        $(this).find("span").css({"transform":"scale(1)"});
        
    }).on("mouseout focusout",function(){
        $(this).children("a").css({"color":"#414141"});
        $(this).find("span").css({"transform":"scale(0)"});
    });
    
     $(".sub-menu-cateroy a").on("mouseover focusin",function(){
        $(this).css({"color":"#00519e","textDecoration":"underline","fontFamily":"Oswald-Regular"});
    }).on("mouseout focusout",function(){
        $(this).css({"color":"#414141","textDecoration":"none","fontFamily":"Oswald-Light"});
    });

    $(".mainMenu").on("mouseover focusin",function(){
        $(this).children(".subArea").stop().fadeIn(300);
        $(".subMenuBg").stop().slideDown(170)
        $(".subMenuContentImg, .subMenuContentTitle, .subImgAreaLabel, .subMenuArea").css({"transform":"translatey(0px)"});
    
    }).on("mouseout focusout",function(){
        $(this).children(".subArea").stop().fadeOut(140)
        $(".subMenuContentImg, .subImgAreaLabel").css({"transform":"translatey(-30px)"});
        $(".subMenuContentTitle").css({"transform":"translatey(30px)"});
        $(".subMenuArea").css({"transform":"translatey(-20px)"});
    });
    $(".mainMenu, .subMenuBg").on("mouseout focusout",function(){
        $(".subMenuBg").stop().slideUp(200)
    });
    
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        
        if(winTop >= 55)
            {
                $("#headerWrap").addClass("header-sticy");
                $("#mainInfo").css({"height":"0","lineHehight":"0","paddingTop":"0"});
                $("#mainInfo li").css({"display":"none"});
                $("#header h1").css({"top":"-5px"});
                $(".header-logo").css({"top":"16px","width":"39px"});
                $(".header-logo-path").css({"top":"38px"});
                $(".main-menu-area").css({"paddingTop":"20px"});
                
                $(".sub-menu-wrap").css({"top":"75px"});
            }
        else
            {
                $("#headerWrap").removeClass("header-sticy");
                $("#mainInfo").css({"height":"22px","lineHehight":"21px","paddingTop":"15px"});
                $("#mainInfo li").css({"display":"inline-block"});
                $("#header h1").css({"top":"24px"});
                $(".header-logo").css({"top":"0","width":"47px"});
                $(".header-logo-path").css({"top":"31px"});
                $(".main-menu-area").css({"paddingTop":"5px"});
                
                $(".sub-menu-wrap").css({"top":"97px"});
            }
    });
    
    
    
    
    
    ///// mobileHeader //////
    $(".mobileMenuArea").hide();
    
    $(".mobileBtnWrap").click(function(){
        $(".mobilebtnBar1").toggleClass("mobilebtnBar1T");
        $(".mobilebtnBar2").toggleClass("mobilebtnBar2T");
        $(".mobilebtnBar3").toggleClass("mobilebtnBar3T");
        
        $(".mobileMenuArea").slideToggle(250)
    });
    
    
    $(".mobileMenuArea ol").hide();
    
    $("a.mobileMenu").click(function(){
        $(this).toggleClass("mobileMenuBC")
        $(this).children(".mobileTry1").toggleClass("mobileTryRote");
        $(this).siblings(".mobileMenuArea ol").slideToggle(250);
        
    });
    
});
