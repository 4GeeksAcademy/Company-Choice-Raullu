# AGENTS.md

Punto de entrada para cualquier agente de IA que trabaje en este repositorio. Esta guía orienta hacia el contexto y las reglas aplicables; las convenciones detalladas pertenecen a los README, specs e instrucciones de cada área.

## Contexto obligatorio

Al iniciar una tarea, leer:

- [memory-bank/projectBrief.md](memory-bank/projectBrief.md): contexto de negocio y objetivos.
- [memory-bank/techContext.md](memory-bank/techContext.md): estructura y contexto técnico.
- [memory-bank/progress.md](memory-bank/progress.md): bitácora acumulativa del trabajo implementado, el estado en curso, el roadmap y los próximos pasos, organizada por áreas del proyecto.
- [README.md](README.md): guía general y mapa del monorepo.

Después, identificar el área afectada y consultar su README y documentación específica antes de planificar cambios.

## Mapa del repositorio

| Área                                   | Ubicación                                                                    | Consultar                                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Interfaces                             | `uis/`; web pública en `uis/website`, aplicación interna en `uis/backoffice` | [uis/README.md](uis/README.md)                                                                                       |
| APIs y workers                         | `services/`                                                                  | [services/README.md](services/README.md)                                                                             |
| Datos                                  | `data/raw/`, `data/pipelines/`, `data/process/`, `data/eval/`                | Guía raíz y documentación de la subcarpeta, si existe                                                                |
| Configuración del agente de desarrollo | `.agents/rules/`, `.agents/skills/`                                          | Reglas aplicables y [skill-creator](.agents/skills/skill-creator/SKILL.md)                                           |
| Agentes y herramientas de producto     | `agents/`, `agents/tools/`                                                   | [agents/README.md](agents/README.md), README de herramientas y [plantilla](agents/_template/README.md)               |
| Skills de producto                     | `skills/`                                                                    | [skills/README.md](skills/README.md) y el `SKILL.md` de la capacidad aplicable                                       |
| Servidores MCP y automatización        | `mcps/`, `workflows/`                                                        | [mcps/README.md](mcps/README.md), [workflows/README.md](workflows/README.md)                                         |
| Reutilización                          | `packages/`, `shared/`                                                       | [packages/README.md](packages/README.md), [shared/README.md](shared/README.md)                                       |
| Documentación transversal              | `docs/`                                                                      | [docs/README.md](docs/README.md)                                                                                     |
| Infraestructura y herramientas         | `infra/`, `scripts/`, `internal/`                                            | [infra/README.md](infra/README.md), [scripts/README.md](scripts/README.md), [internal/README.md](internal/README.md) |

No crear un árbol paralelo para aplicaciones: respetar las ubicaciones de la plantilla y leer el README del destino antes de añadir archivos.

## Instrucciones y skills

- Las reglas de `.agents/rules/` no se cargan automáticamente: en cualquier tarea de desarrollo, consultar explícitamente [development.md](.agents/rules/development.md), que contiene las reglas transversales y el flujo SDD; en tareas de frontend, consultar además [frontend.md](.agents/rules/frontend.md); en tareas de backend, consultar además [backend.md](.agents/rules/backend.md). Si una tarea afecta a frontend y backend, consultar las tres reglas. Los artefactos SDD se guardan juntos bajo `<proyecto>/specs/NNN-nombre-spec/`; `development.md` define el patrón y las aprobaciones.
- Para cualquier interfaz de TrackFlow, consultar [design-system.md](uis/website/design-system.md) como fuente de identidad visual y catálogo de recursos gráficos, y [frontend.md](.agents/rules/frontend.md) como regla técnica; esta regla también contiene requisitos específicos del sitio público. Los originales oficiales de marca están en `uis/website/assets/brand/`; comprobar que existan antes de referenciarlos y no recrearlos. Para los demás recursos gráficos, seguir el catálogo del Design System. Este rige las decisiones visuales, sin sustituir requisitos técnicos, funcionales o de seguridad. Todo cambio de identidad visual requiere aprobación explícita previa y debe documentarse primero en el Design System. `backend.md` sigue siendo una plantilla pendiente de definición y aprobación, por lo que no debe interpretarse como convención técnica existente. Aplicar también cualquier otra instrucción específica que exista para los archivos o el área afectados.
- Las skills de configuración del agente de desarrollo se buscan en `.agents/skills/`; las capacidades de producto de TrackFlow se buscan en `skills/`, no en `.agents/skills/`. Consultar explícitamente el `SKILL.md` correspondiente, pues estas rutas no se cargan automáticamente. Para crear o actualizar una skill del agente de desarrollo, seguir [skill-creator](.agents/skills/skill-creator/SKILL.md). No tratar plantillas vacías o carpetas de recursos como skills listas para ejecutar.
- Para pruebas de agentes, consultar [agents/\_template/tests/README.md](agents/_template/tests/README.md) y la documentación del agente concreto.

