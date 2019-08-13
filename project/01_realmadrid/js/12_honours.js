$(function(){

    $(".cupListArea").hide();
    
    $(".cupTitle").click(function(){
        $(this).siblings(".cupListArea").slideToggle(250);
        $(this).children(".cupArrow").children("img").toggleClass("rote");
    });

        $(".interCup2 .honoursPrevBtn").click(function(){
            $(".interCup2 .cupfilm").css({"marginLeft":"+=930px"});
            
            var stat = $(".interCup2 .pageNum").text();
            var num = parseInt(stat,10);
            num--
            
            if(num<=0){
            num =1;
            }
            $(".interCup2 .pageNum").text(num);
            
            var x = $(".interCup2 .cupfilm").css("marginLeft");
            
            if(num==1){
                $(".interCup2 .cupfilm").css({"marginLeft":"0px"});
            };
    
    
        });

        $(".interCup2 .honoursNextBtn").click(function(){
            $(".interCup2 .cupfilm").css({"marginLeft":"-=930px"});
            
            
            var stat = $(".interCup2 .pageNum").text();
            var num = parseInt(stat,10);
            num++
            
            if(num>4){
            num=4;}
            $(".interCup2 .pageNum").text(num);
            
            
            var x = $(".interCup2 .cupfilm").css("marginLeft");
            
            if(num==4){
                $(".interCup2 .cupfilm").css({"marginLeft":"-2790px"});
            };

        });
        
        $(".naCup1 .honoursPrevBtn").click(function(){
            $(".naCup1 .cupfilm").css({"marginLeft":"+=930px"});
            
            var stat = $(".naCup1 .pageNum").text();
            var num = parseInt(stat,10);
            num--
            
            if(num<=0){
            num =1;
            }
            $(".naCup1 .pageNum").text(num);
            
            var x = $(".naCup1 .cupfilm").css("marginLeft");
            
            if(num==1){
                $(".naCup1 .cupfilm").css({"marginLeft":"0px"});
            };
    
    
        });

        $(".naCup1 .honoursNextBtn").click(function(){
            $(".naCup1 .cupfilm").css({"marginLeft":"-=930px"});
            
            
            var stat = $(".naCup1 .pageNum").text();
            var num = parseInt(stat,10);
            num++
            
            if(num>11){
            num=11;}
            $(".naCup1 .pageNum").text(num);
            
            
            var x = $(".naCup1 .cupfilm").css("marginLeft");
            
            if(num==11){
                $(".naCup1 .cupfilm").css({"marginLeft":"-9300px"});
            };

        });
    
        $(".naCup2 .honoursPrevBtn").click(function(){
            $(".naCup2 .cupfilm").css({"marginLeft":"+=930px"});
            
            var stat = $(".naCup2 .pageNum").text();
            var num = parseInt(stat,10);
            num--
            
            if(num<=0){
            num =1;
            }
            $(".naCup2 .pageNum").text(num);
            
            var x = $(".naCup2 .cupfilm").css("marginLeft");
            
            if(num==1){
                $(".naCup2 .cupfilm").css({"marginLeft":"0px"});
            };
    
    
        });

        $(".naCup2 .honoursNextBtn").click(function(){
            $(".naCup2 .cupfilm").css({"marginLeft":"-=930px"});
            
            
            var stat = $(".naCup2 .pageNum").text();
            var num = parseInt(stat,10);
            num++
            
            if(num>7){
            num=7;}
            $(".naCup2 .pageNum").text(num);
            
            
            var x = $(".naCup2 .cupfilm").css("marginLeft");
            
            if(num==7){
                $(".naCup2 .cupfilm").css({"marginLeft":"-5580px"});
            };

        });
    
        $(".naCup3 .honoursPrevBtn").click(function(){
            $(".naCup3 .cupfilm").css({"marginLeft":"+=930px"});
            
            var stat = $(".naCup3 .pageNum").text();
            var num = parseInt(stat,10);
            num--
            
            if(num<=0){
            num =1;
            }
            $(".naCup3 .pageNum").text(num);
            
            var x = $(".naCup3 .cupfilm").css("marginLeft");
            
            if(num==1){
                $(".naCup3 .cupfilm").css({"marginLeft":"0px"});
            };
    
    
        });

        $(".naCup3 .honoursNextBtn").click(function(){
            $(".naCup3 .cupfilm").css({"marginLeft":"-=930px"});
            
            
            var stat = $(".naCup3 .pageNum").text();
            var num = parseInt(stat,10);
            num++
            
            if(num>3){
            num=3;}
            $(".naCup3 .pageNum").text(num);
            
            
            var x = $(".naCup3 .cupfilm").css("marginLeft");
            
            if(num==3){
                $(".naCup3 .cupfilm").css({"marginLeft":"-1860px"});
            };

        });
    
});




