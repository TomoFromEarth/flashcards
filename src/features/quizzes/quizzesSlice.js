import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const addQuizForTopicId = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(
      addQuizId({
        topicId: payload.topicId,
        quizId: payload.id
      })
    );
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
