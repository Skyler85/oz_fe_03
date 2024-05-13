// 장보기 List 컴포넌트로 ShoppingItem.js 파일의 아이템을 import하여 관리하고, List의 모든 목록을 지울 수 있는 UI를 제작합니다.
import '../styles/ShoppingList.css';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className='list'>
      {tasks.map((task) => {
        return <ShoppingItem key={task.id} task={task.title} handleDelete={handleDelete} handleEdit={handleEdit} {...task}/>
      })}
    </div>
  )
}

export default ShoppingList