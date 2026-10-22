# Especificación — Migración Tailwind-first de estilos web

| Campo               | Valor                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------- |
| **Estado**          | Aprobada por el usuario                                                                           |
| **Proyecto / área** | TrackFlow · `uis/website/`                                                                        |
| **Solicitud**       | Auditoría y migración de estilos manuales a utilidades Tailwind, con ajuste del hover informativo |

## 1. Objetivo

Usar Tailwind CSS mediante CDN como mecanismo de presentación de la landing y del formulario, eliminando reglas CSS escritas a mano cuando exista una alternativa Tailwind mantenible. Mantener el diseño vigente salvo el hover de las tarjetas informativas, para el que el usuario autoriza expresamente una alternativa sutil que solo cambie el color del borde y no haga parecer clicable la tarjeta.

## 2. Alcance propuesto

- Centralizar en una configuración Tailwind local compartida por `index.html` y `application.html` los colores semánticos ya aprobados, la familia Manrope, escalas tipográficas y radio de tarjeta. Mantener los valores existentes y evitar dos configuraciones divergentes.
- Migrar a utilidades Tailwind los estilos globales de fondo, texto y fuente de los `<body>`, el desplazamiento suave con respeto a `prefers-reduced-motion`, y el hover/transición de `.info-card`.
- Sustituir el hover actual por un cambio de borde únicamente, de baja intensidad, sin elevación, escala, sombra, cursor ni cambio de fondo. La propuesta inicial es un token Tailwind `border-hover` `#A2C9CB` (mezcla sutil derivada de los tokens aprobados `border` y `secondary`), aplicado con `hover:border-border-hover`, transición breve y `motion-reduce:transition-none`. No cambiar otras decisiones visuales.
- Revisar el offset de foco global y mantener los estados de foco visibles usando las utilidades Tailwind existentes o completándolas solo donde sea necesario.
- Dejar en `styles.css` únicamente la regla mínima `[hidden] { display: none !important; }`, si la revalidación confirma que hace falta para impedir que utilidades `display` anulen el estado semántico `hidden` gestionado por el formulario. No eliminar ni debilitar esta protección sin una alternativa equivalente comprobada.
- Actualizar primero la documentación visual canónica en `design-system.md` para registrar la configuración de tokens y el nuevo color/criterio del hover, antes de modificar las interfaces.

## 3. Exclusiones

- No modificar contenido comercial, layout aprobado, breakpoints, recursos, logotipos, datos Schema.org, comportamiento del formulario, validaciones, lógica JavaScript ni decisiones de negocio.
- No añadir paquetes, proceso de build, dependencias, configuración global del repositorio ni infraestructura; Tailwind seguirá cargándose desde CDN.
- No cambiar el requisito de que las tarjetas completas no parezcan elementos clicables.
- No crear un commit. Cualquier commit requerirá autorización independiente.

## 4. Criterios de aceptación

1. Las dos páginas cargan una única configuración Tailwind compartida después del CDN; el runtime oficial expone `window.tailwind.config` y recompila al asignarlo, y las clases semánticas conservan los tokens existentes.
2. Fondo, texto y fuente globales y desplazamiento suave/reducido se expresan con utilidades Tailwind; no quedan reglas CSS manuales para esos aspectos.
3. Las tarjetas informativas solo cambian sutilmente el color del borde al hacer hover; no cambian fondo, sombra, escala, elevación ni cursor. La transición respeta movimiento reducido.
4. El foco continúa visible en navegación, controles y elementos enfocados programáticamente, con utilidades Tailwind donde correspondan.
5. La regla CSS de `[hidden]` es la única excepción manual si se confirma necesaria; su necesidad y alcance quedan documentados.
6. `design-system.md` refleja los valores y reglas implementados; no se afirma prueba visual de navegador si no se ejecuta.
7. Se validan sintaxis de JavaScript, HTML/diagnósticos disponibles, referencias de tokens/clases, `git diff --check` y el comportamiento estático de estados ocultos. Se registran las verificaciones manuales pendientes.

## 5. Archivos candidatos

`uis/website/design-system.md`, `uis/website/tailwind.config.js` (nuevo), `uis/website/index.html`, `uis/website/application.html`, `uis/website/styles.css`, `memory-bank/progress.md` y los artefactos SDD de esta iniciativa. La selección definitiva se detallará en el plan aprobado.

## 6. Aprobación

El usuario aprobó explícitamente esta especificación antes de elaborar el plan. La aprobación del plan y de las tareas se registra en los encabezados de sus artefactos respectivos.
