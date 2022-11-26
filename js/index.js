$(".menu").on("click", function () {
  $("header .wrp nav").show();
  $(".lightbox").show();
});

$(".lightbox").on("click", function () {
  $("header .wrp nav").hide();
  $(".lightbox").hide();
});
