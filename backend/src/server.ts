import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    status: "Backend Running ",
  });
});

app.post("/api/experiment", (req, res) => {
  const { question } = req.body;

  console.log(question);

  res.json({
    topic: "projectile_motion",

    simulation: {
      type: "projectile",

      variables: {
        velocity: 20,
        angle: 45,
        gravity: 9.81,
      },

      editable: [
        "velocity",
        "angle",
        "gravity",
      ],
    },

    learning: {
      objective:
        "Understand projectile motion.",

      hints: [
        "Increase the angle.",
        "Observe the trajectory.",
      ],

      reflection: [
        "What changes when angle increases?",
      ],
    },
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});