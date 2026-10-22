# TrackFlow — Guía de Identidad Visual Web

**Versión:** 1.0  
**Fecha:** Octubre de 2026  
**Ámbito:** Identidad visual de las interfaces de TrackFlow; el mapa de secciones y los componentes específicos de esta guía corresponden al sitio corporativo B2B.  
**Estado:** Referencia visual de trabajo; cualquier cambio requiere aprobación previa.

> **Identidad visual para una logística que fluye.**  
> Guía de marca web: color, jerarquía, componentes, estados y criterios de implementación para el sitio público de TrackFlow.

**Principio rector:** claro por defecto; oscuro en momentos clave.

Los tres ejes de marca son **solidez logística**, **claridad comercial** y **tecnología útil**.

---

## 1. Principios de identidad

TrackFlow debe parecer una empresa logística fiable y experimentada que está modernizando su operación; **no una mensajería genérica ni un software abstracto**.

| Pilar          | Qué transmite                      | Cómo se refleja visualmente                                              |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| **Confianza**  | Infraestructura y experiencia.     | Azul petróleo para aportar peso visual, titulares y fondos corporativos. |
| **Claridad**   | Una oferta comercial comprensible. | Blancos y grises suaves para lectura, servicios, cobertura y formulario. |
| **Movimiento** | Eficiencia y tecnología.           | Turquesa para acciones; lima como acento gráfico excepcional.            |

### Reparto visual orientativo

| Familia  | Peso orientativo | Función                                                      |
| -------- | ---------------: | ------------------------------------------------------------ |
| Claros   |         **65 %** | Fondos de lectura, contenido y formularios.                  |
| Petróleo |         **25 %** | Momentos fuertes de identidad, principalmente hero y footer. |
| Turquesa |          **8 %** | Acciones e interacciones.                                    |
| Lima     |          **2 %** | Pequeños acentos gráficos.                                   |

**Regla principal:** no perseguir estos porcentajes matemáticamente. Si el sitio termina con un **75–80 % de superficie clara**, seguirá cumpliendo la estrategia visual. El protagonismo se decide por jerarquía, no por cuota de color.

---

## 2. Colores de marca

La marca se apoya en tres tonos principales y una familia de neutros. Cada color debe tener una finalidad consistente.

### Paleta principal y superficies

| Nombre            | HEX       | Rol permitido                                   |
| ----------------- | --------- | ----------------------------------------------- |
| **Azul petróleo** | `#102838` | Marca, hero, footer y titulares.                |
| **Turquesa**      | `#007B76` | CTA, enlaces, iconos y foco.                    |
| **Lima**          | `#D4F27A` | Acentos gráficos puntuales.                     |
| **Menta**         | `#6EE7D2` | CTA sobre petróleo y énfasis en fondos oscuros. |
| **Gris hielo**    | `#F4F8FA` | Fondos de secciones alternas.                   |
| **Verde agua**    | `#E9F8F5` | Tarjetas y áreas destacadas.                    |
| **Blanco**        | `#FFFFFF` | Fondo principal y superficies de lectura.       |

### Neutros de texto y borde

| Nombre              | HEX       | Uso                          |
| ------------------- | --------- | ---------------------------- |
| Texto principal     | `#344A5A` | Cuerpo y descripciones.      |
| Texto secundario    | `#556978` | Información secundaria.      |
| Borde               | `#D8E3E8` | Bordes generales y tarjetas. |
| Borde de formulario | `#708B99` | Campos en estado normal.     |

### Variantes y estados

| Nombre         | HEX       | Uso                                    |
| -------------- | --------- | -------------------------------------- |
| Turquesa hover | `#006963` | Estado hover del CTA turquesa.         |
| Éxito          | `#176B48` | Confirmaciones y resultados correctos. |
| Advertencia    | `#986000` | Advertencias que requieren revisión.   |
| Error          | `#B42318` | Validaciones erróneas.                 |
| Información    | `#215F9A` | Contexto informativo adicional.        |

**Criterio:** los colores son roles de interfaz, no decisiones decorativas que se reinventan en cada sección.

---

## 3. Mapa de secciones de la web

La propuesta reserva el fondo oscuro principalmente para la primera impresión y el cierre. El resto se organiza con superficies claras.

