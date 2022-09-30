import express from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { loggingRouter } from "./routes/logging";

const app = express();


app.get("/", (req, res) => {
  res.status(200).json({ message: "Worked API v1" });
});

app.use('/logging', loggingRouter)

const port = process.env.PORT || 5100;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
