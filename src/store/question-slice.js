import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        totalQuestions: 8,
        correct: 0,
        wrong: 0,
        quizCompleted: false
    }, 
    reducers: {
        answerCorrect(state, action){
            state.correct++
        },
        answerWrong(state, action){
            state.wrong++
        },
        completedQuiz(state){
            state.quizCompleted = true;
        },
        resetQuiz(state){
            state.quizCompleted = false;
            state.correct = 0;
            state.wrong = 0;
        }

    }
})

export const questionActions = questionSlice.actions;

export default questionSlice