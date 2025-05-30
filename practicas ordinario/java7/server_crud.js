/*server_crud.js
C --> create
R --> retrieve
U --> update
D --> delete */

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
// No olvides color tu password 
const cliente= new MongoClient(uri);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}
);