const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json()); 
const dbadduser = require("./db.add.user");


app.get("/adduser", async (req, res) => {
  try {
    
    const input = req.query;

    
    await dbadduser.addUser(input);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});


// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => {
  try {
    const input = req.body; 

   await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.listen(5000);