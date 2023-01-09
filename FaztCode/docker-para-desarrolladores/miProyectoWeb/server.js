import express from "express";
import { v4 } from "uuid";
import mongoose from "mongoose";

const app = express();

const db = await mongoose.connect("mongodb://mymongotest/sonoragobdb");
console.log(db.connection.db.databaseName);

const ProductModel = new mongoose.Schema({
  name: String,
});

app.get("/", async (req, res) => {
  // res.send("hello world");
  const newProduct = await ProductModel.create({
    name: "laptop",
  });
  res.json({
    id: v4(),
    newProduct,
  });
});

app.listen(3000);

console.log(`Server on port 3000`);
