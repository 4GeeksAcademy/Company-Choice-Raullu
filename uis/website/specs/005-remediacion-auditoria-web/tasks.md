# Tareas — Remediación de auditoría web de TrackFlow

| Campo | Valor |
| --- | --- |
| **Estado** | Borrador ajustado; pendiente de aprobación explícita |
| **Especificación** | [`spec.md`](./spec.md), aprobada (incluida enmienda Tailwind) |
| **Plan** | [`plan.md`](./plan.md), aprobado |
| **Implementación** | No iniciada; requiere aprobación de estas tareas |

## Reglas de ejecución

- Mantener el alcance limitado a las fases 2, 3, 4, 6 y 7. No aclarar reglas de negocio (fase 1), no completar contenido comercial de landing (fase 5), no desplegar y no crear commit.
- Preservar todas las modificaciones preexistentes en el árbol de trabajo; inspeccionar el estado Git antes de tocar archivos y no revertir cambios ajenos.
- Usar clases utilitarias Tailwind CSS para todos los estilos nuevos o modificados. Aplicar `sm:`, `md:` y `lg:` conforme a los breakpoints configurados. No añadir ni modificar CSS personalizado, salvo que una necesidad técnica o de accesibilidad demostrable no pueda resolverse razonablemente con Tailwind; en ese caso, detenerse, justificar y solicitar aprobación explícita antes de escribirlo.
- No añadir dependencias, proceso de build, envío o persistencia de datos, integración, cambios de marca/tokens ni copy comercial.
- Registrar únicamente pruebas realmente ejecutadas; diferenciar análisis estático, automatizado y manual.

## Tareas

1. [ ] **Registrar baseline y cambios preexistentes.** Revisar `git status` y diffs; anotar archivos preexistentes y protegerlos. Confirmar que los artefactos 005 aprobados son la base de alcance. Cerrar la tarea solo cuando el estado inicial esté registrado y se confirme que no se sobrescribirá trabajo ajeno.
2. [ ] **Contrastar validaciones con requisitos vigentes.** Revisar `validation.js`, `application.html`, briefing y spec 002. Registrar casos válidos/obviamente inválidos y discrepancias demostrables. No inventar longitud mínima, país ni formato telefónico; las ambigüedades quedan documentadas, no resueltas por inferencia. Cerrar con hallazgos y fuentes documentados antes de implementar.
3. [ ] **Corregir defectos de validación aprobados.** Implementar solo correcciones técnicas sustentadas por la tarea 2, conservando mensajes, flujo por pasos, demo local y ausencia de transmisión/persistencia. Añadir o actualizar pruebas solo si ya existe un mecanismo admisible, sin introducir dependencias. Cerrar al ejecutar y registrar las comprobaciones correspondientes a los cambios.
4. [ ] **Auditar estados accesibles del formulario.** Revisar labels, invalid/valid, mensajes, `aria-describedby`, anuncios, grupos, foco y teclado mediante inspección y herramientas disponibles. Registrar hallazgos reproducibles y limitaciones; completar la auditoría antes de aplicar cambios visuales.
5. [ ] **Aplicar mejoras accesibles de presentación con Tailwind.** Corregir solo hallazgos sustentados; los estilos se expresan con utilidades Tailwind, sin depender solo del color y sin cambiar identidad. Si se cree imprescindible CSS personalizado, no implementarlo todavía: documentar motivo y pedir aprobación explícita. Cerrar con verificación del cambio y cumplimiento de las reglas de estilo.
6. [ ] **Revisar breakpoints y responsive.** Inspeccionar formulario y landing con navegador si está disponible, en 320, 375, 767, 768, 1280 y 1440 px. Evaluar overflow y comportamiento en los breakpoints reales de Tailwind. Si no hay navegador, limitar conclusiones a las comprobaciones que sí se ejecuten. Registrar evidencia por viewport disponible antes de corregir.
7. [ ] **Corregir defectos responsive reproducibles con Tailwind.** Aplicar solo clases utilitarias adecuadas, incluidos `sm:`, `md:` y `lg:` cuando correspondan a los breakpoints configurados. No editar contenido comercial ni decisiones de iniciativa 004. Excepción CSS requiere aprobación previa según reglas de ejecución. Cerrar con revisión del diff y revalidación responsive posible.
8. [ ] **Intentar medición reproducible de rendimiento.** Verificar disponibilidad de Lighthouse/PageSpeed sin instalar dependencias ni alterar configuración. Guardar herramienta, fecha, URL/entorno, condiciones, categorías y resultados, o describir el bloqueo exacto sin estimar puntuaciones. La tarea se cierra con evidencia reproducible o con la limitación registrada explícitamente.
9. [ ] **Evaluar optimizaciones permitidas.** Considerar solo optimizaciones técnicas pequeñas dentro del alcance aprobado; justificar cada una y no cambiar contenido, identidad, dependencias o configuración protegida. Si no hay mejora sustentada, registrar que no se aplicó optimización. Cerrar con la decisión y su justificación verificable.
10. [ ] **Ejecutar verificaciones finales.** Ejecutar según aplique `node --check uis/website/validation.js`, diagnósticos disponibles, `git diff --check`, verificaciones/tests existentes y comprobaciones visuales accesibles disponibles. Registrar salida/limitaciones; no afirmar pruebas no realizadas. Cerrar solo cuando cada verificación aplicable tenga resultado anotado.
11. [ ] **Reauditar criterios y actualizar bitácora.** Registrar archivos modificados, evidencia por criterio, limitaciones y pendientes en esta lista y `memory-bank/progress.md`, conservando historial. Confirmar que fases excluidas permanecen intactas y todos los estilos nuevos/modificados cumplen las reglas Tailwind. Cerrar después de comprobar consistencia entre implementación, evidencia y documentación.
12. [ ] **Revisar diff final sin crear commit.** Revisar diff propio y estado completo para detectar regresiones o modificaciones ajenas. No revertir cambios preexistentes ni crear commit. Cerrar con alcance del diff revisado y confirmación de que los cambios ajenos se preservaron.

## Aprobación

El plan recibió aprobación explícita. La lista se ajustó al criterio del repositorio: cada tarea tiene casilla `[ ]`, se ejecutará en orden, y solo pasará a `[x]` después de completar y verificar su criterio de cierre; se registrará el resultado antes de iniciar la siguiente tarea. Esta versión requiere aprobación explícita antes de comenzar cualquier cambio de implementación. La aprobación no autoriza excepciones a las exclusiones ni crea autorización para commit.
