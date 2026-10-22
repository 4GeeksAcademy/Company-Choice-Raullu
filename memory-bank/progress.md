# Registro de progreso de TrackFlow

Este archivo es una bitácora acumulativa: los elementos implementados se conservan como historial, aunque el trabajo ya esté cerrado. El estado describe lo comprobado en el repositorio y no convierte los objetivos del `projectBrief.md` en funcionalidades existentes. Las decisiones técnicas no tomadas y las limitaciones se anotan como tales.

**Última actualización:** 2026-10-23

**Fuentes de alcance y estructura:** [`projectBrief.md`](projectBrief.md), [`techContext.md`](techContext.md) y briefings de cada iniciativa.

## Cómo leer y mantener este registro

- **Implementado / historial:** trabajo completado y evidencia o ubicación correspondiente. No se elimina al avanzar; se corrige solo si aparece evidencia de que el registro era inexacto.
- **En curso:** trabajo empezado pero aún no cerrado; incluir estado actual, bloqueo y qué se necesita para continuarlo. Si no hay trabajo activo, indicarlo explícitamente.
- **Roadmap:** necesidades u objetivos aún no implementados. La inclusión aquí no equivale a aprobación de arquitectura, stack o prioridad.
- **Próximos pasos sugeridos:** secuencia práctica recomendada, no fechas ni compromisos acordados.

## Resumen actual

- **En curso:** no consta una iniciativa de producto en implementación. La enmienda aprobada del formulario B2B está implementada y cerrada documentalmente; su prueba manual de navegador queda pendiente.
- **Implementado:** sitio público estático del Hito 1 y formulario demostrativo; documentación para previsualizarlo localmente; reglas, contexto y estructura base del repositorio.
- **Bloqueos destacados:** reemplazar y aprobar la política de privacidad antes de recopilar datos reales; cerrar decisiones de backend/datos antes de iniciar esas capas; realizar las verificaciones manuales pendientes del sitio y del formulario.
- **No implementado:** APIs, persistencia, CRM, pipelines de datos, dashboards operativos, agentes de producto, automatizaciones e infraestructura de despliegue descritos como objetivos empresariales.

## 1. Frontend e interfaces (`uis/`)

### Implementado e historial

- **Sitio público, Hito 1:** landing en español ubicada en `uis/website/index.html`, con Tailwind CSS mediante CDN, estilos y tokens del Design System. La revisión visual e iconográfica está registrada en `uis/website/specs/001-mejora-visual-web/`; identidad y tokens canónicos en `uis/website/design-system.md`.
- **Activos de marca:** originales oficiales verificados en `uis/website/assets/brand/` (logos, monograma e icono/favicons). Las reglas indican no recrearlos ni modificarlos.
- **Formulario B2B:** `uis/website/application.html` y `uis/website/validation.js` implementan una solicitud comercial demostrativa de cuatro pasos, con navegación secuencial, validación por paso, gestión de foco, conservación de valores, advertencia de bajo volumen, confirmación simulada y reinicio. El trabajo y sus comprobaciones se detallan en `uis/website/specs/002-solicitud-informacion/tasks.md` (tareas 1–20 completadas).
- **Límite de privacidad del formulario:** el submit solo simula el resultado en el navegador. No envía ni persiste la solicitud, no hay integración con API/correo/CRM y no se deben introducir datos personales o confidenciales reales. El aviso de privacidad actual es ficticio y no vigente.
- **Previsualización:** los README raíz, en español e inglés, documentan `npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`, las URLs de landing/formulario, Codespaces, Tailwind CDN y cómo detener el servidor. En una sesión anterior se comprobó respuesta HTTP 200 para landing y formulario en el servidor local; servir estáticos no equivale a probar sus interacciones.
- **Verificaciones del formulario registradas:** `node --check uis/website/validation.js`, `git diff --check` y diagnósticos del editor sin errores; revisión estática de estructura, labels/ARIA, contraste, selectores y ausencia de envío/persistencia. Una prueba con DOM simulado cubrió submit válido/inválido y reset. El usuario confirmó visualmente el formulario en 320, 375, 768, 1280 y 1440 px.
- **Enmienda de acciones y validación global (implementada):** en `uis/website/application.html`, Limpiar queda separado a la izquierda; Anterior precede a Siguiente/Enviar en el orden DOM; encabezado y tarjeta alinean su contenedor exterior. `validation.js` conserva la validación por paso y, al enviar desde el cuarto, vuelve a validar formulario completo; si detecta errores, muestra el primer paso inválido según el orden de pasos antes de enfocar su primer control. Tareas 21–24 están cerradas en `uis/website/specs/002-solicitud-informacion/tasks.md`. El usuario reportó que la visibilidad real de botones no coincidía con el atributo `hidden`: las clases Tailwind `inline-flex` prevalecían sobre el estilo UA de `[hidden]`. Se añadió `[hidden] { display: none !important; }` en `styles.css` para hacer autoritativo ese atributo en toda la página. No se dispone de navegador para confirmar visualmente este arreglo; interacción/tabulación, envío válido e inválido y viewports siguen pendientes de verificación manual.

