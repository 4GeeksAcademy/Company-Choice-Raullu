# Estado del proyecto

Este documento registra el estado comprobado del proyecto, separando implementación, verificaciones y limitaciones.

## Hito vigente: sitio web público

- Alcance del sitio según `uis/website/BRIEFING.md`: experiencia en español, Tailwind CSS por CDN y sin multiidioma en este hito.
- La landing está implementada en `uis/website/index.html` con estilos y tokens del Design System.
- La solicitud comercial está implementada en `uis/website/application.html` y `uis/website/validation.js` como formulario B2B de cuatro pasos. La estructura y navegación, validación por paso, advertencia bajo volumen, confirmación simulada y reinicio corresponden a la revisión aprobada en `uis/website/specs/002-solicitud-informacion/`.
- El formulario simula localmente el envío. No transmite ni persiste datos y no debe usarse con datos personales o confidenciales reales.
- La política real de privacidad y su información asociada siguen pendientes. El aviso actual es ficticio, no vigente y solo para demostración; no publicar el formulario para recopilación real hasta reemplazarlo y aprobarlo.

## Verificaciones de la implementación del formulario por pasos

- `node --check uis/website/validation.js`: correcto.
- `git diff --check`: correcto.
- Diagnósticos del editor para `application.html` y `validation.js`: sin errores.
- Comprobación estática: cuatro paneles y sus controles; navegación secuencial con validación por paso y foco; los paneles no activos usan `hidden`; advertencia junto al selector de volumen; padding derecho de selectores; confirmación fuera del formulario y ocultación del formulario tras envío válido.
- Búsqueda estática en el formulario: no se encontraron `fetch`, `XMLHttpRequest`, `sendBeacon`, `localStorage`, `sessionStorage` ni cookies.
- No se encontró navegador instalado ni paquete DOM de pruebas (`jsdom`, `happy-dom`, `linkedom`) en el entorno. Por tanto, quedan pendientes la prueba de interacción en navegador, revisión visual responsive en 320, 375, 768, 1280 y 1440 px y prueba con lector de pantalla. No afirmar que estas comprobaciones se ejecutaron.

## Contexto y limitaciones técnicas

- No hay runner global en la raíz del repositorio. El sitio usa HTML/CSS/JavaScript estáticos y Tailwind CDN; no se añadió dependencia ni build.
- Previsualización documentada en Codespaces: `npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`.
- La política de privacidad real permanece pendiente y debe aprobarse antes de recopilar solicitudes reales.
- Las decisiones de arquitectura del backend y otras cuestiones del proyecto permanecen como están descritas en `techContext.md`.
