import React, { useContext, useEffect } from 'react';
import Store from '../Store';
import Form from "../Todo/Form";
import HOST_API from '../Connection';
import List from "../Todo/List";

const TaskList = () => {
	const { dispatch, state: { task, todo } } = useContext(Store);
	const currentList = task.taskList;
	const currentTodo = todo.todoList;

	useEffect(() => {
		fetch(HOST_API + "/tasklist")
			.then(response => response.json())
			.then((taskList) => {
				dispatch({ type: "update-tasklist", taskList })
			})
	}, [dispatch]);

	const onDeleteTask = (id) => {
		currentTodo.forEach(el => {
			if(el.idList === id) {
				fetch(HOST_API + "/" + el.id + "/todo", {
					method: "DELETE"
				}).then((todoList) => {
					dispatch({ type: "delete-item", id })
				})
			}
		});
		fetch(HOST_API + "/" + id + "/task", {
			method: "DELETE"
		}).then((taskList) => {
			dispatch({ type: "delete-task", id })
		})
	};

	return <div>
		{currentList.map((item) => {
			return <div className="card" key={item.id}>
				<div>
					<h2>{item.name}</h2>
					<button className="btn btn-primary" onClick={() => onDeleteTask(item.id)}>Delete</button>
					<Form TaskListId={item.id} />
					<List TaskListId={item.id} />
				</div>

			</div>
		})}
	</div>;
}

export default TaskList;