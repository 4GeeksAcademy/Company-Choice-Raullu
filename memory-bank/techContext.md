# Stack y estructura técnica

Este documento separa el entorno técnico existente de las necesidades del negocio y de las decisiones aún pendientes. No se ha seleccionado un stack de aplicación.

## Tecnologías por capa

- **Frontend:** no hay una aplicación implementada ni tecnologías seleccionadas. La plantilla sitúa el sitio público en `uis/website` y la aplicación interna en `uis/backoffice`; antes de crear cualquiera, hay que leer [uis/README.md](../uis/README.md).
- **Backend:** el briefing pide APIs de inventario y tracking, pero no elige lenguaje ni framework. El README raíz recomienda una API centralizada con FastAPI; [services/README.md](../services/README.md) describe una subcarpeta por servicio. Esta diferencia no está resuelta. Las APIs deben ubicarse en `services/`, sin crear un árbol paralelo.
- **Bases de datos:** el entorno actual tiene bases de datos en dos proveedores cloud, sin identificar los proveedores, motores, esquemas, ni fuentes de verdad. No hay una tecnología de base de datos elegida para el proyecto.
- **Datos e IA:** la plantilla separa datos fuente, pipelines, datos procesados y evaluación en `data/raw/`, `data/pipelines/`, `data/process/` y `data/eval/`. El briefing necesita pipelines para dashboards, RAG, agentes y clasificación asistida por IA, pero no define herramientas, modelos, vector store ni plataforma de datos.
- **Integraciones y automatización:** existen integraciones heredadas poco documentadas. Se plantean conexiones con sistemas de almacén, transportistas, CRM y otras fuentes; no se especifican APIs, protocolos ni credenciales. Los workflows sirven para orquestar sistemas; las transformaciones de datos pertenecen a `data/pipelines/` y las APIs/workers a `services/`.
- **Infraestructura y ejecución:** la plantilla ubica Dockerfiles, Terraform, manifiestos y CI/CD en `infra/`, mientras recomienda mantener `docker-compose.yml` en la raíz. Este archivo no existe actualmente. Tampoco hay aplicaciones ejecutables ni runner de workspace en raíz. Existe metadata para `packages/shared` (`@repo/shared-types`), pero no configuración de workspace raíz ni comandos de aplicación documentados.

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
- `agents/` contiene agentes concretos; `agents/tools/` agrupa herramientas reutilizables para agentes; `skills/` contiene capacidades empaquetadas con instrucciones y recursos; `mcps/` contiene servidores MCP.
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
- No se especifica un framework ni un comando de pruebas global para las aplicaciones. El README raíz indica que todavía no hay runner de workspace y no hay apps ejecutables; no hay que inventar comandos hasta que el proyecto los defina.

## Reglas de contexto para agentes

1. Antes de modificar cualquier parte del repositorio, leer `memory-bank/projectBrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md`.
2. Usar conjuntamente el contexto de negocio y el técnico; no implementar a partir de uno solo.
3. Seguir las instrucciones aplicables de `AGENTS.md` y `.agents/`, y completar el proceso de entrega previo a un commit. Ambos recursos aún están pendientes de crear, por lo que esta regla todavía no está aplicada técnicamente.
4. No convertir necesidades en decisiones. Si falta una tecnología, ruta, contrato o criterio, registrarlo como pendiente y no asumirlo.

## Decisiones y datos técnicos no especificados

BRIEFING.md no identifica un stack tecnológico elegido, frameworks, proveedores cloud, motores de base de datos, arquitectura destino, plataforma de despliegue, contratos concretos de API, esquemas de datos ni decisiones de seguridad. La única tecnología de programación nombrada es Python, en referencia a scripts existentes; eso no establece el lenguaje elegido para el proyecto. Tampoco se describen decisiones de arquitectura ya aprobadas ni el mecanismo técnico que hará cumplir la prelectura de memoria por parte de los agentes.
