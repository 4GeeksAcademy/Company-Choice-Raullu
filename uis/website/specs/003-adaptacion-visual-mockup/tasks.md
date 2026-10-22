# Tareas — Adaptación visual incremental de la landing al mockup de TrackFlow

| Campo              | Valor                                                           |
| ------------------ | --------------------------------------------------------------- |
| **Estado**         | Borrador para revisión y aprobación; no autoriza implementación |
| **Especificación** | [`spec.md`](./spec.md)                                          |
| **Plan**           | [`plan.md`](./plan.md)                                          |

> La aprobación del plan no aprobó estas tareas. Se requieren aprobación explícita de esta lista y autorización para comenzar antes de modificar cualquier archivo. Ejecutar estrictamente una tarea a la vez: cerrar y verificar la tarea actual antes de iniciar la siguiente.

---

## 0. Mapa de integración de imágenes por sección

Este mapa fija **dónde** y **cómo** se integrará cada imagen. Las clases y `alt` marcados como _propuestos_ se ajustan al resultado de la **Tarea 0** (revisión visual autorizada); no se codifican valores que contradigan lo confirmado visualmente. Rutas relativas a `uis/website/`.

| #   | Sección                 | Archivo (ruta real)                                                          | Dimensiones | Dónde (ubicación en `index.html`)                                                                                                                                               | Cómo (técnica de integración)                                                                                                                                                                                                                                                                                         |
| --- | ----------------------- | ---------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Hero                    | `assets/illustrations/hero-flujo-logistico(2).png`                           | 1774×887    | Sustituye a la imagen actual dentro del `<figure>` de la columna derecha del grid `lg:grid-cols-2` de `section#inicio`. No se mueve el `<figure>` ni se reordena el DOM.        | Cambiar únicamente `src` → `assets/illustrations/hero-flujo-logistico(2).png`, y `width`/`height` a 1774/887. Al ser más apaisada que la actual se reevalúan `max-h-[420px]` y `max-w-[580px]` (ver Tarea 1) para no recortar ni deformar; se conserva `object-contain`, `h-auto w-full` y el `fetchpriority="high"`. |
| 2   | Hero (H1)               | — (texto)                                                                    | —           | Palabra «e-commerce» dentro del `h1#titulo-principal` existente.                                                                                                                | Envolver solo la palabra en `<span class="text-mint">e-commerce</span>`. No se cambia el texto accesible del H1 ni su jerarquía.                                                                                                                                                                                      |
| 3   | Hero (indicadores)      | Reutiliza SVG de `assets/icons/` o variantes menta nuevas (decisión Tarea 0) | 24×24       | Nuevo `<ul>` inmediatamente posterior al CTA `a[href="application.html"]` de la columna izquierda del hero, antes de cerrar `<div>`.                                            | Tres `<li>` con icono Lucide decorativo (`aria-hidden="true"` + `alt=""`) y texto corto respaldado (ver Tarea 1). Contenedor flex `flex-wrap` para apilar en móvil y fila en escritorio.                                                                                                                              |
| 4   | Servicios               | `assets/images/servicios-logisticos.png`                                     | 1916×821    | En la cabecera de `section#servicios`, columna derecha de una nueva fila con el bloque título+intro a la izquierda. Las tres `article.service-item` permanecen debajo.          | La cabecera pasa a `div.flex.flex-col.gap-8.lg:flex-row.lg:items-center.lg:justify-between`; izquierda: etiqueta + `h2` + `p` (`lg:max-w-xl`); derecha: `<figure>` con la imagen `w-full h-auto object-contain lg:max-w-[560px]` y `width`/`height` 1916/821.                                                         |
| 5   | Cobertura (mapa)        | `assets/illustrations/mapa-general-almacenes.png`                            | 2172×724    | En la cabecera de `section#cobertura`, columna derecha (misma estructura fila que Servicios) con etiqueta «COBERTURA». Título+intro a la izquierda.                             | Misma técnica que Servicios (fila `lg:flex-row`), ancho máx. 560–640 px, `object-contain`, `h-auto`, `w-full`, dimensiones 2172/724. Tratado como **ilustración conceptual** (no mapa operativo verificado).                                                                                                          |
| 6   | Cobertura (Los Ángeles) | `assets/images/almacen-los-angeles.png`                                      | 1983×793    | Dentro de la tarjeta `article.coverage-location` de Estados Unidos, entre el bloque cabecera (icono `map-pin` + país/ciudad) y el `<dl>` de Cobertura/Transportistas.           | Nuevo `<figure>` tras el bloque `.flex.items-start.gap-4` y antes del `<dl>`: imagen `w-full max-w-[420px] h-auto object-contain` en escritorio; apilada en móvil. Dimensiones 1983/793. No sustituye ni reescribe datos.                                                                                             |
| 7   | Cobertura (Zaragoza)    | `assets/images/almacen-zaragoza.png`                                         | 1983×793    | Dentro de la tarjeta `article.coverage-location` de España, misma posición que el caso Los Ángeles.                                                                             | Idéntica técnica al caso Los Ángeles. No sustituye ni reescribe datos.                                                                                                                                                                                                                                                |
| 8   | Por qué TrackFlow       | `assets/images/centro-operaciones-trackflow.png`                             | 1916×821    | En la cabecera de `section#por-que-trackflow`, columna derecha (fila con título+intro a la izquierda) con etiqueta «NUESTRA PROPUESTA». Las cuatro `li` permanecen debajo.      | Misma técnica que Servicios (fila `lg:flex-row`, `figure` derecho, ancho máx. 560 px, `object-contain`, `h-auto`, `w-full`), dimensiones 1916/821. Sin atribuir autenticidad de operación real a la imagen.                                                                                                           |
| 9   | Contacto                | `assets/images/despacho-trackflow.png`                                       | 2170×725    | En la cabecera de `section#contacto`, columna derecha (fila con título+intro y CTA a la izquierda) con etiqueta «CONTACTO». Las tres tarjetas de `address` y el CTA permanecen. | Misma técnica de fila `lg:flex-row`; `figure` derecho con la imagen `w-full h-auto object-contain`, ancho máx. 560 px, dimensiones 2170/725. Aprovechar fundidos visibles sin superponer texto ilegible.                                                                                                              |

