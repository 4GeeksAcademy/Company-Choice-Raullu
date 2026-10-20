# Estado del proyecto

Este documento separa el soporte ya preparado, las limitaciones comprobables y los próximos pasos del encargo. Las aplicaciones no se consideran implementadas por el hecho de que sus objetivos estén descritos.

## Qué está preparado

- El banco de memoria contiene [projectBrief.md](projectBrief.md), [techContext.md](techContext.md) y este registro de progreso.
- [AGENTS.md](../AGENTS.md) ya establece el contexto obligatorio, el mapa del repositorio, las etapas de aprobación SDD y el flujo de trabajo de los agentes.
- La plantilla ya separa las áreas de interfaces, servicios, datos, agentes, skills y recursos compartidos.
- Existe metadata para `@repo/shared-types` en `packages/shared/`.

## Limitaciones actuales

- El README raíz describe el repositorio como estructura base sin aplicaciones ejecutables ni runner de workspace en la raíz. `uis/` y `services/` contienen sus README de orientación, no las apps.
- `.agents/` todavía no existe; las instrucciones específicas por alcance están pendientes.
- `skills/` ya tiene una plantilla y las carpetas `code-review`, `data-analysis` y `research`; aún falta elegir/formalizar una skill del flujo de trabajo con criterios de aceptación comprobables.
- Los README no están alineados sobre la organización del backend: uno recomienda FastAPI centralizado y el otro plantea una subcarpeta por servicio.
- No hay registro verificable de funcionalidades TrackFlow implementadas ni comandos de aplicación que se hayan podido ejecutar.

## Próximos pasos sugeridos

La secuencia refleja el mensaje del encargo y las lagunas observadas en el repositorio; no incluye fechas ni prioridades de producto acordadas.

1. Crear `.agents/` con convenciones específicas y alcance correcto para evitar que instrucciones locales se apliquen fuera de sus carpetas.
2. Asegurar que el flujo del agente exige leer los tres documentos del banco de memoria antes de tocar el repositorio y utilizar conjuntamente contexto de negocio y técnico.
3. Elegir una tarea recurrente y formalizarla como skill reutilizable, con entradas, pasos y criterios de aceptación explícitos y verificables.
4. Al crear aplicaciones, usar `uis/website` para el sitio público, `uis/backoffice` para la aplicación interna y `services/` para las APIs. Leer el README de la carpeta antes de añadir archivos; no crear un árbol paralelo.
5. Aclarar la organización del backend: el README raíz recomienda FastAPI centralizado, mientras `services/README.md` describe un servicio por subcarpeta.

## Verificaciones registradas

- Los diagnósticos de Markdown no señalaron errores en los documentos del banco de memoria ni en `AGENTS.md`.
- No se ejecutaron pruebas de aplicación: el repositorio no tiene aplicaciones ejecutables ni un runner de workspace en la raíz.

## Datos pendientes

No se han definido prioridades de negocio, responsables de implementación, fechas, hitos o criterios de aceptación de producto. Tampoco se ha elegido la tarea que cubrirá la skill ni se ha establecido el contenido detallado de los controles previos al commit.
