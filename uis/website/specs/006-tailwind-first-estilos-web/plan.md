# Plan — Migración Tailwind-first de estilos web

| Campo               | Valor                            |
| ------------------- | -------------------------------- |
| **Estado**          | Aprobado por el usuario          |
| **Especificación**  | [`spec.md`](./spec.md), aprobada |
| **Proyecto / área** | TrackFlow · `uis/website/`       |

## Propósito

Migrar a configuración/utilidades Tailwind las reglas de presentación manual que pueden reemplazarse de forma mantenible y conservadora, preservar la excepción funcional de `[hidden]`, e implementar el hover de borde sutil aprobado en la especificación 006. No iniciar implementación hasta aprobar este plan y después las tareas.

## Secuencia propuesta

1. **Baseline:** registrar `git status`, diffs staged/unstaged y los cambios preexistentes; preservar íntegramente el trabajo del usuario. Identificar las referencias de `styles.css`, colores, clases `.info-card`, scroll, foco y estado `hidden`.
2. **Actualizar Design System primero:** documentar el esquema de configuración Tailwind compartida, mantener inalterados todos los valores de tokens ya aprobados, y registrar `border-hover: #A2C9CB`, el hover únicamente de borde, la transición breve y ausencia de señales de clicabilidad.
3. **Crear configuración común:** añadir `uis/website/tailwind.config.js` con los tokens semánticos, Manrope, tamaños display/section/card y radio `card`; incluir `border-hover` con el valor aprobado. Cargar el archivo desde las dos páginas después de Tailwind CDN y eliminar configuraciones duplicadas inline. El runtime CDN oficial expone `window.tailwind.config` mediante un proxy y recompila al asignarlo; la secuencia queda verificada en el script oficial consultado durante la implementación. No añadir build ni dependencias.
4. **Migrar estilos globales:** añadir a `<html>` la utilidad `scroll-smooth motion-reduce:scroll-auto`; añadir a `index.html` `bg-background font-sans text-text` y conservar en `application.html` `bg-surface font-sans text-text`, porque `bg-surface` es el fondo vigente del formulario. Retirar reglas CSS de scroll y de `body`. Confirmar que clases actuales de foco Tailwind cubren enlaces/controles y elementos enfocados programáticamente; completar clases locales solo si hay un hueco, sin cambiar color ni geometría aprobados.
5. **Migrar hover de tarjetas:** reemplazar `info-card` como gancho de estilo por `transition-colors duration-[180ms] motion-reduce:transition-none hover:border-border-hover` en cada tarjeta informativa. El cambio al pasar hover será solo el borde `#A2C9CB`; no aplicar transición o cambio de otros estilos, elevación, escala, sombra, fondo, cursor ni estados que presenten la tarjeta como enlace. La utilidad `hover:` sustituye el gating manual por media query; la nueva especificación solo requiere un hover sutil, sin restringirlo a puntero fino.
6. **Reducir CSS:** retirar tokens `:root`, reglas de body/html/foco, `.info-card` y media queries ya migradas. Mantener solo `[hidden] { display: none !important; }`: está documentado que utilidades Tailwind de display pueden sobreponerse al estado HTML `hidden`, y JS usa ese atributo para pasos, botones, errores y mensajes. Mantener la hoja enlazada en ambas páginas para esta excepción.
7. **Verificación técnica y documental:** revisar configuración y tokens en ambos documentos, comprobar todas las instancias de tarjetas, confirmar que las utilidades están presentes y la regla `hidden` queda intacta; ejecutar `node --check` en JS vigente, `git diff --check`, diagnósticos del editor y comprobaciones estáticas de referencias/duplicación. Si un navegador con conexión a CDN está disponible, comprobar visualmente el hover y flujo oculto; si no, declarar esa limitación sin afirmar prueba visual. Actualizar tareas y bitácora con resultados reales.

## Archivos previstos

- `uis/website/design-system.md` — actualizar antes del código de UI.
- `uis/website/tailwind.config.js` — nuevo archivo compartido.
- `uis/website/index.html` y `uis/website/application.html` — cargar config, eliminar config inline, añadir clases globales y migrar tarjetas de la landing.
- `uis/website/styles.css` — retirar reglas migradas y dejar solo protección `[hidden]`.
- `uis/website/specs/006-tailwind-first-estilos-web/tasks.md` — tareas a redactar tras aprobación del plan y aprobar antes de ejecución.
- `memory-bank/progress.md` — registrar hechos y pruebas al cerrar el trabajo.

No se planifican cambios a JavaScript, contenido comercial, markup Schema.org, breakpoints, assets, dependencias, build, infraestructura ni configuración del repositorio.

## Validación propuesta

- `git diff --check`.
- `node --check uis/website/validation.js`.
- Diagnósticos del editor para los dos HTML y el archivo JS.
- Inspección automatizada/estática que confirme: un objeto de configuración semántico compartido, referencias correctas en ambas páginas; sin reglas de estilo manual salvo `[hidden]`; cada `.info-card` migrada a las utilidades planeadas; sin reglas de sombra/fondo/transform/cursor en hover; clases de fondo/tipografía/scroll/reduced motion presentes; `[hidden]` conserva `display:none !important`.
- Prueba de navegador manual solo si es posible cargar Tailwind CDN en el entorno: landing y formulario, incluyendo borde de hover sutil, movimiento reducido y navegación de pasos. Si no, registrar el test como pendiente.
- No crear commit. Cualquier commit requiere autorización separada.

## Límites de verificación

Las comprobaciones estáticas no demuestran que Tailwind CDN compile correctamente la configuración externa ni el resultado visual del color propuesto. Si el navegador no está disponible, este riesgo se informará explícitamente y el usuario deberá validar visualmente el cambio. No se modificará la regla `[hidden]` para eliminar la necesidad de dicha verificación.

## Aprobación

El usuario aprobó explícitamente este plan antes de redactar las tareas. Las tareas fueron aprobadas explícitamente antes de iniciar la implementación.