### En curso y pendiente para cerrar

- **Prueba interactiva del flujo por pasos:** no consta una prueba de navegador del flujo completo actualizado (navegación, teclado/foco, errores y retención de valores, visibilidad de acciones ni revalidación final). En la enmienda vigente tampoco se ejecutó navegador; se necesita una sesión manual y registrar los resultados en las tareas SDD.
- **Accesibilidad práctica:** la inspección de markup y contraste fue estática; no consta prueba con lector de pantalla ni auditoría WCAG automatizada. Hace falta ejecutar esas comprobaciones antes de declarar cobertura completa.
- **Landing responsive:** en el registro anterior quedó pendiente la inspección visual de la landing en 320, 375, 768, 1280 y 1440 px; la confirmación visual de esos anchos se refiere al formulario y no debe atribuirse a la landing sin repetirla.
- **Privacidad/producción:** antes de recopilar solicitudes reales, se necesita el texto o URL aprobados, revisión del consentimiento y decisión sobre backend, retención, acceso y tratamiento de datos. El formulario permanece limitado a demostración local.

### Roadmap de interfaces (no implementado)

- El brief empresarial propone interfaces de operación (dashboard y alertas de stock), seguimiento unificado/portal público, dashboards de CX, salud de cuentas y dirección ejecutiva. No hay constancia de esas aplicaciones en `uis/`.
- El segundo idioma se pospuso para el Hito 1; el soporte español/inglés recomendado para CX es una necesidad futura, no una capacidad de la landing actual.

## 2. Backend y APIs (`services/`)

### Implementado e historial

- La carpeta `services/` y su documentación forman parte de la estructura de plantilla; **no** consta una API de TrackFlow implementada.
- El briefing del sitio define el formulario como simulación en cliente: API, persistencia de leads, correo transaccional e integración con CRM quedaron fuera de ese alcance.

### Decisiones pendientes / qué se necesita

- El briefing empresarial solicita APIs de inventario y tracking, pero no selecciona lenguaje o framework. Hay una discrepancia documental: el README raíz recomienda una API centralizada FastAPI y `services/README.md` plantea una subcarpeta por servicio. Resolver y aprobar esta diferencia antes de crear servicios; ubicarlos bajo `services/`, sin árbol paralelo.
- Antes de implementar, definir contratos, autenticación/autorización, fuentes de verdad, errores, disponibilidad y límites de datos, además de una primera necesidad priorizada. La regla backend de `.agents/rules/backend.md` sigue pendiente de definición/aprobación según `techContext.md`.

### Roadmap de backend (no implementado)

- API para consultar existencias de SKU en Los Ángeles y Zaragoza; ingesta de pedidos recibidos por email; APIs/integraciones para tracking, devoluciones y CRM, según prioridades que se acuerden.
- Servicios o workers solo después de decidir arquitectura y requisitos operativos; el README raíz recomienda no dividir prematuramente en microservicios.

## 3. Bases de datos y datos (`data/`)

### Implementado e historial

