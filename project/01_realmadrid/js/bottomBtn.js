$(function(){
	$(".shopBtn").mouseover(function(){
		$(".shopBtn img").attr("src","img/shopping-cart1-512b.png")
	});
	$(".shopBtn").mouseout(function(){
		$(".shopBtn img").attr("src","img/shopping-cart1-512.png")
	});
	$(".BTT").click(function(){

		$("html, body").animate({"scrollTop":"0"},450)
	});
});
