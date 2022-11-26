$(".menu").on("click", function () {
  $("header .wrp nav").show();
  $(".lightbox").show();
});

$(".lightbox").on("click", function () {
  $("header .wrp nav").hide();
  $(".lightbox").hide();
});

$(".all .simplify .text .bottom .btn").on("click", function () {
  if ($(this).hasClass(".active")) return;
  $(".all .simplify .text .bottom .btn").removeClass("active");
  $(this).toggleClass("active");
});
