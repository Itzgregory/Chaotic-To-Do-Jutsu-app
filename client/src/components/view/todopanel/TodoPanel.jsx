import React from 'react';

const TodoPanel = ({ addNew, setNewTodo, update, deleteTodoOfList, popupActive, setPopupActive, todo, user, newTodo, deleteTodos, closeSession }) => {
    return (
        <div className='App'>
            
            <h1>Welcome, {user.user[0].name}</h1>
            <h4>Your Tasks</h4>
            {!todo.todos.length ? (
                <div className="todo">
                    <div className="text">You haven't discovered a new forbidden Jutsu to learn</div>
                </div>
            ) : (
                <div className="todos">
                    {todo.todos.map(todo => (
                        <div onClick={() => update(todo._id)} className={"todo " + (todo.complete ? "is-complete" : "")} key={todo._id}>
                            <div className="checkbox"></div>
                            <div className="text">{todo.text}</div>
                            <button className="delete-todo" onClick={(evt) => deleteTodoOfList(todo._id, evt)}>x</button>
                        </div>
                    ))}
                </div>
            )}
            <div className="actions-todo-panel">
                <button className='button' onClick={deleteTodos}>Delete All</button>
                <button className="button" onClick={closeSession}>Close Session</button>
            </div>
            <div className="addPopup" onClick={() => setPopupActive(true)}>+</div>
            {popupActive && (
                <div className="popup">
                    <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
                    <div className="content">
                        <h3>Add Task</h3>
                        <input type="text" className="add-todo-input" onKeyDown={addNew} onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                        <div className='button' onClick={addNew}>Create Goal</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoPanel;
