package co.com.sofka.crud.list;

import co.com.sofka.crud.todo.ToDoModel;


import java.util.HashSet;
import java.util.Set;

public class ToDoListModel {
    private Long id;
    private String name;
    private Set<ToDoModel> items = new HashSet<>();

    public ToDoListModel(){
        super();
    }
    public ToDoListModel(Long id, String name, Set<ToDoModel> items) {
        this.id = id;
        this.name = name;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ToDoModel> getItems() {
        return items;
    }

    public void setItems(Set<ToDoModel> items) {
        this.items = items;
    }
}
