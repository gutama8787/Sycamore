// This is the starting point for the back end

// first lets import all the necesseray dependencies

// inorder to use the import syntax i need to
// add "type":"module" to package.json

// express is used fo routing, creating a server,
// and connecting to db
import express from 'express';

// use mongoose to create schema, model
// basically to make mongodb easier.
import mongoose from 'mongoose'; 

// cros origin connection 
import cors from 'cors';

import postRoutes from './routes/posts.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express();

// a midlewear to make parsing data easier
app.use(express.json());

// allow connection from different origins.
app.use(cors());


// Establish routing.
// TDD




const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000;

app.use('/posts',postRoutes)

app.get('/',(req,res)=> {
    res.send('HELLO WELCOME TO THE BACKEND')
})

// use mongoose to connect to our database
// if connection is successful listen on port

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`listening on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error.message} failed to connect to db`));










mongoose.set('useFindAndModify', false);









