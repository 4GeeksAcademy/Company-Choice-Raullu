# Estado del proyecto

Este documento separa el soporte ya preparado, las limitaciones comprobables y los próximos pasos del encargo. Las aplicaciones no se consideran implementadas por el hecho de que sus objetivos estén descritos.

## Qué está preparado

- El banco de memoria contiene [projectBrief.md](projectBrief.md), [techContext.md](techContext.md) y este registro de progreso.
- [AGENTS.md](../AGENTS.md) establece el contexto obligatorio y enruta hacia las reglas aplicables; `.agents/rules/development.md` contiene el flujo SDD y las aprobaciones.
- `.agents/rules/` contiene la regla transversal `development.md` y las plantillas `frontend.md` y `backend.md`, cuyos contenidos técnicos siguen pendientes de definición y aprobación.
- `.agents/skills/skill-creator/SKILL.md` guía la creación de skills para el agente de desarrollo; es distinta de las skills de producto ubicadas en `skills/`.
- La plantilla ya separa las áreas de interfaces, servicios, datos, agentes, skills y recursos compartidos.
- Existe metadata para `@repo/shared-types` en `packages/shared/`.

## Limitaciones actuales

- El README raíz describe el repositorio como estructura base sin aplicaciones ejecutables ni runner de workspace en la raíz. `uis/` y `services/` contienen sus README de orientación, no las apps.
- Las reglas no se cargan automáticamente; `AGENTS.md` indica a los agentes cuándo consultar cada archivo. Las plantillas de frontend y backend todavía no definen convenciones técnicas.
- `skills/` contiene las capacidades de producto. La skill `.agents/skills/skill-creator/` es una herramienta de configuración del agente de desarrollo y no reemplaza la tarea pendiente de elegir/formalizar una skill de producto con criterios de aceptación comprobables.
- Los README no están alineados sobre la organización del backend: uno recomienda FastAPI centralizado y el otro plantea una subcarpeta por servicio.
- No hay registro verificable de funcionalidades TrackFlow implementadas ni comandos de aplicación que se hayan podido ejecutar.

## Próximos pasos sugeridos

La secuencia refleja el mensaje del encargo y las lagunas observadas en el repositorio; no incluye fechas ni prioridades de producto acordadas.

1. Verificar operativamente que los agentes consultan los tres documentos del banco de memoria y las reglas aplicables antes de modificar el repositorio. La obligación está documentada en `AGENTS.md`, pero su cumplimiento no se ha comprobado; no asumir carga automática de `.agents/rules/`.
2. Definir y aprobar las convenciones técnicas específicas de frontend y backend antes de tratar las plantillas actuales como reglas vigentes.
3. Elegir una tarea recurrente del producto y formalizarla en `skills/` como capacidad reutilizable, con entradas, pasos y criterios de aceptación explícitos y verificables.
4. Al crear aplicaciones, usar `uis/website` para el sitio público, `uis/backoffice` para la aplicación interna y `services/` para las APIs. Leer el README de la carpeta antes de añadir archivos; no crear un árbol paralelo.
5. Aclarar la organización del backend: el README raíz recomienda FastAPI centralizado, mientras `services/README.md` describe un servicio por subcarpeta.

## Verificaciones registradas

- Los diagnósticos de Markdown no señalaron errores en los documentos del banco de memoria ni en `AGENTS.md`.
- No se ejecutaron pruebas de aplicación: el repositorio no tiene aplicaciones ejecutables ni un runner de workspace en la raíz.

## Datos pendientes

No se han definido prioridades de negocio, responsables de implementación, fechas, hitos o criterios de aceptación de producto. Tampoco se ha elegido la tarea que cubrirá la skill ni se ha establecido el contenido detallado de los controles previos al commit.
