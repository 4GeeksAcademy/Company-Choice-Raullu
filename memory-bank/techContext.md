# Stack y estructura técnica

Este documento separa el entorno técnico existente de las necesidades del negocio y de las decisiones aún pendientes. No se ha seleccionado un stack de aplicación.

## Decisiones técnicas para el Hito 1

- El sitio público está ubicado en `uis/website/`; consultar allí su briefing antes de implementar.
- Para este hito, la interfaz y el formulario serán en español. No se implementará el segundo idioma todavía.
- Tailwind CSS es obligatorio y se incorporará mediante CDN por ahora. Esto requiere conectividad a Internet en el navegador. No se ha aprobado un proceso de build ni dependencias locales de frontend.
- Para previsualizar en Codespaces desde la raíz del repositorio: `npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`. El comando sirve estáticos y no compila Tailwind ni proporciona backend. Se verificó el sitio en el puerto 3001 porque el 3000 ya estaba ocupado.
- El envío del formulario es simulado en el cliente. No se ha aprobado persistencia, API, correo transaccional ni integración con CRM.
- [`uis/website/design-system.md`](../uis/website/design-system.md) es la fuente canónica de identidad visual y tokens para las interfaces de TrackFlow. Se debe consultar antes de cambios visuales; toda modificación o excepción de identidad necesita aprobación explícita previa y debe documentarse primero allí.
- Los originales oficiales están en `uis/website/assets/brand/`: `logo-trackflow.png`, `logo-trackflow-oscuro.png`, `ico-trackflow.png` y `favicon.ico`. Se verificaron como PNG/ICO y sus proporciones; no recrearlos ni modificarlos.
- No hay configuración `.github/instructions/` en el repositorio. `.agents/rules/` no se carga automáticamente; `AGENTS.md` ordena consultar manualmente `.agents/rules/frontend.md` y el Design System. Por decisión del desarrollador, no se añadirá una instrucción Copilot paralela.

## Tecnologías por capa

- **Frontend:** para el Hito 1 del sitio público se han elegido HTML/CSS/JavaScript estáticos y Tailwind CSS mediante CDN; esta decisión no define el stack de futuras aplicaciones ni del backoffice. El sitio está en `uis/website`; antes de trabajar allí, leer [uis/README.md](../uis/README.md) y `.agents/rules/frontend.md`.
- **Backend:** el briefing pide APIs de inventario y tracking, pero no elige lenguaje ni framework. El README raíz recomienda una API centralizada con FastAPI; [services/README.md](../services/README.md) describe una subcarpeta por servicio. Esta diferencia no está resuelta. Las APIs deben ubicarse en `services/`, sin crear un árbol paralelo.
- **Bases de datos:** el entorno actual tiene bases de datos en dos proveedores cloud, sin identificar los proveedores, motores, esquemas, ni fuentes de verdad. No hay una tecnología de base de datos elegida para el proyecto.
- **Datos e IA:** la plantilla separa datos fuente, pipelines, datos procesados y evaluación en `data/raw/`, `data/pipelines/`, `data/process/` y `data/eval/`. El briefing necesita pipelines para dashboards, RAG, agentes y clasificación asistida por IA, pero no define herramientas, modelos, vector store ni plataforma de datos.
- **Integraciones y automatización:** existen integraciones heredadas poco documentadas. Se plantean conexiones con sistemas de almacén, transportistas, CRM y otras fuentes; no se especifican APIs, protocolos ni credenciales. Los workflows sirven para orquestar sistemas; las transformaciones de datos pertenecen a `data/pipelines/` y las APIs/workers a `services/`.
- **Infraestructura y ejecución:** la plantilla ubica Dockerfiles, Terraform, manifiestos y CI/CD en `infra/`, mientras recomienda mantener `docker-compose.yml` en la raíz. Este archivo no existe actualmente. No hay runner de workspace en raíz. Existe metadata para `packages/shared` (`@repo/shared-types`), pero no configuración de workspace raíz. Para previsualizar el sitio estático del Hito 1 se documenta el comando `http-server` de Codespaces, aún pendiente de verificación operativa.

## Sistemas y procesos actuales

