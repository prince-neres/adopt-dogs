$(".RegisterDog").on("click", function () {
  $(".Dogs").fadeOut(0);
  $("#AboutUs").fadeOut(0);
  $(".DogForm").fadeIn(0);
});

$(".AllDogs").on("click", function () {
  $(".DogForm").fadeOut(0);
  $("#AboutUs").fadeOut(0);
  location.reload();
  $(".Dogs").fadeIn(0);
});

$(".AboutUs").on("click", function () {
  $(".DogForm").fadeOut(0);
  $(".Dogs").fadeOut(0);
  $("#AboutUs").fadeIn(0).css("display", "flex");
});
