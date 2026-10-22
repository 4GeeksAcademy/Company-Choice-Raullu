# Especificación — Formulario de solicitud de información de TrackFlow

| Campo               | Valor                                                                             |
| ------------------- | --------------------------------------------------------------------------------- |
| **Estado**          | Base y enmienda aprobadas; implementación aplicada, verificación manual pendiente |
| **Proyecto / área** | TrackFlow · `uis/website/`                                                        |
| **Tipo de cambio**  | Completar la página de solicitud comercial del Hito 1                             |
| **Documento**       | `spec.md` · requisitos y criterios de aceptación; no es un plan de implementación |

## 1. Contexto y objetivo

TrackFlow necesita que empresas de e-commerce interesadas en externalizar su logística puedan presentar una solicitud comercial estructurada. La landing ya enlaza a `application.html`, pero esa página todavía no contiene una experiencia de formulario. Esta iniciativa completa esa página, sus validaciones en el navegador y una confirmación de recepción simulada.

El formulario se dirige exclusivamente a prospectos B2B; no es un canal de seguimiento de paquetes ni de gestión de devoluciones para consumidores. Debe reducir la ambigüedad de las consultas comerciales sin crear integraciones ni almacenar los datos.

## 2. Fuentes y decisiones rectoras

- `uis/website/BRIEFING.md` es la fuente de verdad para campos, opciones, reglas y mensajes del formulario.
- `BRIEFING.md` de la raíz aporta contexto operativo y comercial; no se presentarán como capacidades actuales las necesidades futuras descritas allí.
- `uis/website/design-system.md` rige la identidad visual, tokens, tipografía, recursos, componentes y estados.
- `AGENTS.md`, `.agents/rules/development.md` y `.agents/rules/frontend.md` rigen alcance, ubicación y aprobaciones SDD.
- La experiencia de este hito es en español. No se añadirá soporte multiidioma.
- Tailwind CSS se carga actualmente por CDN y Lucide está disponible como SVG local estático. No se introducirán dependencias ni un proceso de build.
- El marcado Schema.org `Organization` ya está en `index.html`; se conserva allí y no se duplicará en la página del formulario salvo que el plan aprobado justifique una necesidad concreta.

## 3. Alcance

La iniciativa comprende:

1. Completar `uis/website/application.html` con una página semántica, responsive y coherente con la landing.
2. Incorporar los campos y opciones definidos en el briefing, sin añadir campos.
3. Implementar en `uis/website/validation.js` la validación, los estados de interacción, el contador, la advertencia aprobada y la simulación de envío.
4. Conservar Tailwind CDN, los tokens existentes, los recursos oficiales y la navegación de vuelta a la landing.
5. Organizar el formulario en cuatro pasos consecutivos con validación por paso y navegación accesible.
6. **Propuesta de enmienda pendiente:** distribuir «Limpiar formulario» a la izquierda y la navegación a la derecha; alinear el encabezado introductorio con la tarjeta.
7. Verificar el flujo completo, accesibilidad aplicable, responsive y metadatos de la página.

La implementación se realizará únicamente después de aprobar esta especificación, el plan y las tareas en sus respectivas etapas.

## 4. Campos y opciones requeridos

Se deben incluir exactamente estos campos. Los identificadores y valores técnicos de `name`/`value` se concretarán en el plan usando el briefing y las convenciones comprobadas; no se establecen convenciones nuevas en esta especificación.