- La arquitectura se describe como resultado de crecimiento no planificado y como un «patchwork». Hay dos sistemas de gestión de almacén distintos; uno es software comercial y el otro una hoja de cálculo avanzada. No existe visibilidad global del inventario en tiempo real. Fuente: «Cómo está organizada la empresa» y «Los departamentos y sus problemas» > «Operaciones de almacén».
- Existe un ERP corporativo de principios de la década de 2010 e integraciones entre sistemas que se construyeron rápidamente y no se documentaron bien. Fuente: «Cómo está organizada la empresa» > «Tecnología».
- Hay scripts de Python punto a punto sin documentar y bases de datos en dos proveedores cloud distintos. El briefing no identifica los proveedores ni las bases de datos. Fuente: «Los departamentos y sus problemas» > «Tecnología».
- No hay telemetría centralizada. Cuando falla un endpoint en Los Ángeles, el equipo de Zaragoza se entera por WhatsApp. Desplegar una funcionalidad nueva tarda entre una y dos semanas. Fuente: «Cómo está organizada la empresa» > «Tecnología» y «Los departamentos y sus problemas» > «Tecnología».
- El equipo tecnológico está liderado por Andrés Kim desde Zaragoza y está formado por siete personas entre desarrollo, ingeniería de datos y sistemas. Fuente: «Cómo está organizada la empresa» y «Los departamentos y sus problemas» > «Tecnología».
- En almacén, los pedidos llegan por email en formatos diferentes, se transcriben manualmente, el picking se prepara en papel y las discrepancias de inventario suelen detectarse tarde. Fuente: «Los departamentos y sus problemas» > «Operaciones de almacén».
- El seguimiento de envíos requiere consultar portales distintos de transportistas; la asignación también es manual y no hay datos históricos estructurados de rendimiento. Fuente: «Los departamentos y sus problemas» > «Última milla y gestión de transportistas».
- Los equipos de CX atienden por email, WhatsApp y teléfono sin un sistema unificado de tickets ni base de conocimiento. Fuente: «Los departamentos y sus problemas» > «Experiencia del cliente».

## Convenciones estructurales del repositorio

- `packages/` contiene código reutilizable empaquetado, versionable y con API propia; `shared/` contiene recursos comunes no empaquetados, como esquemas, plantillas, assets o configuración.
- `.agents/rules/` y `.agents/skills/` configuran el agente de desarrollo del repositorio. En cambio, `agents/`, `agents/tools/` y `skills/` contienen agentes, herramientas y capacidades de producto de TrackFlow; `mcps/` contiene servidores MCP.
- `workflows/` contiene automatizaciones y orquestaciones entre sistemas. No sustituye una API o worker de `services/` ni el código de transformación de `data/pipelines/`.
- `scripts/` es para utilidades pequeñas y repetibles. `internal/` es para herramientas del equipo con estructura, dependencias, pruebas e instalación propias.
- `infra/` contiene definiciones de infraestructura y despliegue. El README raíz reserva la raíz para `docker-compose.yml`, aunque ese archivo todavía no existe.
- La plantilla pide documentar cada app, servicio, agente o pipeline en su propia carpeta y leer el README correspondiente antes de empezar.

## Restricciones y contexto operativo explícitos

- Operación en Estados Unidos y España, con almacenes en Los Ángeles y Zaragoza. Fuente: «Bienvenido a TrackFlow».
- Sistemas de almacén distintos y ocho transportistas en los dos países. Fuente: «Cómo está organizada la empresa» y «Los departamentos y sus problemas» > «Operaciones de almacén» / «Última milla y gestión de transportistas».
- Se recomienda soporte en español e inglés para CX, comenzando por un idioma base; el propio briefing lo califica como opcional. Fuente: «Los departamentos y sus problemas» > «Experiencia del cliente».
- La disponibilidad 24/7 se plantea para el agente de CX, el portal de tracking y el dashboard de operaciones. Fuente: «¿Por qué elegir TrackFlow?».
- El briefing menciona dos entornos regulatorios como parte de la complejidad transfronteriza, pero no especifica normativas ni controles. Fuente: «¿Por qué elegir TrackFlow?».

## Pruebas y comandos

- La plantilla de agentes prevé pruebas funcionales, de regresión y de calidad; recomienda documentar tipos de prueba, herramientas y criterios de aceptación en cada agente. Fuente: [agents/\_template/tests/README.md](../agents/_template/tests/README.md).
- No se especifica un framework ni un comando de pruebas global para las aplicaciones. No hay runner de workspace en raíz. El comando de previsualización del sitio está documentado, pero todavía no consta como ejecutado; no hay que afirmar esa verificación hasta realizarla.

## Reglas de contexto para agentes

1. Antes de modificar cualquier parte del repositorio, leer `memory-bank/projectBrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`.
2. Usar conjuntamente el contexto de negocio y el técnico; no implementar a partir de uno solo.
3. Seguir `AGENTS.md` y consultar explícitamente las reglas aplicables de `.agents/rules/`. `development.md` contiene reglas transversales; `frontend.md` establece reglas vigentes para el sitio público del Hito 1; `backend.md` sigue pendiente de definición y aprobación.
4. No convertir necesidades en decisiones. Si falta una tecnología, ruta, contrato o criterio, registrarlo como pendiente y no asumirlo.

## Decisiones y datos técnicos no especificados

BRIEFING.md no identifica un stack tecnológico elegido, frameworks, proveedores cloud, motores de base de datos, arquitectura destino, plataforma de despliegue, contratos concretos de API, esquemas de datos ni decisiones de seguridad. La única tecnología de programación nombrada es Python, en referencia a scripts existentes; eso no establece el lenguaje elegido para el proyecto. Tampoco se describen decisiones de arquitectura ya aprobadas ni el mecanismo técnico que hará cumplir la prelectura de memoria por parte de los agentes.
