import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick, disabled } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button disabled={disabled} onClick={() => onClick(index)}>
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