| Campo                                 | Tipo HTML           | Obligatorio | Opciones o regla                                                                                        |
| ------------------------------------- | ------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| Nombre de la empresa                  | `text`              | Sí          | Mínimo 2 caracteres                                                                                     |
| Persona de contacto                   | `text`              | Sí          | Al menos dos palabras: nombre y apellido                                                                |
| Email corporativo                     | `email`             | Sí          | Formato válido de email; no se añadirá una restricción de dominio no descrita en el briefing            |
| Teléfono                              | `tel`               | Sí          | Comenzar por `+` e incluir código de país y número                                                      |
| Sitio web de la empresa               | `url`               | No          | Si se proporciona, URL válida que comience con `http://` o `https://`                                   |
| País de operación principal           | `select`            | Sí          | Estados Unidos / España / Ambos / Otro                                                                  |
| Tipo de producto                      | `select`            | Sí          | Moda / Electrónica / Cosmética / Alimentación / Otro                                                    |
| Volumen mensual estimado de envíos    | `select`            | Sí          | 0-100 / 101-500 / 501-2000 / 2000+ / No estoy seguro                                                    |
| Servicios de interés                  | Grupo de `checkbox` | Sí          | Almacenaje / Última milla / Logística inversa; seleccionar uno o más                                    |
| ¿Actualmente trabajas con otro 3PL?   | Grupo de `radio`    | Sí          | Sí / No / Estoy evaluando opciones                                                                      |
| Comentarios o necesidades específicas | `textarea`          | No          | Máximo 500 caracteres                                                                                   |
| Aviso provisional de privacidad       | `checkbox`          | Sí          | Debe marcarse para poder ejecutar la simulación local; no constituye aceptación de una política vigente |

Cada control tendrá una etiqueta asociada mediante `for`/`id`. Se usará `fieldset` y `legend` para los grupos de checkbox y radio, y para otros grupos cuando ayude a entender la estructura. Los campos obligatorios se identificarán visual y programáticamente. El formulario tendrá exactamente los cuatro pasos descritos en la sección 6; no se añadirán campos ni pasos.

Los campos se distribuirán así:

1. **Datos de empresa y contacto:** nombre de la empresa, persona de contacto, email corporativo, teléfono y sitio web.
2. **Operación logística:** país de operación principal, tipo de producto, volumen mensual estimado y servicios de interés.
3. **Relación con proveedores 3PL:** pregunta sobre si actualmente trabaja con otro 3PL.
4. **Comentarios y privacidad:** comentarios o necesidades específicas y aviso provisional de privacidad.

## 5. Requisitos funcionales

### 5.1. Validación

Validar los doce casos del briefing: longitud mínima de empresa; nombre y apellido; formato de email; teléfono internacional; URL opcional; país, producto y volumen seleccionados; al menos un servicio; respuesta sobre el 3PL actual; máximo de 500 caracteres en comentarios; y aceptación de privacidad.

Se respetarán los límites del briefing. En particular, no se inferirá que «email corporativo» exige bloquear proveedores de correo personales: el briefing solo pide un formato de email válido.

Mensajes literales de error:

| Campo                  | Mensaje                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| Nombre de la empresa   | `El nombre de la empresa debe tener al menos 2 caracteres`            |
| Persona de contacto    | `Ingresa nombre y apellido del contacto`                              |
| Email corporativo      | `Ingresa un email corporativo válido (ejemplo: <nombre@empresa.com>)` |
| Teléfono               | `El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)`  |
| Sitio web              | `Si incluyes sitio web, debe ser una URL válida`                      |
| País                   | `Selecciona el país de operación principal`                           |
| Tipo de producto       | `Selecciona el tipo de producto que manejas`                          |
| Volumen mensual        | `Selecciona el volumen mensual estimado`                              |
| Servicios de interés   | `Selecciona al menos un servicio de interés`                          |
| 3PL actual             | `Indica si actualmente trabajas con otro proveedor logístico`         |
| Comentarios            | `Los comentarios no pueden exceder 500 caracteres (quedan X)`         |
| Política de privacidad | `Debes aceptar la política de privacidad para continuar`              |

Los errores aparecerán junto al control o grupo correspondiente, explicarán la corrección y no dependerán solo del color. Se actualizarán o desaparecerán al corregir el dato. Se asociarán accesiblemente con el control mediante atributos ARIA cuando corresponda.

