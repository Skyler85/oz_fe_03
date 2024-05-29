import { createSlice, nanoid }  from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(state, action)
      state.push({
        id: nanoid(),
        text: action.payload ,
        completed: false,
        date: Intl.DateTimeFormat('ko-KR').format(new Date()),
      })
    },
    toggleTodo: (state, action) => {
      console.log(state, action)
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    editTodo: (state, action) => {
      console.log(state, action)
      const { id, newTodo} = action.payload
      const todo = state.find(todo => todo.id === id)
      if(todo) {
        todo.text = newTodo
      }
    },
    deleteTodo: (state, action) => {
      console.log(state, action)
      return state.filter(todo => todo.id !== action.payload)
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer