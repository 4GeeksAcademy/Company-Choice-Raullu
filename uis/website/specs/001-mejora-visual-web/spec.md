# Especificación — Mejora visual y editorial de la landing de TrackFlow

| Campo               | Valor                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **Estado**          | Aprobada para implementación                                                              |
| **Proyecto / área** | TrackFlow · `uis/website/`                                                                |
| **Tipo de cambio**  | Refinamiento de una landing existente, dentro del Hito 1                                  |
| **Documento**       | `spec.md` · definición de requisitos y criterios de aceptación, no plan de implementación |

## 1. Contexto y objetivo

La landing corporativa de TrackFlow ya cuenta con estructura HTML semántica y estilos con Tailwind CSS, pero la presentación resulta excesivamente básica: predominan bloques de texto y tarjetas poco diferenciadas, el hero presenta demasiado espacio vacío y falta jerarquía visual y capacidad explicativa.

**Objetivo:** elevar su calidad visual y su claridad comercial para transmitir la imagen de un operador logístico B2B consolidado, moderno y tecnológico, **sin alterar la identidad corporativa aprobada ni el alcance funcional del Hito 1**.

El resultado debe seguir siendo limpio, legible y mayoritariamente claro. No se busca una web recargada, una nueva arquitectura ni nuevas funcionalidades.

## 2. Referencias obligatorias y restricciones de contexto

Antes de desarrollar el plan o las tareas, consultar:

- `AGENTS.md` y `.agents/rules/frontend.md`.
- `uis/website/design-system.md` como **fuente de verdad de identidad visual**.
- `uis/website/BRIEFING.md` y `BRIEFING.md` de la raíz para contenido, alcance y hechos empresariales.
- `uis/website/index.html`, `uis/website/styles.css` y los recursos de `uis/website/assets/`.
- Memoria y documentación de proyecto relevantes, así como las especificaciones y aprobaciones relacionadas.

Si una afirmación del briefing web entra en conflicto con el estado operativo descrito en el briefing corporativo, **no publicar la afirmación como capacidad ya disponible**: identificar el conflicto y proponer una redacción verificable para aprobación.

## 3. Alcance funcional y editorial

Se mejorará **únicamente la landing existente** y sus secciones obligatorias, manteniendo el orden:

1. Header y navegación.
2. Hero.
3. Servicios (tres).
4. Cobertura (Estados Unidos y España).
5. Por qué TrackFlow (cuatro beneficios).
6. Contacto comercial.
7. Footer.

Se permiten ajustes limitados de marcado semántico y contenido para conseguir una composición más clara y accesible; no se eliminarán secciones, datos obligatorios ni enlaces existentes.

### 3.1. Header

- Mantener el logotipo oficial adecuado para fondo claro y los enlaces Inicio, Servicios, Cobertura y Contacto.
- Mejorar tamaño, equilibrio visual, alineación, espacios y estados de navegación.
- Mantener navegación accesible y usable en móvil; no incorporar funcionalidades ajenas a la landing.

### 3.2. Hero

- Conservar **literalmente** el titular aprobado: «Logística que escala con tu e-commerce»; conservar el subtítulo y el CTA «Solicitar información» con su destino actual al formulario.
- Mantener fondo azul petróleo e introducir mejor jerarquía tipográfica y distribución del espacio.
- En escritorio, composición de dos columnas: **texto y CTA a la izquierda; ilustración a la derecha**. En móvil, lectura vertical que priorice titular, propuesta de valor y CTA.
- Utilizar **únicamente la ilustración horizontal isométrica original ya elegida**, con **almacén, persona preparando un pedido, camión y casa**. El recurso previsto es `uis/website/assets/illustrations/hero-flujo-logistico.png`, **siempre que al comprobarlo corresponda a esa imagen**. Si no coincide o falta, solicitar el archivo correcto, sin sustituirlo por otro.
- Conservar la transparencia, relación de aspecto, elementos completos y colores del original; asegurar contraste suficiente sobre `#102838`. Incluir un atributo `alt` descriptivo del recorrido logístico representado, sin repetir innecesariamente el subtítulo.
- No añadir mapas, gráficos adicionales ni nuevas ilustraciones: para esta mejora, el recurso gráfico del hero es el PNG oficial indicado.

### 3.3. Servicios

Mantener **Gestión de Almacenes**, **Entregas de Última Milla** y **Logística Inversa** como tres tarjetas equivalentes. Cada una debe mostrar:

- Un icono lineal coherente de Lucide en un pequeño contenedor verde agua.
- Título destacado.
- Un breve párrafo de valor para el cliente (aproximadamente 1–2 frases, evitando párrafos largos).
- Lista concisa de prestaciones respaldadas por los briefings.

Los textos deben explicar, sin exagerar, operaciones como almacenamiento, picking, packing, coordinación de entregas, incidencias y devoluciones. Las tarjetas tendrán una apariencia y alineaciones homogéneas, y un hover discreto **que no sugiera clicabilidad si no son enlaces**.

### 3.4. Cobertura

- Mantener Estados Unidos y España, los almacenes de Los Ángeles y Zaragoza, las coberturas documentadas y los transportistas enumerados en el briefing web.
- Reforzar la jerarquía país → ciudad/almacén → cobertura → transportistas mediante iconos y microtextos, sin duplicar información innecesariamente.
- Conservar el fondo gris hielo y la comparación equilibrada de ambos mercados.
- No introducir mapas interactivos, ubicaciones nuevas ni afirmaciones de cobertura no documentadas.

### 3.5. Por qué TrackFlow

Mantener **cuatro** beneficios, cada uno con icono, título corto, una breve explicación y datos destacados cuando proceda:

1. **Operación en Estados Unidos y España:** comunicar presencia en dos mercados; **no** afirmar exclusividad («el único operador»).
2. **Equipo de aproximadamente 130 profesionales:** destacar la magnitud del equipo sin alterar la cifra ni inventar indicadores.
3. **Capacidad tecnológica y mejora de procesos:** reflejar que existe la unidad TrackFlow Tech y el trabajo de modernización descrito en el briefing corporativo. **No** afirmar como actuales inventario global en tiempo real, visibilidad total, automatizaciones o integraciones pendientes.
4. **Especialización en e-commerce:** moda, electrónica y cosmética.

La trayectoria desde **2009** puede figurar como dato complementario, **sin sustituir** ninguno de los cuatro beneficios. La redacción definitiva del tercer beneficio debe validarse por la discrepancia entre ambos briefings.

### 3.6. Contacto comercial

- Mantener email comercial, teléfonos de ambas oficinas, enlaces `mailto:` y `tel:`, y CTA al formulario existente.
- Añadir una introducción comercial breve y ordenar la información con iconos y jerarquía clara.
- **No crear ni modificar campos de formulario.**

### 3.7. Footer

- Mantener fondo petróleo, logo oficial para fondo oscuro, información corporativa y enlaces documentados.
- Mejorar distribución, tamaños de texto, alineación y adaptación a móvil, sin inventar datos ni vínculos.

## 4. Contenido y tono editorial

- Redactar para **empresas de e-commerce que externalizan logística**, no para personas que buscan rastrear un paquete.
- Añadir un texto introductorio breve bajo los títulos de sección cuando mejore la comprensión, y descripciones útiles en las tarjetas de servicios y beneficios.
- Preferir frases concretas sobre qué hace TrackFlow y para qué sirve a sus clientes, frente a listas aisladas o adjetivos comerciales vacíos.
- Fundamentar toda cifra, servicio y afirmación en los briefings. No inventar clientes, certificaciones, tarifas, porcentajes, resultados, SLAs o métricas.
- No presentar tecnologías y procesos identificados como necesidades futuras como si ya estuvieran desplegados.
- Conservar el español como idioma de la landing y los textos exigidos expresamente en el briefing web.

## 5. Dirección visual y sistema de marca

