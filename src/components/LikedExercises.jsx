import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { Box, Button, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { auth } from "../utils/firebase";

const LikedExercises = () => {
  const exercises = useSelector((state) => state.exercise.liked);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (curUser) => {
      if (curUser) {
        console.log(curUser);
        setUser(curUser);
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

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
          {!user ? (
            <Button onClick={() => handleSignIn()}>Sign in</Button>
          ) : (
            exercises.map((exercise, index) => (
              <ExerciseCard exercise={exercise} key={index} />
            ))
          )}
          {/* {exercises.map((exercise, index) => (
            <ExerciseCard exercise={exercise} key={index} />
          ))} */}
        </Stack>
      </Box>
    </>
  );
};

export default LikedExercises;
