## Aplicación Front-End

Vista que representa un CRUD de una lista de tareas para hacer, se diseña con el objetivo de tener listas agrupadas donde se permita gestionar y mantener de forma facil. 

## Característica técnicas

### Requerimientos 

- NodeJS > v12
- NPM > v6
- Docker (opcional)

> El back-end debe estar levantado y funcional para poder aplicar a todoas las funcionalidades del CRUD.

### Dependencias

- El back-end corriendo en la misma maquina
- Base de datos selecionada desde el back-end

### Objetivo esperado

![alt text]( ./todo-list-kata.gif "Demo funcional del ToDo List")

## Comandos y configuraciones

Comando para instalar los modulo del proyecto:

```npm install```

Para poner en marcha el proyecto (!IMPORTANTE: debe tener el back arriba):

```npm start```

Construir el artefacto para el despliegue:

```npm run build```

Construir la imagen en Docker:

```docker build --build-arg HOST_API=http://localhost:8080/api/ -t todo-list-front .```

*Se construye la imagen injectando el argumento para consumir la API*

## Notas

- Esta aplicación esta diseñado con React en su totalidad, donde se pone en práctica los conceptos de React+Hooks
- Se tiene una estructura de separación de resposabilidades, donde se comparte estados a partir de un Store global.
- No se explora prueba unitarias, no es el alcance de esta práctca.
- El diseño de arquitectura es orintada a eventos y acciones (se usa reducer).