# Borrador de especificación — Adaptación visual incremental de la landing al mockup

| Campo                    | Valor                                                              |
| ------------------------ | ------------------------------------------------------------------ |
| **Estado**               | Borrador para revisión y aprobación; no autoriza implementación    |
| **Proyecto / área**      | TrackFlow · `uis/website/`                                         |
| **Tipo de cambio**       | Refinamiento visual incremental de la landing existente            |
| **Documento**            | `spec.md` · alcance y criterios de aceptación                      |
| **Mockup de referencia** | `uis/website/assets/references/landing-de-logistica-trackflow.png` |

> Este documento conserva el estado de borrador de la iniciativa y documenta también iteraciones visuales y el hover ya aprobados e implementados en la landing. La revisión visual final sigue pendiente según las limitaciones registradas en las tareas. La aprobación de esta especificación no autoriza por sí sola cambios adicionales ni aprueba el plan, las tareas o nuevas implementaciones.

## 1. Contexto y objetivo

La landing actual ya contiene las siete secciones requeridas y utiliza HTML semántico, Tailwind CSS mediante CDN, tokens del Design System y recursos locales. El objetivo es acercar gradualmente su presentación al mockup aprobado mediante los cambios visuales mínimos necesarios, reutilizando los recursos disponibles y sin rehacer la web ni alterar su comportamiento.

La prioridad es conservar funcionalidad, seguridad, accesibilidad, arquitectura y decisiones aprobadas. La similitud visual con el mockup no justifica degradar esos requisitos ni introducir afirmaciones comerciales no verificadas.

## 2. Referencias y límites de la revisión

Consultar antes de planificar:

- `AGENTS.md`, `.agents/rules/development.md` y `.agents/rules/frontend.md`.
- `uis/website/BRIEFING.md`, `uis/website/design-system.md` y los README pertinentes.
- La landing y estilos actuales: `uis/website/index.html` y `uis/website/styles.css`.
- Las decisiones y aprobaciones previas de `uis/website/specs/001-mejora-visual-web/`.
- Los siete recursos enumerados en la tabla de la sección 3.2 y el mockup indicado en la cabecera.

En la auditoría previa, el archivo de referencia se encontró bajo `assets/references/`, no bajo `uis/website/references/`. El visor disponible bloqueó el mockup y los PNG; por ello no se pudo comparar visualmente la composición ni confirmar el contenido de cada imagen. Las dimensiones y el canal de color PNG se inspeccionaron técnicamente, pero no demuestran qué muestra una imagen ni que sus píxeles contengan transparencia efectiva. El plan deberá resolver esta limitación mediante una revisión visual autorizada del mockup y los assets antes de cerrar detalles de composición, encuadre y textos alternativos. No se deben inventar diferencias visuales.

## 3. Alcance propuesto

Se limita a la landing existente, en el orden actual:

1. Header y navegación.
2. Hero.
3. Servicios.
4. Cobertura.
5. Por qué TrackFlow.
6. Contacto comercial.
7. Footer.

La adaptación usará como referencia visual el mockup aprobado y las imágenes disponibles descritas por el usuario. La incorporación concreta de imágenes, sus tamaños, posiciones y layouts queda sujeta a la revisión visual y a un plan aprobado. Se conservará la estructura actual siempre que permita la adaptación; solo se justificará markup nuevo cuando sea necesario para presentar una imagen dentro de la sección existente, de forma semántica, accesible y responsive.

### 3.1. Principio de mínima intervención

- El `index.html` actual es la base de trabajo: no se reescribirá ni se reemplazarán secciones completas.
- Primero se ajustarán clases Tailwind y atributos de los elementos existentes. Se añadirá solo el markup estrictamente necesario para imágenes, etiquetas editoriales o indicadores solicitados que no existan hoy.
- Se conservarán IDs, destinos, roles semánticos, ARIA, textos obligatorios, tarjetas e iconos, salvo una excepción explícitamente justificada y aprobada.
- No se duplicarán tarjetas, copias, estilos ni estructuras para lograr una apariencia que se pueda conseguir adaptando contenedores ya presentes.
- Si una diferencia con el mockup exigiera alterar significativamente la estructura actual, el plan deberá describir la limitación concreta de la solución con clases/contenedores existentes y solicitar aprobación antes de esa modificación.
- Si un área ya coincide suficientemente con el mockup tras inspección, se dejará intacta y se documentará como tal en la revisión; no se harán cambios por uniformidad.

### 3.2. Correspondencia, ruta y tratamiento de los recursos gráficos

