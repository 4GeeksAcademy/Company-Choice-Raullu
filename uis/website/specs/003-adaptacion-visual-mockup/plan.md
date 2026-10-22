# Plan — Adaptación visual incremental de la landing al mockup de TrackFlow

| Campo               | Valor                                                                                                                                                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estado**          | Borrador para revisión y aprobación; no autoriza implementación                                                                                                                                                                                       |
| **Especificación**  | [`spec.md`](./spec.md)                                                                                                                                                                                                                                |
| **Proyecto / área** | TrackFlow · `uis/website/`                                                                                                                                                                                                                            |
| **Alcance**         | Adaptación visual incremental de la landing existente a `assets/references/landing-de-logistica-trackflow.png`, reutilizando los siete PNG aprobados y conservando estructura, contenido, funcionalidades y convenciones. Sin nuevas funcionalidades. |

> La aprobación de esta especificación no aprobó este plan: el plan requiere aprobación explícita separada y, tras ella, se elaborarán las tareas (que exigirán su propia aprobación) antes de tocar `index.html` o cualquier otro archivo.

---

## 1. Objetivo

Aproximar la presentación de la landing actual al mockup aprobado mediante los cambios visuales mínimos y localizados: sustituir la ilustración del hero por la variante indicada, incorporar las seis imágenes restantes en las cabeceras/tarjetas de sus secciones, añadir las cuatro etiquetas editoriales y los tres indicadores del hero, respetando el Design System, el orden de las siete secciones, los textos obligatorios, los enlaces y la accesibilidad. No se reescribirá `index.html` ni se reconstruirán secciones completas.

**Principio rector:** conservar el `index.html` actual como base; ajustar clases Tailwind y atributos de elementos existentes primero; añadir solo el markup estrictamente necesario para imágenes, etiquetas e indicadores solicitados; no tocar los archivos ajenos al alcance.

---

## 2. Contexto y límites de la revisión (auditoría verificada)

Esta sección resume los hechos comprobados en el repositorio **antes** de redactar el plan. Cualquier desviación debe señalarse antes de implementar.

### 2.1. Recursos gráficos (rutas reales y dimensiones verificadas)

Rutas relativas a `uis/website/`. Ninguno de estos archivos se modificará, renombrará, moverá, editará ni optimizará destructivamente.

| Sección / uso                          | Archivo (ruta real)                                | Dimensiones      | Uso previsto                                                    |
| -------------------------------------- | -------------------------------------------------- | ---------------- | --------------------------------------------------------------- |
| Hero (variante)                        | `assets/illustrations/hero-flujo-logistico(2).png` | 1774×887 · RGBA  | Sustituir `src` de la imagen actual del hero                    |
| Hero (actual, se conserva byte a byte) | `assets/illustrations/hero-flujo-logistico.png`    | 1448×1086 · RGBA | Permanecerá intacto; dejará de referenciarse desde `index.html` |
| Servicios                              | `assets/images/servicios-logisticos.png`           | 1916×821 · RGBA  | Cabecera de Servicios, arriba derecha                           |
| Cobertura (mapa)                       | `assets/illustrations/mapa-general-almacenes.png`  | 2172×724 · RGBA  | Cabecera de Cobertura, arriba derecha (conceptual)              |
| Cobertura (Los Ángeles)                | `assets/images/almacen-los-angeles.png`            | 1983×793 · RGBA  | Tarjeta de Estados Unidos                                       |
| Cobertura (Zaragoza)                   | `assets/images/almacen-zaragoza.png`               | 1983×793 · RGBA  | Tarjeta de España                                               |
| Por qué TrackFlow                      | `assets/images/centro-operaciones-trackflow.png`   | 1916×821 · RGBA  | Cabecera de Por qué TrackFlow, arriba derecha                   |
| Contacto                               | `assets/images/despacho-trackflow.png`             | 2170×725 · RGBA  | Cabecera de Contacto, arriba derecha                            |

El mockup se verificó en `uis/website/assets/references/landing-de-logistica-trackflow.png` (941×1672, truecolor vertical). La ruta `uis/website/references/…` del encargo **no existe**; el mockup no es un asset de producción y no se mostrará en la web. Las dimensiones se volverán a confirmar desde los originales inmediatamente antes de codificar.

### 2.2. Iconografía Lucide local (hecho técnico relevante)

