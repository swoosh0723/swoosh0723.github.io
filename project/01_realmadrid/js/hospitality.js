$(function(){
    $(".hospitalityBox:lt(3)").css({"margin-top":"0px"})



			$(".hospitalityTrans1").css({"backgroundColor":"transparent"});

			$(".hospitalityTrans1 a").bind("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans1").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"61.5px","top":"95px"});
				$(".hospitalityCircle").children("span:last").text("Trophy Room")
			});

			$(".hospitalityTrans2 a").on("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans2").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"382.5px","top":"95px"});
				$(".hospitalityCircle").children("span:last").text("European Cup Room")
			});
			$(".hospitalityTrans3 a").on("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans3").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"703.5px","top":"95px"});
				$(".hospitalityCircle").children("span:last").text("Asador Restaurant")
			});
			$(".hospitalityTrans4 a").on("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans4").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"61.5px","top":"493px"});
				$(".hospitalityCircle").children("span:last").text("VIP Boxes")
			});
			$(".hospitalityTrans5 a").on("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans5").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"382.5px","top":"493px"});
				$(".hospitalityCircle").children("span:last").text("Towers Boxes")
			});
			$(".hospitalityTrans6 a").on("mouseover focusin", function(){

				$(".hospitalityTrans").css({"backgroundColor":"#222"});
				$(".hospitalityTrans6").css({"backgroundColor":"transparent"});
				$(".hospitalityCircle").css({"left":"703.5px","top":"493px"});
				$(".hospitalityCircle").children("span:last").text("Outdoor Boxes")
			});






			$(".hospitalitySubArea").hide()

			$(".hospitalityTrans1 a").click(function(){
				$(".hospitalitySubArea1").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});

			$(".hospitalityTrans2 a").click(function(){
				$(".hospitalitySubArea2").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});
			$(".hospitalityTrans3 a").click(function(){
				$(".hospitalitySubArea3").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});
			$(".hospitalityTrans4 a").click(function(){
				$(".hospitalitySubArea4").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});
			$(".hospitalityTrans5 a").click(function(){
				$(".hospitalitySubArea5").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});
			$(".hospitalityTrans6 a").click(function(){
				$(".hospitalitySubArea6").fadeIn(400);
				$(".hospitalityTrans").hide();
				$(".hospitalityCircle").addClass("hospitalityCircleScale");
				$(".hospitalityCircle span").hide()
			});

			$(".hSubImg p").click(function(){
				$(".hospitalityCircle").removeClass("hospitalityCircleScale")
				$(".hospitalityCircle span").show()
				$(".hospitalitySubArea").fadeOut(400);
				$(".hospitalityTrans").fadeIn(300);
			});


});