### 5.2. Momento de validación

- No presentar errores en todos los campos antes de la interacción.
- Validar al perder el foco cuando sea apropiado.
- Al corregir un campo que ya mostró error, actualizar su estado sin esperar un nuevo envío.
- Validar `select`, checkbox y radio al cambiar su selección.
- **Propuesta de enmienda (pendiente de aprobación):** al pulsar **Siguiente**, validar todos los campos del paso actual. Si hay errores, mostrarlos junto a sus campos e impedir avanzar. Si todos los campos del paso son válidos, permitir avanzar.
- Mantener la validación en tiempo real existente.
- Al pulsar **Anterior**, permitir regresar sin bloquear la navegación por errores y conservar los datos introducidos.
- **Propuesta de enmienda (pendiente de aprobación):** al pulsar **Enviar solicitud** en el último paso, validar ese paso y comprobar nuevamente el formulario completo antes de simular el envío. No mostrar éxito si hay errores en ningún paso.
- **Propuesta de enmienda (pendiente de aprobación):** si la comprobación completa detecta errores en un paso anterior, mostrarlos de forma accesible, navegar al primer paso con errores y enfocar el primer control inválido de ese paso. No intentar enfocar controles dentro de pasos ocultos.
- Conservar todas las reglas y mensajes literales especificados en `uis/website/BRIEFING.md`; la comprobación completa reutilizará esas mismas reglas y mensajes, sin introducir restricciones nuevas.
- Los datos introducidos se conservarán al volver a pasos anteriores y al navegar entre pasos.

### 5.3. Contador y advertencia

- Mostrar un contador visible para comentarios, con límite de 500, actualizado mientras se escribe.
- Bloquear la entrada adicional al alcanzar 500 caracteres y mostrar cuántos quedan disponibles.
- Conservar el mensaje de error del briefing como validación defensiva para un valor inválido excepcional: `Los comentarios no pueden exceder 500 caracteres (quedan X)`. `X` representa la cantidad de caracteres que excede 500 y que habría que eliminar; el límite preventivo evita este error durante la interacción normal.
- La advertencia comercial literal será: `Para volúmenes menores a 100 envíos mensuales, nuestros servicios podrían no ser la solución más eficiente. ¿Seguro que quieres continuar?`
- La advertencia se mostrará cuando el volumen sea `0-100 envíos/mes`, independientemente del tipo de producto. Es informativa: no es un error de validación y no requiere confirmación para continuar.
- La advertencia aparecerá inmediatamente debajo del selector de volumen, manteniendo una relación visual y programática clara con ese control.

### 5.4. Navegación por pasos

- Presentar exactamente cuatro pasos, en el orden y con los campos definidos en la sección 4.
- Incluir una indicación accesible del paso actual y de los pasos restantes; el paso actual debe identificarse visual y programáticamente.
- Cada paso tendrá un encabezado descriptivo. Al cambiar de paso, mover el foco al encabezado del nuevo paso para que el cambio se anuncie y el teclado continúe en un lugar predecible.
- Ofrecer navegación **Siguiente** y **Anterior** según corresponda. El primer paso no tendrá botón **Anterior** y el último ofrecerá la acción de envío.
- **Siguiente** validará el paso actual antes de avanzar. **Anterior** permitirá regresar sin perder ningún dato introducido.
- No permitir saltar a pasos posteriores sin completar la validación de los pasos precedentes.
- Mantener la orientación y el contexto del paso sin depender únicamente del color ni de iconos.

### 5.5. Botones, reinicio y envío simulado

