import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  liked: [
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://api.exercisedb.io/image/ZJOr7grvIyBCkE",
      id: "0011",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://api.exercisedb.io/image/ZJOr7grvIyBCkE",
      id: "0011",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://api.exercisedb.io/image/ZJOr7grvIyBCkE",
      id: "0011",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://api.exercisedb.io/image/ZJOr7grvIyBCkE",
      id: "0011",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://api.exercisedb.io/image/ZJOr7grvIyBCkE",
      id: "0011",
      name: "3/4 sit-up",
      target: "abs",
    },
  ],
};

export const exerciseSlice = createSlice({
  name: "exercises",
  initialState: INITIAL_STATE,
  reducers: {
    addExerciseToLikedList(state, action) {
      state.liked.push(action.payload);
    },
  },
});

export const { addExerciseToLikedList } = exerciseSlice.actions;
export default exerciseSlice.reducer;
