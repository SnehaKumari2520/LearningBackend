// require('dotenv').config({path: './env'})

console.log("TESTING ENV:", process.env.MONGODB_URI);

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: './.env'
})

const app = express();


connectDB()

.then(()=>{
    app.on("error", (error)=> {
        console.log("ERRR: ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at aport: ${process.env.PORT}`);
    })
    
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!! ", err);
})

/*
import express from "express"

const app = express()
;( async () => {

    try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error", (error)=> {
        console.log("ERRR: ", error);
        throw error
     })

    app.listen(peocess.env.PORT, () =>{
        console.log(`app is listening at port ${process.env.PORT}`)
    })
    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()
*/
