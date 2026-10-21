# Plan — Formulario de solicitud de información de TrackFlow

| Campo               | Valor                                                                    |
| ------------------- | ------------------------------------------------------------------------ |
| **Estado**          | Aprobado para actualizar tareas                                          |
| **Especificación**  | [`spec.md`](./spec.md)                                                   |
| **Proyecto / área** | TrackFlow · `uis/website/`                                               |
| **Alcance**         | Página de solicitud B2B, validación en navegador y confirmación simulada |

## Objetivo

Completar el formulario comercial de TrackFlow descrito en el spec aprobado, conservando el Design System y las tecnologías existentes. El envío será local y simulado, sin transmitir ni persistir los datos.

## Decisiones aprobadas que guían el plan

- `application.html` será una página en español, responsive, accesible y coherente con `index.html`, con cuatro pasos consecutivos.
- Se incluirán exactamente los doce campos, opciones y reglas de `uis/website/BRIEFING.md`.
- Los pasos agruparán los campos así: (1) Datos de empresa y contacto, (2) Operación logística, (3) Relación con proveedores 3PL, (4) Comentarios y privacidad.
- Un indicador accesible presentará el paso actual y los restantes. Cada cambio de paso enfocará el encabezado correspondiente.
- Siguiente valida solo el paso actual antes de avanzar; Anterior conserva los valores. No se podrá saltar a pasos futuros sin superar validaciones previas.
- El último paso ofrecerá el envío simulado; tras un envío válido se ocultará el formulario completo y quedará visible únicamente la confirmación y la aclaración de demostración/no envío.
- La advertencia de volumen `0-100` aparecerá inmediatamente debajo del selector.
- Los selectores mantendrán su indicador nativo de apertura con espacio suficiente entre la flecha y el borde derecho.
- Tailwind CDN, los tokens de `styles.css`, el favicon y el logo oficial se reutilizarán; Lucide se usará solo si aporta comprensión y mediante los SVG locales existentes.
- La advertencia se muestra para `0-100 envíos/mes` con cualquier tipo de producto y no requiere confirmación.
- Comentarios bloquea entrada adicional en 500 caracteres; conserva el mensaje de error del briefing como validación defensiva excepcional y `X` representa caracteres excedidos.
- La simulación de envío no hará solicitudes de red ni guardará los datos.

## Privacidad provisional y límite de uso

El usuario autoriza un aviso ficticio claramente identificado como no vigente, solo para demostración y sin enlace. Debe declarar que el formulario no envía ni almacena datos, prohibir el uso de datos personales o confidenciales reales y explicar que la política real sigue pendiente. No se presentará como consentimiento legal y no se podrá usar para recopilar solicitudes reales ni publicar el formulario en producción. El formulario debe aclarar también que el mensaje de éxito es simulado y Comercial no recibirá los datos.

## Secuencia propuesta

1. **Establecer aviso provisional de demostración:** agregar al marcado un aviso ficticio con las condiciones acordadas, checkbox requerido sin enlace y advertencias visibles de no usar datos reales/no envío. Mantener explícitamente pendiente la política real y cualquier uso productivo.
2. **Completar el marcado de `application.html`:** añadir metadatos SEO, navegación de vuelta, encabezado e introducción comercial; construir formulario semántico de cuatro pasos con encabezados enfocables, indicador de progreso accesible, controles de navegación y exactamente los campos del spec. Incluir labels, tipos, opciones, estados de ayuda/error, contador, advertencia bajo el selector, confirmación y botones. La confirmación debe ser el único contenido del formulario visible tras un envío válido.
3. **Implementar `validation.js`:** gestionar el paso actual, restringir navegación a pasos validados, validar al avanzar y permitir volver preservando valores. Mostrar errores en blur/cambio y al avanzar sin anticiparlos; actualizar errores al corregir; identificar y enfocar el primer error del paso; controlar el contador y la advertencia bajo el selector; simular el éxito accesible ocultando el formulario; limpiar valores y estados y volver al primer paso. No realizar fetch/XHR ni almacenar datos.
4. **Aplicar el diseño existente:** priorizar clases Tailwind y tokens actuales. Modificar `styles.css` solo si se documenta una necesidad concreta que Tailwind no resuelva razonablemente. No alterar `index.html`, el Design System, logos, favicon, assets ni dependencias.
5. **Validar la experiencia:** comprobar errores y mensajes individualmente, corrección en tiempo real, grupos, teclado/foco, anuncios accesibles, contador y límite, advertencia, éxito, reinicio y ausencia de tráfico de envío. Revisar tamaños 320, 375, 768, 1280 y 1440 px y ausencia de overflow. Ejecutar diagnósticos disponibles y `git diff --check`; registrar lo que no pueda verificarse.

## Archivos previstos

- `uis/website/application.html`: página y marcado del formulario.
- `uis/website/validation.js`: validaciones, contador, advertencia, reinicio y envío simulado.
- `uis/website/styles.css`: solo si un ajuste necesario no puede expresarse razonablemente con Tailwind y tokens existentes.

No se prevén dependencias, nuevos assets ni cambios a `index.html`, `design-system.md`, Schema.org o configuración del proyecto.

## Verificación

- Prueba manual con cada campo válido e inválido y comprobación literal de mensajes, agrupada por paso.
- Validación al avanzar, no aparición prematura, corrección tras interacción, bloqueo de avance si hay errores y foco en el primer error del paso.
- Indicador actual/restantes, cambio de foco al encabezado, navegación anterior/siguiente y preservación de valores; no permitir saltos ni entrada directa a pasos futuros.
- Selección múltiple de servicios y de una única respuesta 3PL; comportamiento requerido y límites de cada campo.
- Contador de 500, advertencia bajo el selector al elegir volumen bajo, reinicio completo al primer paso y éxito simulado accesible que oculta el formulario.
- Navegación por teclado, foco visible, asociación de labels/errores, lector de pantalla cuando esté disponible, contraste WCAG AA aplicable y alt de imágenes.
- Revisión en 320, 375, 768, 1280 y 1440 px; comprobar carga de recursos y ausencia de scroll horizontal.
- Confirmar que no hay solicitudes HTTP de envío, persistencia, backend, dependencia nueva o cambios en la landing; verificar la advertencia de no usar datos reales/no envío y que la política se identifica como ficticia y no vigente.
- Ejecutar diagnósticos del editor disponibles y `git diff --check`. No se asume un test runner para el sitio estático.

## Límites de aprobación

- El usuario aprobó explícitamente la actualización conjunta de este plan y `tasks.md` conforme a la especificación revisada.
- La aprobación del plan no autoriza implementar hasta que `tasks.md` reciba aprobación explícita.
- La aprobación del plan autoriza el uso del aviso ficticio solo para demostración local, no el uso productivo. La política real debe aprobarse antes de publicar el formulario o recopilar solicitudes reales.
