const remove = (id) => {
  $(`#${id}`).parent().parent().parent().fadeOut();
  $.ajax({
    url: "http://localhost:3000/dogs/delete",
    type: "DELETE",
    data: JSON.stringify({
      id: id,
    }),
    contentType: "application/json",
  });
};
