package co.com.sofka.crud.services;

import co.com.sofka.crud.models.TaskList;
import co.com.sofka.crud.repositories.TaskListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskListService {

    @Autowired
    private TaskListRepository repository;

    public Iterable<TaskList> list(){
        return repository.findAll();
    }

    public TaskList get(Long id){
        return repository.findById(id).orElseThrow();
    }

    public TaskList save(TaskList taskList){
        return repository.save(taskList);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }
}
