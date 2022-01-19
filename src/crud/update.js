const update = (element, id, name, age, breed, description) => {
  let div = element.parentNode.parentNode.parentNode;
  div.innerHTML = `
    <div class="form-group">
        <input type="text" class="form-control" id="new-name" placeholder="${name}">
    </div>
    <div class="form-group">
        <input type="number" class="form-control" id="new-age" placeholder="${age}">
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="new-breed" placeholder="${breed}">
    </div>
    <div class="form-group">
        <textarea class="form-control" id="new-description" rows="3" placeholder="${description}"></textarea>
    </div>
        <a href="#" class="btn btn-success" id="put" onclick="put()" style="margin-top: 10px;">Confirm</a>`;

  $("#put").on("click", () => {
    var new_name = $("#new-name").val();
    var new_age = Number($("#new-age").val());
    var new_breed = $("#new-breed").val();
    var new_description = $("#new-description").val();
    id = Number(id);

    put(id, new_name, new_age, new_breed, new_description);
  });
};

const put = (id, name, age, breed, description) => {
  console.log(id, name, age, breed, description);
  $.ajax({
    url: "http://localhost:3000/dogs/update",
    type: "PUT",
    data: JSON.stringify({
      id: id,
      name: name,
      age: age,
      breed: breed,
      description: description,
    }),
    contentType: "application/json",
  });
  reload();
};

function reload() {
  location.reload();
}
