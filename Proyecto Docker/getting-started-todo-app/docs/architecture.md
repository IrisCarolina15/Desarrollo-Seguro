# Arquitectura de la Aplicación To-Do (Docker Getting Started)

Esta aplicación web To-Do fue diseñada como parte del tutorial oficial de Docker para demostrar buenas prácticas de contenerización, construcción multi-etapa y despliegue con Nginx. A continuación se describe su arquitectura técnica y lógica.

---

## Componentes principales

La aplicación está compuesta por tres capas:

### 1. **Frontend (app/)**
- Desarrollado en **Node.js** con módulos JavaScript.
- Contiene el código fuente (`src/`) y las pruebas (`spec/`).
- Utiliza `yarn` para la gestión de dependencias.

### 2. **Servidor Web (Nginx)**
- Utiliza una imagen base mínima (`nginx:alpine`).
- Sirve el contenido estático (`/usr/share/nginx/html`).

### 3. **Documentación (MkDocs)**
- Documentación del proyecto generada con MkDocs y el tema `mkdocs-material`.
- Se construye durante el proceso Docker usando `python:alpine`.

---

## Contenerización

La aplicación está contenida mediante un `Dockerfile` multi-etapa con estas fases:

1. **base**: instala MkDocs y dependencias Python (`requirements.txt`).
2. **app-base**: instala dependencias Node.js y copia el código fuente.
3. **test**: ejecuta pruebas con `yarn test`.
4. **build**: construye la documentación con MkDocs.
5. **nginx final**: contenedor de producción con Nginx, que sirve tanto el sitio web generado como la app To-Do comprimida.

---

## Flujo de Construcción (Build Pipeline)

```mermaid
graph TD
  A[Node.js App] --> B[Test (yarn test)]
  B --> C[Empaquetado (zip)]
  C --> D[Nginx]
  A --> E[Dockerfile multistage]
  E --> D
  F[MkDocs Docs] --> G[Build docs]
  G --> D
