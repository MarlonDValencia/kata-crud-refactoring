import React, { useState, useContext, useEffect } from 'react';
import ToDoForm from "../todo/FormView";
import ToDoList from "../todo/ListView";
import consumer from "./consumer";
import events from "./events";
import Store from "../store"

export default () => {
    const { state: { list, todo }, dispatch } = useContext(Store);
    const [isLoaded, setLoaded] = useState(false);
    useEffect(() => {
        consumer.findAll().then((response) => {
            if(response.ok) {
                response.json().then((list) => {
                    dispatch(events.finded(list));
                    console.log("successful list");
                });
            }
            setLoaded(true);
        })
    }, [dispatch]);

    const onDelete = (listId) => {
        consumer.delete(listId).then((response) => {
            if(response.ok) {
                dispatch(events.deleted(listId));
            }
        })
    };

    return <div>
        {!isLoaded && <div>Loading...</div>}
        {list.elements.length === 0 && <div>empty list!</div>}
        {list.elements.map((element) => {
            return <div key={element.id} id={"list-to-do-"+element.id}>
                <fieldset>
                    <legend>
                        {element.name.toUpperCase()}
                        <button onClick={() => onDelete(element.id)}>Eliminar</button>
                    </legend>
                    <ToDoForm listId={element.id} todo={todo} />
                    <ToDoList listId={element.id} todo={todo} />
                </fieldset>
            </div>
        })}
    </div>
}