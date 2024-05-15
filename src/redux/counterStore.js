
import Todos from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:Todos
})

export default store
