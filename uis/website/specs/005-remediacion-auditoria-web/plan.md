# Plan — Remediación de auditoría web de TrackFlow

| Campo | Valor |
| --- | --- |
| **Estado** | Borrador pendiente de aprobación |
| **Especificación** | [`spec.md`](./spec.md) (aprobada, incluida la enmienda Tailwind) |
| **Proyecto / área** | TrackFlow · `uis/website/` |

## Propósito

Proponer el orden de análisis, cambios limitados y verificación para las fases autorizadas 2, 3, 4, 6 y 7. Se preserva el estado del repositorio y no se inicia implementación hasta aprobar las tareas.

## Secuencia propuesta

1. **Inspección y baseline:** revisar Git y cambios preexistentes; confirmar requisitos en briefing, spec 002 y Design System. Reproducir estáticamente cada hallazgo y conservar el trabajo local.
2. **Validaciones:** revisar el validador telefónico y los demás campos frente a requisitos aprobados. Corregir únicamente defectos demostrables. No modificar reglas de negocio ambiguas ni introducir formatos no aprobados.
3. **Accesibilidad y estados:** verificar/corregir representación de invalid/valid, error, foco y éxito con tokens existentes. Revisar el ciclo ARIA, asociaciones de mensajes, grupos y navegación por teclado. Sin nuevos colores, identidad o componentes de marca. Cualquier estilo nuevo o modificado se implementará con clases utilitarias de Tailwind CSS.
4. **Responsive/diseño:** inspeccionar el formulario y landing, los breakpoints y el overflow mediante medios disponibles. Todo estilo nuevo o modificado se implementará exclusivamente con clases utilitarias Tailwind; emplear correctamente `sm:`, `md:` y `lg:` conforme a los breakpoints configurados. No añadir ni modificar CSS personalizado, salvo necesidad técnica o de accesibilidad demostrable que no pueda resolverse razonablemente con Tailwind; tal excepción deberá limitarse al mínimo, justificarse en tareas y aprobarse explícitamente antes de implementarla. Corregir únicamente defectos técnicos reproducibles; no cambiar contenido, afirmaciones o decisiones de iniciativa 004.
5. **Rendimiento:** comprobar si Lighthouse o PageSpeed pueden ejecutarse sin instalar dependencias ni tocar configuración protegida. Capturar informe reproducible y metadatos; si no hay herramienta/conectividad apta, registrar la medición como pendiente, sin estimar puntuaciones.
6. **Reauditoría/documentación:** ejecutar verificaciones pertinentes existentes, documentar estado y evidencia en tareas y bitácora. Distinguir inspección estática, automatizada y manual.

## Archivos candidatos

La selección final dependerá de hallazgos reproducibles:

- `uis/website/validation.js`: validación y exposición de estado si se justifica.
- `uis/website/application.html`: atributos de estado/accesibilidad solo si se necesitan.
- `uis/website/styles.css`: inspección y verificación; no añadir ni modificar reglas personalizadas, excepto con la aprobación previa especificada en la fase 4. Los ajustes visuales, si se justifican, irán preferentemente en clases utilitarias Tailwind en el HTML.
- `uis/website/index.html`: solo por defecto responsive técnico comprobado; no se tocará su contenido comercial.
- `uis/website/specs/005-remediacion-auditoria-web/tasks.md` y `memory-bank/progress.md`: registro fiel de ejecución.

Fuera de estos límites: no dependencias/build, assets, Design System, reglas de negocio, copy comercial, privacidad, backend, infraestructura ni cambios globales. Todos los estilos nuevos o corregidos deben expresarse mediante clases utilitarias Tailwind, usando sus breakpoints responsive apropiados; CSS personalizado solo será admisible con necesidad demostrable y aprobación explícita previa, según la especificación.

## Validación propuesta

- Probar entradas válidas e inválidas, incluido teléfono corto frente a ejemplo internacional, sin imponer longitud/país no especificados.
- Verificar el estado de campos y grupos, mensajes, foco y atributos ARIA al fallar y corregir.
- Revisar el flujo por teclado y responsive a anchos relevantes (320, 375, 767, 768, 1280 y 1440 px) con navegador si está disponible; de lo contrario, limitar los reportes a evidencia estática.
- Comprobar que los cambios de diseño usan utilidades Tailwind y variantes `sm:`, `md:`, `lg:` adecuadas a los breakpoints configurados; cualquier excepción de CSS debe tener justificación y aprobación documentadas antes de implementarse.
- Medir con Lighthouse/PageSpeed en forma reproducible o anotar exactamente el bloqueo.
- Ejecutar `node --check`, diagnósticos disponibles, `git diff --check` y pruebas existentes aplicables; no afirmar verificaciones no realizadas.
- No crear commit. Cualquier commit requiere autorización separada.

## Exclusiones operativas

No ejecutar la fase 1 (aclaración de reglas de negocio) ni la fase 5 (completar revisión/contenido de landing). No cambiar la advertencia comercial de bajo volumen. No desplegar ni enviar/persistir datos.

## Aprobación

La especificación recibió aprobación explícita. Este plan requiere aprobación propia antes de cerrar las tareas. Las tareas requerirán aprobación explícita antes de implementar.