`uis/website/design-system.md` gobierna colores, tipografía, espaciados, superficies, radios, bordes, botones, estados, accesibilidad y tratamiento de imágenes.

- Mantener **predominio de fondos claros**, con petróleo principalmente en hero y footer.
- Utilizar turquesa para iconos, enlaces y acciones; reservar lima para detalles mínimos.
- Mejorar escala tipográfica, aire entre bloques, ritmo vertical, equilibrio de columnas y consistencia de tarjetas.
- Evitar nuevas variantes cromáticas arbitrarias, efectos excesivos, sombras pesadas, degradados decorativos y animaciones que distraigan.
- Respetar las variantes oficiales de los logotipos en `uis/website/assets/brand/`, sin recrearlos ni alterarlos, e identificarlos adecuadamente mediante sus atributos `alt`.

## 6. Iconografía y recursos

- **Lucide Icons** será la única familia de iconos funcionales de interfaz (no sustituye logos o ilustraciones oficiales).
- Priorizar SVG oficiales, coherentes en estilo lineal, escala, grosor, color y estados. El plan concretará los tamaños y la forma de integración compatible con el proyecto, evitando frameworks o dependencias innecesarias.
- Referencias iniciales a validar en la fuente oficial: `warehouse`, `truck`, `package-check`/`refresh-cw`, `map-pin`, `globe`, `users-round`, `route`, `package`, `mail` y `phone`.
- Los iconos usados y los avisos de licencia exigibles se organizarán, si se almacenan localmente, en `uis/website/assets/icons/`.
- El uso de iconos decorativos no debe duplicar información para lectores de pantalla; los controles de solo icono deben tener nombre accesible.
- Documentar en `uis/website/design-system.md` únicamente la elección de Lucide, reglas de iconografía y organización de `assets/brand/`, `assets/illustrations/` y `assets/icons/`, **sin cambiar decisiones visuales previas**.

## 7. Responsive, accesibilidad y rendimiento

- Mantener enfoque mobile-first y un resultado funcional en móvil, tablet y escritorio.
- La ilustración del hero debe adaptarse sin recorte, deformación ni desbordamientos; el CTA debe conservar prioridad de lectura en móvil.
- Las tarjetas pasarán de tres columnas en escritorio a una disposición apropiada al ancho disponible; no forzar tres columnas en pantallas estrechas.
- Conservar semántica HTML, jerarquía lógica de encabezados, navegación por teclado y foco visible.
- Verificar contraste WCAG AA (texto normal al menos 4,5:1; componentes y elementos gráficos relevantes al menos 3:1 cuando corresponda), sin depender solo del color.
- **Todas las imágenes deben tener un atributo `alt` apropiado**, elegido según su función: las imágenes informativas (incluida la ilustración del hero) deben incorporar una descripción breve y contextual; los logotipos, un texto alternativo que identifique a TrackFlow. Solo las imágenes estrictamente decorativas pueden llevar `alt=""`, nunca omitir el atributo. Evitar textos genéricos como «imagen» o «logo» y repeticiones innecesarias del contenido adyacente.
- Evitar dependencias nuevas, recursos externos innecesarios, saltos de diseño por imágenes sin dimensiones y efectos de movimiento no esenciales.

## 8. Fuera de alcance

- Nuevas páginas, nuevas secciones principales y cambios de orden de la landing.
- Mapas y cualquier ilustración adicional no aprobada.
- Desarrollo o modificación de `application.html`, `validation.js` o del formulario.
- Backend, persistencia, CRM, automatizaciones o nuevas funcionalidades.
- Cambios en los logotipos originales, la paleta o las decisiones visuales aprobadas.
- Sustitución de Tailwind por otra tecnología, instalación de frameworks o dependencias no justificadas.
- Cambios en información corporativa sin respaldo documental.

## 9. Entregables previstos

