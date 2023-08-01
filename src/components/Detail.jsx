import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { getExercises } from "../utils/firebase";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const [isLiked, setIsLiked] = useState(false);

  const [newExercises, setNewExercises] = useState([]);
  const exercises = useSelector((state) => state.exercise.liked);

  useEffect(() => {
    exercises.map((exercise) => {
      if (exercise.name === name) {
        setIsLiked(true);
      }
    });
  }, []);

  useEffect(() => {
    console.log("exercises", newExercises);
  }, [newExercises]);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  const handleAddExercise = async () => {
    // dispatch add exercise to liked list redux method
    setNewExercises(await getExercises());
  };

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Stack direction="row" gap={2} sx={{ width: "100%" }}>
          <Typography
            sx={{ fontSize: { lg: "64px", xs: "30px" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <IconButton
            size="large"
            sx={{ height: "2em", width: "2em", alignSelf: "center" }}
            onClick={handleAddExercise}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Stack>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