> **Tratamiento común de las siete imágenes:** no se modifica, recorta, filtra, recolorea, renombra ni mueve ningún PNG original. Todas usan `object-contain`, altura automática, `width`/`height` intrínsecos para reservar espacio y evitan fondos sólidos arbitrarios. El restaurante de la apariencia «integradora» se consigue mostrándolas sobre la superficie prevista por el Design System (petróleo en hero; blanco/gris hielo en secciones), sin máscaras ni capas complejas.

### Estructura destino de cabecera de sección (Servicios, Cobertura, Por qué TrackFlow, Contacto)

Estado actual → Estado propuesto (solo cabecera; las tarjetas y `address` no cambian):

```
<div class="mx-auto max-w-7xl">
  <!-- NUEVO: contenedor fila cabecera -->
  <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
    <div class="max-w-2xl lg:max-w-xl">
      <p class="[etiqueta, sin h*]">NUESTROS SERVICIOS / COBERTURA / NUESTRA PROPUESTA / CONTACTO</p>
      <h2 class="font-sans text-section font-bold text-heading" id="…">… (titular existente)</h2>
      <p class="mt-4 text-base leading-7 text-text">… (intro existente)</p>
    </div>
    <figure class="mt-2 w-full lg:mt-0 lg:w-1/2 xl:max-w-[560px]">
      <img class="h-auto w-full object-contain" src="…" width="…" height="…" alt="…" />
    </figure>
  </div>
  <!-- TARJETAS EXISTENTES (sin cambios de contenido) -->
</div>
```

---

## 1. Secuencia de ejecución

Completar y verificar cada tarea antes de empezar la siguiente. No iniciar trabajo de tareas posteriores en paralelo ni dejar una tarea parcialmente implementada al avanzar. La validación indicada en cada tarea es su puerta de cierre; registrar el resultado antes de marcarla completa.

### Tarea 0 — Prerrequisito: revisión visual autorizada y decisiones

