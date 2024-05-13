import React from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingList from "./ShoppingList";

const ContentBox = ({ input, tasks, handleChange, handleDelete, handleSubmit, handleEdit }) => {
    return (
        <div className="content-box">
            <ShoppingForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
            <ShoppingList tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
};

export default ContentBox;
