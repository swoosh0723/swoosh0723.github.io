   function playBtns(){
        var mov = document.getElementById("realVideo");
        var playBtns = document.getElementById("videoControlWrap");
        console.log(mov);
        
        if(mov.paused==true){
            mov.play();
            $("#videoControlWrap").hide()
            $("#VideoWrap").mouseover(function(){
                $("#videoControlWrap").fadeIn(200)
            });
            $("#VideoWrap").mouseleave(function(){
                $("#videoControlWrap").fadeOut(200)
            });
            $(".videoTry").css({"display":"none"});
            $(".videoPause").css({"display":"block"})
        }
        else{mov.pause();
            $(".videoTry").css({"display":"block"});
            $(".videoPause").css({"display":"none"})
            
            }
   }