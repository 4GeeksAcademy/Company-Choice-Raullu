---
name: skill-creator
description: "Crea, revisa o actualiza skills reutilizables para GitHub Copilot; no la uses para reglas generales ni tareas puntuales."
---

# Skill Creator

## 1. Propósito y alcance

Guía al desarrollador, paso a paso, para **diseñar, crear, revisar o mejorar una skill reutilizable** de GitHub Copilot. No te limites a generar `SKILL.md`: comprueba primero que la necesidad justifica una skill y valida después el resultado.

- **Activa esta skill** ante peticiones de crear, diseñar, revisar o actualizar una skill de agente.
- **No la actives** para resolver una tarea puntual, redactar reglas generales, actualizar la memoria del proyecto o implementar una funcionalidad del producto.
- En este repositorio, las skills de los agentes de desarrollo pertenecen a `.agents/skills/`. No las confundas con `skills/` o `agents/`, destinados a componentes del producto.
- Sigue `AGENTS.md` y las reglas pertinentes de `.agents/rules/`. Consulta el `memory-bank/` cuando sea necesario para ajustar la skill al contexto y a las decisiones vigentes.

## 2. Entradas y comprobaciones previas

Antes de diseñar una skill, consigue **cuatro entradas obligatorias**:

1. **Tarea o capacidad:** qué debe hacer la skill; idealmente, una sola responsabilidad.
2. **Situaciones de uso:** cuándo debe emplearse y ejemplos de peticiones habituales.
3. **Resultado esperado:** qué debe producir, modificar o devolver.
4. **Material disponible:** documentación, ejemplos, código, capturas, plantillas, assets o enlaces; si no existe, registra expresamente «ninguno».

Solicita solo los datos que falten, en preguntas breves y agrupadas. **No avances al diseño ni crees archivos si falta alguna de las cuatro entradas.** Puedes inferir una entrada si consta inequívocamente en documentación accesible, pero confirma las decisiones sustanciales.

Antes de proponer una solución:

- Revisa las skills existentes y la plantilla del repositorio; evita duplicidades.
- Distingue una **skill** (procedimiento reutilizable) de una **regla** (norma permanente), de la **memoria** (hechos y decisiones) y de un **prompt puntual**.
- Detecta dependencias, permisos, datos sensibles, acciones con efectos secundarios y materiales inaccesibles.
- Si la petición mezcla varias capacidades independientes, propone separarlas y explica por qué.

## 3. Procedimiento

### Revisión de solo lectura

Cuando el usuario solicite revisar una skill sin pedir cambios:

1. Lee la skill y las referencias que utiliza; contrástalas con `AGENTS.md`, las reglas aplicables y los criterios de aceptación de la propia skill.
2. Informa de los hallazgos con su evidencia y prioridad, y propone mejoras concretas si hacen falta.
3. No edites archivos. Si el usuario solicita aplicar mejoras, presenta el alcance de los cambios y espera aprobación antes de escribir.

Una solicitud de revisión no necesita pasar por la propuesta de creación de la Fase A.

### Fase A. Definir y presentar la propuesta de creación o actualización

1. Formula un objetivo concreto y los límites de la skill.
2. Propón un nombre descriptivo en minúsculas y con guiones, sin colisiones con skills existentes.
3. Define condiciones de activación y exclusión, entradas obligatorias y opcionales, validaciones y salida esperada.
4. Decide si necesita `references/`, `scripts/` o `assets/`. Justifica cada recurso; no crees directorios de relleno.
5. Define criterios de aceptación observables y los casos de prueba iniciales.
6. Presenta una propuesta breve con **nombre, objetivo, alcance, entradas, salida, recursos, criterios de aceptación y ubicación**. **Espera la aprobación explícita del desarrollador.**

### Fase B. Crear o actualizar archivos, solo tras aprobación

1. Crea o actualiza únicamente la skill y las rutas de recursos incluidas en la propuesta aprobada, dentro de `.agents/skills/<nombre-de-la-skill>/`. Si existe una skill equivalente, explica si conviene modificarla y no la sobrescribas sin permiso.
2. Comienza `SKILL.md` con frontmatter YAML delimitado por `---` y estas claves exactas:
   - `name`: identificador idéntico al de su carpeta.
   - `description`: qué hace, cuándo debe usarse y qué peticiones cercanas excluye; **menos de 200 caracteres**.
3. Organiza el cuerpo, adaptándolo al caso, en: **Propósito y alcance; Entradas y comprobaciones previas; Procedimiento; Recursos de apoyo y cuándo utilizarlos; Formato de salida; Ejemplos; Validación y tratamiento de errores.**
4. Usa instrucciones operativas en imperativo: «Lee», «Comprueba», «Pregunta», «Genera» y «Valida». Separa análisis y aprobación de operaciones que modifican archivos.
5. Incluye al menos un ejemplo representativo de entrada y salida. Mantén `SKILL.md` **por debajo de 500 líneas** y tan breve como permita una ejecución fiable.
6. Respeta los límites de `AGENTS.md`. La aprobación de la Fase A autoriza solo las rutas de la skill incluidas en la propuesta; solicita autorización explícita independiente antes de modificar cualquier otro archivo protegido. No hagas commits.

### Fase C. Incorporar recursos de apoyo

- `references/`: guías, documentación, ejemplos extensos o contratos que **se consultan** durante la ejecución.
- `scripts/`: automatizaciones deterministas. Documenta dependencias, entradas, salida, ejecución y posibles errores; no ejecutes acciones con efectos secundarios sin autorización.
- `assets/`: plantillas y materiales que **se reutilizan como insumos** para crear el resultado final.