- [ ] **Inspección visual autorizada del mockup y los siete PNG:** con un visor disponible (usuario o herramienta habilitada), confirmar sección por sección:
  - Contenido real, orientación, elemento focal y transparencia/fundidos efectivos de cada imagen; encuadre y proporción en su sección; coincidencia razonable con la disposición del mockup.
  - Para cada imagen: si resultará **informativa** (`alt` descriptivo breve) o **decorativa/redundante** (`alt=""`). No usar el nombre de archivo como `alt` ni atribuir a almacenes/despachos una autenticidad fotográfica no verificada (consta que son representaciones generadas).
  - Confirmar los **textos literales de los tres indicadores** del hero entre las opciones respaldadas por los briefings (por ejemplo, almacenes en Los Ángeles y Zaragoza; equipo de ≈130 profesionales; trayectoria desde 2009). No inventar cifras o capacidades fuera de esas fuentes.
  - Confirmar la **decisión de color de los iconos del hero** (ver plan §2.2): los SVG locales usan `stroke="#007B76"` fijo, que sobre petróleo no alcanza contraste AA. Elegir entre variante menta nueva (`stroke="#6EE7D2"`) para los indicadores o la alternativa equivalente que se acuerde, sin tocar los iconos de secciones (turquesa) ni añadir dependencias.
  - Registrar por escrito lo confirmado y lo que no se haya podido verificar.
- [x] **Reconfirmar rutas y dimensiones** de los siete archivos y del mockup justo antes de codificar (no asumir los valores de la tabla si el repositorio cambió).
- [x] **Cerrar los `alt` definitivos** de las siete imágenes y documentarlos en esta lista antes de implementar.

**Verificación:** decisión documentada y aprobada por el usuario; sin discrepancias de encuadre sin resolver. Si no hay visor disponible, dejar constancia y pedir el dato al usuario antes de continuar (no inventar contenido visual).

### Tarea 1 — Hero (sección `#inicio`)

- [x] Sustituir `src` del `<img>` del hero a `assets/illustrations/hero-flujo-logistico(2).png` y actualizar `width="1774" height="887"`. Conservar `fetchpriority="high"`, `alt` definitivo de la Tarea 0 y el `<figure>` existente (`mt-2 flex justify-center lg:mt-0 lg:justify-end`).
- [x] Ajustar el tamaño/posición de la imagen a la proporción apaisada: reevaluar `max-h-[420px]` (podría recortar visualmente una imagen 1774×887) y `max-w-[580px]`; proponer `max-w-[560px] lg:max-w-[600px]` con `object-contain` y `h-auto w-full`, sin deformar ni desbordar la columna derecha. Mantener el equilibrio con la columna de texto (objetivo: dos columnas equilibradas en escritorio, apilada en móvil).
- [x] Destacar «e-commerce» en menta: envolver la palabra dentro del `h1#titulo-principal` en `<span class="text-mint">e-commerce</span>`. Mantener id, jerarquía (una sola `h1`) y texto accesible.
- [x] Añadir bajo el CTA los **tres indicadores** con el texto literal de la Tarea 0 y los iconos Lucide elegidos en la Tarea 0:
  - Estructura: `<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-4 lg:mt-10">` con tres `<li class="flex items-center gap-3 …">`.
  - Cada `<li>`: `<img class="h-6 w-6 shrink-0" src="…" alt="" aria-hidden="true" width="24" height="24" />` (variante menta si así se decidió) + `<span class="text-sm font-semibold text-mint/text-white según decisión de contraste">` con el texto.
  - Conservar el CTA, el subtítulo, el ancla `#inicio`, el fondo petróleo y el `aria-labelledby="titulo-principal"`.
- [ ] Revisar contraste de los textos e iconos sobre `#102838` (menta y blanco, según role: menta sobre petróleo equivale a 10,14:1 según el Design System).

**Verificación:** estructura de `h1` intacta y única; `alt` definido; rutas locales correctas; sin overflow; contraste AA; diffs acotados a la sección hero; indicadores accesibles sin duplicar jerarquía de encabezados.

### Tarea 2 — Servicios (sección `#servicios`)

