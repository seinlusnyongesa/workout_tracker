const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//require Auth for all workouts routes
router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);
module.exports = router;
