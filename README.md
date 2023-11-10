# Eureka-Fullstack

Aplicación web FullStack que permite gestionar Personas y Áreas a través de una interfaz desarrollada en Angular para el Front-End y una API REST desarrollada en Spring Boot para el Back-End. La aplicación utiliza una base de datos H2 en memoria y ofrece varios endpoints para realizar operaciones CRUD en las entidades.

## Requisitos Previos

- [Java JDK 17](https://www.oracle.com/java/technologies/downloads/)
- [Apache Maven 3.9.5](https://maven.apache.org/)
- [Node 18.18.1](https://nodejs.org/en)
- [Angular CLI](https://angular.io/)

## Ejecución del Proyecto

- Clonar el repositorio:
```bash
git clone https://github.com/nicoleOpazo/Eureka-Fullstack
```

**Inicia el Back-End Spring Boot:**

- Cargar dependencias Maven

- Levantar BackendSpringBootApplication.java

**Inicia el Front-End Angular:**

- Instalar dependencias
`npm install`

- Iniciar el proyecto
`ng serve -o`

## Endpoints:

### Crear Persona (POST)
- URL: http://localhost:8080/personas
- Método: POST
- Ejemplo de JSON de Solicitud:
```json
{
    "nombre": "persona1",
    "email": "persona1@gmail.com",
    "area": {
        "id": 1
    }
}
```

### Obtener Persona por ID (GET)
- URL: http://localhost:8080/personas/{id}
- Método: GET

### Obtener listado de Personas (GET)
- URL: http://localhost:8080/personas/listadoPersonas
- Método: GET

### Crear Area (POST)
- URL: http://localhost:8080/areas
- Método: POST
- Ejemplo de JSON de Solicitud:
```json
{
    "nombre": "Administración"
}
```

### Obtener Area por ID (GET)
- URL: http://localhost:8080/areas/{id}
- Método: GET

### Obtener listado de Areas con cantidad de Personas (GET)
- URL: http://localhost:8080/areas/listadoAreas
- Método: GET

