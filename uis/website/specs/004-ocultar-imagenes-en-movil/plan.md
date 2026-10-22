# Plan — Ocultar cuatro imágenes en viewport móvil

| Campo               | Valor                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Estado**          | Borrador para revisión y aprobación; no autoriza implementación                                                                                                        |
| **Especificación**  | [`spec.md`](./spec.md) (aprobada por el usuario el 2026-10-22)                                                                                                         |
| **Proyecto / área** | TrackFlow · `uis/website/`                                                                                                                                             |
| **Alcance**         | Ocultar en viewport menor a 768 CSS px las cuatro figuras identificadas en la especificación; conservarlas visibles desde 768 px sin alterar su apariencia responsive. |

> La aprobación de `spec.md` no aprueba este plan ni las futuras tareas. No se ha modificado código. Se requiere aprobación explícita de este plan y, después, aprobación de `tasks.md` antes de implementar.

## 1. Objetivo

Aplicar una ocultación localizada y responsive a las cuatro figuras identificadas en `spec.md`, para que desaparezcan por completo en viewports menores a `768 CSS px`, incluidos sus márgenes y su participación en el flujo. Desde `768 CSS px` en adelante se mantiene el comportamiento actual.

La solución debe ser mínima, reversible y coherente con el HTML estático y Tailwind CSS por CDN. No se añadirán JavaScript, dependencias, build, cambios a imágenes ni modificaciones visuales fuera del comportamiento aprobado.

## 2. Referencias técnicas verificadas

- La especificación aprobada es la fuente de alcance y aceptación: [`spec.md`](./spec.md).
- La página es HTML estático en `uis/website/index.html`; Tailwind se carga por CDN y el breakpoint estándar `md` del framework es el umbral propuesto por la especificación: ocultar en el estilo base y mostrar desde `md` (`768px`). Antes de implementar se comprobará la configuración efectiva del CDN y que el sitio no haya redefinido `md`.
- Las cuatro imágenes están dentro de `<figure>` y su ubicación actual se verificó en `index.html`:

| Figura                                   | Sección y ubicación                                                                                                                     | Efecto de ocultar la figura                                                                                                                                |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/images/servicios-logisticos.png` | Cabecera de `#servicios`; figura con `mt-4 w-full px-5`, y `lg:mt-0 lg:px-0`                                                            | Retira imagen, margen superior y padding horizontal propios de la figura en móvil; desde `md` se conserva exactamente la apariencia existente.             |
| `assets/images/almacen-los-angeles.png`  | Dentro de la tarjeta `#cobertura`, en `article.coverage-location`; figura con `mt-6 w-full shrink-0`, y `lg:mt-0 lg:w-[46%] xl:w-[48%]` | Evita el bloque visual de la imagen y su margen superior en móvil; el texto y el `<dl>` quedan en el flujo. En `lg+` se mantiene la imagen lateral actual. |
| `assets/images/almacen-zaragoza.png`     | Dentro de la tarjeta `#cobertura`, misma estructura que Los Ángeles                                                                     | Igual que la figura de Los Ángeles.                                                                                                                        |
| `assets/images/despacho-trackflow.png`   | Cabecera de `#contacto`; figura con `mt-4 w-full px-5`, y `lg:mt-0 lg:px-0`                                                             | Retira imagen, margen superior y padding horizontal propios de la figura en móvil; desde `md` se conserva exactamente la apariencia existente.             |

Las imágenes de `#cobertura` son elementos hermanos de la columna de texto dentro de una composición `flex flex-col lg:flex-row`. Al ocultar completamente el `<figure>`, la columna de texto dispone del espacio de la tarjeta y no queda un segundo elemento vacío. Las cabeceras `#servicios` y `#contacto` usan grid en `lg` y flujo normal por debajo: un `<figure>` con `display:none` no genera celda ni espacio en móvil, md o pantallas intermedias.

## 3. Decisiones de implementación propuestas

1. Mantener Tailwind CDN y usar utilidades responsive existentes, sin CSS adicional: cada `<figure>` objetivo recibe la clase `hidden md:block`. La utilidad base `hidden` aplica `display:none`; `md:block` restablece el tipo de presentación del elemento desde `768px`.
2. Aplicar la clase solo a los cuatro `<figure>` de la tabla; no a los `<img>` ni a selectores genéricos de `figure`, `img`, sección o `.coverage-location`.
3. En las figuras de Servicios y Contacto, `md:block` recupera el comportamiento de bloque desde el mismo umbral propuesto en la especificación. Sus utilidades `lg:*` continúan activándose en su breakpoint actual, sin alterarlas.
4. En las figuras de almacén, `md:block` muestra de nuevo la figura a partir de 768 px. Las clases flex de la tarjeta siguen apiladas hasta `lg`, exactamente como ahora, y se conservan sus tamaños y orden actuales.
5. No se cambian atributos `src`, `alt`, `width`/`height`, estructura interior, contenedores padres, textos, IDs, datos, enlaces, estilos de las imágenes ni archivos de recursos.
6. No tocar `styles.css`, `design-system.md`, `application.html`, `validation.js` ni `memory-bank/` para la implementación, salvo que una necesidad verificada y aprobada requiera actualizar el registro de progreso al completar el trabajo. No cambiar la identidad visual ni decisiones del Design System.

