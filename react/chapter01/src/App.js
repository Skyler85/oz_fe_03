// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
// export default App;



import { Component } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


export default class App extends Component {
    render() {
        return (
            <main className='main-container'>
                <div className='sub-container'>
                    <h1>장바구니</h1>
                    <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                      <ExpenseForm />
                      </div>
                    <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                      <ExpenseList />
                      </div>
                    <div style={{ display: "flex", justifyContent: "start", marginTop: "1rem" }}>
                        <p style={{ fontSize: "2rem", color: "" }}>총합계:</p>
                    </div>
                </div>
            </main>
        );
    }
}
