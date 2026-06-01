# Calculadora Pediátrica de Emergencia

Aplicación web offline para cálculos rápidos de apoyo en emergencias pediátricas.

## Archivos incluidos

- `index.html`: aplicación completa en HTML, CSS y JavaScript puro.
- `manifest.json`: configuración de instalación como PWA.
- `service-worker.js`: caché offline de la app, iconos y PDFs de referencia.
- `icon-192.png`, `icon-512.png`, `maskable-icon-512.png`, `logo.png`: iconos de instalación.
- `referencias/`: tablas y documentos PDF de consulta.
- `privacy.html`: política de privacidad básica.

## Instalar en teléfono

### Android

Abrir la URL en Chrome y usar `Agregar a pantalla principal`.

### iPhone

Abrir la URL en Safari, tocar compartir y usar `Agregar a pantalla de inicio`.

## Nota clínica

Esta herramienta es de apoyo. Verificar dosis, concentración, vía de administración y protocolo local antes de administrar. No reemplaza el juicio clínico.

## Antropometría

El módulo de antropometría está preparado para usar tablas OMS LMS reales. Mientras no se carguen tablas numéricas con columnas `L`, `M` y `S`, el Z-score y percentil se mostrarán como pendientes.
