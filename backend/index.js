const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.port || 5000;
const app = express();
app.use(express.json());
app.use(cors());




app.get("/",(req,res)=>{
    res.send("the server is working!")
})


app.listen(port, () => {
  console.log(`your server is running on port ${port}`);
});