Los diez SVG de `assets/icons/` (Lucide oficial `lucide-static` v1.61.0) usan `stroke="#007B76"` **fijo** en el atributo, no `currentColor`. Consecuencia práctica:

- Sobre los fondos actuales (blanco, verde agua, gris hielo) conservan el turquesa aprobado y no requieren cambios.
- En el **hero sobre petróleo** (fondo `#102838`), un icono turquesa `#007B76` sobre petróleo no alcanza el contraste AA para gráficos relevantes (≈2,2:1) y rompería el rol de color menta que el hero usa en CTA. **No** se puede resolver solo con `text-mint` porque el trazo está fijo.

Por ello, los tres indicadores del hero necesitan una decisión de implementación que se resolverá en la **revisión visual autorizada** (prerrequisito de la tarea 1) y quedará registrada antes de codificar. Opciones compatibles con el plan (no todas simultáneas; se elige la que apruebe la revisión):

- **Opción A (preferida por mínima intervención):** reutilizar los SVG existentes que mejor representen cada indicador y envolverlos sin alterarlos; si la revisión visual lo exige, ajustar solo el color de trazo del SVG **nuevo** de indicador a menta `#6EE7D2` (variante menta sin tocar los SVG existentes de secciones).
- **Opción B:** añadir variantes menta de `assets/icons/` (SVG Lucide oficiales con `stroke="#6EE7D2"`), documentadas en el Design System, para los indicadores del hero.
- **Opción C:** si se decide iconografía ya existente por defecto (turquesa sobre petróleo) se descarta por contraste hasta que se valide lo contrario.

Esta decisión afecta solo a los tres iconos del hero y su licencia se conserva (`assets/icons/LICENSE`). No introduce dependencias.

### 2.3. Estado de la landing (estructura exacta verificada en `index.html`)

| Sección           | Marcado actual relevante (clases e hitos)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header            | `header.site-header` con logo `brand-logo` y `nav.primary-navigation` (4 enlaces). Sin cambios funcionales.                                                                                                                                                                                                                                                                                                                                                   |
| Hero              | `section.hero.bg-primary` → `div.mx-auto.grid.max-w-7xl.items-center.gap-10.lg:grid-cols-2`; columna texto con `h1#titulo-principal` («Logística que escala con tu e-commerce»), `p` subtítulo, `a` CTA menta → `application.html`; columna `<figure class="mt-2 flex justify-center lg:mt-0 lg:justify-end">` con `img` actual (`hero-flujo-logistico.png`, `max-h-[420px] max-w-[580px] object-contain`, `width=1448 height=1086`, `fetchpriority="high"`). |
| Servicios         | `section#servicios` → cabecera `h2#titulo-servicios` + `p` intro; luego `div.mt-8.grid.gap-5.md:grid-cols-2.xl:mt-12.xl:grid-cols-3` con 3 `article.service-item` (icono + h3 + p + ul).                                                                                                                                                                                                                                                                      |
| Cobertura         | `section#cobertura` → `h2#titulo-cobertura` + `p` intro; `div.mt-8.grid.gap-5.md:mt-12.md:grid-cols-2` con 2 `article.coverage-location` (Estados Unidos / Los Ángeles, España / Zaragoza), cada una con cabecera icono `map-pin` + `dl` (Cobertura, Transportistas).                                                                                                                                                                                         |
| Por qué TrackFlow | `section#por-que-trackflow` → `h2#titulo-por-que-trackflow` + `p` intro; `ul.mt-8.grid.gap-4.md:mt-12.md:grid-cols-2.xl:grid-cols-4` con 4 `li` (dos con cifras: «2 mercados», «≈130 profesionales»).                                                                                                                                                                                                                                                         |
| Contacto          | `section#contacto` → `h2#titulo-contacto` + `p` intro; `address` con `ul.grid.gap-4.md:grid-cols-3` (3 tarjetas: mail, tel LA, tel Zaragoza) + `p` con CTA secondary → `application.html`.                                                                                                                                                                                                                                                                    |
| Footer            | `footer.site-footer.bg-primary` con logo oscuro, info corporativa, contacto y LinkedIn.                                                                                                                                                                                                                                                                                                                                                                       |