- [x] Convertir la cabecera a fila (izquierda: etiqueta + `h2#titulo-servicios` + `p` intro; derecha: `<figure>` con `assets/images/servicios-logisticos.png`), según el esquema de la sección 0.
- [x] Añadir la etiqueta «NUESTROS SERVICIOS» como `<p>` (sin `h*`, sin crear jerarquía paralela) con presentación coherente con el Design System (texto secundario/turquesa o mint según contexto; mayúsculas y `tracking` moderado).
- [x] Integrar la imagen con `width="1916" height="821"`, `object-contain`, `h-auto`, `w-full`, ancho máx. 560 px en escritorio; apilada en móvil (etiqueta → título → intro → imagen).
- [x] Conservar intactas las tres `article.service-item` (icono, h3, descripción, lista) y sus clases; no reescribir su contenido ni su grid.

**Verificación:** cabecera con imagen a la derecha en escritorio y apilada en móvil; tres tarjetas sin cambios de contenido; `alt` definitivo; sin overflow.

### Tarea 3 — Cobertura (sección `#cobertura`)

- [x] Convertir la cabecera a fila (izquierda: etiqueta «COBERTURA» + `h2#titulo-cobertura` + `p` intro; derecha: `<figure>` con `assets/illustrations/mapa-general-almacenes.png`), dimensiones 2172/724, `object-contain`, `h-auto`, `w-full`.
- [x] Tratar el mapa como **ilustración conceptual**: `alt` breve que no afirme límites de cobertura verificados ni localización precisa de instalaciones (definido en Tarea 0).
- [x] Tarjeta **Estados Unidos / Los Ángeles**: insertar `<figure>` con `assets/images/almacen-los-angeles.png` (1983×793) entre el bloque cabecera (icono + país/ciudad) y el `<dl>` de Cobertura/Transportistas. `object-contain`, `h-auto`, `w-full max-w-[420px]`; apilada en móvil.
- [x] Tarjeta **España / Zaragoza**: insertar `<figure>` con `assets/images/almacen-zaragoza.png` (1983×793) en la misma posición.
- [x] Conservar en ambas tarjetas: país, ciudad, tipo «Almacén», y los `<dl>` con Cobertura (Nacional / Península e islas) y Transportistas (UPS, FedEx, DHL / MRW, SEUR, DHL) tal como están.
- [x] No afirmar que las imágenes de almacenes son fotografías reales de las instalaciones (consta que son representaciones generadas).

**Verificación:** dos tarjetas con su imagen y todos sus datos intactos; cabecera con mapa a la derecha; sin overflow en 320/375 (imágenes apiladas) ni en 768/1280/1440 (fila); `alt` definitivos.

### Tarea 4 — Por qué TrackFlow (sección `#por-que-trackflow`)

- [x] Convertir la cabecera a fila (izquierda: etiqueta «NUESTRA PROPUESTA» + `h2#titulo-por-que-trackflow` + `p` intro; derecha: `<figure>` con `assets/images/centro-operaciones-trackflow.png`, 1916×821).
- [x] Integrar la imagen con `object-contain`, `h-auto`, `w-full`, ancho máx. 560 px; apilada en móvil.
- [x] Conservar las cuatro `li` de beneficios: iconos, títulos, descripciones y cifras «2 mercados» y «≈130 profesionales»; ajustar solo espaciados si la composición validada lo exige.
- [x] `alt` sin atribuir la imagen a una operación real verificada de TrackFlow.

**Verificación:** cuatro beneficios intactos; cabecera con imagen a la derecha en escritorio; `alt` definitivo; sin overflow.

### Tarea 5 — Contacto (sección `#contacto`)

- [x] Convertir la cabecera a fila (izquierda: etiqueta «CONTACTO» + `h2#titulo-contacto` + `p` intro; derecha: `<figure>` con `assets/images/despacho-trackflow.png`, 2170×725).
- [x] Integrar la imagen con `object-contain`, `h-auto`, `w-full`, ancho máx. 560 px; aprovechar los fundidos visibles sobre el fondo sin superponer texto ilegible.
- [x] Conservar las tres tarjetas del `address` (email `comercial@trackflow.com`, teléfonos LA y Zaragoza) y sus enlaces `mailto:`/`tel:`, además del CTA secondary hacia `application.html`, en su orden funcional actual.

**Verificación:** enlaces y CTA intactos; imagen integrada; legibilidad/contraste sobre el fondo de la sección; `alt` definitivo.

### Tarea 6 — Header, footer y pulido general