| Orden | Sección                            | Fondo                   | Tratamiento visual                |
| ----: | ---------------------------------- | ----------------------- | --------------------------------- |
|    01 | **Header**                         | Blanco `#FFFFFF`        | Navegación oscura y CTA turquesa. |
|    02 | **Hero**                           | Azul petróleo `#102838` | Titular blanco y CTA menta.       |
|    03 | **Servicios**                      | Blanco `#FFFFFF`        | Tarjetas con iconos turquesa.     |
|    04 | **Cobertura**                      | Gris hielo `#F4F8FA`    | Dos bloques blancos.              |
|    05 | **Por qué TrackFlow / Beneficios** | Blanco `#FFFFFF`        | Indicadores en verde agua.        |
|    06 | **Contacto / Formulario B2B**      | Gris hielo `#F4F8FA`    | Campos sobre tarjeta blanca.      |
|    07 | **Footer**                         | Azul petróleo `#102838` | Enlaces en menta.                 |

**Importante:** el hero oscuro **no** implica que la web sea oscura. Es un ancla visual dentro de una experiencia fundamentalmente luminosa.

---

## 4. Botones, enlaces y tarjetas

**Misma acción, mismo lenguaje visual.** El contexto puede cambiar el contraste, pero no la jerarquía ni la geometría del componente.

### Sobre fondo claro

- **Botón primario:** fondo turquesa `#007B76`, texto blanco. Ejemplo: «Solicitar información».
- **Botón secundario:** transparente, con borde y texto correspondientes al contexto. Ejemplo: «Ver servicios».
- **Enlaces de texto:** turquesa. Ejemplo: «Explorar cobertura →». En hover, subrayar.

### Sobre fondo azul petróleo

- **Botón primario:** fondo menta `#6EE7D2`, texto azul petróleo `#102838`.
- **Botón secundario:** transparente, con borde y texto claros y legibles.

### Tarjetas de servicio

Tarjetas coherentes para los tres servicios de la empresa:

1. **Almacenes:** inventario y preparación.
2. **Última milla:** envíos y trazabilidad.
3. **Logística inversa:** gestión de devoluciones.

Como norma general, las tarjetas son **blancas**, con borde `#D8E3E8` y radio consistente. El verde agua `#E9F8F5` se reserva para destacados.

**Regla:** un CTA principal por bloque. **No usar lima como color estándar de botones.**

---

## 5. Formularios y estados

El formulario es una pieza de marca: TrackFlow quiere captar **leads cualificados**. La interfaz debe facilitar la cumplimentación, explicar los errores y hacer inequívoca la acción principal.

### Campos

| Estado      | Tratamiento                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| **Normal**  | Campo blanco con borde visible en reposo (`#708B99`). Etiqueta clara.                |
| **En foco** | Resalte turquesa con contraste suficiente y anillo externo visible.                  |
| **Error**   | Identificación del campo, mensaje descriptivo y representación no limitada al color. |

Ejemplos de etiqueta/campo: «Nombre de empresa» / «Tu empresa» y «Email corporativo» / «contacto@empresa.com».

### Estados semánticos

| Estado      | Color     | Significado          |
| ----------- | --------- | -------------------- |
| Correcto    | `#176B48` | Acción realizada.    |
| Advertencia | `#986000` | Revisar información. |
| Error       | `#B42318` | Corregir un campo.   |
| Información | `#215F9A` | Contexto adicional.  |

### Advertencia comercial para bajo volumen

> Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?

**Regla:** **color + icono + texto**. Nunca depender solo del color.

---

## 6. Lenguaje visual y tipografía

La marca debe sentirse técnica y organizada, sin perder el vínculo con almacenes, paquetes y entregas reales.

### Tipografía propuesta

- **Principal:** Manrope, si la licencia y el rendimiento lo permiten.
- **Alternativa compatible:** Inter.
- **Nota del PDF original:** la guía PDF está maquetada con Lato por disponibilidad tipográfica; **Lato no es la elección definitiva para la web**.

| Elemento | Tamaño orientativo | Aplicación               |
| -------- | ------------------ | ------------------------ |
| H1       | **40–56 px**       | Titular del hero.        |
| H2       | **28–36 px**       | Cabeceras de sección.    |
| H3       | **20–24 px**       | Tarjetas y subtítulos.   |
| Body     | **16–18 px**       | Texto general.           |
| Label    | **14–16 px**       | Formularios y controles. |

### Reglas de expresión