- Existe estructura/documentación de plantilla para datos fuente, pipelines, datos procesados y evaluación (`data/raw/`, `data/pipelines/`, `data/process/`, `data/eval/`). No consta una base de datos de aplicación, esquema, pipeline empresarial ni dataset de producción implementado.
- El contexto empresarial describe bases de datos en dos proveedores cloud, pero no identifica proveedores, motores ni fuentes de verdad. Es contexto del estado de la empresa, no una base ya configurada en este repositorio.

### Decisiones pendientes / qué se necesita

- Identificar sistemas y responsables fuente, proveedores/motores actuales, esquemas, permisos y restricciones de PII; acordar retención, calidad, sincronización y estrategia transfronteriza antes de diseñar una base nueva o pipeline.
- Para cada conjunto de datos, documentar origen, tratamiento de PII, transformaciones y criterios de calidad/evaluación.

### Roadmap de datos (no implementado)

- Pipeline de datos para alimentar dashboards; datos estructurados para comparar puntualidad, incidencias y coste de transportistas; agregados/KPIs operativos y ejecutivos; conjuntos de evaluación para RAG/agentes si se aprueban esas iniciativas.
- Aún no se han seleccionado plataforma de datos, herramientas ETL/ELT, vector store ni motores de almacenamiento.

## 4. IA y agentes (`agents/`, `skills/`, `mcps/`)

### Implementado e historial

- Hay plantilla y documentación para agentes en `agents/_template/`, una plantilla de skills de producto en `skills/_template/` y skills de ejemplo en `skills/` (incluye análisis de datos y code review). Los servidores MCP tienen carpeta/documentación en `mcps/`.
- `.agents/skills/skill-creator/` y `.agents/rules/` pertenecen a la configuración del agente de desarrollo; no son agentes/skills de producto de TrackFlow.
- No consta agente de producto, modelo, RAG, vector store, MCP conectado a sistemas empresariales ni evaluación de IA implementados.

### Roadmap de IA (no implementado)

- El brief propone asistencia para CX con búsqueda semántica/RAG y escalado humano, análisis de sentimiento, clasificación visual de devoluciones, recomendación explicable de transportistas y consultas de negocio en lenguaje natural. Son objetivos por explorar, no entregables activos confirmados.
- Antes de implementar: elegir caso de uso y límites de autonomía, fuentes autorizadas, modelo/proveedor, privacidad, evaluación y supervisión humana; crear datasets de evaluación y criterios de aceptación.

## 5. Integraciones y automatización (`workflows/`)

### Implementado e historial

- `workflows/` está documentado como área para orquestación entre sistemas. No consta workflow empresarial implementado.
- `techContext.md` recoge integraciones heredadas poco documentadas y procesos manuales como contexto del negocio, no como integraciones ya reproducidas aquí.

### Roadmap (no implementado)

- Explorar ingesta de pedidos por email, coordinación de devoluciones, alertas/avisos operativos, renovaciones contractuales e informes automáticos, en función de prioridades y contratos que se aprueben.
- Definir sistemas participantes, APIs/protocolos, credenciales gestionadas de forma segura, reintentos, idempotencia, trazabilidad y responsable operativo antes de automatizar.

## 6. Infraestructura, ejecución y observabilidad (`infra/`, `scripts/`, `internal/`)

### Implementado e historial

- La plantilla documenta `infra/` para infraestructura/despliegue, `scripts/` para utilidades pequeñas y repetibles, e `internal/` para herramientas internas con estructura propia.
- El sitio estático se sirve con `http-server` según las instrucciones anteriores; no hay backend ni build asociado al comando. Tailwind CDN requiere conexión a Internet.
- `techContext.md` registra que no hay runner de workspace en raíz ni `docker-compose.yml`; `packages/shared/package.json` contiene metadata de `@repo/shared-types`, pero no hay configuración de workspace raíz.
- La empresa reporta falta de telemetría centralizada e incidencias comunicadas por canales manuales; no hay solución de observabilidad configurada en este repositorio.

### Roadmap / decisiones pendientes

