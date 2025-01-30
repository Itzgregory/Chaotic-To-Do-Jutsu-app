import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoPanel from '../../view/todopanel/TodoPanel';
import { getToDos, updateToDo, deleteToDo, addNewTodo, deleteAllTodos } from '../../../features';

export const TodoContainer = ({ user, closeSession }) => {
    const [popupActive, setPopupActive] = useState(false);
    const todo = useSelector((state) => state.todo);
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    const handleUpdate = (id) => dispatch(updateToDo(id));
    const handleDelete = (id, evt) => {
        evt.stopPropagation();
        dispatch(deleteToDo(id));
    };
    const handleDeleteAll = () => dispatch(deleteAllTodos());
    const handleAddNew = (evt) => {
        if (evt.key === "Enter" || evt.target.className === "button") {
            dispatch(addNewTodo(newTodo));
            setPopupActive(false);
            setNewTodo("");
        }
    };

    useEffect(() => {
        dispatch(getToDos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {!todo.loading && (
                <TodoPanel
                    addNew={handleAddNew}
                    setNewTodo={setNewTodo}
                    update={handleUpdate}
                    deleteTodoOfList={handleDelete}
                    popupActive={popupActive}
                    setPopupActive={setPopupActive}
                    todo={todo}
                    user={user}
                    newTodo={newTodo}
                    deleteTodos={handleDeleteAll}
                    closeSession={closeSession}
                />
            )}
        </>
    );
};

