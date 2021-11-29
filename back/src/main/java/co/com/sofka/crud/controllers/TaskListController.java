package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.TaskList;
import co.com.sofka.crud.services.TaskListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskListController {

    @Autowired
    private TaskListService service;

    @GetMapping(value = "api/tasklist")
    public Iterable<TaskList> list(){
        return service.list();
    }

    @PostMapping(value = "api/task")
    public TaskList save(@RequestBody TaskList taskList){
        return service.save(taskList);
    }


    @PutMapping(value = "api/task")
    public TaskList update(@RequestBody TaskList taskList){
        if(taskList.getId() != null){
            return service.save(taskList);
        }
        throw new RuntimeException("Dicho ID no existe");
    }

    @DeleteMapping(value = "api/{id}/task")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/task")
    public TaskList get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
