
# Trabajo realizado por: 
Juan José Castro, Iris Carolina y Daniel Díaz
# Enlace al repositorio: 
https://github.com/Juanjo1402/Desarrollo

---

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

---

## Medidas de seguridad adoptadas por etapa del S-SDLC
| Etapa del S-SDLC      | Medidas de seguridad adoptadas                                                                                                                                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Requisitos**     | - Se estableció que la app debe ejecutarse en contenedor aislado.<br> - Se identificaron posibles amenazas desde el inicio (STRIDE).                                                                                                                                                                  |
| **2. Diseño**         | - Se diseñó una arquitectura modular y documentada en `docs/architecture.md`.<br> - Se realizó un análisis de amenazas en `docs/threat-model.md`.<br> - Se seleccionaron imágenes base seguras (Alpine).                                                                                              |
| **3. Implementación** | - Se aplicaron guías de codificación segura (`docs/secure-coding-guidelines.md`).<br> - Se validan entradas del usuario en el código fuente.<br> - Se evitó el uso de root en los contenedores.<br> - Se eliminaron archivos `.git` y temporales en la construcción del contenedor (`.dockerignore`). |
| **4. Pruebas**        | - Se integraron pruebas automatizadas en `app/spec/`.<br> - Se planificó el uso de herramientas como `npm audit`, `bandit`, `trivy` para validar código y contenedores.<br> - Se preparó estructura `tests/security/` para pruebas específicas.                                                       |
| **5. Despliegue**     | - Se construyó el contenedor usando multi-stage builds para reducir superficie de ataque.<br> - Se incluyó un `README.md` con instrucciones seguras.<br> - El contenedor final solo sirve contenido estático, sin servicios abiertos innecesarios.                                                    |
| **6. Mantenimiento**  | - Se documentó la política de seguridad en `SECURITY.md`.<br> - El proyecto está listo para integrarse con CI/CD con escaneos periódicos.<br> - Se usaron archivos de bloqueo (`yarn.lock`, `requirements.txt`) para evitar actualizaciones inseguras automáticas.                                    |