| Elemento             | Criterio                                                                |
| -------------------- | ----------------------------------------------------------------------- |
| **Iconos**           | Lineales, consistentes y mayoritariamente turquesa.                     |
| **Formas**           | Tarjetas con radios de **8–12 px** y bordes sobrios.                    |
| **Motivos gráficos** | Rutas, puntos y conexiones discretas que evoquen el concepto de _flow_. |
| **Fotografía**       | Procesos reales: almacén, _picking_, _packing_ y entrega.               |
| **Movimiento**       | Microinteracciones breves; evitar la animación ornamental.              |

### Iconografía Lucide

- **Biblioteca oficial:** SVG estáticos de Lucide Icons `lucide-static` **v1.61.0**. No mezclar con otras bibliotecas ni añadir dependencias de ejecución.
- **Estilo:** conservar los trazados oficiales, `viewBox` 24 × 24, relleno vacío, trazo de 2 px y terminaciones/uniones redondeadas.
- **Tamaño:** 24 × 24 px en tarjetas y elementos de contacto; 20 × 20 px solo en espacios compactos. Mantener dimensiones estables.
- **Color:** turquesa `#007B76` sobre superficies claras y menta `#6EE7D2` sobre azul petróleo, siguiendo los roles existentes.
- **Accesibilidad:** los iconos junto a texto son decorativos y se ocultan a tecnologías de asistencia. Un control representado solo por un icono debe tener nombre accesible.
- **Licencia:** conservar la licencia ISC distribuida con la fuente en `assets/icons/LICENSE` y registrar la versión utilizada junto a los recursos.

### Organización y conservación de recursos

- `assets/brand/`: logotipos, monograma y favicon oficiales. Son originales inmutables; no recrear, recolorear, recortar ni deformar.
- `assets/icons/`: SVG Lucide para iconografía de interfaz y el aviso de licencia/versionado. No almacenar aquí logotipos o ilustraciones.
- `assets/illustrations/`: ilustraciones conceptuales o explicativas. Preservar transparencia, colores y proporción; no recortar partes relevantes ni sustituirlas por recursos externos.
- `assets/images/`: imágenes fotográficas para cabeceras y tarjetas. No presentar una imagen como fotografía real de operaciones de TrackFlow hasta que su procedencia y correspondencia con la empresa hayan sido verificadas.
- Toda imagen debe tener atributo `alt`: las informativas reciben descripción breve y contextual; las estrictamente decorativas usan `alt=""`; los logotipos identifican a TrackFlow. No repetir en el `alt` el texto adyacente ni usar descripciones genéricas.

### Catálogo de recursos gráficos

Las rutas de esta tabla son relativas a `uis/website/`. El contexto de uso es el previsto para futuras interfaces; su inclusión en el catálogo no autoriza cambios visuales ni modifica el alcance aprobado de una iniciativa existente.

