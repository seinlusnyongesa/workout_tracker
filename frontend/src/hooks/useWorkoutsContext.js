import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error(
      "useWorkout context must me used inside a WorkoutContexProvider"
    );
  }
  return context;
};

export default useWorkoutsContext;