Enlaza cada recurso desde `SKILL.md` con una **ruta relativa a la carpeta de la skill**. Indica **cuándo** debe abrirse y **para qué**. Mantén lo indispensable en `SKILL.md` y carga referencias extensas solo cuando hagan falta. No dupliques documentos íntegros que ya estén accesibles.

Si el usuario aporta enlaces o archivos no accesibles, decláralo y solicita el material necesario. Distingue una referencia aportada de una fuente efectivamente revisada.

### Fase D. Validar y corregir

1. Comprueba sintaxis YAML, claves permitidas, longitud de `description`, nombre de carpeta y encabezados.
2. Verifica que entradas, activadores, exclusiones, pasos, salidas y criterios de aceptación sean coherentes.
3. Comprueba que las rutas referenciadas existan y que cada recurso tenga una finalidad; no inventes comprobaciones.
4. Prepara **tres casos de prueba**, cada uno con petición, comportamiento esperado y resultado observado cuando exista:
   - **Positivo:** debe activar la skill y seguir su procedimiento.
   - **Límite:** faltan datos, existe el destino o un recurso es inaccesible; debe actuar sin inventar ni sobrescribir.
   - **Negativo cercano:** una petición similar **no** debe activar la skill.
5. Ejecuta las validaciones disponibles y autorizadas. Corrige los errores detectados dentro del alcance aprobado.
6. Distingue claramente la **revisión documental** de la **activación real en GitHub Copilot**. Si no puedes probar esta última, proporciona las tres peticiones exactas para hacerlo en una sesión nueva y deja el resultado como «pendiente».

## 4. Formato de salida

**Antes de la aprobación**, entrega una propuesta breve:

- Nombre y objetivo único.
- Cuándo se activa y cuándo no.
- Entradas obligatorias y opcionales; resultado esperado.
- Estructura y recursos justificados.
- Criterios de aceptación y pruebas propuestas.
- Dudas que requieren decisión.

**Después de la implementación**, entrega:

- Archivos creados o modificados y finalidad.
- Cómo invocar la skill y ejemplos de uso.
- Validaciones **ejecutadas**, método y resultado.
- Pruebas pendientes, riesgos o limitaciones.
- Siguiente acción recomendada, sin ejecutarla automáticamente.

## 5. Ejemplos

**Caso positivo — crear una skill:**

> «Quiero una skill que revise especificaciones SDD antes de aprobarlas. La usaré cuando termine un `spec.md`. Debe devolver defectos y una lista de criterios de aceptación no verificables. Tengo una plantilla de especificación y un ejemplo aprobado».

**Respuesta esperada:** identifica entradas y materiales, comprueba si hay una skill equivalente y propone `spec-review` con activadores, exclusiones, salida y pruebas. **Pide aprobación** antes de crear archivos.

**Caso de revisión — solo lectura:**

> «Revisa esta skill y dime si sus criterios de aceptación son comprobables. No la edites».

**Respuesta esperada:** inspecciona el archivo y sus referencias, comunica hallazgos y sugerencias sin pedir aprobación previa para la revisión ni modificar archivos.

**Caso límite — faltan entradas:**

> «Crea una skill de SEO».

**Respuesta esperada:** pregunta por la tarea concreta, situaciones de uso, resultado y material disponible. No crea carpetas ni inventa procedimientos.

**Caso negativo — no activar:**

> «Corrige este error del endpoint de inventario».

**Respuesta esperada:** indica que es una tarea de desarrollo, no una solicitud de crear o revisar una skill; sigue las instrucciones de desarrollo pertinentes.

## 6. Criterios de aceptación de esta skill

- **CA-01 — Entradas:** las cuatro entradas están registradas o se solicitan; no se diseña una skill con datos esenciales ausentes.
- **CA-02 — Aprobación:** existe una propuesta revisable y se obtiene autorización explícita antes de escribir archivos.
- **CA-03 — Estructura:** la skill se crea en `.agents/skills/<nombre>/` y solo contiene archivos y recursos necesarios.
- **CA-04 — Metadatos:** `SKILL.md` tiene YAML válido con `name` coherente y `description` de menos de 200 caracteres.
- **CA-05 — Utilidad:** activadores, exclusiones, pasos, entradas, salida, ejemplo y gestión de errores son verificables.
- **CA-06 — Referencias:** las rutas relativas existen y cada recurso tiene un uso documentado; no hay duplicaciones innecesarias.
- **CA-07 — Pruebas:** hay un caso positivo, uno límite y uno negativo, con esperado y estado de ejecución real.
- **CA-08 — Entrega:** el informe distingue archivos creados, verificaciones ejecutadas y pruebas pendientes; no afirma una activación no observada.

## 7. Tratamiento de errores y límites

- **Información incompleta:** pregunta y detén la creación hasta recibirla.
- **Skill existente:** inspecciónala y ofrece actualización en lugar de duplicación; espera aprobación.
- **Conflicto con reglas o decisiones aprobadas:** explica el conflicto y solicita resolución; no lo resuelvas unilateralmente.
- **Recursos inaccesibles o comandos ausentes:** registra la limitación y no inventes contenido ni resultados.
- **Prueba fallida:** corrige dentro del alcance autorizado, vuelve a comprobar y deja constancia de lo pendiente.
- **Cambio sustancial de alcance:** vuelve a presentar la propuesta y pide nueva aprobación.

Crear la skill **no autoriza ejecutar la tarea** que esa nueva skill está diseñada para realizar.
