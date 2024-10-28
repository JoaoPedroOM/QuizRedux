import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        correct: 0,
        wrong: 0
    }, 
    reducers: {
        answerCorrect(state, action){
            state.correct++
        },
        answerWrong(state, action){
            state.wrong++
        }
    }
})

export const questionActions = questionSlice.actions;

export default questionSlice