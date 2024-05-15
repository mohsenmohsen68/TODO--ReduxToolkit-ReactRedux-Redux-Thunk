import { useEffect, useState } from "react";
import "./App.css";
import {
  getTodosFromServer,
  addTodo,
  removeTodo,
  toggleTodo
} from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function App(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    dispatch(
      getTodosFromServer("https://jsonplaceholder.typicode.com/todos?_limit=9")
    );
  }, []);

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add new TODO ..."
        />

        <button
          onClick={() => {
            dispatch(addTodo({ id: uuidv4(), title: todo, completed: false }));
            setTodo("");
          }}
        >
          add new todo
        </button>
      </div>
      <div className="todosContainer">
        {todos?.map((item) => (
          <li key={item.id} type="none">
            <div className="eachTodo">
              {item.title} 
              <div>
                {item.completed ? (
                  <span className="toggle" onClick={() => dispatch(toggleTodo(item))}>💚</span>
                ) : (
                  <span className="toggle" onClick={() => dispatch(toggleTodo(item))}>💔</span>
                )}
                {}
                <button onClick={() => dispatch(removeTodo(item))}>
                  remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
