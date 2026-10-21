# Estado del proyecto

Este documento separa el soporte ya preparado, las limitaciones comprobables y los próximos pasos del encargo. Las aplicaciones no se consideran implementadas por el hecho de que sus objetivos estén descritos.

## Hito vigente: sitio web público

- Alcance confirmado: Hito 1 según `uis/website/BRIEFING.md`, con experiencia en español, sin multiidioma por ahora, y Tailwind CSS cargado mediante CDN.
- Estado: la fase 1 está implementada en `index.html`; la fase 2 aplica Tailwind CDN y el Design System en `index.html` y `styles.css`. `application.html` y `validation.js` permanecen fuera de estas fases y no contienen el formulario ni sus validaciones.
- Previsualización en Codespaces, desde la raíz: `npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`. El sitio y los recursos respondieron con HTTP 200 en el puerto 3001, ya que el 3000 estaba ocupado. No se pudo hacer una comprobación visual responsive porque el entorno no dispone de navegador ni automatización instalada.
- El formulario debe simular el envío; no hay backend ni persistencia en el alcance de este hito.
- Pendientes funcionales por aclarar: texto o URL de política de privacidad y criterio de «tipo de producto relevante» para la advertencia de bajo volumen.
- Siguiente paso: preparar/aprobar los artefactos SDD aplicables al sitio y, cuando corresponda, implementar y verificar los requisitos descritos en su briefing.

## Qué está preparado

- El banco de memoria contiene [projectBrief.md](projectBrief.md), [techContext.md](techContext.md) y este registro de progreso.
- [AGENTS.md](../AGENTS.md) establece el contexto obligatorio y enruta hacia las reglas aplicables; `.agents/rules/development.md` contiene el flujo SDD y las aprobaciones.
- `.agents/rules/` contiene la regla transversal `development.md`, la regla frontend integrada con el Design System y la plantilla backend pendiente de definición y aprobación.
- `uis/website/design-system.md` centraliza la identidad visual y los tokens de TrackFlow. Las decisiones visuales y cualquier excepción quedan sujetas a aprobación explícita previa.
- Los logos horizontales, el monograma y el favicon oficiales están presentes en `uis/website/assets/brand/`; sus nombres, formatos y proporciones se verificaron. No se modificaron los originales.
- `.agents/skills/skill-creator/SKILL.md` guía la creación de skills para el agente de desarrollo; es distinta de las skills de producto ubicadas en `skills/`.
- La plantilla ya separa las áreas de interfaces, servicios, datos, agentes, skills y recursos compartidos.
- Existe metadata para `@repo/shared-types` en `packages/shared/`.

## Limitaciones actuales

- No hay runner de workspace en la raíz. El Hito 1 tiene archivos estáticos preparados en `uis/website/`; el servidor de previsualización se documenta más adelante en este registro y su ejecución debe verificarse por separado.
- Las reglas de `.agents/rules/` no se cargan automáticamente; `AGENTS.md` indica consultar la regla frontend y el Design System. No se creó configuración adicional de Copilot por decisión del desarrollador. La regla backend continúa pendiente.
- `skills/` contiene las capacidades de producto. La skill `.agents/skills/skill-creator/` es una herramienta de configuración del agente de desarrollo y no reemplaza la tarea pendiente de elegir/formalizar una skill de producto con criterios de aceptación comprobables.
- Los README no están alineados sobre la organización del backend: uno recomienda FastAPI centralizado y el otro plantea una subcarpeta por servicio.
- La landing estática cuenta con estructura semántica y presentación responsive preparada mediante Tailwind. La validación automatizada de estructura y la entrega HTTP se ejecutaron; la comprobación visual en distintos viewports queda pendiente.

## Próximos pasos sugeridos

La secuencia refleja el mensaje del encargo y las lagunas observadas en el repositorio; no incluye fechas ni prioridades de producto acordadas.

1. Verificar operativamente que los agentes consultan los tres documentos del banco de memoria y las reglas aplicables antes de modificar el repositorio. La obligación está documentada en `AGENTS.md`, pero su cumplimiento no se ha comprobado; no asumir carga automática de `.agents/rules/`.
2. Completar la revisión visual responsive cuando haya un navegador disponible y continuar con la fase 3 del formulario tras su aprobación.
3. Elegir una tarea recurrente del producto y formalizarla en `skills/` como capacidad reutilizable, con entradas, pasos y criterios de aceptación explícitos y verificables.
4. Al crear aplicaciones, usar `uis/website` para el sitio público, `uis/backoffice` para la aplicación interna y `services/` para las APIs. Leer el README de la carpeta antes de añadir archivos; no crear un árbol paralelo.
5. Aclarar la organización del backend: el README raíz recomienda FastAPI centralizado, mientras `services/README.md` describe un servicio por subcarpeta.

## Verificaciones registradas

- Los diagnósticos de Markdown no señalaron errores en los documentos del banco de memoria ni en `AGENTS.md`.
- Verificación estática de estructura, tokens y configuración de Tailwind; `git diff --check`; diagnósticos del editor; HTTP 200 para la landing, CSS, logos y favicon. Sin verificación visual en navegador ni prueba del formulario, que sigue fuera de alcance.

## Datos pendientes

No se han definido prioridades de negocio, responsables de implementación, fechas, hitos o criterios de aceptación de producto. Tampoco se ha elegido la tarea que cubrirá la skill ni se ha establecido el contenido detallado de los controles previos al commit.
