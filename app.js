

import MongoManager from "./mongo-manager.js"
import Agent from "./src/schemas/agentschema.js";
import mongoose from "mongoose"
import Express from "express"

const PORT = process.env.PORT || 5000


const app = Express();

MongoManager.openMongoConnection();

app.get("/hello", (req, res) => {
  res.send("Hello, World!");

})
app.post("/agent-create", async (req, res) => {
  const datas= await  Agent.create(req.body)

   
 res.status(201).json({ message:"agent created:",data:datas });


  
})

app.listen(PORT, () => {
  console.log(` server listening on port ${PORT} `);
});

