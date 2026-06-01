# Calculadora Pediátrica de Emergencia

Aplicación web offline para cálculos rápidos de apoyo en emergencias pediátricas.

## Archivos incluidos

- `index.html`: aplicación completa en HTML, CSS y JavaScript puro.
- `manifest.json`: configuración de instalación como PWA.
- `service-worker.js`: caché offline de la app, iconos y PDFs de referencia.
- `icon-192.png`, `icon-512.png`, `maskable-icon-512.png`, `logo.png`: iconos de instalación.
- `referencias/`: tablas y documentos PDF de consulta.
- `privacy.html`: política de privacidad básica.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir todos los archivos de esta carpeta a la raíz del repositorio.
3. Entrar a `Settings > Pages`.
4. En `Build and deployment`, elegir:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guardar.
6. Abrir la URL que genera GitHub Pages.

## Instalar en teléfono

### Android

Abrir la URL en Chrome y usar `Agregar a pantalla principal`.

### iPhone

Abrir la URL en Safari, tocar compartir y usar `Agregar a pantalla de inicio`.

## Nota clínica

Esta herramienta es de apoyo. Verificar dosis, concentración, vía de administración y protocolo local antes de administrar. No reemplaza el juicio clínico.

## Antropometría

El módulo de antropometría está preparado para usar tablas OMS LMS reales. Mientras no se carguen tablas numéricas con columnas `L`, `M` y `S`, el Z-score y percentil se mostrarán como pendientes.
