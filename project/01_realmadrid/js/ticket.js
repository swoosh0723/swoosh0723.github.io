$(function(){
    
    $(".ticketPricePrimium").siblings().hide();

			$(".seatBox1, .primiumMap").click(function(){
				$(".ticketPricePrimium").siblings().fadeOut(400);
				$(".ticketPricePrimium").fadeIn(400);
			});
			$(".seatBox2, .standardMap").click(function(){
				$(".ticketPriceStandard").siblings().fadeOut(400);
				$(".ticketPriceStandard").fadeIn(400);
			});
			$(".seatBox3, .economyMap").click(function(){
				$(".ticketPriceEconomy").siblings().fadeOut(400);
				$(".ticketPriceEconomy").fadeIn(400);
			});
			$(".seatBox4, .vipMap").click(function(){
				$(".ticketPriceVip").siblings().fadeOut(400);
				$(".ticketPriceVip").fadeIn(400);
			});
			$(".seatBox5, .familyMap").click(function(){
				$(".ticketPriceFamily").siblings().fadeOut(400);
				$(".ticketPriceFamily").fadeIn(400);
			});
			$(".seatBox6, .studentMap").click(function(){
				$(".ticketPriceStudent").siblings().fadeOut(400);
				$(".ticketPriceStudent").fadeIn(400);
			});
});