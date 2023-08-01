import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { auth } from "../utils/firebase";

const LikedExercises = () => {
  const exercises = useSelector((state) => state.exercise.liked);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  return (
    <>
      <Box mt="50px" p="20px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="46px"
        >
          Liked Exercises
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "107px", xs: "50px" }, overflowY: "scroll" }}
        >
          {exercises.map((exercise) => (
            <ExerciseCard exercise={exercise} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LikedExercises;
