import React, { useRef, useState, useContext } from 'react';
import HOST_API from '../Connection';
import Store from '../Store';
import '../../index.css';

const TaskForm = () => {
	const formRef = useRef(null);
	const { dispatch, state: { task } } = useContext(Store);
	const item = task.item;
	const [state, setState] = useState(item);

    const onAdd = (event) => {
		event.preventDefault();

		const request = {
			name: state.name,
			id: null,
		};

		const vsExprReg = /[A-Za-z0-9_]/;
		if (vsExprReg.test(request.name)) {
			document.querySelector(".alert").innerHTML = "";
			fetch(HOST_API + "/task", {
				method: "POST",
				body: JSON.stringify(request),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then((task) => {
					dispatch({ type: "add-task", item: task });
					setState({ name: "" });
					formRef.current.reset();
				});
		} 
	}

	return <div className="form">
		<h3>Kata-Crud</h3>
		<form className="card" ref={formRef}>
			<input className="form-control" type="text" name="name" placeholder="Lista" defaultValue={item.name} onChange={(event) => {
				setState({ ...state, name: event.target.value })
			}} />
			<button id = "eliminar" className="btn btn-primary" onClick={onAdd} disabled={!state.name}>New List</button>
			<div className="alert"></div>
		</form>
	</div>
	;
}

export default TaskForm;