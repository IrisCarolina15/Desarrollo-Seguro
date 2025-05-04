
# Trabajo realizado por: 
Juan José Castro, Iris Carolina Fernandez y Daniel Díaz

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
| Etapa del S-SDLC                | Medidas de seguridad adoptadas                                                                 |
|----------------------------------|-------------------------------------------------------------------------------------------------|
| **1. Requisitos**               | - Se estableció que la app debe ejecutarse en contenedor aislado.<br> - Se identificaron posibles amenazas desde el inicio (STRIDE). |
| **2. Diseño**                   | - Se diseñó una arquitectura modular y documentada en `docs/architecture.md`.<br> - Se realizó un análisis de amenazas en `docs/threat-model.md`.<br> - Se seleccionaron imágenes base seguras (Alpine). |
| **3. Implementación**           | - Se aplicaron guías de codificación segura (`docs/secure-coding-guidelines.md`).<br> - Se validan entradas del usuario en el código fuente.<br> - Se evitó el uso de root en los contenedores.<br> - Se eliminaron archivos `.git` y temporales en la construcción del contenedor (`.dockerignore`). |
| **4. Pruebas**                  | - Se integraron pruebas automatizadas en `app/spec/`.<br> - Se planificó el uso de herramientas como `npm audit`, `bandit`, `trivy` para validar código y contenedores.<br> - Se preparó estructura `tests/security/` para pruebas específicas. |
| **5. Despliegue**               | - Se construyó el contenedor usando multi-stage builds para reducir superficie de ataque.<br> - Se incluyó un `README.md` con instrucciones seguras.<br> - El contenedor final solo sirve contenido estático, sin servicios abiertos innecesarios. |
| **6. Mantenimiento**            | - Se documentó la política de seguridad en `SECURITY.md`.<br> - El proyecto está listo para integrarse con CI/CD con escaneos periódicos.<br> - Se usaron archivos de bloqueo (`yarn.lock`, `requirements.txt`) para evitar actualizaciones inseguras automáticas. |

---

## Construcción de la aplicación siguiendo el S-SDLC y DevSecOps

**1.Planificación con efoque en seguridad**
- Identificar amenazas comunes desde la fase de requisitos, como inyecciones SQL, exposición de datos sensibles y ataques de denegación de servicio
- Definir requisitos no funcionales de seguridad desde el inicio del proyecto
- Se creó un documento de modelo de amenaza para visualizar posibles vectores de ataque.
  
**2.Diseño seguro de la arquitectura**
- La arquitectura se diseñó con el principio de menor privilegio, aislando los componentes principales.
- Implementar controles de acceso basados en roles para restringir funcionalidades según el perfil del usuario.
- Se documentó la arquitectura del sistema en architecture.md.

**3.Codificación segura**
- Se aplicaron buenas prácticas descritas en secure-coding-guidelines.md
- Se evitó el uso de dependencias innecesarias y se revisaron manualmente las principales bibliotecas.

**4.Automatización y análisis de seguridad**
- Configurar herramientas de análisis estático como CodeQL, SonarCloud o Bandit para detectar vulnerabilidades en el código fuente.
- Integrar herramientas de estilo y calidad como ESLint y Prettier para mantener consistencia y prevenir errores comunes.
- Automatizar estos análisis dentro del flujo de integración continua.

**5.Integración y entrega continua**
- Crear un pipeline con GitHub Actions
- Añadir reglas de revisión de código, escaneos automáticos y validaciones de seguridad.

**6.Testing de seguridad y análisis de dependencias**
- Incorporar herramientas como npm audit, yarn audit, Snyk o Dependabot para auditar automáticamente las bibliotecas usadas.
- Añadir pruebas específicas para asegurar rutas críticas, autenticación y autorización.
- Verificar que los endpoints no filtren información sensible.

**7.Despliegue seguro y monitorización**
- Se contempló un despliegue automatizado mediante Docker.
- Firmar las imágenes Docker y escanearlas.
- Implementar monitorización del backend y de los recursos del sistema.
- Detectar comportamientos anómalos después del despliegue y responder a incidentes rápidamente.