- Landing con mejoras de presentación y contenido en `uis/website/index.html`.
- Ajustes puntuales en `uis/website/styles.css` **solo si están justificados** por el plan aprobado y las convenciones del proyecto.
- Iconos SVG Lucide locales y licencia cuando proceda, sin modificar recursos de marca.
- Actualización mínima de `uis/website/design-system.md` para las reglas de Lucide y assets.
- Informe breve de cambios, verificaciones, limitaciones y posibles decisiones pendientes.

Los archivos concretos y su tratamiento técnico se detallarán en el **plan SDD posterior**, no se consideran decisiones de implementación aprobadas por esta especificación.

## 10. Criterios de aceptación

1. Se conservan las siete secciones obligatorias, su orden, enlaces y contenidos exigidos por el briefing.
2. El hero presenta una composición equilibrada de dos columnas en escritorio y apilada en móvil; mantiene texto y CTA originales.
3. En el hero se utiliza `assets/illustrations/hero-flujo-logistico.png`, correspondiente a la ilustración horizontal aprobada (almacén, persona, camión y casa), sin alterar ni sustituir el archivo.
4. Las tres tarjetas de servicios contienen icono Lucide, título, descripción útil y lista breve, con estilo coherente y adaptación responsive.
5. Se han mejorado las introducciones y explicaciones comerciales sin afirmaciones nuevas ni promesas tecnológicas no verificadas.
6. Cobertura conserva los dos países, almacenes, transportistas y ámbitos documentados, con jerarquía visual mejorada.
7. Se muestran cuatro beneficios diferenciados; el beneficio tecnológico no atribuye capacidades futuras como actuales; la redacción conflictiva está aprobada.
8. Contacto mantiene `mailto:`, `tel:` y enlace al formulario; muestra datos de las dos oficinas sin añadir formulario.
9. Header y footer conservan navegación, datos y variantes oficiales correctas del logotipo.
10. La iconografía de interfaz utiliza únicamente Lucide, con criterios consistentes de estilo y accesibilidad y sin dependencias no aprobadas.
11. Los fondos claros siguen siendo predominantes y los componentes respetan el Design System y su paleta existente.
12. No hay desbordamiento horizontal ni recortes de contenido; teclado, foco, legibilidad y contraste cumplen los criterios definidos en los tamaños de pantalla verificados. **Todas las imágenes tienen un atributo `alt` apropiado y verificable según su función**.
13. `design-system.md` queda actualizado solo en lo referente a Lucide y organización/uso de recursos gráficos.
14. `application.html` y `validation.js` permanecen sin cambios; no se han añadido funcionalidades fuera del alcance.

## 11. Verificación prevista

Tras las aprobaciones SDD correspondientes, comprobar:

- Vista real en navegador en anchos de referencia de **320, 375, 768, 1280 y 1440 px**.
- Composición del hero y legibilidad/contraste de la ilustración sobre `#102838`.
- Correspondencia de cada icono con su concepto; ausencia de recursos rotos.
- Jerarquía de títulos, foco por teclado, contrastes reales y revisión de los atributos `alt` de **todas** las imágenes, incluido el hero y los logotipos.
- Enlaces de navegación, `mailto:`, `tel:` y CTA al formulario.
- Ausencia de desplazamiento horizontal y de cambios inesperados de maquetación.
- Diagnósticos disponibles del proyecto y `git diff --check`.
- Ausencia de cambios en los archivos excluidos.

Documentar qué pruebas se han realizado efectivamente y sus resultados. No dar por comprobado algo que no se haya podido verificar.

## 12. Decisiones y aprobaciones

- Especificación aprobada para planificación por el usuario.
- Ilustración del hero confirmada por el usuario: almacén, persona preparando un pedido, camión y casa.
- Beneficio tecnológico aprobado: «Un equipo tecnológico dedicado a mejorar los sistemas y procesos que respaldan la operación».
- Lucide aprobado como SVG oficiales estáticos, sin dependencia de runtime; la versión y licencia ISC se registrarán en la implementación.
- Plan aprobado por el usuario. La instrucción explícita «Start implementation» autoriza ejecutar las tareas derivadas del plan y de esta especificación.
