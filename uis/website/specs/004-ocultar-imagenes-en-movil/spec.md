# Borrador de especificación — Ocultar imágenes seleccionadas en móvil

| Campo                      | Valor                                                                   |
| -------------------------- | ----------------------------------------------------------------------- |
| **Estado**                 | Borrador para revisión y aprobación; no autoriza plan ni implementación |
| **Proyecto / área**        | TrackFlow · `uis/website/`                                              |
| **Tipo de cambio**         | Ajuste responsive de presentación de cuatro imágenes en la landing      |
| **Documento**              | `spec.md` · alcance y criterios de aceptación                           |
| **Iniciativa relacionada** | `003-adaptacion-visual-mockup` (adaptación visual ya implementada)      |

> Esta especificación propone ocultar cuatro imágenes en viewport móvil y retirar con ellas todo el espacio que ocupan. No autoriza cambios en `index.html`, `styles.css` ni recursos. Tras su aprobación se preparará el plan para aprobación; las tareas se redactarán y aprobarán en la etapa posterior, siguiendo el flujo SDD.

## 1. Contexto y objetivo

La landing de TrackFlow integra imágenes en la cabecera de Servicios, la cabecera de Contacto y las tarjetas de Cobertura de Los Ángeles y Zaragoza. En pantallas móviles, estas imágenes apiladas alargan las secciones y generan una presentación que se quiere simplificar.

El objetivo es que esas cuatro imágenes no se muestren en móvil y que al ocultarlas no permanezcan figuras vacías, márgenes, alturas reservadas ni huecos en el flujo. Se conserva el texto, la información de cobertura y el resto del diseño responsive.

## 2. Referencias y estado actual

Antes de elaborar el plan se deberán consultar de nuevo las instrucciones del repositorio, `uis/website/design-system.md`, `uis/website/BRIEFING.md`, `uis/website/index.html`, `uis/website/styles.css` y los artefactos aprobados de `uis/website/specs/003-adaptacion-visual-mockup/`.

Las rutas siguientes son relativas a `uis/website/`. En el estado revisado, cada imagen está dentro de un elemento `<figure>` en la landing:

| Sección                 | Recurso que se propone ocultar           | Ubicación actual                              |
| ----------------------- | ---------------------------------------- | --------------------------------------------- |
| Servicios               | `assets/images/servicios-logisticos.png` | Figura de la cabecera de Servicios            |
| Cobertura — Los Ángeles | `assets/images/almacen-los-angeles.png`  | Figura dentro de la tarjeta de Estados Unidos |
| Cobertura — Zaragoza    | `assets/images/almacen-zaragoza.png`     | Figura dentro de la tarjeta de España         |
| Contacto                | `assets/images/despacho-trackflow.png`   | Figura de la cabecera de Contacto             |

La propuesta afecta solo a estas cuatro imágenes. No comprende el hero, el mapa conceptual de Cobertura, la ilustración del centro de operaciones en «Por qué TrackFlow», iconos, banderas, logotipos u otros recursos.

## 3. Alcance propuesto

- En viewport móvil, ocultar completamente la figura que contiene cada una de las cuatro imágenes de la tabla. Ocultar el `<figure>` completo —no únicamente el `<img>`— para que desaparezcan también sus márgenes y no se reserve espacio en el layout.
- Propuesta de definición para aprobación: considerar móvil un viewport de menos de `768 CSS px`, correspondiente al breakpoint `md` ya utilizado por el sitio. Desde `768 CSS px` en adelante, conservar la presentación responsive actual. Si se aprueba un umbral distinto, concretarlo en el plan antes de implementar.
- Mantener las imágenes visibles en tablet y escritorio, sin alterar sus archivos, referencias, dimensiones intrínsecas, alternativas textuales o apariencia actual en esos tamaños.
- Dejar intactos titulares, introducciones, tarjetas, datos de países/ciudades/cobertura/transportistas, enlaces, llamadas a la acción y orden de las secciones.
- Mantener el uso de Tailwind CDN y las convenciones del proyecto; no introducir dependencias.

## 4. Requisitos de comportamiento y layout