Los tokens de `styles.css` comprenden `primary #102838`, `secondary #007B76`, `secondary-hover #006963`, `mint #6EE7D2`, `accent #D4F27A`, `background #FFF`, `surface #F4F8FA`, `surface-accent #E9F8F5`, `heading #102838`, `text #344A5A`, `text-muted #556978`, `border #D8E3E8`, más `[hidden]{display:none!important}` (añadido por la enmienda 002) y reducción de movimiento. El `tailwind.config` incluye esos tokens y tipografía Manrope.

### 2.4. Composición vertical del mockup (muestreo técnico aproximado)

El análisis por filas del mockup, sin visor disponible, confirma un patrón general coherente con la landing actual:

- Franja superior oscura (petróleo) correspondiente al hero (aprox. primer cuarto vertical).
- Cuerpo mayoritariamente claro (blanco/gris hielo) con bloques de tarjetas y franjas de color alternas.
- Franja inferior oscura correspondiente al footer (aprox. último tramo vertical).

Este muestreo es **aproximado** (no decodifica los filtros PNG de forma exacta) y **no** demuestra el contenido de cada imagen ni la posición fina de sus elementos. **La comparación visual sección por sección del mockup con la landing sigue siendo un prerrequisito** que el entorno actual no permite cubrir (el visor bloqueó el mockup, las imágenes y los SVG). El plan mantiene ese prerequisito en la tarea 1 y no fija composiciones finas que no se puedan validar.

---

## 3. Decisiones propuestas del plan (para aprobación)

1. **Base de trabajo:** `uis/website/index.html` tal como está hoy. No se reescribe; todos los cambios son aditivos o de ajuste en clases/atributos de elementos existentes.
2. **Rutas de recursos:** se referencian los PNG desde su ubicación real (`assets/illustrations/…` y `assets/images/…`). No se mueven ni renombran archivos para resolver discrepancias.
3. **Sustitución del hero:** únicamente cambia el `src` a `assets/illustrations/hero-flujo-logistico(2).png` (aprobado por el encargo), ajustando ancho/alto/alineación con Tailwind. El `hero-flujo-logistico.png` original permanece byte a byte en el repo.
4. **Hero «e-commerce» en menta:** se envuelve la palabra «e-commerce» en un `span` dentro del `h1` existente con `text-mint`, sin cambiar el texto accesible ni la jerarquía. Es un cambio mínimo, no una reescritura del titular.
5. **Indicadores del hero:** tres elementos nuevos bajo el CTA, cada uno con un icono Lucide decorativo (`aria-hidden="true"`, `alt=""`) y un texto corto respaldado por el briefing. El texto exacto se concretará en la tarea 2 (ver §4.2) y **no** se inventarán cifras ni capacidades. El tratamiento de color de icono se resuelve en la revisión visual (§2.2, opciones A/B).
6. **Cabeceras con imagen a la derecha (Servicios, Cobertura, Por qué TrackFlow, Contacto):** se reutiliza la cabecera existente de cada sección convirtiéndola en una fila `lg:flex` (título+intro a la izquierda, imagen a la derecha), con la etiqueta editorial encima del título. La imagen se muestra con `w-full lg:w-…`, ancho máx. acotado, altura automática, `object-contain` y `w/h` intrínsecos. En móvil se apilan etiqueta → título → intro → imagen. Las tarjetas existentes quedan debajo sin reescribir.
7. **Tarjetas de cobertura con almacenes:** dentro de cada `article.coverage-location` existente, la imagen del almacén se coloca en la zona superior (bajo la cabecera) con ancho máx. acotado, altura automática, `object-contain` y `w/h` intrínsecos; el `dl` de cobertura/transportistas permanece debajo. La distribución horizontal se intenta con las clases responsive existentes y se apila en anchos estrechos sin overflow. No se sustituyen los datos ni el encabezado.
8. **Etiquetas editoriales:** «NUESTROS SERVICIOS», «COBERTURA», «NUESTRA PROPUESTA» y «CONTACTO» como elemento `p` (o `span` con bloque) anterior al `h2`, con presentación coherente con el Design System (texto secundario/turquesa, mayúsculas, `tracking` moderado) y sin crear una jerarquía de encabezados paralela (no `h*`).
9. **Imágenes informativas vs. decorativas:** el `alt` se define en la tarea 1 (tras inspección visual) siguiendo: hero → descripción breve contextual; cabeceras y almacenes → descripción breve del contenido visible sin prometer autenticidad; imágenes estrictamente decorativas o redundantes → `alt=""`. Los iconos decorativos llevan `alt=""` y `aria-hidden="true"`. No se usa el nombre de archivo como `alt`.
10. **No producción de imágenes:** no se generan, sustituyen ni alteran los siete PNG originales. No se aplican filtros, fundidos, recortes ni superposiciones sobre los archivos.
11. **Tailwind/Design System:** no cambia la configuración de Tailwind, ni colores, ni tipografías, ni tokens. `styles.css` solo se modifica si una necesidad concreta no puede expresarse con utilidades Tailwind (no previsto a priori; se documentará en ese caso).
12. **Header y footer:** solo ajustes de espaciado/alineación si la comparación visual los justifica; sin cambios de enlaces, logos oficiales ni funcionalidad. Si no se justifican, permanecen intactos.
13. **Accesibilidad:** navegación por teclado, foco visible, jerarquía de encabezados (una sola `h1`), contraste WCAG AA aplicable y `alt` se verifican como parte del cierre. No se eliminan ARIA, roles, etiquetas semánticas ni soluciones existentes.

