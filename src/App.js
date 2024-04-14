import "./App.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useState, useRef } from "react";

import Completed from "./components/Completed";
import Active from "./components/Active";
import TodosSearch from "./components/Search";
/* 



TODO: YOU STOPED AT SORTED BY DATE 
*/
function App() {
  const [todos, setTodos] = useState([]);
  const [filtedCategories, setFiltedCategories] = useState([]);
  const inputRef = useRef();

  // add new todo if input is not empty, if empty set focus to the input
  const addNewTodo = () => {
    if (inputRef.current.value.trim() === "") {
      inputRef.current.focus();
    } else {
      setTodos([
        ...todos,
        {
          completed: false,
          todo: inputRef.current.value.trim(),
          time: new Date().toISOString(),
        },
      ]);
      inputRef.current.value = "";
    }
  };

  // if the user clicked enter key in the input el , should add new todo if not empty
  const enterClick = (event) => {
    if (event.key === "Enter") {
      addNewTodo();
    }
  };

  // remove todo from list
  const removeTodo = (index) => {
    const oldTodos = [...todos];
    oldTodos.splice(index, 1);
    setTodos(oldTodos);
  };
  // checked the completed todo
  const doneTodo = (index) => {
    const oldTodos = [...todos];
    oldTodos[index].completed = !oldTodos[index].completed;
    setTodos(oldTodos);
  };

  // task todos filter

  const filterdTodos = (filter) => {
    switch (filter) {
      case "completed":
        setFiltedCategories(Completed(todos));
        break;
      case "active":
        setFiltedCategories(Active(todos));
        break;
      case "all":
        setFiltedCategories([...todos]);
        break;
      default:
        setFiltedCategories([...todos]);
        break;
    }
  };

  // switch lists

  const switchList = () => {
    if (filtedCategories.length === 0) {
      return todos;
    } else {
      return filtedCategories;
    }
  };

  return (
    <div className="App w-3/4 min-h-fit mx-auto border border-neutral-800 bg-neutral-200 bg-opacity-50 text-neutral-900 shadow-lg ">
      <h1 className="text-center py-5 mb-2 font-bold leading-tight text-neutral-800 ">
        THINGS TO DO .
      </h1>
      <div className="p-5">
        <input
          type="text"
          className="w-full p-2 block border rounded mb-5 focus:border-none focus:outline-none"
          placeholder="Add New Task"
          ref={inputRef}
          onKeyDown={(e) => enterClick(e)}
        />

        <TodosSearch />

        <ul className="pb-10 text-neutral-500">
          {todos.length === 0 && (
            <li className=" p-2 border-b-2 text-center  ">
              Nothing to do, Add New...
            </li>
          )}
          {switchList().map((item, index) => {
            while (index < 5) {
              return (
                <>
                  <li
                    className="flex  items-center justify-between content-center p-2 border-b border-neutral-900 check-uncheck-todo hover:bg-slate-100 hover:bg-opacity-50 transition "
                    key={index}
                  >
                    {item.completed ? (
                      <FaCheckSquare
                        className="cursor-pointer  "
                        size={20}
                        onClick={() => doneTodo(index)}
                      />
                    ) : (
                      <FaRegSquare
                        className="cursor-pointer  "
                        size={20}
                        onClick={() => doneTodo(index)}
                      />
                    )}

                    <p
                      className={`text-left flex-grow  px-5 break-words  ${
                        item.completed ? "line-through" : ""
                      }`}
                    >
                      {/* line-through */}
                      {item.todo}
                    </p>
                    <time dateTime={item.time} className="break-words">
                      {/* {currentTime(item.time)} */}
                      {item.time}
                    </time>
                    <p className="pl-4">
                      <FaDeleteLeft
                        className=" cursor-pointer remove-todo"
                        size={20}
                        onClick={() => removeTodo(index)}
                      />
                    </p>
                  </li>
                </>
              );
            }
          })}

          {todos.length > 5 && (
            <li className=" p-2 border-b-2  text-center  cursor-pointer select-none">
              Load More Todos...
            </li>
          )}
        </ul>
      </div>
      <div className="flex  bg-neutral-900 border-t-2 mt-4 py-2  px-2 flex-auto items-center content-evenly justify-between cursor-pointer select-none">
        <div className="serach  flex justify-evenly  items-center content-between flex-auto">
          <p>
            <FaPlus
              size={20}
              onClick={() => addNewTodo()}
              className="text-neutral-200 hover:text-cyan-500 transition duration-300 ease-linear transform hover:scale-105"
            />
          </p>
          <p>
            <IoMdSearch
              size={20}
              className=" text-neutral-400 hover:text-cyan-500 transition duration-300 ease-linear transform hover:scale-105"
            />
          </p>

          <p className="border-l-2  pl-5 text-neutral-400">
            {todos.length} items left
          </p>
        </div>
        <div className="filter flex justify-evenly items-center content-between  flex-auto text-neutral-400">
          <p
            className=" hover:text-cyan-500 transition duration-300 ease-linear transform hover:scale-105"
            onClick={() => filterdTodos("all")}
          >
            All
          </p>
          <p
            className=" hover:text-cyan-500 transition duration-300 ease-linear transform hover:scale-105"
            onClick={() => filterdTodos("active")}
          >
            Active
          </p>
          <p
            className=" hover:text-cyan-500 transition duration-300 ease-linear transform hover:scale-105 visited:text-cyan-500"
            onClick={() => filterdTodos("completed")}
          >
            Completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
