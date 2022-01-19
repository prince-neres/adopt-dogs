// READ
const read = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/dogs/read",
    success: function (data) {
      for (dog of data) {
        let div = `<div class="card" id="DogCard" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${dog.name}</h5>
                      <p class="card-text">Age: ${dog.age}</p>
                      <p class="card-text">Breed: ${dog.breed}</p>
                      <p class="card-text">${dog.description}</p>
                      <center>
                      <a href="#" class="btn btn-primary" onclick="update(${dog.id}, '${dog.name}', ${dog.age}, '${dog.breed}', '${dog.description}')">Update</a>
                      <a href="#" class="btn btn-danger" id="${dog.id}" onclick="remove(${dog.id})">Remove</a>
                      </center>
                    </div>
                  </div>`;
        $(".Dogs").append(div);
      }
    },
  });
};

// CREATE
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
      age: age,
      breed: breed,
      description: description,
    }),
    contentType: "application/json",
    success: function (data) {
      document.location.reload(true);
    },
  });
};

// UPDATE
const update = (id, name, age, breed, description) => {
 
};

// REMOVE
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

read();
