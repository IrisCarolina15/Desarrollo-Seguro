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
