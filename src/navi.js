$(".RegisterDog").on("click", function () {
  $(".Dogs").fadeOut(0);
  $(".DogForm").fadeIn(0);
});

$(".AllDogs").on("click", function () {
  $(".DogForm").fadeOut(0);
  $(".Dogs").fadeIn(0);
});
