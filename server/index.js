import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/movies.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/movies", postRoutes);
app.use("/user", userRoutes);
// app.use("/", (req, res) => {
//   res.send("Hello, this is Movies Api");
// });

// CONNECTION_URL = "mongodb+srv://{userName}:{passWord}@todo.j4pzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.port || 4000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`server running on port: ${port}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

//mongodb cloud atlas
