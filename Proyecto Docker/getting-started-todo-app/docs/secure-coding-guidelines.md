# Guías de Codificación Segura – Aplicación To-Do

Este documento reúne una serie de prácticas y principios de codificación segura aplicados (o aplicables) al desarrollo de esta aplicación To-Do. Estas pautas tienen como objetivo prevenir vulnerabilidades comunes y fortalecer la seguridad desde el código fuente, alineadas con los principios del Secure SDLC.

---

## 1. Validación y Sanitización de Entradas

- Nunca se debe confiar en los datos recibidos del usuario.
- Validar todos los datos (longitud, tipo, formato) antes de procesarlos.
- Escapar o sanitizar las entradas para evitar ataques como XSS o inyección de código.
- Utilizar librerías confiables como `validator.js` en Node.js.

## 2.Gestión de Dependencias

- Usar archivos de bloqueo para evitar versiones no controladas.
- Realizar auditorías regulares.
- Evitar paquetes sin mantenimiento o con bajo nivel de revisión.

## 3.Evitar ejecución con privilegios elevados

- En entornos Docker, no ejecutar procesos como root.
- Incluir en el Dockerfile la instrucción USER app y crear dicho usuario sin privilegios.

```bash
RUN adduser -D app
USER app
```

## 4.Gestión segura de secretos

- No hardcodear contraseñas ni claves API en el código.
- Utilizar archivos .env o gestores de secretos.
- Agregar .env y .env.local al .gitignore para evitar fugas accidentales.

## 5.Manejo adecuado de errores

- No exponer trazas de errores en producción.
- Mostrar mensajes genéricos al usuario final.
- Loguear los errores de forma segura para auditoría, sin incluir datos sensibles.

## 6.Actualización y mantenimiento del código

- Revisar periódicamente las dependencias.
- Usar GitHub para recibir alertas.
- Documentar claramente los cambios que impactan en la seguridad.

## 7.Prueba de seguridad en desarrollo

- Ejecutar herramientas de análisis estático.
- Realizar revisiones de código.
- Aplicar pruebas específicas para escenarios de abuso y entradas maliciosas.