- Incluir el botón principal **Enviar solicitud**, que valida antes de mostrar éxito.
- **Propuesta de enmienda (pendiente de aprobación):** en la zona de acciones, ubicar **Limpiar formulario** en el extremo inferior izquierdo y agrupar la navegación en el extremo inferior derecho. Cuando estén disponibles ambos controles de navegación, su orden visual y de teclado será **Anterior** y después **Siguiente**; en el último paso, **Enviar solicitud** ocupará el lugar de **Siguiente**. En el primer paso no se mostrará **Anterior**.
- Incluir el botón secundario **Limpiar formulario**, que restablece valores, errores, contador, advertencias, paso actual y confirmación, y vuelve al primer paso.
- Si hay errores, impedir el éxito y llevar la atención al primer error.
- Si el envío es válido, ocultar el formulario completo y mostrar únicamente la confirmación de éxito y su aclaración de demostración/no envío. La confirmación debe ocupar el área principal de la experiencia, estar disponible para tecnologías de asistencia y no dejar controles del formulario visibles o alcanzables por teclado.
- Si el formulario es válido y la advertencia no requiere una decisión adicional, mostrar de forma visible y accesible:

  **¡Gracias por tu interés en TrackFlow!**

  `Hemos recibido tu solicitud. Nuestro equipo comercial revisará tu información y te contactará en las próximas 24-48 horas para agendar una llamada y conocer tus necesidades logísticas en detalle.`

  `Si tienes alguna consulta urgente, escríbenos directamente a comercial@trackflow.com`

  El correo se presentará como enlace `mailto:comercial@trackflow.com`.

- La notificación de éxito estará disponible para tecnologías de asistencia.
- El envío será una simulación local. No hará solicitudes HTTP ni enviará, persistirá o expondrá los datos a servicios externos. La página y el resultado deben aclarar que Comercial no recibirá la solicitud.
- El texto provisional del checkbox será: `He leído el aviso provisional de privacidad (solo para la demostración; no es una política vigente).` No llevará enlace.
- El aviso ficticio visible será: **Aviso provisional de privacidad para demostración (ficticio; no vigente).** `Este formulario es una demostración local. La información que escribas se utiliza solo en tu navegador para mostrar las validaciones y el flujo; no se envía ni almacena. No introduzcas datos personales o confidenciales reales. Esta nota no constituye una política de privacidad ni describe un tratamiento real. La política aplicable y los datos de responsable, finalidades, base jurídica, conservación, destinatarios, derechos y contacto están pendientes de definición y aprobación. Este aviso debe sustituirse antes de publicar el formulario para uso real.`

## 6. Experiencia visual y navegación

- Mantener continuidad con `index.html` y aplicar estrictamente `design-system.md`: superficies claras, tipografía y tokens corporativos, bordes, radios, espaciado y estados existentes.
- Presentar claramente que el formulario y el mensaje de éxito son una demostración local y que los datos no llegarán al equipo comercial; no invitar a introducir información personal o confidencial real.
- Usar Tailwind mediante el CDN ya utilizado por el sitio y priorizar clases utilitarias. No añadir estilos inline. El CSS personalizado solo podrá proponerse en el plan si existe una necesidad concreta que Tailwind no resuelva razonablemente.
- Usar los recursos oficiales existentes; conservar los originales y el favicon. Los iconos funcionales, si se necesitan, serán SVG estáticos Lucide ya disponibles. No son obligatorios en cada campo.
- Incluir logo oficial, enlace claro para volver a la landing, título de página que indique la solicitud comercial e introducción breve dirigida a empresas de e-commerce.
- Organizar el contenido como un flujo de cuatro pasos, con estos títulos y agrupación: **Datos de empresa y contacto**; **Operación logística**; **Relación con proveedores 3PL**; **Comentarios y privacidad**.
- Dar espacio suficiente entre la flecha de cada selector desplegable y el borde derecho del control, de acuerdo con el sistema visual y sin comprometer la indicación nativa de apertura.
- Mostrar la advertencia de volumen `0-100` inmediatamente debajo del selector correspondiente.
- Adaptar progresivamente el formulario a móvil, tablet y escritorio; en móvil, usar disposición vertical, controles legibles y botones cómodos de accionar. No debe haber desbordamiento horizontal.
- **Propuesta de enmienda (pendiente de aprobación):** el encabezado introductorio y la tarjeta del formulario compartirán la misma alineación izquierda y un ancho máximo coherente; los ajustes conservarán el espaciado interior de la tarjeta y el comportamiento responsive.

