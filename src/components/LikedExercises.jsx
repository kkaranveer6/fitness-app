import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const LikedExercises = () => {
  const exercises = useSelector((state) => state.exercise.liked);

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
