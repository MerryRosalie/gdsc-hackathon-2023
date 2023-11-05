"use client";

import { useState, useEffect } from "react";

type todoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<todoItem[]>([]);

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
    console.log(todoId);
    console.log("hi");
    let newTodos = [];
    console.log(todos);
    for (const todo of todos) {
      if (todo.id !== todoId) {
        console.log(`Safe ${todo.id}`);
        newTodos.push(todo);
      }
    }
    console.log(newTodos);
    setTodos(newTodos);
  };

  const changeHandler = (id: number, flag: string, e: any) => {
    let newTodos = [];

    for (let obj of todos) {
      if (obj.id === id) {
        if (flag === "checkbox") {
          // console.log("DONE");
          // console.log(e.target.value);
          obj.completed = e.target.checked ? true : false;
        } else {
          obj.text = e.target.value;
          // console.log("Text updated");
        }
      }
      newTodos.push(obj);
      // console.log(obj);
    }
    setTodos(newTodos);
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
    <div>
      <div className="absolute right-0 top-0 h-1/3 w-80 space-y-6 overflow-y-auto rounded-lg p-6 text-white">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">To-do List</h1>
          <button onClick={addTodos}>+ Create New Task</button>
        </div>

        <div className="todo space-y-2">
          {todos.map((item: todoItem) => (
            <div className="textBox flex gap-2">
              <input
                type="checkbox"
                onChange={(e: any) => changeHandler(item.id, "checkbox", e)}
              ></input>
              <input
                type="text"
                onChange={(e: any) => changeHandler(item.id, "boxtext", e)}
                placeholder="Enter Task"
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
                className="w-full border-none bg-transparent outline-none"
              ></input>
              <button
                className="ml-2 h-6 w-6 rounded-md bg-red-400"
                onClick={() => deleteTodos(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