Las rutas siguientes son relativas a `uis/website/`. La columna de ubicación observada refleja la auditoría del repositorio y deberá volver a comprobarse inmediatamente antes de implementar. Los PNG no deben moverse o renombrarse para resolver discrepancias: se referenciarán desde su ubicación real.

| Sección / uso           | Archivo solicitado                                 | Ubicación comprobada en auditoría                                                                   | Integración solicitada y límites                                                                                                                                                                                                                                                                                      |
| ----------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero                    | `assets/illustrations/hero-flujo-logistico(2).png` | Existe bajo esa ruta. La landing actualmente carga `assets/illustrations/hero-flujo-logistico.png`. | Sustituir únicamente el `src` de la imagen actual por la variante aprobada; ajustar ancho, altura automática, alineación/posición y proporción de las dos columnas con clases Tailwind. No rehacer el hero ni cambiar su orden de lectura.                                                                            |
| Servicios               | `assets/images/servicios-logisticos.png`           | Existe bajo esa ruta.                                                                               | Añadirla al bloque de cabecera de Servicios, en la zona superior derecha junto al título e introducción alineados a la izquierda. Reutilizar el contenedor de cabecera actual; añadir solo un wrapper de imagen si es necesario para conservar el grid y el comportamiento móvil. Mantener las tres tarjetas debajo.  |
| Cobertura — mapa        | `assets/illustrations/mapa-general-almacenes.png`  | Existe bajo esa ruta.                                                                               | Añadirla a la derecha del título e introducción de Cobertura, reutilizando el bloque de cabecera. Es un mapa conceptual: el tratamiento textual/alternativo no deberá presentarlo como cartografía operativa, límites de cobertura verificados o localización precisa de instalaciones.                               |
| Cobertura — Los Ángeles | `assets/images/almacen-los-angeles.png`            | Existe bajo esa ruta.                                                                               | Integrarla en la tarjeta existente de Estados Unidos, asociada visualmente a Los Ángeles. La fotografía es una representación generada y no prueba que represente la instalación real. Mantener país, ciudad, cobertura y transportistas en el contenido actual.                                                      |
| Cobertura — Zaragoza    | `assets/images/almacen-zaragoza.png`               | Existe bajo esa ruta.                                                                               | Integrarla en la tarjeta existente de España, asociada visualmente a Zaragoza. La fotografía es una representación generada y no prueba que represente la instalación real. Mantener país, ciudad, cobertura y transportistas en el contenido actual.                                                                 |
| Por qué TrackFlow       | `assets/images/centro-operaciones-trackflow.png`   | Existe bajo esa ruta.                                                                               | Añadirla en la zona superior derecha del bloque de título e introducción, reutilizando el contenedor de cabecera de la sección. Mantener las cuatro tarjetas, iconos, textos y protagonismo de las cifras existentes. No describir la imagen como fotografía documental de TrackFlow sin verificación de procedencia. |
| Contacto                | `assets/images/despacho-trackflow.png`             | Existe bajo esa ruta.                                                                               | Añadirla en la zona superior derecha del bloque introductorio de Contacto. Mantener debajo las tres tarjetas de contacto y el CTA existentes, sin cambiar enlaces ni su orden funcional. No atribuir la imagen a una operación real si su procedencia no está verificada.                                             |

La ruta exacta del mockup se comprobó en `assets/references/landing-de-logistica-trackflow.png`; la ruta que menciona el encargo, `uis/website/references/landing-de-logistica-trackflow.png`, no existe en el estado auditado. El mockup es solo referencia, no se incorporará a la página pública. Antes del plan detallado se debe inspeccionar visualmente el mockup y cada PNG mediante un visor autorizado. Hasta entonces, las ubicaciones por sección descritas arriba expresan la intención dada por el usuario, no una verificación del contenido visual del archivo.

#### Tratamiento común para las siete imágenes