- [ ] Comparar visualmente header y footer con el mockup (Tarea 0). Si no hay diferencia relevante, dejarlos intactos y documentarlo; si la hay, aplicar solo ajustes menores de espaciado, alineación o distribución con clases Tailwind, **sin** cambiar enlaces, logos oficiales, favicon ni comportamiento.
- [ ] Revisión global de la landing: jerarquía de encabezados (una sola `h1`), navegación por teclado y foco visible, contraste AA, `alt` de todas las imágenes (incluidos logotipos), ausencia de scroll horizontal, de recursos rotos y de cambios inesperados de maquetación en las secciones no modificadas.

**Verificación:** navegación, anchors, `mailto:`, `tel:` y CTA funcionan; headers/footers sin regresiones; reconciliación final de `alt`.

### Tarea 7 — Verificación y cierre SDD

- [ ] **Previsualizar la web:** servir con el comando documentado (`npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0`, o el puerto disponible) y revisar en **320, 375, 768, 1280 y 1440 px**: composición de cada cabecera, posición de las siete imágenes, apilado en móvil/tablet, legibilidad de titulares y párrafos, tamaño de botones/indicadores, tarjetas responsive y ausencia de overflow/corte.
- [x] **Comprobar recursos:** HTTP 200 para las siete imágenes y los SVG usados; sin rutas rotas.
- [ ] **Diferencias respecto al mockup:** revisar qué secciones coinciden, cuáles se ajustaron y cuáles permanecen distintas; registrar el resultado real.
- [x] **Chequeos estáticos:** diagnósticos del editor disponibles (`get_errors`) y `git diff --check`.
- [x] **Archivos no relacionados:** confirmar que `uis/website/application.html`, `uis/website/validation.js`, `assets/brand/*`, `assets/icons/*` (salvo la variante aprobada), Schema.org, metadatos, `styles.css` (salvo necesidad demostrada) y dependencias **no** fueron modificados.
- [x] **Registrar en `memory-bank/progress.md`** el cambio, las verificaciones ejecutadas y sus límites. Actualizar `design-system.md` únicamente si procede la decisión reutilizable (tratamiento contextual de recursos o variante de icono) aprobada.

**Verificación final:** cumplimiento de los criterios de aceptación del spec (sección 7 de `spec.md`), diffs localizados y documentación de límites; no se afirma validación visual no realizada.

---

## 1b. Iteración 2 — Correcciones de fidelidad al mockup (aprobadas el 2026-10-22)

Segunda pasada de adaptación visual: el usuario revisó el resultado de la Iteración 1 y aprobó mediante tabla comparativa + confirmación explícita las correcciones siguientes (opciones elegidas: ancho `max-w-[1600px]` y banderas de país reales, variante B). Se aplicaron en `index.html` (único archivo de implementación más los dos SVG nuevos), manteniendo clases y tokens del Design System y **sin modificar ningún PNG original**.

- [x] **Ampliar el ancho útil:** `max-w-7xl` → `max-w-[1600px]` en los 7 contenedores (header, hero, cabeceras de Servicios/Cobertura/Por qué TrackFlow/Contacto, footer) y padding de sección `lg:px-8` → `lg:px-10 xl:px-12` en las 5 secciones.
- [x] **Extender a la derecha las imágenes de cabecera** de las 4 secciones: `figure` de `lg:w-1/2 xl:max-w-[560px]` (640 px en Cobertura) → `lg:w-[58%] xl:w-[60%]`.
- [x] **Hero: sustituir los tres indicadores** por «Operación confiable y escalable» (shield-check), «En Estados Unidos y España» (globe) y «Marcas que crecen sin fricciones» (trending-up); SVG Lucide inline menta `stroke="#6EE7D2"` decorativos (`aria-hidden`, `focusable="false"`).
- [x] **Tarjetas de Servicios: flecha a la derecha del `h3`** en las tres `article.service-item` (flecha decorativa `text-secondary`).
- [x] **Tarjetas de cobertura recompuestas en horizontal** (Los Ángeles y Zaragoza): texto a la izquierda (badge de país con bandera + ciudad + tipo «Almacén» + `<dl>` Cobertura/Transportistas) e imagen a la derecha (`lg:w-[46%] xl:w-[48%]`), en lugar de la imagen intercalada vertical.
- [x] **Crear y documentar las banderas:** `assets/icons/flag-us.svg` y `assets/icons/flag-es.svg` (SVG simplificados de país, no Lucide) registrados en `design-system.md` antes de su aplicación.
- [x] **Pulido de proporción y espaciado:** grid del hero `lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)]`; imagen de hero `max-w-[620px] lg:max-w-[720px]`; `gap-5`→`gap-6` (grids de servicios y cobertura) y `gap-4`→`gap-6` (listas de beneficios y contacto).
- [ ] **Verificación visual pendiente** (mismos límites que la Iteración 1, sin visor en el entorno): cotejo con mockup sección a sección, viewports 320/375/768/1280/1440, contraste real y navegación por teclado/foco.

