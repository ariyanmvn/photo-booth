const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.port || 5000;
const app = express();
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ariyan.mefyr.mongodb.net/?retryWrites=true&w=majority&appName=Ariyan`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const db = client.db("photo-booth");
    const usersCollection = db.collection("users");
    const postsCollection = db.collection("posts");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({
          message: "Users already exists in db",
          insertedId: null,
        });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.post("/posts", async (req, res) => {
      const data = req.body;
      const result = await postsCollection.insertOne(data);
      res.send(result);
    });

    //user route
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    //posts route
    app.get("/posts", async (req, res) => {
      const result = await postsCollection.find().toArray();
      res.send(result);
    });

    //post details
    app.get("/posts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postsCollection.findOne(query);
      res.send(result);
    });

    //my-posts
    app.get("/my-posts/:email", async (req, res) => {
      const email = req.params.email;
      const query = { "author.email": email };
      const result = await postsCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    app.put("/users/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const updatedData = req.body;
        const filer = { email };
        const updatedDoc = { $set: updatedData };
        const result = await usersCollection.updateOne(filer, updatedDoc);
        if (result.matchedCount === 0) {
          return res.status(404).send({ message: "User not found" });
        }
        res.send({ message: "user updated successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failed to update user" });
      }
    });
  } catch (err) {
    console.error("error connecting to mongodb", err.message);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("the server is working!");
});

app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