- Conservar los siete archivos originales byte por byte: sin edición, optimización destructiva, conversión, recompresión, filtros, recoloreado, máscara, recorte, cambio de nombre o movimiento.
- Confirmar visualmente antes de implementar contenido, alpha/transparencia efectiva, fundidos, elementos focales y orientación. El canal alfa del formato no basta para afirmar que el archivo contenga transparencia o fundidos visibles.
- Usar `width` y `height` del archivo fuente para reservar espacio y dejar que el renderizado conserve su relación de aspecto. La auditoría midió estas dimensiones: hero alternativo `1774×887`; Servicios `1916×821`; mapa `2172×724`; cada almacén `1983×793`; Por qué TrackFlow `1916×821`; Contacto `2170×725`. Confirmarlas de nuevo desde los originales antes de codificar.
- Por defecto, mostrar ilustraciones completas con `object-contain`, `w-full` y altura automática. El plan puede proponer dimensiones máximas o alineación por breakpoint tras la comparación visual; `object-cover` solo se permitirá si el mockup lo exige, el encuadre se valida y ningún contenido informativo se pierde en móvil.
- Aprovechar los fundidos/transparencias que efectivamente existan mostrando la imagen sobre la superficie prevista por el mockup y el Design System. No añadir una tarjeta o fondo sólido independiente a la imagen si el recurso está concebido para integrarse con el fondo; cualquier fondo de sección debe seguir los tokens actuales.
- No crear máscaras CSS, posicionamiento absoluto complejo, pseudo-elementos decorativos ni capas nuevas como primera opción. Intentar primero el grid/flex y las utilidades Tailwind del contenedor actual. El plan debe justificar cualquier técnica más compleja y describir su efecto en responsive, foco, lectura y recorte.
- Las imágenes de cabecera no deben cubrir ni empujar de forma impredecible los títulos. En pantallas pequeñas, la lectura será lineal: etiqueta opcional, título/introducción y recurso en un orden accesible coherente con el mockup y la prioridad del contenido; las tarjetas existentes seguirán después.
- Las imágenes de almacenes se incorporarán dentro de sus tarjetas actuales y no reemplazarán los datos ni el encabezado de cada ubicación. La composición horizontal se intentará con clases responsive del contenedor existente; se apilará en anchos estrechos sin desbordamiento.
- Definir `alt` solo después de inspeccionar la imagen. Si es informativa, describir de manera breve lo efectivamente visible y su contexto sin prometer autenticidad. Si es decorativa o repite íntegramente texto cercano, usar `alt=""`. No usar el nombre de archivo como descripción ni repetir innecesariamente el copy adyacente.

### 3.3. Requisitos por sección

- **Header:** conservar logo original, navegación, enlaces y destinos. Solo ajustar presentación si el cotejo visual confirma una diferencia relevante y el cambio puede hacerse sin alterar comportamiento.
- **Hero:** sustituir el `src` de la ilustración actual por `assets/illustrations/hero-flujo-logistico(2).png` después de inspección visual del archivo y el mockup. Mantener la estructura actual de dos columnas; ajustar sus proporciones y la escala/posición de la imagen con Tailwind. Conservar H1 y copy, destacando «e-commerce» en menta dentro del H1 existente; mantener el CTA y su destino. Añadir bajo el CTA tres indicadores con Lucide estático local y contenido corporativo respaldado, después de validar el texto exacto y que los iconos disponibles bastan. Estos indicadores son el único bloque informativo nuevo solicitado en el hero.
- **Servicios:** incorporar `assets/images/servicios-logisticos.png` arriba y a la derecha del título e introducción, con la etiqueta visual «NUESTROS SERVICIOS». Reutilizar la cabecera existente y ajustar su contenedor/espaciado; las tres tarjetas, iconos, copy y listas permanecen debajo y sin reescritura, salvo una necesidad funcional demostrada.
- **Cobertura:** incorporar `assets/illustrations/mapa-general-almacenes.png` arriba y a la derecha del título e introducción, añadiendo la etiqueta «COBERTURA». Dentro de las dos tarjetas existentes, añadir respectivamente `assets/images/almacen-los-angeles.png` y `assets/images/almacen-zaragoza.png`, junto a la información existente y con distribución horizontal en tamaños donde quepa; apilarlas en móvil si es necesario. Mantener información de ubicación, cobertura y transportistas. No afirmar que las imágenes generadas son fotografías reales.
- **Por qué TrackFlow:** incorporar `assets/images/centro-operaciones-trackflow.png` arriba y a la derecha del título e introducción y añadir «NUESTRA PROPUESTA». Mantener las cuatro tarjetas, sus iconos y copy; ajustar solo dimensiones y espacios si lo exige la composición validada.
- **Contacto:** incorporar `assets/images/despacho-trackflow.png` arriba y a la derecha del texto introductorio, con la etiqueta «CONTACTO». Mantener tarjetas de email y teléfonos y CTA en su posición funcional; aprovechar los fundidos visibles del original sin superponer texto ilegible.
- **Footer:** conservar logo oficial, información, enlaces y destino; cambios de presentación solo si el mockup los justifica.

En total se consideran los siete recursos propuestos para la adaptación: hero alternativo, Servicios, mapa, dos almacenes, operaciones y despacho. La sustitución del hero actual se permite únicamente por la variante especificada por el usuario, manteniendo intactos ambos archivos originales; no se autoriza reemplazarla por un recurso distinto. Ninguno de los PNG se puede editar, optimizar destructivamente, renombrar, mover o eliminar.

