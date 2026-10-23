# Tareas — Migración Tailwind-first de estilos web

| Campo               | Valor                            |
| ------------------- | -------------------------------- |
| **Estado**          | Aprobadas por el usuario         |
| **Especificación**  | [`spec.md`](./spec.md), aprobada |
| **Plan**            | [`plan.md`](./plan.md), aprobado |
| **Proyecto / área** | TrackFlow · `uis/website/`       |

> Aprobación explícita de las tareas recibida antes de iniciar la implementación.

## Fase 1 — Preparación y documentación

- [x] **T1.1** Registrar el estado Git y distinguir los cambios de esta iniciativa de trabajo previo/staged del usuario; no descartar, revertir ni incluir cambios ajenos.
- [x] **T1.2** Revisar las configuraciones Tailwind actuales, tokens, clases y usos de `.info-card`, `hidden`, foco y scroll en ambas páginas; anotar valores existentes que deben preservarse.
- [x] **T1.3** Actualizar `uis/website/design-system.md` antes de los cambios de interfaz: describir la configuración Tailwind compartida en CDN, tokens semánticos y el hover de borde aprobado (`#A2C9CB`, sutil, sin otras señales de interactividad).

## Fase 2 — Configuración Tailwind compartida

- [x] **T2.1** Crear `uis/website/tailwind.config.js` con los tokens semánticos actualmente usados, la familia tipográfica Manrope, escalas tipográficas existentes, radio `card` y color `border-hover: #A2C9CB`.
- [x] **T2.2** Confirmar la sintaxis/orden soportado por Tailwind CDN para cargar la configuración externa; referenciar el archivo desde `index.html` y `application.html` después del CDN y retirar la configuración inline duplicada sin alterar los valores.

## Fase 3 — Migración de estilos en las páginas

- [x] **T3.1** Añadir a `<html>` las utilidades de scroll suave y reducción de movimiento (`scroll-smooth motion-reduce:scroll-auto`); establecer en `index.html` `bg-background font-sans text-text` y preservar en `application.html` el fondo existente `bg-surface` junto a las clases globales de tipografía.
- [x] **T3.2** En `index.html`, reemplazar cada clase `info-card` por clases Tailwind explícitas para transición de color de 180 ms, desactivar la transición ante movimiento reducido y cambiar solo el borde en hover a `border-hover`.
- [x] **T3.3** Asegurar que controles y enlaces conservan los estados de foco visibles actuales mediante clases Tailwind; añadir solo las clases faltantes y conservar colores/offsets existentes.
- [x] **T3.4** Simplificar `styles.css`, retirar tokens y reglas ahora representados en Tailwind, mantener únicamente `[hidden] { display: none !important; }` salvo que se demuestre durante la implementación una alternativa equivalente que preserve todos los estados dinámicos del formulario.
- [x] **T3.5** Confirmar que el hover de las tarjetas no añade cambios de fondo, sombra, transformación, elevación, escala o cursor y que la tarjeta no se presenta como clicable.

## Fase 4 — Verificación y cierre

- [x] **T4.1** Ejecutar `git diff --check` y `node --check uis/website/validation.js`; revisar diagnósticos del editor para `index.html`, `application.html` y `validation.js`. Resultado: checks de diff y sintaxis con código 0; Pylance/editor sin errores en las páginas, JS y config.
- [x] **T4.2** Hacer comprobaciones estáticas de configuración, usos de tokens, clases globales, todas las tarjetas y regla `[hidden]`; revisar los cambios propios con respecto al baseline sin tocar modificaciones ajenas. Resultado: 12/12 tarjetas con utilidades de hover; config externa cargada después del CDN en ambas páginas; hoja CSS solo conserva `[hidden]`; clases de foco existentes incluyen offsets explícitos.
- [x] **T4.3** El navegador y herramientas de automatización no están disponibles en el entorno; no se realizó validación visual de la carga real de Tailwind CDN, hover, movimiento reducido, focos ni flujo dinámico oculto. Dejar esas comprobaciones pendientes para revisión manual.
- [x] **T4.4** Anotar resultados reales y limitaciones en `memory-bank/progress.md` y marcar tareas como completadas solo después de su validación. La validación visual figura expresamente como pendiente.
- [x] **T4.5** No crear commit como parte del cierre original de la iniciativa; entonces se requería autorización independiente. El commit posterior `9508bb6` cubre cambios previos de la iniciativa 005, pero no contiene los archivos de 006 (configuración, Design System ni tareas de esta iniciativa); por tanto, 006 no estaba incluido en ese commit.

## Criterios de finalización

- La configuración Tailwind es compartida y no quedan configuraciones inline duplicadas.
- Los estilos globales migrables se declaran mediante utilidades Tailwind en el markup.
- El hover solo cambia el color del borde a `#A2C9CB`, de forma sutil, con transición breve y respeto al movimiento reducido.
- `styles.css` conserva solo la excepción funcional `[hidden]` (o reemplazo probado y documentado).
- No se modifican contenido, layout, comportamiento JavaScript ni dependencias/build.
- Las comprobaciones ejecutadas y las limitaciones visuales se reportan con precisión.