## 7. Accesibilidad y SEO

- Usar estructura HTML5 semántica, idioma español, jerarquía lógica de encabezados y labels asociados.
- Usar `required` en los campos obligatorios, `fieldset`/`legend` para grupos, foco visible, teclado y contraste WCAG AA aplicable.
- Identificar campos requeridos también de forma comprensible para tecnologías de asistencia.
- Usar `aria-invalid` y `aria-describedby` en estados de error cuando corresponda, sin roles ARIA redundantes.
- Hacer accesibles los errores, la advertencia y el mensaje de éxito; no depender exclusivamente de color.
- Todas las imágenes tendrán `alt` apropiado: descripción para imágenes informativas y `alt=""` para imágenes decorativas.
- Incluir título SEO descriptivo, meta description en español y metadatos coherentes con la empresa. No inventar información de TrackFlow.
- Mantener el Schema.org Organization en la landing existente. El marcado de empresa requerido se considera ya implementado en `index.html`; no se duplicará en `application.html` sin justificación aprobada.

## 8. Restricciones y fuera de alcance

- No implementar backend, API, CRM, almacenamiento, base de datos, envío de email ni solicitud de red para entregar la solicitud.
- El aviso de privacidad ficticio solo sirve para una demostración no productiva y no puede presentarse como una política vigente ni utilizarse para obtener consentimiento legal.
- No añadir campos, valores, opciones, pasos ni funcionalidades ajenas al formulario descrito.
- No cambiar la landing principal ni rehacer su marcado Schema.org como parte de esta iniciativa.
- No alterar `design-system.md`, paleta, tipografía, logotipos, favicon ni recursos oficiales. Cualquier excepción visual necesita aprobación previa y documentación en el Design System antes de implementarse.
- No incorporar dependencias, frameworks, build de frontend ni tecnología distinta de HTML, JavaScript y Tailwind CDN ya aprobados.
- No ampliar el idioma más allá del español.
- No publicar capacidades o promesas que contradigan el estado operativo del briefing corporativo.

## 9. Archivos previstos

El plan posterior confirmará el alcance exacto por archivo. La propuesta inicial, que no autoriza por sí misma la implementación, es:

- `uis/website/application.html`: página y marcado del formulario.
- `uis/website/validation.js`: validación interactiva, contador, advertencia y simulación local del envío.
- `uis/website/styles.css`: solo si el plan demuestra una necesidad no resuelta razonablemente con Tailwind.

La propuesta de enmienda se limita a `application.html` y `validation.js`; no propone modificar `styles.css` salvo que el plan aprobado justifique una necesidad concreta.

No se prevén cambios en `index.html`, `design-system.md`, assets ni configuración de dependencias.

## 10. Criterios de aceptación

