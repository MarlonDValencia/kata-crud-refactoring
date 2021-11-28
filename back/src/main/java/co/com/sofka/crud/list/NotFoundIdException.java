package co.com.sofka.crud.list;

public class NotFoundIdException extends RuntimeException {
    public NotFoundIdException(String message){
        super(message);
    }
}
