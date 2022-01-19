// READ
const read = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/dogs/read",
    success: function (data) {
      for(dog of data){
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
                  </div>`
        $('.Dogs').append(div)
      }
    },
  });
}

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
      description: description
    }),
    contentType: "application/json",
    success: function (data) {
      document.location.reload(true)
    }
  });
}

// UPDATE
const update = (id, name, age, breed, description) => {
  $(`#${id}`).parent().parent().html(`
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" value="${name}">
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" value="${age}">
      </div>
      <div class="form-group">
        <label for="breed">Breed</label>
        <input type="text" class="form-control" id="breed" value="${breed}">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3" value="${description}"></textarea>
      </div>
      <center><a class="btn btn-primary" id="${id}" onclick="push(${id}, '${$('.form-control').eq(0).val()}', ${Number($('.form-control').eq(1).val())}, '${$('.form-control').eq(2).val()}', '${$('.form-control').eq(3).val()}')" style="margin-top: 10px;">Update</a></center>`)
}

const push = (id, name, age, breed, description) => {
  $.ajax({
    url: "http://localhost:3000/dogs/update",
    type: "PUT",
    data: JSON.stringify({
      id: id,
      name: name,
      age: age,
      breed: breed,
      description: description
    }),
    contentType: "application/json",
  });
}

// REMOVE
const remove = (id) => {
  $(`#${id}`).parent().parent().parent().fadeOut()
  $.ajax({
    url: "http://localhost:3000/dogs/delete",
    type: "DELETE",
    data: JSON.stringify({
      id: id,
    }),
    contentType: "application/json",
  });
}

read()