1. `application.html` presenta una página en español con estructura HTML5, navegación de vuelta a la landing, favicon oficial, título y meta description adecuados.
2. El formulario incluye todos y solo los doce campos definidos en la sección 4, con los tipos, opciones y carácter obligatorio indicados.
3. Cada control tiene label asociado; los grupos de checkbox y radio están agrupados con `fieldset` y `legend`; los requeridos se identifican visual y programáticamente. Los campos aparecen en los cuatro pasos definidos y no se añaden otros campos ni pasos.
4. Las doce reglas de validación y sus mensajes literales de la sección 5.1 se aplican correctamente, sin restricciones extra no documentadas.
5. Los errores se muestran junto al control, son accesibles, se actualizan al interactuar y no aparecen prematuramente en campos no visitados.
6. La experiencia muestra cuatro pasos consecutivos con títulos claros, indicador accesible del paso actual y los restantes, botones **Siguiente**/**Anterior** y foco en el encabezado al cambiar de paso.
7. **Propuesta de enmienda pendiente:** **Siguiente** valida el paso actual y bloquea el avance ante errores; **Anterior** permite regresar sin bloquearse por errores y conserva los datos.
8. **Propuesta de enmienda pendiente:** el envío valida el último paso y vuelve a comprobar el formulario completo; si encuentra errores, no muestra éxito y navega al primer paso inválido para enfocar su primer control inválido visible.
9. El contador se actualiza en vivo, bloquea la entrada al alcanzar 500 caracteres y muestra los caracteres disponibles; la validación defensiva conserva el mensaje del briefing e informa cuántos caracteres exceden el máximo.
10. La advertencia se muestra inmediatamente debajo del selector, con el texto exacto al elegir `0-100 envíos/mes`, independientemente del producto; no bloquea ni pausa el envío.
11. El envío válido oculta todos los controles del formulario y muestra únicamente el título, cuerpo y contacto del mensaje de éxito definidos en la sección 5.5, de forma accesible, junto con una aclaración de que la solicitud no se envió al equipo comercial y sin llamadas HTTP ni persistencia.
12. **Limpiar formulario** restablece valores y elimina errores, contador alterado, advertencias y confirmación, y devuelve al primer paso.
13. La flecha de cada selector tiene espacio suficiente respecto del borde derecho sin alterar la indicación nativa de apertura.
14. Diseño y estados reutilizan Tailwind CDN y tokens aprobados, y mantienen continuidad visual con la landing.
15. La página funciona a anchos móviles, tablet y escritorio verificados; controles, mensajes y botones son legibles y no existe scroll horizontal.
16. Teclado, foco, labels, grupos, mensajes, estados ARIA y contraste cumplen los requisitos WCAG AA aplicables.
17. Las imágenes tienen `alt` apropiado; no se modifican los originales oficiales ni se añaden dependencias.
18. El marcado Organization de `index.html` permanece intacto y no se duplica sin una necesidad aprobada.
19. No hay backend, persistencia, envío de correo, integración externa ni envío de datos fuera del navegador; la experiencia advierte que no se recibió ninguna solicitud.
20. El aviso ficticio de privacidad está identificado como no vigente, no tiene enlace, advierte contra el uso de datos reales y no se presenta como consentimiento legal ni como listo para producción.
21. **Propuesta de enmienda pendiente:** **Limpiar formulario** queda a la izquierda y la navegación a la derecha en el orden **Anterior**, **Siguiente**; en el último paso, **Enviar solicitud** sustituye a **Siguiente**. La visibilidad corresponde al paso activo.
22. **Propuesta de enmienda pendiente:** el encabezado y la tarjeta del formulario quedan alineados por el borde izquierdo, con ancho máximo coherente, sin perder adaptación responsive ni el espacio interior de la tarjeta.

## 11. Decisiones pendientes para aprobación

Estas cuestiones deben resolverse antes de cerrar el plan de implementación. La especificación no las decide por inferencia:

1. **Política real pendiente:** el usuario autoriza usar temporalmente un aviso ficticio, explícitamente no vigente, sin enlace y solo para demostración. La política real, el responsable, finalidades y demás información requerida siguen sin resolverse; el formulario no puede publicarse ni recopilar datos reales hasta sustituir y aprobar el aviso.

Decisiones ya confirmadas por el usuario:

- La advertencia aplica a todos los tipos de producto cuando el volumen es `0-100 envíos/mes`.
- La advertencia es informativa; no exige confirmación ni bloquea el envío.
- El control de comentarios bloquea la entrada al alcanzar 500 caracteres.
- El mensaje defensivo de comentarios se conserva para valores inválidos excepcionales; `X` es el número de caracteres por encima del límite.
- Se utiliza temporalmente el aviso ficticio y el texto de checkbox especificados arriba; ambos dejan claro que no existe una política vigente.
- La página debe advertir que la simulación no envía la solicitud al equipo comercial.
- El usuario aprobó previamente la propuesta de cuatro pasos. La presente enmienda de validación y presentación permanece pendiente de aprobación; no se implementarán cambios de código antes de aprobar la especificación, el plan y las tareas actualizados.

## 12. Verificación prevista

Una vez aprobadas esta especificación revisada, el plan y las tareas, verificar:

- El renderizado con Tailwind CDN, la navegación y los recursos locales en vista real.
- El flujo de cada validación, sus mensajes exactos, estados al corregir, primer error y comportamiento teclado/lector de pantalla.
- Validación independiente de cada paso, navegación adelante/atrás con datos preservados, indicador y foco del encabezado, bloqueo de avance inválido y reinicio al primer paso.
- Contador, límite de 500, mensaje defensivo para valores inválidos excepcionales, advertencia, reinicio y envío simulado válido e inválido.
- Viewports de referencia 320, 375, 768, 1280 y 1440 px; overflow, legibilidad y dimensiones táctiles.
- Contraste WCAG AA de los estados normales, error, advertencia y éxito.
- Metadatos, idioma, jerarquía semántica, labels, atributos ARIA, alt y enlaces.
- Ausencia de solicitudes de red de envío, persistencia o dependencias nuevas; integridad del marcado Organization existente y presencia de la advertencia de demo/no envío.
- Diagnósticos disponibles y `git diff --check`.

Se documentarán resultados reales y limitaciones; no se dará por verificada una comprobación que no se haya ejecutado.

## 13. Aprobaciones

- El usuario aprobó explícitamente esta revisión, que sustituye el formulario de un solo bloque por los cuatro pasos solicitados, para continuar con la actualización de plan y tareas.
- El usuario autoriza el uso del aviso ficticio de demostración, dejando pendiente la política real. La aprobación no convierte el aviso ficticio en política vigente ni autoriza su uso productivo.
- Tras aprobar `plan.md`, se podrá elaborar `tasks.md`; se solicitará aprobación explícita de las tareas antes de implementar, siguiendo `.agents/rules/development.md`.

## 14. Enmienda propuesta: validación final, acciones y alineación

**Estado de esta enmienda: aprobada por el usuario e implementada.** La aprobación se recibió explícitamente antes de comenzar la implementación. La verificación de interacción real en navegador permanece pendiente.

- Al pulsar **Siguiente**, validar todos los campos del paso activo; mostrar errores y bloquear el avance cuando el paso sea inválido, o avanzar cuando sea válido.
- Mantener la validación reactiva existente. **Anterior** regresa sin bloqueo por errores y conserva los valores.
- Al pulsar **Enviar solicitud** en el último paso, validar el paso activo y volver a validar el formulario completo antes del éxito simulado. Si se detectan errores en pasos anteriores, mostrar el primer paso inválido y enfocar el primer control inválido visible. Reutilizar sin cambios las reglas y los mensajes del briefing.
- Colocar **Limpiar formulario** en el extremo inferior izquierdo; agrupar la navegación en el extremo inferior derecho y ordenar **Anterior** antes de **Siguiente**. En el último paso, **Enviar solicitud** ocupa el lugar de **Siguiente**.
- Alinear por la izquierda el encabezado introductorio y la tarjeta del formulario, conservando un ancho máximo coherente, el padding interior de la tarjeta y el comportamiento responsive.
- La propuesta no cambia el contenido ni los pasos del formulario, el Design System, la landing, ni los campos, reglas y mensajes existentes. Se limita al comportamiento y presentación de `application.html` y `validation.js`.
- Esta enmienda se implementó tras la aprobación explícita del usuario y la aprobación de las tareas correspondientes; las verificaciones y limitaciones están registradas en `tasks.md`.