1. Por debajo del breakpoint móvil aprobado, las cuatro figuras no son visibles ni participan en el flujo de maquetación.
2. No queda altura, margen, padding, columna vacía ni espacio reservado atribuible a esas figuras. El contenido siguiente sube de forma natural y el flujo vertical mantiene el espaciado ordinario definido por los contenedores y el Design System.
3. En la tarjeta de cada almacén, al no mostrarse la figura, el texto y el `<dl>` conservan una disposición legible y no dejan una columna vacía o una proporción de dos columnas incompleta.
4. En tablet y escritorio (desde el umbral aprobado), se conserva la disposición existente de las cuatro imágenes, incluidas las tarjetas de cobertura en horizontal donde las reglas actuales lo indiquen.
5. La ocultación no depende de JavaScript ni modifica navegación, contenido accesible de otros elementos o interacción de la página.
6. No se aplican reglas generales que oculten otros recursos gráficos. El alcance debe quedar limitado a estas cuatro figuras identificadas.

## 5. Accesibilidad y responsive

- Mantener la lectura y el orden semántico de títulos, párrafos y datos cuando las imágenes no están presentes visualmente.
- La figura oculta con `display: none` no debe conservarse como contenido visible o enfocable; las imágenes no son controles interactivos.
- No añadir texto alternativo ni mensajes sustitutos que no estén respaldados por el briefing. Los `alt` existentes se conservan para los tamaños donde se muestran.
- Confirmar ausencia de scroll horizontal, columnas vacías y saltos de espaciado en anchos móviles representativos. Revisar también el cambio en el umbral de móvil y el layout desde tablet hasta escritorio.
- Respetar el Design System y las convenciones responsive existentes.

## 6. Fuera de alcance

- Ocultar o sustituir otras imágenes de la página, incluidas la del hero, el mapa de Cobertura y la imagen de «Por qué TrackFlow».
- Eliminar, editar, comprimir, renombrar, mover o reemplazar cualquier archivo gráfico.
- Modificar copy, datos comerciales, alt text, tarjetas, CTA, navegación, formularios, `application.html` o `validation.js`.
- Rediseñar la composición móvil completa o realizar cambios de espaciado no requeridos por el colapso de las figuras.
- Añadir funcionalidad JavaScript, dependencias, build o CSS global no justificado.

## 7. Criterios de aceptación propuestos

1. En viewports menores al breakpoint móvil que se apruebe, no se muestran `servicios-logisticos.png`, `despacho-trackflow.png`, `almacen-zaragoza.png` ni `almacen-los-angeles.png`.
2. Las figuras completas correspondientes dejan de ocupar espacio; no quedan márgenes, alturas ni huecos vacíos a causa de ellas.
3. Los títulos, textos y datos de Servicios, Cobertura y Contacto siguen presentes y en orden de lectura coherente.
4. Las tarjetas de Los Ángeles y Zaragoza ocupan el espacio disponible sin una columna vacía y conservan toda su información.
5. Desde el breakpoint móvil aprobado en adelante, las imágenes y composiciones actuales se conservan.
6. No cambian ni se alteran los cuatro archivos de imagen ni los recursos y secciones excluidos.
7. La inspección responsive confirma que no hay desbordamiento horizontal ni regresiones de layout en viewport móvil, en el punto de transición y en tamaños de tablet/escritorio.
8. Se documentan solo las verificaciones realizadas; servir la página estática no se presenta como validación visual por sí solo.

## 8. Verificación prevista

Después de aprobar especificación, plan y tareas, la validación deberá incluir revisión del DOM y estilos aplicados, previsualización responsive en anchos móviles por debajo del umbral, en el umbral y en tamaños tablet/escritorio, comprobación de que las cuatro figuras colapsan sin huecos, comprobación de que las cuatro siguen visibles desde tablet, y revisión de que los cambios no exceden los archivos aprobados. Ejecutar además `git diff --check` y los diagnósticos pertinentes. Registrar límites de navegador o visor, si los hubiera; no afirmar comprobaciones visuales no ejecutadas.

## 9. Aprobación y siguiente etapa

Este borrador requiere aprobación explícita, incluyendo el breakpoint móvil propuesto (`<768 CSS px`). Después de aprobarlo se elaborará `plan.md` y se solicitará su aprobación independiente. Luego se preparará `tasks.md` para aprobación antes de implementar. La existencia de esta especificación no aprueba el plan, las tareas ni cambios en la landing.
