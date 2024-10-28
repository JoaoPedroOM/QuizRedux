import { configureStore } from "@reduxjs/toolkit";

import questionSlice from "./question-slice";

const store = configureStore({
    reducer: {question: questionSlice.reducer}
})

export default store