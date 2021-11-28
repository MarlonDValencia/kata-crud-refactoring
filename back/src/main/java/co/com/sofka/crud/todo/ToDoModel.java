package co.com.sofka.crud.todo;

public class ToDoModel {
    private Long listId;
    private Long id;
    private String name;
    private boolean completed;
    public ToDoModel() {
        super();
    }
    public ToDoModel(Long id, String name, boolean completed, Long listId) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.listId = listId;
    }

    public Long getListId() {
        return listId;
    }

    public void setListId(Long listId) {
        this.listId = listId;
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

}
