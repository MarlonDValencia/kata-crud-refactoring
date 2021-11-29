import React from "react";
import { StoreProvider } from "./Components/Store";
import TaskForm from "./Components/Task/TaskForm";
import TaskList from "./Components/Task/TaskList";
import  '../src/index.css';

function App() {
  return (
    <>
    <div className= "container">
      <StoreProvider>
        <TaskForm />
        <TaskList />
      </StoreProvider>
    </div>
    </>
  ) 

  
}

export default App;