14. **Hover aprobado para tarjetas informativas (ya implementado):** el pulido visual incluye el cambio sutil de borde definido en `design-system.md`, aplicado mediante `.info-card` solo dentro de `@media (hover: hover) and (pointer: fine)`. La transición es de 180 ms, con mezcla del borde existente (55 %) y el turquesa secundario; `prefers-reduced-motion: reduce` elimina la transición. No añade elevación, escala ni sombra, ni cursor de enlace. Abarca tarjetas informativas estáticas de servicios, cobertura, beneficios y contacto, pero no controles, indicadores ni estados del formulario. Esta decisión se incorpora aquí como parte de la adaptación documentada de 003; su implementación consta ya en `styles.css` y no se propone como trabajo pendiente.

---

## 4. Secuencia de implementación (tareas previstas)

Cada paso depende del anterior; su verificación es la puerta de cierre. Los detalles de tareas descienden a `tasks.md` después de la aprobación de este plan.

### 4.1. Prerrequisito: revisión visual autorizada del mockup y los recursos

- Inspeccionar con un visor disponible (usuario o herramienta autorizada) el mockup y los siete PNG, sección por sección, para: confirmar el contenido de cada imagen, su orientación, elementos focales, transparencia/fundidos efectivos y la posición/composición respecto a cada sección de la landing.
- Confirmar la elección de iconos y su tratamiento de color (§2.2) y el texto literal de los tres indicadores.
- Dejar constancia por escrito de lo confirmado y de lo que no pueda verificarse. **No se inventan diferencias visuales.**

### 4.2. Tarea 1 — Hero

En `index.html`, dentro de la sección existente:

1. Cambiar `src` de la imagen del hero a `assets/illustrations/hero-flujo-logistico(2).png`.
2. Ajustar `width`/`height`/clases de la imagen al original (1774×887) y a la proporción de las dos columnas: ancho máx. y altura automática para evitar deformación, con `object-contain` y alineación (`justify-end` en el `figure` en escritorio ya existente).
3. Envolver «e-commerce» en `span.text-mint` dentro del H1 (mantener id y texto).
4. Añadir debajo del CTA los tres indicadores (icono + texto), respetando la decisión de color de la tarea 1.
5. Revisar que el fondo petróleo, el CTA, el subtítulo, el ancla y el comportamiento responsive se conservan.

**Verificación:** rutas de recursos no rotas; estructura de `h1` con un único `h1`; `alt` definido; sin overflow; contraste del texto e iconos del hero sobre `#102838`; diffs localizados.

### 4.3. Tarea 2 — Servicios

- Añadir etiqueta «NUESTROS SERVICIOS» y la imagen `assets/images/servicios-logisticos.png` en la cabecera (fila izquierda-derecha con el `h2`/intro).
- Ajustar el contenedor de cabecera y el espaciado para integrar la imagen sin empujar las tarjetas.
- Mantener las tres `article.service-item` (iconos, títulos, descripciones, listas) sin reescribir su contenido.

**Verificación:** cabecera con imagen a la derecha en escritorio y apilada en móvil; tres tarjetas intactas; `alt` definido.

### 4.4. Tarea 3 — Cobertura

