$(".buttonImg").mouseover(function () {
  $(this).attr("src", "reqs/buttons/hover.svg");
  $(this).removeClass("clicked");
});
$(".buttonImg").mouseleave(function () {
  $(this).attr("src", "reqs/buttons/normality.svg");
  $(this).removeClass("clicked");
});
$(".buttonImg").click(function () {
  $(this).attr("src", "reqs/buttons/click.svg");
  $(this).addClass("clicked");
});
