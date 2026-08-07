import express from "express";
import cors from "cors";

import experimentRoutes from "./experiment/experiment.routes";
import testRoutes from "./test.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    status: "Backend Running ",
  });
});

app.use("/api/experiment", experimentRoutes);
app.use("/", testRoutes);

app.listen(5000, () => {
  console.log(" Server running on port 5000");
});