import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
  console.log(action)
    switch (action.type) {
        case "ADD_EXPENSE":
          return {
            ...state,
            expenses: [...state.expenses, action.payload]
          }
        case 'DELETE_EXPENSE':
          return {
            ...state,
            expenses: state.expenses.filter(
              (expense) => expense.id !== action.payload
            )
          }
        case 'SET_BUDGET':
          return {
            ...state,
            budget: action.payload
          }
        default:
            return state
    }
};

const initialState = {
    budget: 30_000,
    expenses: [
        { id: crypto.randomUUID(), name: "밥먹기", cost: 1_000 },
        { id: crypto.randomUUID(), name: "카드비", cost: 3_000 },
        { id: crypto.randomUUID(), name: "교통비", cost: 7_000 },
    ],
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
    return <AppContext.Provider value={{
      expenses: state.expenses,
      budget: state.budget,
      dispatch
    }} {...props} />;

    // 위와 같은 소스코드
    // return (
    //   <AppContext.Provider value={{}}>
    //     {props.children}
    //   </AppContext.Provider>
    // )
};