- Etiqueta «COBERTURA» y `assets/illustrations/mapa-general-almacenes.png` en la cabecera (derecha). Tratar la imagen como conceptual (no como mapa operativo verificado).
- Añadir `assets/images/almacen-los-angeles.png` a la tarjeta de Estados Unidos y `assets/images/almacen-zaragoza.png` a la de España, con ancho máx., `object-contain`, altura automática y `w/h` intrínsecos; apilar en móvil.
- Conservar países, ciudades, coberturas y transportistas actuales.

**Verificación:** dos tarjetas con su imagen y sus datos; no se declara que las imágenes sean fotografías reales de las instalaciones; sin overflow.

### 4.5. Tarea 4 — Por qué TrackFlow

- Etiqueta «NUESTRA PROPUESTA» y `assets/images/centro-operaciones-trackflow.png` en la cabecera (derecha).
- Mantener las cuatro tarjetas, iconos, copy y cifras («2», «≈130»). Ajustar solo espaciados si lo exige la composición validada.

**Verificación:** cuatro beneficios intactos; imagen integrada; `alt` sin atribución de autenticidad.

### 4.6. Tarea 5 — Contacto

- Etiqueta «CONTACTO» y `assets/images/despacho-trackflow.png` en la cabecera (derecha del intro).
- Mantener tarjetas de contacto, `mailto:`, `tel:`, datos y CTA hacia `application.html` en su orden funcional.
- Aprovechar los fundidos visibles de la imagen sin superponer texto ilegible.

**Verificación:** enlaces y CTA intactos; imagen integrada; legibilidad/contraste sobre el fondo.

### 4.7. Tarea 6 — Header, footer y pulido general

- Tras la comparación visual: ajustes menores de espaciado/alineación en header y footer si se justifican; en caso contrario se dejan intactos.
- **Hover de tarjetas informativas (completado):** conservar el patrón aprobado y documentado en `design-system.md`: cambio sutil del borde, limitado a puntero fino con capacidad de hover, transición de 180 ms y desactivación con movimiento reducido; sin elevación, escala, sombra nueva ni indicación de clicabilidad. Revisar que se limite a tarjetas informativas y no alcance controles/estados del formulario.
- Revisión global: jerarquía de encabezados, foco, contraste, `alt` de todas las imágenes, ausencia de scroll horizontal y de recursos rotos; tarjetas responsive.

**Verificación:** ninguna regresión funcional/visual en las secciones no modificadas; navegación y enlaces funcionales.

**Estado comprobado del hover:** ya aplicado en `styles.css` y descrito en `design-system.md`; el alcance incluye tarjetas `.info-card` de Servicios, Cobertura, beneficios y Contacto. La revisión anterior registró `git diff --check` limpio y diagnósticos del editor sin errores para los archivos web revisados. No se afirma una validación visual independiente del hover.

### 4.8. Tarea 7 — Verificación y cierre SDD

- Servir la web con el comando documentado (`npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`) o equivalente y revisar en 320, 375, 768, 1280 y 1440 px; comprobar recursos, imágenes, overflow y contraste real.
- Ejecutar diagnósticos disponibles y `git diff --check`.
- Confirmar que no se modificaron `application.html`, `validation.js`, logos, Schema.org, metadatos ni dependencias.
- Registrar en `memory-bank/progress.md` los cambios y verificaciones reales y las limitaciones.
- (Tras aprobación de tareas) comprobar que el diff esté limitado a `index.html` (y, solo si se demuestra necesidad, `styles.css` y `design-system.md`).

**Verificación final:** criterios de aceptación del spec (sección 7 de `spec.md`) y ausencia de regresiones.

---

## 5. Archivos previstos

