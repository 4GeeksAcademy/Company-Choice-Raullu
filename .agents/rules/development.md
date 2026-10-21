# Reglas generales de desarrollo

**Alcance:** transversal a cualquier tarea de desarrollo, con independencia del área afectada.

- Antes de intervenir, consultar el contexto de memoria, la documentación del área, las especificaciones aplicables y el código existente. Seguir el flujo SDD y las aprobaciones descritos en esta regla.
- Respetar la arquitectura, la ubicación de cada componente y las convenciones documentadas. No inferir decisiones técnicas que no estén aprobadas.
- Escribir código claro, mantenible y coherente con el proyecto; reutilizar soluciones existentes cuando corresponda y gestionar los errores relevantes.
- Ejecutar las verificaciones disponibles y documentadas que correspondan al cambio. Informar resultados y límites de verificación.
- Mantener actualizada la documentación afectada con información verificada, según el proceso de sincronización descrito en [AGENTS.md](../../AGENTS.md).
- Para el Hito 1 del sitio público de TrackFlow, respetar el alcance de `uis/website/BRIEFING.md`: el formulario simula la recepción de la solicitud. No añadir backend, persistencia de leads ni integración con CRM como parte de este hito.

Las reglas generales de enrutamiento, protección de archivos y entrega se centralizan en `AGENTS.md`; esta regla concreta las pautas de desarrollo y SDD.

## Desarrollo guiado por especificaciones (SDD)

Cada iniciativa SDD debe guardar sus tres artefactos juntos bajo la carpeta del proyecto responsable, con esta estructura:

```text
<proyecto>/specs/NNN-nombre-spec/spec.md
<proyecto>/specs/NNN-nombre-spec/plan.md
<proyecto>/specs/NNN-nombre-spec/tasks.md
```

Asignar `NNN` como número secuencial de tres dígitos, único e incremental dentro de cada proyecto; usar un nombre breve en kebab-case. Antes de crear una especificación, revisar las carpetas existentes del proyecto para elegir el siguiente número disponible. No guardar artefactos SDD sueltos directamente en la raíz del proyecto. Para iniciativas existentes, conservar su contenido y moverlas a la estructura canónica al trabajar en ellas.

Antes de implementar una funcionalidad, buscar su carpeta `specs/NNN-nombre-spec/` en el proyecto responsable y consultar allí `spec.md`, `plan.md` y `tasks.md`.

- No considerar aprobado un documento por el hecho de que exista.
- Obtener aprobación explícita de la especificación antes de elaborar o aprobar el plan.
- Obtener aprobación explícita del plan antes de cerrar o ejecutar las tareas.
- Obtener aprobación explícita de las tareas antes de implementar.
- No saltar etapas. Si falta un artefacto o una aprobación, señalarlo y solicitar autorización antes de continuar con la etapa siguiente.
- La aprobación debe corresponder al contenido de cada artefacto; crear o ubicar los tres archivos no implica que estén aprobados.
