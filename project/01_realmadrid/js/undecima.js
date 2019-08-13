$(function(){
    
    
    $("#undecimaPhotoArea1").mouseover(function(){
      
        $(".undecimaPhoto1image").animate({"left":"0","opacity":"1"},700,"swing");
        $(".undecimaPhoto1Title").animate({"right":"0","opacity":"1"},700,"swing");
    });
    
    $("#undecimaPhotoArea2").mouseover(function(){
      
        $(".undecimaPhoto2image").animate({"right":"0","opacity":"1"},700,"swing");
        $(".undecimaPhoto2Title").animate({"left":"0","opacity":"1"},700,"swing");
    });
    
  
});