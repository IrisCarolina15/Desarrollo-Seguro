# Threat Model – Aplicación To-Do

Este documento presenta un análisis de amenazas sobre la arquitectura y el funcionamiento de la aplicación To-Do, basada en el tutorial oficial de Docker. El objetivo es identificar vulnerabilidades potenciales, evaluar riesgos y plantear medidas de mitigación adecuadas para cada fase del SDLC.

---

## Metodología utilizada: STRIDE

Se utilizó el modelo **STRIDE** para clasificar amenazas de seguridad:

| Letra | Tipo de amenaza              |
|-------|-------------------------------|
| S     | Spoofing (Suplantación)       |
| T     | Tampering (Manipulación)      |
| R     | Repudiation (Repudio)         |
| I     | Information Disclosure         |
| D     | Denial of Service (DoS)       |
| E     | Elevation of Privilege         |

---

## Análisis de amenazas por componente

### 1. **Frontend (Node.js app + HTML/JS estático)**

| Tipo       | Amenaza                                                                 | Mitigación                                                             |
|------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| I          | Divulgación accidental de datos al cliente                             | Validar y limpiar contenido; no incluir datos sensibles en `app.zip`.  |
| T          | Manipulación del código JS en el cliente                               | Servir archivos con Nginx; aplicar integridad de contenido (SRI).      |
| D          | Carga masiva de tareas causa lentitud                                  | Validar tamaños y límites en el frontend.                             |

---

### 2. **Contenedor Docker / Infraestructura**

| Tipo       | Amenaza                                                                 | Mitigación                                                             |
|------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| S          | Acceso no autorizado al contenedor o imagen                            | No incluir credenciales ni usar `root`.                               |
| T          | Modificación de la imagen base por dependencias vulnerables            | Usar imágenes oficiales fijas (`alpine`); escaneo con Trivy.          |
| E          | Permisos elevados dentro del contenedor                                | Establecer `USER` no privilegiado en Dockerfile.                      |
| D          | Consumo de recursos por múltiples contenedores                         | Limitar recursos en `docker-compose` o al lanzar contenedor.          |

---

### 3. **Servidor Web (Nginx)**

| Tipo       | Amenaza                                                                 | Mitigación                                                             |
|------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| T          | Inyección de comandos en rutas URL mal configuradas                    | Configurar Nginx para denegar métodos y rutas no utilizadas.          |
| I          | Fugas de rutas internas o archivos no deseados                         | Usar `.dockerignore`, eliminar `.git`, archivos temporales.           |
| D          | Ataques de DoS vía peticiones concurrentes                             | Configurar límites de conexión en Nginx.                              |

---

### 4. **Fase de Desarrollo y CI/CD**

| Tipo       | Amenaza                                                                 | Mitigación                                                             |
|------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| R          | Cambios no rastreados en código fuente                                 | Uso obligatorio de control de versiones (Git).                        |
| I          | Inclusión accidental de claves API en el repositorio                   | Uso de `.env.example`, escaneos automáticos con `git-secrets`.       |
| T          | Modificación maliciosa del pipeline                                    | Validar scripts CI y limitar permisos del runner.                     |

---

## Riesgos principales identificados

1. Uso de imágenes con dependencias no auditadas.
2. Posibilidad de ejecución como `root` en contenedor (por omisión).
3. Código estático servible con posible fuga de información si se empaca mal.
4. Ausencia de autenticación (por simplicidad del ejemplo).

---

## Recomendaciones generales

- Escanear todas las imágenes Docker antes de usarlas (`Trivy`, `Grype`, etc.).
- Minimizar la superficie de ataque eliminando herramientas de desarrollo del contenedor.
- Establecer un usuario no privilegiado (`USER`) en el Dockerfile.
- Agregar autenticación y control de acceso si se amplía la aplicación.
- Integrar análisis estático (`bandit`, `eslint`, etc.) en el pipeline de CI/CD.

---

## Conclusión

Este análisis ayuda a anticipar vectores de ataque incluso en una aplicación simple. Aunque la To-Do App es un ejemplo educativo, aplicar estas prácticas de threat modeling permite escalar el proyecto de manera segura en entornos reales.

