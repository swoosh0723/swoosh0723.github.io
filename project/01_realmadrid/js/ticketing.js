//############ 19.ticketing ############
$(function(){
var seatLevel = ["ZINEDINE", "RAUL", "DI STEFANO", "BUTRAGUENO", "VIP", "PRIMIUM", "FAMILY", "STUDENT"];

var standPriceResult = document.getElementById("standPriceResult")

var realSeatsPrice = {"ZINEDINE3a":50,
                 "ZINEDINE3b":40,
                 "ZINEDINE2_2":60,
                 "ZINEDINE2_1":85,

                 "RAUL3":50,
                 "RAUL2_2":80,
                 "RAUL2_1":100,
                 "RAUL1":130,

                 "STEFANO3":50,
                 "STEFANO2_2":60,
                 "STEFANO2_1":85,

                 "BUTRAGUENO2_1":100,
                 "BUTRAGUENO1":130,

                 "VIP":200,

                 "PRIMIUM1_a":130,
                 "PRIMIUM1_b":140,

                 "FAMILY":120,

                 "STUDENT2_1a":40,
                 "STUDENT2_2b":50,
                };
var zinedine3Num3A = document.getElementById("zinedine3Num3A");

var realSeatsNameZinedine = ["ZINEDINE 3A Floor",
                          "ZINEDINE 3B Floor",
                          "ZINEDINE 2_2 Floor",
                          "ZINEDINE 2_1 Floor"]

$(".stadiumArea2 .stadiumWrapper").hide()
$(".stadiumA, .stadiumTitle").css({"backgroundColor":"#04518C","color":"#fff"});
$(".ticketsNav p:eq(0)").css({"backgroundColor":"#00519e"});
$(".ticketsNav p:eq(1)").css({"borderRight":"1px solid #ccc", "borderLeft":"1px solid #ccc"});
$(".ticketsNavNum:eq(0)").css({"backgroundColor":"#fff", "color":"#00519e"});



// 상세 좌석 클릭
/*$(".standInfo").click(function(){

    $(".ticketsNav p").css({"backgroundColor":"#aaa","color":"#fff"});
    $(".ticketsNavNum").css({"backgroundColor":"#ccc", "color":"#fff"});
    $(".ticketsNav p:eq(2)").css({"backgroundColor":"#00519e"});
    $(".ticketsNavNum:eq(2)").css({"backgroundColor":"#fff", "color":"#00519e"});

    $(this).siblings().css({"display":"none"})
    $(this).delay(300).animate({"left":0},500).css({"borderTopColor":"#00519e;"});
    $(this).children(".standName").css({"borderBottomColor":"#00519e"});
    $(this).children(".standSeats").children("input").css({"color":"#00519e"});

    $(".getTicketsArea").delay(200).animate({"left":"25%"},1500,"swing",function(){
    });

    $(document).on("change","select[name=ticektNums]",function(){
    var ticketNumSelect = $("select[name=ticektNums] option:selected").text();
    standPriceResult.value = ticketNumSelect*realSeats.ZINEDINE3a
    });
});*/






$(".stadiumA").mouseover(function(){
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumA, .stadiumTitle").css({"backgroundColor":"#04518C","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[0]);
});


$(".stadiumB").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumB, .stadiumTitle").css({"backgroundColor":"#1BBC9B","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[1]);
});

$(".stadiumC").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumC, .stadiumTitle").css({"backgroundColor":"#F23C55","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[2]);
});


$(".stadiumD").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumD, .stadiumTitle").css({"backgroundColor":"#F5A503","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[3]);
});


$(".stadiumE").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumE, .stadiumTitle").css({"backgroundColor":"#ffd500","color":"#515151"});
    $(".stadiumTitle").children("em").text(seatLevel[4]);
});


$(".stadiumF").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumG").css("backgroundColor","#9fa6af");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumF, .stadiumTitle").css({"backgroundColor":"#8F45FF","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[5]);
});

$(".stadiumG").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumH").css("backgroundColor","#fbd4ff");

    $(".stadiumG, .stadiumTitle").css({"backgroundColor":"#2D3E50","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[6]);
});


$(".stadiumH").mouseover(function(){

    $(".stadiumA").css("backgroundColor","#8cafca");
    $(".stadiumB").css("backgroundColor","#96e0d1");
    $(".stadiumC").css("backgroundColor","#f9a6b1");
    $(".stadiumD").css("backgroundColor","#fad68d");
    $(".stadiumE").css("backgroundColor","#ffec8a");
    $(".stadiumF").css("backgroundColor","#ccaaff");
    $(".stadiumG").css("backgroundColor","#9fa6af");

    $(".stadiumH, .stadiumTitle").css({"backgroundColor":"#F694FF","color":"#fff"});
    $(".stadiumTitle").children("em").text(seatLevel[7]);


    $(this).click(function(){

        var seatsCheck = confirm("YOU SELECT '"+seatLevel[7]+"' STAND OK?")

    });
});


