
// action(dispath) => reducer(function) => store(dispatch) => react(UI rendering)
// Redux Toolkit에서는..
// store 생성 => slice 생성 => sub reducer 필요 => combine
// => reducer 필요 => configureStore 이용 => store object 생성

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})


// store 사용 => Provider로 감싸줌
