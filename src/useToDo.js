import React, {useReducer, useState} from "react";

export const ToDo = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-todos":
        return {
          todos: [...state.todos, {text: action.text, completed: false}],
          todoCount: action.todoCount + 1,
        };
      case "toggle-todos":
        return {
          todos: state.todos.map((t, idx) =>
            action.idx === idx ? {...t, completed: !t.completed} : t
          ),
          todoCount: action.todoCount,
        };
      default:
    }
  };

  const [{todos, todoCount}, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState("");

  return (
    <div>
      <div>Number of todos: {todoCount}</div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({type: "add-todos", text, todoCount});
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
        {todos.map((t, idx) => (
          <div
            key={t.text}
            onClick={() =>
              dispatch({
                type: "toggle-todos",
                idx,
                todoCount: t.completed ? todoCount + 1 : todoCount - 1,
              })
            }
            style={{textDecoration: t.completed ? "line-through" : ""}}
          >
            {t.text}
          </div>
        ))}
      </form>
    </div>
  );
};
