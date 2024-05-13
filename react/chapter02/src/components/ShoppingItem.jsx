import { useState } from 'react';
import '../styles/ShoppingItem.css'
// 장보기 List에서 다루는 Item 컴포넌트를 만듭니다. 장 볼 아이템의 상품명, 개수를 나타내며 편집 버튼과 삭제 버튼 UI를 제작합니다.
import { MdDelete, MdEdit } from "react-icons/md";

const ShoppingItem = ({ id, title, handleDelete, handleEdit }) => {
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(title);

  const deleteBtnHandler = (e) => {
    handleDelete(e.target.parentNode.id);  
  }
  const editBtnHandler = (e) => {
    handleEdit(e.target.parentNode.id);
  }
  return (
    <div id={id} className='list-item'>
        <span>{title}</span>
        <input type="text" id="edit-title"/>
        <button className='green' onClick={editBtnHandler}> <MdEdit /> </button>
        <button className='red' onClick={deleteBtnHandler}> <MdDelete /> </button>
    </div>

  )
}

export default ShoppingItem