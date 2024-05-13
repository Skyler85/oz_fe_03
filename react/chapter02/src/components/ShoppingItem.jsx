import { PropTypes } from "prop-types";
import "../styles/ShoppingItem.css";
// 장보기 List에서 다루는 Item 컴포넌트를 만듭니다. 장 볼 아이템의 상품명, 개수를 나타내며 편집 버튼과 삭제 버튼 UI를 제작합니다.
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

const ShoppingItem = ({ tasks, setTasks, id, title, handleDelete, handleEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handelEditChange = (e) => {
        setEditedTitle(e.target.value);
    };


    const handleSubmit = () => {
       const newTasks = tasks.map((task) => {
        if (task.id === id) {
            return {
               ...task,
                title: editedTitle,
            };
        }
        return task;
       })
       setTasks(newTasks);
       setIsEditing(false);
    }


    const deleteBtnHandler = (e) => {
        handleDelete(e.target.parentNode.id);
    };
    // const editBtnHandler = (e) => {
    //     handleEdit(e.target.parentNode.id);
    // };

    if (isEditing) {
        return (
            <div id={id} className='list-item'>
                <form className="title-input" onSubmit={handleSubmit}>
                    <input type='text' id='edit-title' value={editedTitle} onChange={handelEditChange} autoFocus/>
                </form>
                <button className='green' onClick={handleSubmit}>
                    <MdEdit />{" "}
                </button>
                <button className='red' onClick={deleteBtnHandler}>
                    <MdDelete />{" "}
                </button>
            </div>
        );
    } else {
        return (
            <div id={id} className='list-item'>
                <span className="title-input">{title}</span>
                <button className='green' onClick={() => {setIsEditing(true)}}>
                    {" "}
                    <MdEdit />{" "}
                </button>
                <button className='red' onClick={deleteBtnHandler}>
                    {" "}
                    <MdDelete />{" "}
                </button>
            </div>
        );
    }
    // return (
    //   <div id={id} className='list-item'>
    //       <span>{title}</span>
    //       <input type="text" id="edit-title"/>
    //       <button className='green' onClick={editBtnHandler}> <MdEdit /> </button>
    //       <button className='red' onClick={deleteBtnHandler}> <MdDelete /> </button>
    //   </div>
    // )
};

ShoppingItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};

export default ShoppingItem;
