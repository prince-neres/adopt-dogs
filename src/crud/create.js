const create = () => {
  let name = $("#name").val();
  let age = $("#age").val();
  let breed = $("#breed").val();
  let description = $("#description").val();

  $.ajax({
    url: "http://localhost:3000/dogs/create",
    type: "POST",
    data: JSON.stringify({
      name: name,
      age: Number(age),
      breed: breed,
      description: description,
    }),
    contentType: "application/json",
  });
  location.reload();
};
