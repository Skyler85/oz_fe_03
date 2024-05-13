import ShoppingForm from "./ShoppingForm";
import ShoppingList from "./ShoppingList";
import { PropTypes } from 'prop-types';

const ContentBox = ({ setTasks, input, tasks, handleChange, handleDelete, handleSubmit, handleEdit }) => {
    return (
        <div className="content-box">
            <ShoppingForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ShoppingList tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
};

ContentBox.propTypes = {
    input: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
}

export default ContentBox;