## Forma de trabajo y entrega

1. Analizar la solicitud, el estado del repositorio y las convenciones del área antes de editar; conservar los cambios existentes y mantener el alcance solicitado.
2. No inventar tecnologías, comandos, requisitos o decisiones. Si falta información necesaria, dejarla como pendiente y pedir aclaración.
3. Realizar cambios acotados y mantener el banco de memoria alineado con el estado del proyecto. Al terminar cada tarea, evaluar si algún hecho comprobado afecta a `memory-bank/projectBrief.md` (negocio y objetivos), `memory-bank/techContext.md` (stack, arquitectura o restricciones) o `memory-bank/progress.md` (avance, verificaciones, estado o próximos pasos). Actualizar en la misma entrega cada documento afectado, usando información verificada y sin modificar los que no hayan cambiado. Mantener `progress.md` como una bitácora acumulativa: cuando un elemento del roadmap avance, actualizar su estado y conservarlo en la sección de implementados/historial al completarlo; no eliminar los registros ya cerrados. Distinguir lo implementado de lo pendiente o propuesto, y registrar el estado actual y los requisitos para continuar cuando haya trabajo en curso.
4. Ejecutar las verificaciones disponibles y pertinentes documentadas para el componente. Informar qué se ejecutó y qué quedó sin verificar; no afirmar resultados no comprobados.

No ampliar el alcance ni iniciar trabajo en otra funcionalidad sin aprobación.

## Flujo obligatorio antes de cada commit

Antes de crear cualquier commit, completar estos pasos en orden:

1. **Revisar los cambios:** inspeccionar los archivos modificados y confirmar que respetan el alcance solicitado, las instrucciones aplicables y las especificaciones/tareas aprobadas.
2. **Validar:** ejecutar las pruebas y comprobaciones pertinentes documentadas para el área (por ejemplo, tests, lint o build). No inventar comandos; indicar qué verificaciones no existen, no aplican o no pudieron ejecutarse.
3. **Actualizar documentación:** revisar y actualizar, cuando corresponda, los documentos afectados de `memory-bank/`, las especificaciones SDD y los README. Evitar cambios documentales que no reflejen cambios reales o necesarios.
4. **Hacer la comprobación final:** revisar el diff completo y el estado de los archivos; detectar archivos accidentales, secretos, errores y cambios no relacionados. Resumir el cambio, las verificaciones y cualquier problema pendiente.
5. **Pedir autorización:** solicitar confirmación explícita del desarrollador antes de crear el commit. Completar los pasos anteriores no autoriza a hacer commit.

## Archivos y cambios protegidos

Antes de modificar cualquiera de los elementos siguientes, detenerse y solicitar autorización explícita al desarrollador. Indicar las rutas afectadas, el cambio propuesto y su motivo; no continuar hasta recibir aprobación.

- **Configuración global y dependencias:** manifiestos y lockfiles de dependencias, configuración de workspace o herramientas, versiones globales de runtimes y configuración del entorno. En el estado actual incluye `.devcontainer/devcontainer.json`, `.gitignore` y `packages/shared/package.json`; aplicar la misma protección a futuros archivos equivalentes.
- **Infraestructura y operación:** cambios en `infra/`, Dockerfiles, `docker-compose.yml`, configuración de CI/CD, cloud, despliegue o ejecución de producción. Consultar los README del área; no desplegar sin autorización explícita.
- **Secretos y entorno:** archivos o valores con credenciales, tokens, claves, certificados o configuración de acceso, incluidos archivos `.env*` cuando contengan secretos. No exponer sus valores; detenerse antes de modificarlos.
- **Datos persistentes y esquemas:** migraciones, esquemas de bases de datos, cambios destructivos o transformaciones que alteren datos persistentes. Distinguirlos de fixtures locales desechables de pruebas dentro del alcance aprobado.
- **Gobernanza de agentes y automatización:** `AGENTS.md`, `.agents/`, instrucciones, prompts, skills (`skills/**/SKILL.md`), configuración de agentes, servidores MCP y automatizaciones de `workflows/`. Los cambios solicitados expresamente por el desarrollador están autorizados para ese alcance concreto; no autorizan cambios adicionales.
- **Decisiones aprobadas:** `spec.md`, `plan.md`, `tasks.md`, ADR u otros documentos que contengan alcance, requisitos, criterios de aceptación o decisiones aprobadas. Pedir aprobación antes de alterar su contenido sustancial o cambiar una decisión.

Las actualizaciones documentales rutinarias no requieren autorización previa cuando reflejan fielmente trabajo aprobado o estado verificado, no alteran requisitos ni decisiones aprobadas y permanecen dentro del alcance. Esto incluye registrar el avance y las verificaciones pertinentes en `memory-bank/progress.md` y mantener README alineados con el comportamiento implementado. Si una actualización cambia objetivos de negocio, alcance, criterios de aceptación o decisiones técnicas aprobadas, solicitar aprobación antes de editarla.
