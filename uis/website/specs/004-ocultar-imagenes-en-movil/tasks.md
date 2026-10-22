# Tareas — Ocultar cuatro imágenes en viewport móvil

| Campo               | Valor                                                                   |
| ------------------- | ----------------------------------------------------------------------- |
| **Estado**          | Implementación aplicada y revisada por el usuario; viewports concretos no documentados |
| **Especificación**  | [`spec.md`](./spec.md) (aprobada)                                       |
| **Plan**            | [`plan.md`](./plan.md) (aprobado)                                       |
| **Proyecto / área** | TrackFlow · `uis/website/`                                              |

> Las tareas fueron aprobadas antes de implementar. El usuario confirma que ya revisó la iniciativa en navegador y no identifica trabajo adicional pendiente. No se detallaron las anchuras revisadas; por tanto, no se atribuyen a esa revisión resultados concretos para 767/768 px ni para otros viewports. Las casillas de abajo conservan el registro de verificaciones específicas efectivamente documentadas.

## 1. Preparación y confirmación del alcance

- [x] **1.1 Revisar el estado del repositorio antes de implementar.** Inspeccionados `git status` y diffs relevantes. Se conservaron los cambios preexistentes, incluidos cambios en `index.html`, `styles.css`, imágenes, Design System, bitácora y artefactos SDD.
- [ ] **1.2 Confirmar la configuración efectiva de Tailwind.** La configuración inline completa inspeccionada solo extiende tokens y no redefine `screens`; no se pudo comprobar en runtime que `md` se active a `768 CSS px` porque no hay navegador ni automatización instalados. Confirmar este punto en navegador antes de cerrar la iniciativa.
- [x] **1.3 Reconfirmar los cuatro objetivos.** Reconfirmadas las cuatro figuras exactas de Servicios, Los Ángeles, Zaragoza y Contacto; sus ubicaciones y estructura corresponden a `spec.md` y `plan.md`.

## 2. Implementación localizada

- [x] **2.1 Ocultar las cuatro figuras solo por debajo de `md`.** Añadidas las clases Tailwind `hidden md:block` a los cuatro `<figure>` identificados, sin cambiar sus otras clases ni elementos interiores.
- [x] **2.2 Preservar contenido y recursos.** La edición de esta iniciativa solo añadió clases a los `<figure>`; no se añadieron cambios de JavaScript, CSS ni dependencias. Se conservaron los atributos y el contenido interior de las cuatro figuras.

## 3. Verificación funcional y responsive

- [ ] **3.1 Verificar el umbral calculado.** Pendiente: no hay navegador disponible para inspeccionar estilos calculados con Tailwind CDN a `767` y `768 CSS px`, ni en `320`, `375`, `1024` y `1280 CSS px`.
- [ ] **3.2 Revisar el colapso móvil.** En anchuras menores a 768 px, confirmar que las figuras no generan altura, margen, padding ni hueco; que las cabeceras de Servicios y Contacto no conservan el espacio de la figura; y que las tarjetas de Los Ángeles y Zaragoza conservan texto y datos sin una columna vacía ni desbordamiento horizontal.
- [ ] **3.3 Revisar no regresión desde `md`.** Confirmar que las cuatro imágenes se muestran desde 768 px, que las clases `lg:*` conservan la composición actual y que las tarjetas de cobertura cambian a su layout existente al alcanzar `lg`.
- [x] **3.4 Revisar alcance del diff.** Confirmado que el cambio propio para esta iniciativa se limita a las clases añadidas a los cuatro `<figure>` de `index.html`; las demás modificaciones preexistentes se conservaron.

## 4. Cierre y documentación

- [x] **4.1 Ejecutar las comprobaciones disponibles.** `git diff --check` terminó sin errores; `get_errors` no encontró errores para `index.html`; una inspección estática confirmó que cada recurso objetivo tiene exactamente una figura con `hidden md:block` y que hay cuatro figuras afectadas. No se ejecutó previsualización responsive por falta de navegador.
- [x] **4.2 Registrar resultados y límites.** Los resultados estáticos y la confirmación del usuario de una revisión visual general están anotados en `memory-bank/progress.md`. No se conocen los viewports inspeccionados ni se atribuye al agente una comprobación visual o de estilos calculados.
- [x] **4.3 Actualizar `memory-bank/progress.md` tras la implementación verificada.** La bitácora registra la implementación aplicada como trabajo aún pendiente de cierre responsive; se conservaron las ediciones preexistentes.
- [x] **4.4 Revisión final.** Revisados el diff y el estado; se conservaron los cambios ajenos. No se creó commit.

## 5. Fuera de alcance

No editar `styles.css`, `design-system.md`, `application.html`, `validation.js`, imágenes ni otras secciones como parte de estas tareas. No ocultar el hero, el mapa, la imagen de «Por qué TrackFlow», iconos, banderas, logotipos ni otros recursos. No introducir nuevos breakpoints, dependencias o build. Cualquier discrepancia que requiera ampliar o cambiar el alcance debe volver a aprobación SDD antes de continuar.

## 6. Aprobación

Este borrador requiere aprobación explícita antes de ejecutar cualquiera de las tareas, especialmente la modificación de `index.html`. La aprobación de `spec.md` y `plan.md` no sustituye la aprobación de este documento.
