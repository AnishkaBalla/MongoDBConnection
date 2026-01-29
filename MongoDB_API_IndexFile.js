const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
//Hidden for sake of security, const uri=""
const data=[{id:1,first_name:"Anishka", last_name:"Balla"},{id:2, first_name:"Anonymous1", last_name: "abc"}]
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("test")
    const submissions = database.collection("submissions")
    app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/message", async(req,res)=>{
    const entries = await submissions.find({}).toArray()
    res.json(entries)
})
app.post("/message", async(req,res,)=>{
    const recieveData = req.body
    await submissions.insertOne(recieveData)
    res.json({success:true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

run().catch(console.dir);

