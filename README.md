# Trabajo realizado por: Juan José Castro, Iris Carolina y Daniel Díaz

# Docker TODO App

Este proyecto es una aplicación web de lista de tareas (TODO app) construida utilizando **Node.js**, **Python** y **MkDocs**, diseñada para ilustrar cómo construir, asegurar y desplegar una aplicación contenedorizada aplicando el **Ciclo de Vida de Desarrollo Seguro de Software (S-SDLC)** desde el inicio hasta la ejecución final.

---

## ¿Cómo ejecutar esta aplicación?

### Requisitos previos

- Docker
- Docker Compose (opcional)
- Git

### Pasos para ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/docker-todo-app.git
cd docker-todo-app

# 2. Construir la imagen
docker build -t docker-todo-app .

# 3. Ejecutar el contenedor
docker run -d -p 8080:80 docker-todo-app

# 4. Acceder a la app en el navegador
http://localhost:8080

```
---

## Consideraciones de Seguridad

Durante el diseño e implementación de la aplicación "to-do", se tuvieron en cuenta las siguientes consideraciones de seguridad:

### Validación de datos:
Se asegura que los datos introducidos en la aplicación estén validados para evitar entradas maliciosas.

### Manejo de errores
Se capturan posibles errores de ejecución para no exponer detalles internos al usuario.

### Separación de responsabilidades
Se ha mantenido una estructura de carpetas organizada, separando lógica de negocio y presentación, facilitando futuras mejoras de seguridad.

### Control de dependencias:
Se limita el uso de dependencias externas, reduciendo la superficie de ataque.

### Preparación para autenticación:
Aunque la versión inicial no implementa usuarios, la estructura del proyecto permite integrar fácilmente un sistema de autenticación y autorización en el futuro.

### Despliegue seguro:
Se considera su posible contenerización en Docker para asegurar el entorno de ejecución, limitando exposición a vulnerabilidades del sistema operativo.

---

## Desarrollo Siguiendo S-SDLC

### 1-Requisitos de seguridad:
Desde el inicio, se definió que la aplicación debía validar entradas y prever un entorno seguro de ejecución.

### 2-Diseño seguro:
La estructura del proyecto se organizó considerando principios de mínima exposición, separación de responsabilidades y preparación para añadir seguridad adicional como autenticación.

### 3-Implementacion segura:
El código fuente se desarrolló siguiendo buenas prácticas, minimizando la complejidad innecesaria y evitando vulnerabilidades típicas como inyecciones.

### 4-Verificación
Se realizaron pruebas funcionales básicas asegurando que la aplicación responde adecuadamente ante entradas válidas y no válidas.

### 5-Mantenimiento y actualizaciones
El proyecto está diseñado de forma modular, permitiendo la actualización sencilla de componentes o la adición de nuevas capas de seguridad.

Siguiendo este proceso, se garantiza que la aplicación no solo funciona correctamente, sino que además está preparada para enfrentar amenazas comunes de seguridad en su evolución futura.