### 3.4. Elementos nuevos y archivos/tecnologías

Elementos HTML nuevos previstos, sujetos al cotejo visual y al plan:

- Un `span` o elemento de texto equivalente para colorear «e-commerce» en el H1 existente, sin cambiar su texto accesible ni su jerarquía.
- Tres indicadores bajo el CTA del hero, con iconos Lucide decorativos (`aria-hidden="true"`) y texto visible respaldado por briefings. El texto debe concretarse en el plan; no inventar cifras o capacidades.
- Las cuatro etiquetas indicadas para Servicios, Cobertura, Por qué TrackFlow y Contacto. Deben tener presentación coherente con el Design System, no crear una jerarquía de encabezados paralela y conservar texto visible/accesible.
- Siete puntos de integración de imagen en la página: se reutiliza el `img` actual del hero cambiando su `src` y se añaden seis imágenes en las demás ubicaciones. Los elementos se situarán en los contenedores existentes; solo añadir `figure`/wrapper si el layout responsive o una asociación semántica lo necesita.

No se prevé crear componentes o estilos globales nuevos. El número de contenedores wrapper y sus funciones se concretarán en el plan tras la inspección visual. Cualquier elemento adicional deberá justificarse por semántica, composición responsive o accesibilidad.

- Archivo principal previsto: `uis/website/index.html`.
- `uis/website/styles.css` solo se modificará si el plan demuestra que un requisito visual o responsive no puede expresarse de forma clara y mantenible con las utilidades Tailwind disponibles.
- `uis/website/design-system.md` podrá requerir una actualización mínima aprobada para registrar etiquetas, indicadores o tratamiento contextual de los recursos si representa una regla visual reutilizable o aclara la clasificación conceptual/generada. No duplicar el catálogo existente.
- `memory-bank/progress.md` se actualizará al completar trabajo aprobado y verificable, no en esta etapa de especificación.
- No introducir build, frameworks, dependencias ni recursos remotos adicionales.
- No alterar los tokens ni componentes de marca del Design System. Cualquier excepción visual deberá identificarse y aprobarse antes de implementarse.

## 4. Integridad funcional y contenido que se conserva

Se conservarán sin cambios funcionales:

- El orden, número y semántica de las siete secciones existentes.
- El contenido comercial respaldado, el idioma español, los titulares aprobados y los cuatro beneficios.
- Los enlaces de navegación, CTA a `application.html`, `mailto:`, `tel:` y LinkedIn, con sus destinos actuales.
- Schema.org `Organization`, metadatos SEO y demás contenido no relacionado con presentación visual.
- Los logos oficiales y todos los PNG originales.
- El formulario y su comportamiento. `application.html` y `validation.js` quedan excluidos de cambios.
- Tailwind CSS por CDN, los tokens y la identidad visual aprobada.

No se añadirán nuevas páginas, funcionalidades, formularios, mensajes comerciales, promesas, datos empresariales o capacidades operativas.

## 5. Requisitos visuales, accesibilidad y responsive

- Aplicar cambios incrementales guiados por el mockup real; evitar reconstruir secciones o alterar la arquitectura si un ajuste de clases y la incorporación de imágenes bastan.
- **Hover de tarjetas informativas (aprobado e implementado):** en las tarjetas informativas estáticas de Servicios, Cobertura, Por qué TrackFlow y Contacto, un puntero capaz de hover puede producir únicamente un cambio sutil del color del borde hacia el turquesa de marca. La transición será breve y se desactivará con `prefers-reduced-motion`. No añadir elevación, escala, nueva sombra, cambio de fondo ni cursor de enlace; la tarjeta no debe parecer clicable. El estado solo se aplica a dispositivos que admiten hover con puntero fino. Enlaces y controles interiores conservan sus estados propios. No aplicar hover genérico a campos, controles, indicadores ni estados del formulario.
- Reutilizar recursos existentes y documentados en `design-system.md`. Mantener intactos los originales y respetar proporciones, orientación y transparencia real una vez comprobadas visualmente.
- Usar `width` y `height` correspondientes al recurso para reservar espacio cuando se conozcan. Mantener altura automática y evitar deformación, recortes no justificados y desbordamientos.
- Revisar cada imagen sobre el fondo y en los tamaños reales de la interfaz. No aplicar filtros, recoloreado, recortes, fundidos ni superposiciones sobre los archivos originales. Cualquier tratamiento de capa de interfaz debe estar aprobado y no ocultar contenido ni perjudicar el contraste.
- Proporcionar `alt` contextual para imágenes informativas y `alt=""` para imágenes estrictamente decorativas o redundantes, de acuerdo con la inspección visual y el contexto. No atribuir a las imágenes de almacén una autenticidad que no tienen.
- Mantener navegación por teclado, foco visible, jerarquía de encabezados, contraste WCAG AA aplicable y objetivos táctiles adecuados.
- Comprobar visualmente la adaptación en 320, 375, 768, 1280 y 1440 px y la ausencia de scroll horizontal o contenido recortado.
- Respetar reducción de movimiento y no introducir animación ornamental.

