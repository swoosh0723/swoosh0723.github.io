$(function(){
    //############ match ############

			//$("#match").hide();
			$("#result").hide();
			$("#tableArea").hide();
			$("#matchMenu li a:first").css({"color":"#00519e"});

			$(".matchMenu1").on("click focusin", function (){
				$("#fixed").css({"height":"2020px"});
				$("#match").fadeIn(350);
				$("#result").fadeOut(350);
				$("#tableArea").fadeOut(350);

				$("#matchMenu li a").removeClass("matchName");
				$("#matchMenu li a:first").css({"color":"#00519e"});
				$("#matchMenu li span").removeClass("matchBar");
				$(this).children("span").addClass("matchBar");
			});

			$(".matchMenu2").on("click focusin", function(){
				$("#fixed").css({"height":"1200px"});
				$("#match").fadeOut(350);
				$("#result").fadeIn(350);
				$("#tableArea").fadeOut(350);

				$("#matchMenu li a:first").css({"color":"#ccc"});
				$("#matchMenu li a").removeClass("matchName");
				$(this).children("a").addClass("matchName");
				$("#matchMenu li span").removeClass("matchBar");
				$(this).children("span").addClass("matchBar");

			});

			$(".matchMenu3").on("click focusin", function(){
				$("#fixed").css({"height":"1260px"});
				$("#match").fadeOut(350);
				$("#result").fadeOut(350);
				$("#tableArea").fadeIn(350);

				$("#matchMenu li a:first").css({"color":"#ccc"})
				$("#matchMenu li a").removeClass("matchName");
				$(this).children("a").addClass("matchName");
				$("#matchMenu li span").removeClass("matchBar");
				$(this).children("span").addClass("matchBar");



			});
});