# Plan — Mejora visual de la landing de TrackFlow

| Campo              | Valor                                                                         |
| ------------------ | ----------------------------------------------------------------------------- |
| **Estado**         | Aprobado por el usuario                                                       |
| **Especificación** | [`spec.md`](./spec.md)                                                        |
| **Proyecto**       | `uis/website/`                                                                |
| **Alcance**        | Presentación visual y editorial de la landing existente; sin nuevas funciones |

## Objetivo

Elevar la jerarquía visual, claridad comercial y acabado responsive de la landing manteniendo el Design System, el orden de sus siete secciones, los hechos respaldados por los briefings y las restricciones del Hito 1.

## Decisiones aprobadas

- El hero mantiene titular, subtítulo, CTA y fondo petróleo. En escritorio usará dos columnas; en móvil, disposición vertical priorizando titular y CTA.
- El usuario confirmó que `assets/illustrations/hero-flujo-logistico.png` muestra almacén, persona preparando un pedido, camión y casa. Se usará el original, sin editarlo, conservar transparencia y proporción, definir dimensiones y texto alternativo descriptivo.
- Se mantienen tres tarjetas de servicio y cuatro beneficios. El tercer beneficio usará el texto aprobado: «Un equipo tecnológico dedicado a mejorar los sistemas y procesos que respaldan la operación».
- Lucide se integra con SVG oficiales locales, sin runtime ni dependencias nuevas. Validar la versión/tag exactos y conservar licencia ISC.
- No se cambia la identidad visual, los logotipos, la ilustración original, el formulario, `application.html` ni `validation.js`.
- El usuario indicó «Start implementation», entendido como autorización de las tareas directamente derivadas de esta especificación y este plan.

## Secuencia de implementación

1. **Iconografía y documentación de marca:** validar los nombres seleccionados en una release/tag oficial de Lucide y su licencia; documentar en `design-system.md` la biblioteca y los criterios aprobados de tamaño, trazo, color, accesibilidad y ubicación de recursos. Añadir SVG oficiales y aviso de licencia bajo `assets/icons/`.
2. **Contenido y composición de la landing:** en `index.html`, conservar Schema.org, navegación, destinos y orden de secciones; aplicar el hero de dos columnas/stack móvil, textos respaldados y tarjetas mejoradas para servicios, cobertura, beneficios y contacto. Añadir iconos y revisar los `alt` de todas las imágenes.
3. **Ajustes responsive puntuales:** usar las utilidades Tailwind actuales; editar `styles.css` solo cuando una regla necesaria no quede clara o mantenible en el HTML. Conservar tokens, Manrope, paleta y reducción de movimiento.
4. **Validación:** ejecutar diagnósticos y `git diff --check`; previsualizar en navegador a 320, 375, 768, 1280 y 1440 px. Comprobar contraste/foco/teclado, enlaces y teléfonos, `alt`, renderizado Lucide, proporción/contraste del hero y ausencia de overflow. Documentar los resultados reales en `memory-bank/progress.md`.

## Archivos previstos

- `uis/website/index.html`: composición, textos e iconografía de las siete secciones.
- `uis/website/styles.css`: cambios puntuales solo si son necesarios.
- `uis/website/design-system.md`: reglas de Lucide y organización de los assets, sin alterar otras decisiones visuales.
- `uis/website/assets/icons/*.svg` y `uis/website/assets/icons/LICENSE`: SVG oficiales y licencia; anotar versión exacta en la documentación.
- `memory-bank/progress.md`: registrar cambio y verificaciones.
- `application.html`, `validation.js` y originales de marca/ilustración: no modificar.

## Verificación y límites

- Revisar vistas a 320, 375, 768, 1280 y 1440 px; no debe haber desplazamiento horizontal ni recorte de contenido.
- Comprobar WCAG AA en combinaciones reales (texto normal 4,5:1; controles/gráficos relevantes 3:1), navegación por teclado, foco y alternativas de todas las imágenes.
- Verificar CTA, anchors, `mailto:`, `tel:`, recursos locales y ausencia de dependencias nuevas.
- Ejecutar diagnósticos disponibles y `git diff --check`; no hay test runner documentado para este sitio.
- No añadir páginas, mapas, formulario, backend, persistencia, integraciones ni capacidades aún no operativas. Mantener clara y completa la versión española.
