// TODO 앱의 제목을 작성합니다.
// TODO1. Redux를 사용하여 버튼 클릭 시 카운트 숫자가 +1 증가합니다.
// TODO2. Redux-Thunk를 통해 비동기 처리를 하여 버튼 클릭 시 1초 후에 숫자가 +1 증가합니다.
// TODO3. css를 이용하여 자유롭게 컴포넌트 스타일링을 해주세요!
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, incrementAsync } from "./redux/action";

function App() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state)
    const add = () => {
        dispatch(increment())
    }
    
    const addSync = () => {
        dispatch(incrementAsync())
    }

    return (
        <div className="counter-box">
            <h1>Count: {count}</h1>
            <div>
                <button onClick={add}>+1</button>
                <button onClick={addSync} >1초후 증가</button>
            </div>
        </div>
    );
}

export default App;