**Chequeos ejecutados en esta iteración:** `get_errors` sin errores en `index.html`; `git diff --check` limpio; balance de etiquetas HTML correcto (`html`/`body`/`main` y contenidos anidados sin cierres inesperados); las 22 referencias locales de `index.html` existen en disco; el servidor `http-server` del puerto 3000 (sesión anterior) responde HTTP 200 para `index.html`, las siete imágenes y los SVG usados (incluidas `flag-us.svg` y `flag-es.svg`). `map-pin.svg` solo se usa ya en contacto (oficinas), no en las tarjetas de cobertura; el archivo permanece en `assets/icons/`.

---

## 1c. Iteración 3 — Corrección del layout full-bleed y espaciado vertical (aprobada el 2026-10-22)

Tercera pasada solicitada por el usuario: «TrackFlow — Corrección del layout full-bleed y espaciado vertical». Se separaron las 4 imágenes de cabecera del contenedor centrado `max-w-[1600px]` para que lleguen al borde derecho real del viewport, se comprimió el ritmo vertical hacia el del mockup y se aumentó el tamaño visible de los PNG apaisados. Técnica aprobada: **grid/flex con utilidades Tailwind**, full-bleed **solo en las 4 cabeceras (no en el hero)**, y **compresión moderada** priorizando corregir espacios vacíos derivados del layout (lo establece `plan.md` §3 y §6). Único archivo de implementación: `index.html`; ningún PNG original se modificó.

- [x] **Sacar las cabeceras del contenedor centrado:** cada `<section>` (Servicios, Cobertura, Por qué TrackFlow, Contacto) mantiene ancho completo; la fila de cabecera pasa de estar anidada en `div.mx-auto.max-w-[1600px]` a `div.lg:grid.lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-center lg:gap-10 xl:gap-12` a ancho total.
- [x] **Texto alineado con el contenedor de tarjetas:** la columna de texto conserva `px-5 lg:px-10 xl:px-12` y, en pantallas >1600px, `min-[1601px]:pl-[calc(50vw_-_800px_+_3rem)]` para mantener la alineación con el contenedor centrado de tarjetas.
- [x] **Imagen hasta el borde derecho real:** `figure` pasa a `mt-6 w-full px-5 lg:mt-0 lg:px-0`; en `lg+` ocupa la columna `58fr` del grid y llega al borde derecho del viewport (ya no al borde del contenedor centrado).
- [x] **Contenedor de tarjetas separado y centrado:** cada grupo de tarjetas (servicios `xl:grid-cols-3`, cobertura `md:grid-cols-2`, beneficios `xl:grid-cols-4`, `address` de contacto) se envuelve en `div.mx-auto.max-w-[1600px] px-5 lg:px-10 xl:px-12`, conservando el ancho de lectura centrado.
- [x] **Compresión vertical moderada (ritmo del mockup):** secciones `py-16 lg:py-24` → `py-10 lg:py-14`; separación cabecera→tarjetas `mt-8 md:mt-12 / xl:mt-12` → `mt-6 lg:mt-8`; listas de beneficios y `address` de contacto `mt-6 lg:mt-8` y `mt-8 md:mt-10` → `mt-6 md:mt-8`.
- [x] **Hero conservado y ajustado:** mantiene su contenedor centrado `max-w-[1600px]` (no full-bleed); se reducen sus espacios verticales (`py-16 lg:py-24` → `py-12 lg:py-16`; CTA e indicadores `mt-8` → `mt-6`) y se **restaura el padding horizontal** `px-5 lg:px-10 xl:px-12` en la `<section>` (regresión detectada y corregida durante la verificación para evitar texto pegado al borde en móvil/tablet).
- [ ] **Verificación visual pendiente (usuario):** cotejo de escritorio confirmando que las 4 imágenes llegan al borde derecho real del viewport donde corresponde; tablet/móvil sin desbordamiento horizontal; ausencia de los espacios vacíos previos; comparación con `uis/website/assets/references/landing-de-logistica-trackflow.png` en viewports 320/375/768/1280/1440.