## 6. Fuera de alcance y restricciones

- Cambiar la arquitectura, rehacer la web o alterar su orden, contenido funcional o navegación.
- Modificar `uis/website/application.html`, `uis/website/validation.js`, lógica del formulario o su flujo.
- Cambiar logotipos, metadatos SEO, Schema.org, enlaces, backend, stack, dependencias o configuración global.
- Modificar o sustituir los PNG originales, o añadir recursos gráficos externos.
- Presentar el mapa conceptual como cartografía verificada o las ilustraciones generadas de almacenes como fotografías reales de las instalaciones.
- Dar por confirmada la similitud visual mientras no se haya podido inspeccionar el mockup y las imágenes.

## 7. Criterios de aceptación propuestos

1. La landing conserva las siete secciones en su orden, semántica, contenido funcional y destinos de navegación actuales.
2. Los cambios visuales se limitan a lo necesario para aproximarse al mockup; su correspondencia se documenta a partir de una inspección visual efectiva, no de suposiciones.
3. Solo se usan los recursos aprobados que, tras inspección, sean adecuados para el contexto de la sección. Los originales permanecen sin cambios.
4. El hero utiliza la variante que se confirme visualmente como concordante con el mockup; la elección no se realiza solo por el nombre o las dimensiones del archivo.
5. El mapa se presenta como conceptual y las dos imágenes generadas de almacenes no se identifican como fotografías documentales de las instalaciones.
6. Cada imagen tiene dimensiones intrínsecas reservadas cuando sean conocidas, mantiene proporción y no causa deformación, recorte relevante ni desbordamiento.
7. Todas las imágenes tienen alternativa textual apropiada según su función y contenido comprobado; las imágenes decorativas no añaden ruido accesible.
8. Se mantienen los requisitos de responsive, teclado, foco, contraste y reducción de movimiento definidos por el proyecto.
9. Las tarjetas informativas estáticas tienen únicamente el cambio sutil de borde aprobado en dispositivos con hover y puntero fino; no sugieren interacción de enlace ni incorporan elevación/escala/sombra. La transición respeta movimiento reducido y no afecta al formulario.
10. `application.html`, `validation.js`, los originales de marca, el contenido SEO/Schema.org, enlaces, stack y dependencias no cambian.
11. Los cambios potenciales en `styles.css` se justifican; se prefiere Tailwind existente si ofrece una solución clara.
12. Se registran las comprobaciones efectivamente ejecutadas y sus limitaciones; no se afirma validación visual si no se realizó.

## 8. Verificación prevista

Una vez aprobados especificación, plan y tareas, la verificación deberá incluir:

- Inspección del mockup y los recursos en un visor disponible, cotejando sección por sección antes de fijar los detalles visuales.
- Revisión manual de la landing en 320, 375, 768, 1280 y 1440 px.
- Comprobación de proporciones, textos alternativos, renderizado de recursos y ausencia de errores de carga, recortes o overflow.
- Navegación por teclado, foco, contraste y conservación de destinos de enlaces.
- Comparación de los diffs para confirmar que no se alteraron archivos excluidos ni originales.
- `git diff --check` y diagnósticos disponibles pertinentes.

La previsualización estática documentada en README puede usarse para servir la web; no equivale por sí sola a validar comportamiento ni apariencia. Informar las pruebas manuales realmente completadas y cualquier limitación del entorno.

## 9. Aprobación y siguiente etapa

Este borrador requiere aprobación explícita de su contenido. Tras aprobarse, se elaborará el plan SDD y se solicitará su aprobación; después se prepararán y someterán a aprobación las tareas. No implementar hasta completar esa secuencia.

El número `003` se asignó después de comprobar que las iniciativas existentes del proyecto son `001-mejora-visual-web` y `002-solicitud-informacion`. Esta especificación no modifica ni sustituye las decisiones de esas iniciativas; delimita una propuesta nueva para resolver la ampliación de alcance de forma aprobable.
