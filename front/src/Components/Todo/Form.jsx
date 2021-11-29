import React, { useRef, useState, useContext } from "react";
import Store from "../Store";
import HOST_API from "../Connection";
import '../../index.css';

const Form = (TaskListId) => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { todo },
  } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      idList: TaskListId.TaskListId,
      completed: false,
    };
    const vsExprReg = /[A-Za-z0-9_]/;
    if (vsExprReg.test(request.name)) {
      document.querySelector(".alert").innerHTML = "";
      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch({ type: "add-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    } else {
      document.querySelector(".alert").innerHTML =
        "Solo utilice caracteres Alfanuméricos";
    }
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      idList: TaskListId.TaskListId,
      completed: item.isCompleted,
    };

    const vsExprReg = /[A-Za-z0-9_]/;
    if (vsExprReg.test(request.name)) {
      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    } else {
      document.querySelector(".alert").innerHTML =
        "Solo utilice caracteres Alfanuméricos";
    }
  };

  return (
    <form ref={formRef}>
      <input
        className="form-control"
        type="text"
        name="name"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      />
      {item.id && (
        <button className="btn-actualizar" onClick={onEdit} disabled={!state.name}>
          Actualizar
        </button>
      )}
      {!item.id && (
        <button className="btn-agregar" onClick={onAdd} disabled={!state.name}>
          Agregar
        </button>
      )}
      <div className="alert"></div>
    </form>
  );
};
export default Form;