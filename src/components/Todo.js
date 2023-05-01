import React, { useState } from "react";
import "../styles/Task.css";

/**
 *
 * @param {{
 *    id: number,
 *    text: String,
 *    completed: boolean
 * }} todo
 * @returns
 */
const Todo = ({ todo, deleteTask, markTaskCompleted }) => {
  // const [isDoneList, setIsDoneList] = useState(
  //   Array(todo.length).fill(false)
  // );

  const toggleIsDone = (index) => {
    // const newList = [...isDoneList];
    // newList[index] = !newList[index];
    // setIsDoneList(newList);
  };

  return (
    <div>
      <div
        className={todo.completed ? "todo-task active" : "todo-task"}
        key={todo.id}
      >
        <p>{todo.text}</p>
        <div className="todo-buttons">
          <div className="svg-container" onClick={() => markTaskCompleted(todo)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.714"
              height="17.843"
              viewBox="0 0 24.714 17.843"
            >
              <path
                id="done_FILL0_wght400_GRAD0_opsz48_1_"
                data-name="done_FILL0_wght400_GRAD0_opsz48 (1)"
                d="M16.2,30.043l-8.5-8.5,1.632-1.632L16.2,26.778,30.781,12.2l1.632,1.632Z"
                transform="translate(-7.7 -12.2)"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="svg-container" onClick={() => deleteTask(todo)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.296"
              height="27.333"
              viewBox="0 0 24.296 27.333"
            >
              <path
                id="delete_forever_FILL0_wght400_GRAD0_opsz48"
                d="M15.631,26.538l4.518-4.594L24.7,26.538l1.784-1.822L21.97,20.122l4.518-4.594L24.7,13.706,20.148,18.3l-4.518-4.594-1.822,1.822,4.556,4.594-4.556,4.594Zm-3.8,6.8a2.335,2.335,0,0,1-2.278-2.278V9.417H8V7.139h7.137V6H25.159V7.139H32.3V9.417H30.74V31.055a2.335,2.335,0,0,1-2.278,2.278ZM28.462,9.417H11.834V31.055H28.462Zm-16.628,0v0Z"
                transform="translate(-8 -6)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
