$(window).scroll(function() {
  var winTop = $(window).scrollTop(); // 스크롤 현재 위치
  var winHeight = $(window).height(); // 윈도우창 높이 가변
  var docHeight = $(document).height(); // 도큐먼트 높이 고정

  var winBottom = winTop + winHeight - 250; // 스크롤 bottom
  var headerH = $("#header").outerHeight(); // header 높이값

  ////////////// about me //////////////
  var aboutHeaderH = $(".about_header").outerHeight(); // header 높이값

  // about me profile_summary_wrap
  if (winTop >= headerH + aboutHeaderH + 70) {
    $(".profile_summary_wrap").css({ position: "fixed", top: "0" });
  } else {
    $(".profile_summary_wrap").css({ position: "static" });
  }

  ////////////// project //////////////

  // var projectVisualH = $(".project_visual").outerHeight();
  var projectSummaryH = $(".project_summary").outerHeight();
  var detailVisualH = $(".detail_visual").outerHeight();
  var detailResponsiveTxtH = $(".detail_responsive_txt").outerHeight();
  var detailResponsiveImgH = $(".detail_responsive_img").outerHeight();
  var detailExplainItemH = $(".detail_explain_wrap li").outerHeight();

  var initDetailExplainItemH =
    projectSummaryH +
    detailVisualH +
    detailResponsiveTxtH +
    detailResponsiveImgH;

  var heightEffect = {
    transform: "translateY(0)",
    opacity: "1"
  };

  // if (winBottom >= projectSummaryH) {
  //   $(".detail_visual").css(heightEffect);
  // }

  if (winBottom >= projectSummaryH + detailVisualH) {
    $(".detail_responsive_txt").css(heightEffect);
  }

  if (winBottom >= projectSummaryH + detailVisualH + detailResponsiveTxtH) {
    $(".detail_responsive_img").css(heightEffect);
  }

  if (winBottom >= projectSummaryH + detailVisualH + detailResponsiveImgH) {
    $(".detail_responsive_txt").css(heightEffect);
  }

  for (var i = 1; $(".detail_explain_wrap li").length + 1 > i; i++) {
    if (winBottom >= initDetailExplainItemH + detailResponsiveImgH * i) {
      $(".detail_explain_wrap li:nth-child(" + i + ")").css(heightEffect);
    }
  }
});
