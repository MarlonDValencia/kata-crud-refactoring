package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.TaskList;
import org.springframework.data.repository.CrudRepository;

public interface TaskListRepository extends CrudRepository<TaskList, Long> {

}
