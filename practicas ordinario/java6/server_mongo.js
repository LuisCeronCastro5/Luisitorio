
//server_mongo. js
const
express=require ('express');
const
cors=require( 'cors');
const app=express();
const port=3000;
app. use(cors()); //para las peticiones del frontend app. use (express. urlencoded ({extended: true}));
app. use (express. json());
//traernos la cadena de conexion de mongodb
const {MongoClient, ServerApiVersion} = require( 'mongodb') ;
const
uri='mongodb+srv://<user>:<password>@cluster0.3xq2j.mongodb.net/?retryWrites=true&w=majority';

//npm install cors
app.listen(port, async () => {
    console.log(`Server attending at ${port}`);
    await run();
});