| Archivo                                                        | Acción                                            | Notas                                                                                                                                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uis/website/index.html`                                       | Modificar                                         | Único archivo de implementación previsto. Cambios aditivos y de clases en secciones existentes; sin reescrituras.                                                                        |
| `uis/website/assets/illustrations/hero-flujo-logistico(2).png` | Referenciar                                       | No se modifica el archivo.                                                                                                                                                               |
| `uis/website/assets/illustrations/hero-flujo-logistico.png`    | Sin cambios                                       | Original conservado byte a byte.                                                                                                                                                         |
| `uis/website/assets/illustrations/mapa-general-almacenes.png`  | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/assets/images/servicios-logisticos.png`           | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/assets/images/almacen-los-angeles.png`            | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/assets/images/almacen-zaragoza.png`               | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/assets/images/centro-operaciones-trackflow.png`   | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/assets/images/despacho-trackflow.png`             | Referenciar                                       | No se modifica.                                                                                                                                                                          |
| `uis/website/styles.css`                                       | Solo si es imprescindible                         | Únicamente si un requisito visual/responsive no se puede expresar razonablemente con utilidades Tailwind y tokens; no previsto a priori.                                                 |
| `uis/website/design-system.md`                                 | Actualización mínima tras aprobación (si procede) | Registrar tratamiento contextual de los recursos (etiquetas conceptuales/generadas) o la variante de icono del hero si esa decisión es una regla reutilizable; sin duplicar el catálogo. |
| `uis/website/specs/003-adaptacion-visual-mockup/tasks.md`      | Crear tras aprobar el plan                        | Artefacto SDD pendiente.                                                                                                                                                                 |
| `memory-bank/progress.md`                                      | Actualizar al completar                           | Registrar avance y verificaciones reales.                                                                                                                                                |

**No se tocarán:** `uis/website/application.html`, `uis/website/validation.js`, `assets/brand/*` (logos/favicon), `assets/references/*`, `assets/icons/*` (salvo la posible variante menta aprobada del apartado 2.2), Schema.org, metadatos, dependencias ni configuración.

---

## 6. Riesgos y decisiones pendientes

- **Inspección visual bloqueada en este entorno:** el visor (view_image) está configurado para ignorar el mockup, las imágenes y los SVG. Hasta una revisión visual autorizada (usuario o herramienta habilitada), no se puede cerrar la composición fina, el encuadre ni los `alt` definitivos. El plan no afirma diferencias o detalles que no pueda verificar.
- **Color fijo de los iconos Lucide locales:** los SVG usan `stroke="#007B76"` fijo, por lo que en el hero sobre petróleo los indicadores requieren la decisión documentada en §2.2 (variante menta aprobada u opción equivalente). Ninguna opción añade dependencias ni toca los iconos de secciones.
- **Imágenes de cabecera muy apaisadas (≈2,2:1–3:1):** ancho máx. reducido a la columna derecha y altura automática para evitar excesivo alto en escritorio; en móvil se apilan linealmente. Si la revisión visual exige una proporción distinta y no es alcanzable con utilidades existentes, se describirá la limitación y se solicitará aprobación antes de cualquier CSS adicional.
- **Cobertura horizontal en tarjetas de almacén:** se intenta con las clases responsive existentes; en móvil se apila. Si el mockup exigiera una composición horizontal estricta que no se pueda lograr sin reestructurar la tarjeta, se documentará y se pedirá aprobación (no se reescribe la tarjeta por defecto).
- **Repetir comprobación de rutas y dimensiones** justo antes de codificar (los nombres/dimensiones podrían variar; no se asume).

---

## 7. Criterios de cierre del plan

Se considera que el plan está completo cuando:

1. Se ha realizado la revisión visual autorizada del mockup y los siete PNG y se ha dejado constancia de lo confirmado (tarea 1).
2. Las decisiones pendientes (§2.2, textos de indicadores) están resueltas y registradas.
3. La secuencia §4 desciende a `tasks.md` aprobado con tareas verificables una a una.
4. La implementación se limita a los archivos de la sección 5 y respeta mínima intervención, Design System y accesibilidad.
5. Se han documentado las verificaciones realmente ejecutadas y sus límites.

---

## 8. Verificación y límites

- Comprobaciones previstas: revisión visual (tarea 1), vista en 320/375/768/1280/1440 px, ausencia de overflow/recorte, recursos con HTTP 200, contraste AA aplicable, teclado/foco, `git diff --check` y diagnósticos del editor.
- El comando `http-server` sirve estáticos y no compila Tailwind; no equivale a validación funcional del navegador.
- **No** se dispone de navegador automatizado, lector de pantalla ni auditoría WCAG en este entorno; se informará qué comprobaciones se ejecutaron y cuáles quedan pendientes, sin afirmar validaciones no realizadas.

---

## 9. Aprobación y siguiente etapa

Este plan requiere aprobación explícita del usuario. Tras aprobarse, se elaborará `tasks.md` con desglose verificable y se solicitará su aprobación antes de implementar. No implementar hasta completar esa secuencia (regla SDD de `.agents/rules/development.md`).
