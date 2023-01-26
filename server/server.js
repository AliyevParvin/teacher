const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const port = 8000;
const schoolSchema = new Schema({
  name: { required: true, type: String },
  salary: { required: true, type: Number },
  description: { required: true, type: String },
  profil: { required: true, type: String },
  subject: { required: true, type: String },
});
const Schools = mongoose.model("schools", schoolSchema);
app.use(bodyParser.json());
app.use(cors());
app.get("/schools/", (req, res) =>
  Schools.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  })
);
app.get("/schools/:id", (req, res) => {
  const { id } = req.params;
  Schools.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
});
app.delete("/schools/:id", (req, res) => {
  const { id } = req.params;
  Schools.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send("Succesfully Deleted");
      }
    }
  });
});
app.post("/schools/", (req, res) => {
  let school = new Schools({
    name: req.body.name,
    profil: req.body.profil,
    salary: req.body.salary,
    subject: req.body.subject,
    description: req.body.description,
  });
  school.save();
  res.send({ message: "SUCCESS" });
});
mongoose.connect(
  "mongodb+srv://AliyevParvin:pervin2003@cluster0.msopybu.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
