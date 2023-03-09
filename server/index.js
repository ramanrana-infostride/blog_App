import express from "express";

const app = express();
const port = 8000;

import Connection from "./database/db.js    ";

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});     

Connection();