| Recurso                                            | Finalidad y contexto previsto                    | Estado y reglas de uso                                                                                                                                                                                       |
| -------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assets/illustrations/hero-flujo-logistico.png`    | Ilustración del hero de la landing actual.       | Recurso que ya referencia `index.html` y la especificación aprobada `specs/001-mejora-visual-web/`. Mantener el original, proporción y transparencia; no sustituirlo sin aprobación.                         |
| `assets/illustrations/hero-flujo-logistico(2).png` | Ilustración principal alternativa del hero.      | Archivo presente además del recurso que usa actualmente la landing. No asumir que es un reemplazo ni cambiar referencias existentes sin aprobación y confirmación visual.                                    |
| `assets/illustrations/mapa-general-almacenes.png`  | Mapa conceptual para la sección Cobertura.       | Tratar como ilustración conceptual, no como mapa operativo o prueba de cobertura verificada. La especificación actual excluye añadir mapas a la mejora vigente; cualquier incorporación requiere aprobación. |
| `assets/images/servicios-logisticos.png`           | Imagen de cabecera de Servicios.                 | Uso previsto; verificar contenido y procedencia antes de presentarla como fotografía real de TrackFlow.                                                                                                      |
| `assets/images/almacen-los-angeles.png`            | Imagen de la tarjeta del almacén de Los Ángeles. | Uso previsto; no afirmar que representa las instalaciones reales hasta verificarlo.                                                                                                                          |
| `assets/images/almacen-zaragoza.png`               | Imagen de la tarjeta del almacén de Zaragoza.    | Uso previsto; no afirmar que representa las instalaciones reales hasta verificarlo.                                                                                                                          |
| `assets/images/centro-operaciones-trackflow.png`   | Imagen de cabecera de Por qué TrackFlow.         | Uso previsto; verificar contenido y procedencia antes de presentarla como fotografía real de TrackFlow.                                                                                                      |
| `assets/images/despacho-trackflow.png`             | Imagen de cabecera de Contacto.                  | Uso previsto; verificar contenido y procedencia antes de presentarla como fotografía real de TrackFlow.                                                                                                      |

Los recursos de `assets/images/` y las ilustraciones nuevas constan como archivos presentes, pero su contenido y procedencia no se han validado visualmente en esta revisión. Hasta verificarlo, describirlos en la interfaz solo según lo que efectivamente muestran y no atribuirlos a instalaciones, personal o procesos reales de la empresa. Diferenciar explícitamente imágenes generadas o conceptuales de fotografías reales verificadas; no inferir su categoría solo por el nombre del archivo.

#### Aplicación, accesibilidad y responsive

- Antes de referenciar un archivo, confirmar su ruta y nombre exactos en el repositorio. Añadir `width` y `height` correspondientes al original cuando se conozcan para reservar espacio y reducir saltos de diseño.
- Mantener la relación de aspecto y mostrar ilustraciones completas, preferentemente con dimensionamiento fluido y `object-fit: contain`; no recortar elementos significativos, estirar ni deformar. Usar `cover` en fotografía solo si el recorte es intencional, aprobado y conserva el sujeto y contexto relevantes en todos los tamaños.
- En layouts responsive, limitar el ancho al contenedor, usar altura automática y revisar encuadre, legibilidad y ausencia de desbordamiento en móvil, tablet y escritorio. No imponer un tamaño fijo que provoque recortes o distorsión.
- No eliminar ni añadir transparencia, aplicar fundidos/degradados, filtros, recoloreado o superposiciones al original. Si la composición necesita un fundido o tratamiento para contraste, debe resolverse mediante capas/estilos de interfaz aprobados, sin alterar el archivo, y comprobarse en tamaños y fondos reales.
- Para imágenes informativas, redactar un `alt` breve que exprese la información visual relevante para su sección. Si el contenido ya se comunica íntegramente junto a la imagen y esta no añade información, usar `alt=""`. Los iconos decorativos junto a texto también llevan `alt=""` y `aria-hidden="true"`; los controles solo con icono necesitan un nombre accesible.

#### Mantenimiento y aprobación

1. Reutilizar primero los recursos existentes; no proponer o añadir otro recurso si uno catalogado satisface la necesidad.
2. Documentar cada recurso nuevo aquí, con ruta exacta, finalidad/contexto, categoría (conceptual, generada o fotografía real verificada, cuando corresponda) y normas de uso antes de referenciarlo desde una interfaz.
3. Todo cambio visual, incorporación, reemplazo o excepción de uso requiere aprobación explícita previa, de acuerdo con el alcance y flujo de aprobación del repositorio.
4. No editar, optimizar destructivamente, recortar, renombrar, mover, reemplazar ni eliminar originales sin autorización expresa. Conservar el original sin cambios.
5. Las reglas de frontend remiten a este Design System para el catálogo y sus normas; no duplicar el inventario en reglas u otros documentos.
6. `assets/references/landing-de-logistica-trackflow.png` es un mockup de referencia visual para análisis. No es un asset de producción: no incrustarlo ni mostrarlo en la web.

---

## 7. Uso de logotipos y favicon

Utiliza únicamente los recursos gráficos oficiales originales. No recrees, redibujes, recolorees ni deformes el logotipo, el monograma o el favicon. Antes de añadir referencias en código o documentación, comprueba que los archivos entregados estén en `uis/website/assets/brand/` y confirma sus nombres y extensiones reales.

| Recurso                                 | Ruta relativa desde `uis/website/`       | Uso correcto                                                                                         |
| --------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Logotipo horizontal para fondos claros  | `assets/brand/logo-trackflow.png`        | Header y superficies blancas o claras. Mantener la proporción original.                              |
| Logotipo horizontal para fondos oscuros | `assets/brand/logo-trackflow-oscuro.png` | Hero, footer y otras superficies oscuras, incluido azul petróleo. Mantener la proporción.            |
| Monograma TF sin texto                  | `assets/brand/ico-trackflow.png`         | Usos compactos sin texto, solo cuando la marca ya esté contextualizada. No usar como logo principal. |
| Favicon                                 | `assets/brand/favicon.ico`               | Pestañas, favoritos y otras superficies del navegador que admitan favicon.                           |

Los cuatro originales están verificados en `uis/website/assets/brand/`: los logotipos y el monograma son PNG; el favicon es ICO con variantes de 16 × 16, 32 × 32 y 48 × 48 px. No recrear, redibujar, recolorear ni deformar estos archivos. En HTML, conservar la relación de aspecto de los logotipos (por ejemplo, definir solo el ancho y dejar la altura automática); no ampliar el monograma a un uso con texto ni usarlo en lugar del favicon.

## 8. Contrastes y comportamiento accesible

La paleta se ha elegido para sostener buenas relaciones de contraste en sus combinaciones principales. La validación final debe realizarse con los componentes reales.

### Relaciones de contraste recogidas en la guía

| Combinación de texto          |   Contraste | Referencia |
| ----------------------------- | ----------: | ---------- |
| Blanco sobre petróleo         | **15,19:1** | AA / AAA   |
| Blanco sobre turquesa         |  **5,13:1** | AA         |
| Petróleo sobre menta          | **10,14:1** | AA / AAA   |
| Petróleo sobre lima           | **12,14:1** | AA / AAA   |
| Texto secundario sobre blanco |  **5,71:1** | AA         |

### Criterios obligatorios

- Texto normal: contraste mínimo objetivo de **4,5:1** (WCAG AA).
- Controles y bordes relevantes: contraste **3:1** respecto al entorno.
- Foco visible en enlaces, botones, selectores y campos.
- Errores descriptivos junto al campo, con identificación no cromática.
- Comprobar tamaño de los objetivos táctiles y estados `disabled` en móvil.
- Verificar el comportamiento real en los distintos estados y tamaños de pantalla, no solo en muestras de paleta.

---

## 9. Tokens y control de consistencia

Usar **variables semánticas** y **componentes reutilizables**. No introducir colores arbitrarios en cada sección o formulario.

### Tokens CSS base para Tailwind

```css
:root {
  /* Identidad */
  --color-primary: #102838;
  --color-secondary: #007b76;
  --color-secondary-hover: #006963;
  --color-mint: #6ee7d2;
  --color-accent: #d4f27a;

  /* Superficies */
  --color-background: #ffffff;
  --color-surface: #f4f8fa;
  --color-surface-accent: #e9f8f5;

  /* Textos y campos */
  --color-heading: #102838;
  --color-text: #344a5a;
  --color-text-muted: #556978;
  --color-input-border: #708b99;
  --color-border: #d8e3e8;

  /* Estados */
  --color-success: #176b48;
  --color-warning: #986000;
  --color-error: #b42318;
  --color-info: #215f9a;
}
```

### Reglas para componentes

| Componente o aspecto | Regla                                                 |
| -------------------- | ----------------------------------------------------- |
| **Botón primario**   | Turquesa sobre fondo claro; menta sobre fondo oscuro. |
| **Tarjeta estándar** | Blanca, borde `#D8E3E8` y radio coherente.            |
| **Input en foco**    | Turquesa, con foco claramente visible.                |
| **Error / aviso**    | Tokens semánticos + mensaje escrito.                  |
| **Espaciado**        | Escala de **4/8 px**, consistente entre vistas.       |

### Lista de comprobación antes de publicar

- [ ] Diseño responsive verificado.
- [ ] Contrastes reales comprobados.
- [ ] Navegación con teclado operativa.
- [ ] Estados de foco visibles.
- [ ] Mensajes de validación claros y accesibles.
- [ ] Colores y componentes coherentes con los tokens.
- [ ] Promesas comerciales contrastadas con capacidades disponibles.

> **Nota de alcance:** el briefing técnico describe algunas capacidades que todavía están por desarrollar. No anunciarlas como disponibles sin confirmación.

---

## Síntesis de aplicación

**TrackFlow debe ser una web clara por defecto**: blancos y grises suaves en la mayoría de secciones; azul petróleo en los momentos corporativos más relevantes; turquesa para orientar acciones; lima solo como acento excepcional.

Esta guía funciona como referencia de identidad visual para las interfaces de TrackFlow. El mapa de secciones y los componentes descritos se aplican al sitio público. Los valores deben centralizarse en el proyecto y mantenerse constantes al crear o modificar componentes. Toda modificación visual de esta guía requiere aprobación explícita previa.