// 취소버튼!!!!!
$(".getTicketBtn button").last().click(function(){


    $(".ticketsNav p").css({"backgroundColor":"#aaa","color":"#fff"});
    $(".ticketsNavNum").css({"backgroundColor":"#ccc", "color":"#fff"});
    $(".ticketsNav p:eq(1)").css({"backgroundColor":"#00519e"});
    $(".ticketsNavNum:eq(1)").css({"backgroundColor":"#fff", "color":"#00519e"});


    $(".getTicketsArea").delay(5).animate({"left":"225%"},700,"swing",function(){
    });
    $(".standInfo").children(".standSeats").children("input").css({"color":"#aaa"});
    $(".standInfo").children(".standName").css({"borderBottomColor":"#dadada"});
    $(".standInfo").siblings().css({"display":"block"});

    $(".standInfo1").css({"left":"0"});
    $(".standInfo2").css({"left":$(".standInfo").width()+9.8+"px"});
    $(".standInfo3").css({"left":$(".standInfo").width()+$(".standInfo").width()+19.6+"px"});
    $(".standInfo4").css({"left":$(".standInfo").width()+$(".standInfo").width()+$(".standInfo").width()+29.4+"px"});
});

    
    
    $(".stadiumA").click(function(){

        var seatsCheck = confirm("You Selected '"+seatLevel[0]+"' STAND\n OK?");
        //console.log(seatsCheck)
        if(seatsCheck){
            $(".TicketingMachines").animate({"right":"50%"},1000,"swing");
            $(".stadiumArea1 .stadiumWrapper").fadeOut(900);
            $(".stadiumArea2 .stadiumWrapper").fadeIn(900);
            
            $(".ticketsNav p").css({"backgroundColor":"#aaa","color":"#fff"});
            $(".ticketsNavNum").css({"backgroundColor":"#ccc", "color":"#fff"});
            $(".ticketsNav p:eq(1)").css({"backgroundColor":"#00519e"});
            $(".ticketsNavNum:eq(1)").css({"backgroundColor":"#fff", "color":"#00519e"});

            

            $(".stadiumSeat").off("mouseover");
            $(".stadiumArea2 .stadiumB").css({"backgroundColor":"#cbf0e8"});
            $(".stadiumArea2 .stadiumC").css({"backgroundColor":"#fcd3d8"});
            $(".stadiumArea2 .stadiumD").css({"backgroundColor":"#e3d1ad"});
            $(".stadiumArea2 .stadiumE").css({"backgroundColor":"#f2dfa1"});
            $(".stadiumArea2 .stadiumF").css({"backgroundColor":"#bec0e6"});
            $(".stadiumArea2 .stadiumG").css({"backgroundColor":"#b6b9be"});
            $(".stadiumArea2 .stadiumH").css({"backgroundColor":"#fdeaff"});

            

            $(".standInfo1").mouseover(function(){
                $(".standInfo").css({"boxShadow":"none","borderTopColor":"#dadada","color":"#aaa"});
                $(".standSeats").children("input").css({"color":"#aaa"});
                $(".standInfo .standName").css({"borderBottomColor":"#dadada"});

                $(".standInfo1").css({"boxShadow":"3px 3px 15px #ddd","borderTopColor":"#00519e","color":"#313131"});
                $(".standInfo1 input").css({"color":"#00519e"});
                $(".standInfo1 .standName").css({"borderBottomColor":"#00519e"});

                $(".stadiumFloor3A1, .stadiumFloor3A2, .stadiumFloor3A3, .stadiumFloor2-2A1, .stadiumFloor2-2A2, .stadiumFloor2-1A1, .stadiumFloor2-1A2, .stadiumFloor2-1A3").css({"backgroundColor":"#8cafca"});
                $(".stadiumFloor3A1, .stadiumFloor3A2").css({"backgroundColor":"#04518C"});
            });
            $(".standInfo2").mouseover(function(){

                $(".standInfo").css({"boxShadow":"none","borderTopColor":"#dadada","color":"#aaa"});
                $(".standSeats").children("input").css({"color":"#aaa"});
                $(".standInfo .standName").css({"borderBottomColor":"#dadada"});

                $(".standInfo2").css({"boxShadow":"3px 3px 15px #ddd","borderTopColor":"#00519e","color":"#313131"});
                $(".standInfo2 input").css({"color":"#00519e"});
                $(".standInfo2 .standName").css({"borderBottomColor":"#00519e"});

                $(".stadiumFloor3A1, .stadiumFloor3A2, .stadiumFloor3A3, .stadiumFloor2-2A1, .stadiumFloor2-2A2, .stadiumFloor2-1A1, .stadiumFloor2-1A2, .stadiumFloor2-1A3").css({"backgroundColor":"#8cafca"});
                $(".stadiumFloor3A3").css({"backgroundColor":"#04518C"})
            });
            $(".standInfo3").mouseover(function(){

                $(".standInfo").css({"boxShadow":"none","borderTopColor":"#dadada","color":"#aaa"});
                $(".standSeats").children("input").css({"color":"#aaa"});
                $(".standInfo .standName").css({"borderBottomColor":"#dadada"});

                $(".standInfo3").css({"boxShadow":"3px 3px 15px #ddd","borderTopColor":"#00519e","color":"#313131"});
                $(".standInfo3 input").css({"color":"#00519e"});
                $(".standInfo3 .standName").css({"borderBottomColor":"#00519e"});

                $(".stadiumFloor3A1, .stadiumFloor3A2, .stadiumFloor3A3, .stadiumFloor2-2A1, .stadiumFloor2-2A2, .stadiumFloor2-1A1, .stadiumFloor2-1A2, .stadiumFloor2-1A3").css({"backgroundColor":"#8cafca"});
                $(".stadiumFloor2-2A1, .stadiumFloor2-2A2").css({"backgroundColor":"#04518C"})
            });
            $(".standInfo4").mouseover(function(){

                $(".standInfo").css({"boxShadow":"none","borderTopColor":"#dadada","color":"#aaa"});
                $(".standSeats").children("input").css({"color":"#aaa"});
                $(".standInfo .standName").css({"borderBottomColor":"#dadada"});

                $(".standInfo4").css({"boxShadow":"3px 3px 15px #ddd","borderTopColor":"#00519e","color":"#313131"});
                $(".standInfo4 input").css({"color":"#00519e"});
                $(".standInfo4 .standName").css({"borderBottomColor":"#00519e"});

                $(".stadiumFloor3A1, .stadiumFloor3A2, .stadiumFloor3A3, .stadiumFloor2-2A1, .stadiumFloor2-2A2, .stadiumFloor2-1A1, .stadiumFloor2-1A2, .stadiumFloor2-1A3").css({"backgroundColor":"#8cafca"});
                $(".stadiumFloor2-1A1, .stadiumFloor2-1A2, .stadiumFloor2-1A3").css({"backgroundColor":"#04518C"})
            });

            // 상세버튼! zidenie3a
            $(".standInfo").click(function(){


                var abc = $(".stadiumArea2 .stadiumA").off("mouseover");

                $(".ticketsNav p").css({"backgroundColor":"#aaa","color":"#fff"});
                $(".ticketsNavNum").css({"backgroundColor":"#ccc", "color":"#fff"});
                $(".ticketsNav p:eq(2)").css({"backgroundColor":"#00519e"});
                $(".ticketsNavNum:eq(2)").css({"backgroundColor":"#fff", "color":"#00519e"});

                $(this).siblings().css({"display":"none"})
                $(this).delay(300).animate({"left":0},500).css({"borderTopColor":"#00519e;"});
                $(this).children(".standName").css({"borderBottomColor":"#00519e"});
                $(this).children(".standSeats").children("input").css({"color":"#00519e"});

                $(".getTicketsArea").delay(200).animate({"left":"25%"},1200,"swing",function(){
                });

                $(document).on("change","select[name=ticektNums]",function(){
                var ticketNumSelect = $("select[name=ticektNums] option:selected").text();
                standPriceResult.value = ticketNumSelect*realSeatsPrice.ZINEDINE3a
                });
                console.log(standPriceResult.value)


                // 확인버튼!
                $(".getTicketBtn button").first().click(function(){


                    if(standPriceResult.value=="0"){
                        alert("Please review the number of people you selected");
                    }else{
                        var ticketNumSelect = $("select[name=ticektNums] option:selected").text();

                        var ticketCheck = confirm("Review your information\n\nThe seat(s) you selected is/are  '"+realSeatsNameZinedine[0]+"'\nThe number of people is  '"+ticketNumSelect+" personnel'\nYour total payment is  '"+standPriceResult.value+"€'");

                        if(ticketCheck){
                        alert("Congratulations ! You have a Reservation. Thank You.");
                        // 확인후 남은좌석 만들기
                        zinedine3Num3A.value= zinedine3Num3A.value-ticketNumSelect
                        }else{alert("Your order was Cancelled")};
                    };


                });

            });
        }else{}
    });
    
    
    


////////////// 티켓 요금 계산
/*
var standPriceResult = document.getElementById("standPriceResult")


 $(document).on("change","select[name=ticektNums]",function(){
        var ticketNumSelect = $("select[name=ticektNums] option:selected").text();
        standPriceResult.value = ticketNumSelect*realSeats.ZINEDINE3a
    });

*/

});
