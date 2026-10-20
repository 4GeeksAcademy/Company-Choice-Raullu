# Reglas generales de desarrollo

**Alcance:** transversal a cualquier tarea de desarrollo, con independencia del área afectada.

- Antes de intervenir, consultar el contexto de memoria, la documentación del área, las especificaciones aplicables y el código existente. Seguir el flujo SDD y las aprobaciones descritos en esta regla.
- Respetar la arquitectura, la ubicación de cada componente y las convenciones documentadas. No inferir decisiones técnicas que no estén aprobadas.
- Escribir código claro, mantenible y coherente con el proyecto; reutilizar soluciones existentes cuando corresponda y gestionar los errores relevantes.
- Ejecutar las verificaciones disponibles y documentadas que correspondan al cambio. Informar resultados y límites de verificación.
- Mantener actualizada la documentación afectada con información verificada, según el proceso de sincronización descrito en [AGENTS.md](../../AGENTS.md).

Las reglas generales de enrutamiento, protección de archivos y entrega se centralizan en `AGENTS.md`; esta regla concreta las pautas de desarrollo y SDD.

## Desarrollo guiado por especificaciones (SDD)

Antes de implementar una funcionalidad, buscar sus `spec.md`, `plan.md` y `tasks.md` en la documentación del componente o del proyecto.

- No considerar aprobado un documento por el hecho de que exista.
- Obtener aprobación explícita de la especificación antes de elaborar o aprobar el plan.
- Obtener aprobación explícita del plan antes de cerrar o ejecutar las tareas.
- Obtener aprobación explícita de las tareas antes de implementar.
- No saltar etapas. Si falta un artefacto o una aprobación, señalarlo y solicitar autorización antes de continuar con la etapa siguiente.
