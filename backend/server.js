// sending and receiving json
import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json()); // same as body-parser

app.use("/api/v1/restaurants", restaurants); // entry url
app.use("*", (req, res) => res.status(404).json({ error: "not fount" })); // routes doesn't exist

export default app;