**Chequeos ejecutados en esta iteración:** `get_errors` sin errores en `index.html`; `git diff --check` limpio; balance de etiquetas verificado con `HTMLParser` (sin errores, pila final vacía; `section 5/5`, `div 45/45`, `figure 7/7`); servidor `http-server` en puerto 3000 responde HTTP 200 para `index.html`, los 4 PNG de cabecera, el hero y los SVG usados (iconos y banderas). Durante la implementación se detectó y reparó una corrupción local en la sección Cobertura (apertura de `<section>` truncada y línea de grid duplicada) que dejaba el documento desbalanceado; tras la reparación el balance es correcto. **Límite:** sin visor ni navegador en el entorno; la confirmación visual final corresponde al usuario.

## 1d. Hover sutil de tarjetas informativas — incorporado a la adaptación 003

El hover aprobado por el usuario queda registrado como parte del alcance visual de esta adaptación, no como una tarea funcional separada. Ya está implementado en `styles.css` y su regla visual está documentada en `design-system.md`.

- [x] Aplicar transición de borde de 180 ms a `.info-card` y, únicamente en `@media (hover: hover) and (pointer: fine)`, mezclar el borde base (55 %) con el turquesa secundario al pasar el puntero.
- [x] Desactivar la transición bajo `prefers-reduced-motion: reduce`.
- [x] Limitarlo a las tarjetas informativas estáticas de Servicios, Cobertura, beneficios y Contacto; no convertirlas visualmente en enlaces ni añadir elevación, escala o sombra.
- [x] Mantener estados de hover propios en enlaces/controles y excluir campos, indicadores y estados del formulario del hover genérico.
- [x] Registrar el patrón en `design-system.md` y reconciliar esta especificación, plan y lista de tareas con el comportamiento existente.

**Verificación y límites:** la revisión previa de la implementación registró `git diff --check` limpio y diagnósticos del editor sin errores en los archivos web comprobados. Esta actualización solo reconcilia documentación con la regla CSS existente; no altera código de interfaz. No se afirma una comprobación visual manual del hover.

---

## 2. Restricciones durante la implementación

- No reescribir `index.html` desde cero, no reconstruir secciones completas y no sustituir componentes, tarjetas o textos que ya funcionan.
- No modificar `application.html`, `validation.js`, logo/favicon, Schema.org, metadatos, paleta, tipografía, Tailwind CDN ni dependencias.
- No editar, recortar, filtrar, recolorear, renombrar, mover ni eliminar los siete PNG originales; referenciarlos desde su ruta real.
- No introducir CSS personalizado salvo necesidad demostrada y aprobada; priorizar utilidades Tailwind y tokens.
- No añadir nuevas páginas, funcionalidades, formularios, promesas comerciales, cifras o capacidades no respaldadas por los briefings.
- No atribuir a las imágenes de almacenes una autenticidad de fotografía documental, ni tratar el mapa como cobertura operativa verificada.
- Ejecutar una tarea a la vez; registrar verificación y cierre de cada tarea antes de avanzar.

## 3. Aprobación y bloqueo

- Estas tareas requieren aprobación explícita del usuario y autorización para comenzar la implementación; la aprobación del plan no la otorga por sí sola.
- La **Tarea 0** (revisión visual autorizada y decisiones) es un bloqueo: sin ella no se pueden cerrar composición fina, textos de indicadores ni `alt`. Si el entorno no permite el visor, solicitar al usuario la confirmación visual o demorar esas decisiones sin inventarlas.
- Cualquier desviación sobre el contenido de esta lista (p. ej., necesidad de `styles.css` o reestructuración superior a la prevista) debe documentarse y aprobarse antes de aplicarse.