- Acordar plataforma de ejecución, despliegue, CI/CD, secretos, backups, health checks, logging/telemetría, alertas y objetivos de disponibilidad antes de desplegar servicios.
- El brief propone centralizar logs y telemetría de ambos países, monitorización y alertas; no está implementado. No se ha elegido proveedor o stack de observabilidad.
- No añadir Docker, Terraform, CI ni runner por inferencia: documentar y aprobar la necesidad y las decisiones primero.

## 7. Paquetes y recursos compartidos (`packages/`, `shared/`)

### Implementado e historial

- Existe metadata de `@repo/shared-types` en `packages/shared/`; no existe runner/configuración de workspace en raíz. `packages/` está destinado a código versionable con API propia y `shared/` a recursos comunes no empaquetados.
- No consta SDK, esquema de dominio o paquete compartido adicional implementado para las aplicaciones de TrackFlow.

### Roadmap

- Crear tipos, esquemas o SDK compartidos solo cuando haya consumidores/contratos concretos y aprobados; mantener recursos no empaquetados en `shared/`.

## 8. Documentación, reglas y gobierno del proyecto

### Implementado e historial

- `memory-bank/projectBrief.md` recoge el contexto empresarial y `memory-bank/techContext.md` separa estructura y decisiones técnicas de las necesidades. Esta bitácora conserva el estado y las verificaciones a lo largo del tiempo.
- `AGENTS.md` y `.agents/rules/` documentan las instrucciones del repositorio; `development.md` define el flujo SDD/aprobaciones y hay regla frontend que remite al Design System. Según `techContext.md`, las reglas no se cargan automáticamente y deben consultarse explícitamente.
- El sitio tiene briefing propio, Design System y artefactos SDD. La iniciativa visual se documentó en `001-mejora-visual-web/`; el formulario en `002-solicitud-informacion/`.
- Se documentó cómo levantar la web en los README raíz en español e inglés. El diff de trabajo de la sesión también incluye modificaciones ajenas a esta bitácora en esos README y en `uis/website/specs/002-solicitud-informacion/tasks.md`; este registro no las altera.

### Pendiente

- Mantener enlazados los artefactos SDD y anotar resultados verificados en esta bitácora y `tasks.md`, sin borrar cierres anteriores.
- No hay prioridades de negocio, responsables, fechas ni hitos futuros acordados. Las propuestas de este documento son sugerencias, no compromisos.

## Próximos pasos sugeridos

1. Completar una prueba manual del formulario actualizado en navegador (flujo de cuatro pasos, validación, foco, teclado, éxito y reset) y actualizar la tarea 20 con resultados reales; no reemplazar verificaciones pendientes por suposiciones.
2. Hacer y registrar la revisión de la landing en los cinco anchos indicados; probar formulario y landing con lector de pantalla/auditoría accesible disponible.
3. Definir y aprobar la política de privacidad y el tratamiento de datos antes de cualquier uso real del formulario. Mantener la demo sin envío hasta entonces.
4. Priorizar con negocio un primer problema empresarial (por ejemplo inventario o tracking) y acordar requisitos, aceptación y sistemas fuente antes de escoger arquitectura.
5. Resolver la discrepancia sobre backend centralizado frente a servicios separados y documentar contratos, seguridad y reglas backend antes de implementar una API.
6. Cuando exista una iniciativa aprobada, crear sus artefactos SDD en la ruta indicada por `techContext.md`; registrar aquí su estado inicial, evidencia de cada cierre y dependencias. Al concluir, conservarla en “Implementado e historial” y retirar solo su entrada activa/roadmap.

## Referencias

- Contexto de negocio: [`projectBrief.md`](projectBrief.md)
- Decisiones y estructura técnica: [`techContext.md`](techContext.md)
- Briefing del sitio: [`uis/website/BRIEFING.md`](../uis/website/BRIEFING.md)
- Estado detallado del formulario: [`uis/website/specs/002-solicitud-informacion/tasks.md`](../uis/website/specs/002-solicitud-informacion/tasks.md)
- Diseño visual canónico: [`uis/website/design-system.md`](../uis/website/design-system.md)