**Punto a confirmar antes de codificar:** Tailwind CDN conserva el breakpoint predeterminado `md` de 768 CSS px. Aunque el fragmento de configuración actual solo extiende tokens de color, fuente y tipografía, revisar el archivo completo y el comportamiento calculado antes de implementar. Si la configuración efectiva difiriese, detenerse y solicitar aprobación para ajustar el plan; no introducir un valor alternativo sin autorización.

## 4. Archivos previstos

| Ruta                                                       | Acción prevista                                           | Restricción                                                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `uis/website/index.html`                                   | Modificar solo las clases de cuatro `<figure>` existentes | Añadir `hidden md:block`; no reescribir markup ni cambiar otras clases/contenido.                |
| `uis/website/styles.css`                                   | Sin cambios previstos                                     | No requiere regla nueva si Tailwind aplica el breakpoint aprobado.                               |
| `uis/website/assets/images/*`                              | Sin cambios                                               | No modificar, renombrar, mover, comprimir ni sustituir imágenes.                                 |
| `uis/website/specs/004-ocultar-imagenes-en-movil/spec.md`  | Sin cambios de alcance                                    | Mantener la especificación aprobada.                                                             |
| `uis/website/specs/004-ocultar-imagenes-en-movil/tasks.md` | Crear después de aprobar este plan                        | Desglosar las modificaciones y pruebas; requerirá aprobación independiente antes de implementar. |

## 5. Secuencia propuesta para las tareas

Tras aprobar este plan, redactar tareas que sigan esta secuencia, sin ejecutarlas todavía:

1. Verificar la configuración Tailwind y confirmar que `md` corresponde a 768 CSS px; confirmar de nuevo los cuatro `figure` y el estado de trabajo del repositorio.
2. Añadir `hidden md:block` únicamente a los `<figure>` de Servicios, Los Ángeles, Zaragoza y Contacto.
3. Revisar diff y comprobar el efecto responsive, la ausencia de huecos en móvil y la conservación exacta de la composición desde `md`. Revisar en particular las dos tarjetas de cobertura y el umbral de 768 px.
4. Ejecutar `git diff --check`, diagnósticos disponibles y las comprobaciones de preview que permita el entorno; registrar qué se ejecutó y qué quedó pendiente.
5. Actualizar `memory-bank/progress.md` solo con el avance verificable después de completar la implementación aprobada, preservando ediciones preexistentes. No editarlo en esta etapa de planificación.

Las tareas concretarán los viewports de prueba y la forma de documentar limitaciones. La lista de tareas será un artefacto separado que debe aprobarse antes de cualquier cambio de implementación.

## 6. Verificación y criterios operativos

- **Umbral:** comprobar en viewports menores que 768 px que las cuatro figuras tienen `display:none`; comprobar que a 768 px pasan a display de bloque. Confirmar asimismo 320/375/767 px y 768/1024/1280 px si la previsualización disponible lo permite.
- **Colapso:** en móvil no deben quedar margen, padding, altura ni hueco de las figuras. Comprobar que Servicios y Contacto reducen la cabecera sin afectar el margen entre cabecera y tarjetas, y que las tarjetas de Los Ángeles/Zaragoza conservan su texto y datos sin columna vacía.
- **No regresión:** a partir de 768 px las cuatro imágenes se muestran y el diseño se mantiene. Revisar la transición `md` y el cambio a layout `lg` en las tarjetas de almacén.
- **Alcance del diff:** solo deben variar las clases de los cuatro `<figure>` de `index.html`; no deben cambiar `src`, `alt`, atributos de dimensiones, imágenes, otros recursos ni secciones.
- Ejecutar `git diff --check` y diagnósticos pertinentes. Usar la previsualización estática según documentación cuando el navegador esté disponible; el servidor por sí solo no prueba la apariencia. Registrar explícitamente cualquier viewport o revisión visual que no se pudiera comprobar.

## 7. Riesgos y mitigaciones

- **Breakpoint efectivo distinto del predeterminado:** comprobar la configuración runtime de Tailwind antes de modificar. Si `md` no fuese 768 px, detenerse y pedir decisión; no aplicar silenciosamente otro breakpoint.
- **Figura con espaciado propio:** ocultar la figura completa, no solo el `img`, para retirar `mt-*` y `px-*` asociados y no reservar caja en la cabecera.
- **Composición de almacenes:** las figuras están dentro de tarjetas y en flex con orientación de columna por debajo de `lg`; confirmar que los elementos hermanos llenan el ancho disponible después de ocultarlas y que el layout de escritorio permanece intacto.
- **CSS no generado por el CDN en un entorno sin red:** el sitio requiere conexión para Tailwind. Diferenciar esa limitación de un fallo de las clases y no afirmar que la previsualización funcionó si la CDN no cargó.

## 8. Aprobación y siguiente etapa

Este plan se somete a aprobación explícita. La aprobación habilitará la preparación de `tasks.md`, no la implementación. Después, las tareas requerirán su propia aprobación y autorización antes de editar `index.html`.
