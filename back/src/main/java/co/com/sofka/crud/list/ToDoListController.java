package co.com.sofka.crud.list;

import co.com.sofka.crud.todo.ToDoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoListController {

    private ToDoListService toDoListService;

    @Autowired
    public ToDoListController(ToDoListService toDoListService) {
        this.toDoListService = toDoListService;
    }

    @GetMapping(value = "api/list")
    public Iterable<ToDoListModel> getAllListToDos(){
        return toDoListService.getAllListToDos();
    }

    @GetMapping(value = "api/{listId}/todos")
    public Iterable<ToDoModel> getToDosByListId(@PathVariable("listId") Long listId){
        return toDoListService.getToDosByListId(listId);
    }
    
    @PostMapping(value = "api/todolist")
    public ToDoListModel newListToDo(@RequestBody ToDoListModel todo){
        return toDoListService.newListToDo(todo);
    }

    @DeleteMapping(value = "api/{id}/todolist")
    public void deleteListById(@PathVariable("id") Long id){
         toDoListService.deleteListById(id);
    }

    @PutMapping(value = "api/{listId}/todo")
    public ToDoModel updateAToDoByListId(@PathVariable("listId") Long listId, @RequestBody ToDoModel todo){
        if(todo.getId() != null){
            return toDoListService.updateAToDoByListId(listId, todo);
        }
        throw new NotFoundIdException("No existe el id para actualizar");
    }

    @PostMapping(value = "api/{listId}/todo")
    public ToDoModel addNewToDoByListId(@PathVariable("listId") Long listId, @RequestBody ToDoModel todo){
        return toDoListService.addNewToDoByListId(listId, todo);
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void deleteAToDoById(@PathVariable("id")Long id){
        toDoListService.deleteAToDoById(id);
    }

}
