import "./styles/App.css";
import { useState } from "react";
import SideBar from './components/SideBar';
import ContentBox from "./components/ContentBox";
/*
- 장보기 아이템의 상태관리를 하며 각 아이템은 고유 ID, 이름, 개수를 가집니다.
- 아이템 수정 상태를 관리를 합니다.
- 아이템 이름, 개수 입력 처리 기능을 각각의 함수로 작성합니다.
- 모든 아이템을 삭제하는 함수를 작성합니다.
- 폼 제출을 처리하는 함수를 작성하여 아이템을 추가하거나 기존 아이템을 수정하도록 합니다.
*/
function App() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: "리액트 과제 제출",
            date: new Date(),
        },
        {
            id: '2',
            title: "객체 리터럴 발표 준비",
            date: new Date(),
        },
    ]);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // input이 있을 경우에만 addTask를 실행합니다.
    const addTask = () => {
        if (input.length !== 0) {
            const newTask = {
                id: new Date().getTime(),
                title: input,
                date: new Date(),
            };
            setTasks([...tasks, newTask]);
            setInput("");
            console.log("Task가 등록되었습니다.");
        } else {
            tasks;
        }
        
    };

    //  task를 등록하는 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    };

    // task를 삭제하는 함수
    const handleDelete = (id) => {
        const deleteTask = tasks.filter((task) => {
            return Number(task.id) !== Number(id);
        });
        setTasks(deleteTask);
        console.log(tasks);
    };

    // task를 수정하는 함수
    const handleEdit = (id) => {
        console.log(id);
        
        setIsEditing(!isEditing);
        // const newTasks = tasks.map((task) => {
        //     if (task.id === id) {
        //         return {
        //             ...task,
        //             title: "수정된 이름",
        //         };
        //     }
        //     return task;
        // });
        // setTasks(newTasks);
        // console.log("Task가 수정되었습니다.");
    };

    return (
        <>
            <SideBar />
            <ContentBox input={input} handleChange={handleChange} handleSubmit={handleSubmit} tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} handleEdit={handleEdit} />
        </>
    );
}

export default App;
