# Especificación — Remediación de auditoría web de TrackFlow

| Campo                  | Valor                                    |
| ---------------------- | ---------------------------------------- |
| **Estado**             | Aprobada (incluida la enmienda Tailwind) |
| **Proyecto / área**    | TrackFlow · `uis/website/`               |
| **Alcance solicitado** | Fases 2, 3, 4, 6 y 7 de la remediación   |

## 1. Objetivo

Corregir y volver a evaluar los hallazgos técnicos y de experiencia del formulario y del sitio público de TrackFlow sin alterar reglas de negocio pendientes ni ampliar el contenido comercial de la landing.

## 2. Alcance incluido

### Fase 2 — Validaciones del formulario

- Revisar las validaciones actuales de `application.html` y `validation.js` contra los requisitos ya aprobados en `uis/website/BRIEFING.md` y `specs/002-solicitud-informacion/spec.md`.
- Corregir validaciones técnicas defectuosas que contradigan esos requisitos, incluido el rechazo de teléfonos demasiado cortos, sin inventar política de longitud, formato regional o países admitidos. Si el requisito no permite decidir un comportamiento, registrarlo como pendiente y no endurecerlo arbitrariamente.
- Mantener los mensajes existentes, la validación por pasos, el envío simulado y la prohibición de transmitir o persistir datos.

### Fase 3 — Estados visuales y accesibilidad

- Asegurar representación visual clara y no dependiente solo del color para controles inválidos y válidos, mensajes de error, foco y estado de éxito, reutilizando los tokens y convenciones ya documentados. Todo estilo nuevo o modificado se expresará con clases utilitarias de Tailwind CSS.
- Revisar asociaciones de labels, `aria-invalid`, descripciones, anuncios, grupos, orden de foco y navegación por teclado en el formulario; modificar solo lo necesario y mantener criterios accesibles aplicables.
- No cambiar identidad visual, tokens, tipografía, logotipos ni recursos de marca.
- No escribir CSS personalizado para estos estados cuando exista una solución con utilidades Tailwind.

### Fase 4 — CSS y responsive

- Revisar `styles.css`, `application.html` e `index.html` para identificar y corregir problemas verificables de estilos/responsive y desbordamiento, manteniendo el diseño aprobado.
- Usar clases utilitarias Tailwind para todos los cambios de diseño y presentación. Aplicar correctamente los breakpoints responsive `sm:`, `md:` y `lg:` según el diseño y los breakpoints configurados en el proyecto; no sustituirlos por media queries escritas a mano ni por variantes arbitrarias cuando una utilidad estándar resuelva el caso.
- No añadir ni modificar CSS personalizado como solución ordinaria. Si una necesidad técnica o de accesibilidad demostrable no puede resolverse razonablemente con Tailwind, cualquier excepción se limitará al mínimo imprescindible, deberá justificarse con evidencia en las tareas y requerirá aprobación explícita antes de implementarse. La existencia de CSS personalizado previo no autoriza a ampliarlo ni modificarlo.
- La revisión de landing será exclusivamente técnica/visual responsive; no añadir, reescribir ni completar contenido comercial, afirmaciones, secciones o requisitos de negocio.
- Mantener la iniciativa 004 y sus decisiones preexistentes; cualquier discrepancia con su especificación aprobada se documentará y no se resolverá ampliando su alcance sin aprobación.

### Fase 6 — Rendimiento

- Obtener una medición reproducible de rendimiento con Lighthouse/PageSpeed Insights si las herramientas y conectividad disponibles lo permiten; registrar URL/entorno, fecha, herramienta, categorías y puntuaciones o métricas obtenidas.
- Proponer o aplicar únicamente optimizaciones técnicas pequeñas que no cambien el contenido, la identidad visual ni dependencias/configuración protegidas. No atribuir resultados a mediciones no ejecutadas.
- Si no es posible obtener una auditoría válida en el entorno disponible, registrar la limitación y dejar la medición externa pendiente, sin sustituirla por estimaciones.

### Fase 7 — Documentación y reauditoría

- Actualizar las tareas de esta iniciativa y `memory-bank/progress.md` con cambios y evidencia verificable.
- Reauditar los criterios relacionados con las fases incluidas, distinguiendo resultados estáticos, automatizados y manuales. Documentar lo que siga pendiente.

## 3. Exclusiones explícitas

- Fase 1, aclarar reglas de negocio. La condición comercial ambigua relativa a bajo volumen y producto queda intacta; no se cambia el umbral, condición, texto ni decisión comercial.
- Fase 5, completar la revisión o ampliar el contenido de la landing. No añadir afirmaciones, secciones, textos ni hechos empresariales.
- API, persistencia, CRM, envío de correo, analítica con datos personales, despliegue y cambios de infraestructura.
- Cambios de marca, tokens, tipografía, logotipos, assets, dependencias, lockfiles, configuración global o archivos protegidos.
- Crear un commit. Cualquier commit requerirá autorización independiente conforme a `AGENTS.md`.

## 4. Criterios de aceptación

1. Las validaciones se mantienen alineadas con los requisitos vigentes y los casos obvios inválidos se rechazan; no se introducen reglas de negocio ni formatos no aprobados.
2. Los estados de error/foco/éxito son perceptibles sin depender únicamente del color y están expuestos de forma coherente a tecnologías de asistencia, en la medida verificable en el entorno. Todo estilo añadido o modificado usa clases utilitarias Tailwind.
3. Los ajustes técnicos responsive usan correctamente `sm:`, `md:` y `lg:` conforme a los breakpoints configurados, no alteran contenido comercial, decisiones de la iniciativa 004 o identidad visual, y las comprobaciones disponibles no muestran regresiones de overflow.
4. Los resultados de rendimiento incluyen evidencia reproducible o una limitación explícita; no se publican puntuaciones estimadas.
5. La reauditoría y la bitácora identifican archivos, pruebas ejecutadas y comprobaciones pendientes, sin modificar la fase 1 ni la fase 5. No se introduce CSS personalizado, salvo excepción mínima justificada y aprobada explícitamente de antemano.
6. No se incorpora envío/persistencia de formulario, dependencias, despliegue ni commit.

## 5. Archivos candidatos

La selección exacta queda para el plan aprobado. Candidatos iniciales: `uis/website/validation.js`, `uis/website/application.html`, `uis/website/styles.css`, y documentación SDD nueva para esta iniciativa. `index.html` solo se tocará si la fase 4 encuentra un defecto técnico responsive reproducible; no se editará su contenido comercial. Los archivos CSS pueden inspeccionarse, pero no se añadirán ni modificarán reglas personalizadas salvo la excepción explícita, mínima y aprobada descrita en la fase 4. Se actualizará `memory-bank/progress.md` únicamente con hechos verificados.

## 6. Aprobación

Esta enmienda incorpora el requisito de Tailwind solicitado por el usuario y recibió aprobación explícita. La aprobación del alcance general tampoco sustituye la aprobación secuencial del plan y las tareas establecida en `.agents/rules/development.md`.
