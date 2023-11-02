"use client";
import { useState, useEffect } from "react";

type todoItem = {
  id: number;
  text: string;
  completed: boolean;
};
export default function TodoList() {
  const [todos, setTodos] = useState<todoItem[]>([]);
  // const [doneTodos, setDoneTodos] = useState<todoItem[]>([]);

  const addTodos = () => {
    let newTodos = [...todos];
    let todoObject = {
      id: Math.max(0, ...todos.map((todoItem) => todoItem.id)) + 1,
      text: "",
      completed: false,
    };
    newTodos.push(todoObject);
    setTodos(newTodos);
  };

  const deleteTodos = (todoId: number) => {
    let newTodos = [];

    for (const todo of todos) {
      if (todo.id !== todoId) {
        newTodos.push(todo);
      }
    }
    setTodos(newTodos);
  };

  const changeHandler = (id: number, flag: string, e: any) => {
    let newTodos = [];

    for (let obj of todos) {
      if (obj.id === id) {
        if (flag === "checkbox") {
          console.log("DONE");
          // console.log(e.target.value);
          obj.completed = e.target.checked ? true : false;
        } else {
          obj.text = e.target.value;
          console.log("Text updated");
        }

        newTodos.push(obj);
      }
      setTodos(newTodos);
      console.log(obj);
    }
  };

  useEffect(() => {
    setTodos([
      {
        id: Math.max(0, ...todos.map((item) => item.id)) + 1,
        text: "",
        completed: false,
      },
    ]);
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 h-2/4 w-2/4 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white">
      <h1 className="text-center text-2xl">Task List</h1>
      <button className="bg-teal-400" onClick={addTodos}>
        Create New Task
      </button>

      <div className="todo">
        {todos.map((item: todoItem) => (
          <div className="textBox border-4 border-double border-indigo-600">
            <input
              type="text"
              // value={item.text}
              onChange={(e: any) => changeHandler(item.id, "boxtext", e)}
              placeholder="Enter Task"
              style={{
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
              className="w-10/12"
            ></input>
            <input
              type="checkbox"
              onChange={(e: any) => changeHandler(item.id, "checkbox", e)}
            ></input>
            <button
              className="ml-2 w-5 bg-red-400"
              onClick={() => deleteTodos(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
