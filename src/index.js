const pg = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { user } = require("pg/lib/defaults");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "dogs",
  password: "val44",
  port: 5432,
});

client.connect();

// CREATE
app.post("/dogs/create", function (req, res) {
  client.query("ALTER SEQUENCE DOGS_ID_seq RESTART WITH 1");
  client
    .query({
      text: "INSERT INTO DOGS(ID, NAME, AGE, BREED, DESCRIPTION) VALUES(NEXTVAL('dogs_sequence'), $1, $2, $3, $4)",
      values: [
        req.body.name,
        req.body.age,
        req.body.breed,
        req.body.description,
      ],
    })
    .then(function (ret) {
      console.log("Cachorro cadastrado:", req.body);
    });
});

// READ
app.get("/dogs/read", function (req, res) {
  client.query("SELECT * FROM DOGS").then(function (ret) {
    res.send(ret.rows);
  });
});

// UPDATE
app.put("/dogs/update", function (req, res) {
  client
    .query({
      text: "UPDATE DOGS SET NAME = $2, AGE = $3, BREED = $4, DESCRIPTION = $5 WHERE ID = $1",
      values: [
        req.body.id,
        req.body.name,
        req.body.age,
        req.body.breed,
        req.body.description,
      ],
    })
    .then(function (ret) {
      console.log("Dados atualizados:", req.body);
    });
});

// DELETE
app.delete("/dogs/delete", function (req, res) {
  client
    .query({
      text: "DELETE FROM DOGS WHERE ID = $1",
      values: [req.body.id],
    })
    .then(function (ret) {
      console.log(`Cão de ID: ${req.body.id} foi removido com sucesso!`);
    });
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
