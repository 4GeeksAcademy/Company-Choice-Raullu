# Tareas — Mejora visual de la landing de TrackFlow

| Campo              | Valor                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Estado**         | Aprobadas para ejecución por instrucción explícita del usuario: «Start implementation» |
| **Especificación** | [`spec.md`](./spec.md)                                                                 |
| **Plan**           | [`plan.md`](./plan.md)                                                                 |

## A. Convención y artefactos SDD

- [x] Mover el spec revisado a `uis/website/specs/001-mejora-visual-web/spec.md` y reflejar las aprobaciones confirmadas.
- [x] Crear el plan aprobado junto al spec.
- [x] Crear esta lista de tareas en el mismo directorio.
- [x] Documentar en `.agents/rules/development.md` la ruta SDD canónica, el formato `NNN-nombre-spec`, numeración incremental por proyecto, co-ubicación y orden de aprobaciones.
- [x] Añadir en `AGENTS.md` una referencia breve al patrón y a la regla normativa.
- [x] Registrar la convención en `memory-bank/techContext.md` y la ubicación/avance en `memory-bank/progress.md`.
- [x] Buscar rutas antiguas y revisar enlaces a la spec tras la migración; no quedan referencias al path anterior.

## B. Iconografía y Design System

- [x] Consultar la release oficial de Lucide; validar nombres, obtener el tag/versión exactos y confirmar la licencia ISC (`lucide-static@1.61.0`).
- [x] Actualizar mínimamente `uis/website/design-system.md` con Lucide como biblioteca, criterios consistentes de tamaño/trazo/color/accesibilidad y organización de assets.
- [x] Añadir los SVG Lucide oficiales seleccionados y la licencia correspondiente bajo `uis/website/assets/icons/`; no instalar dependencias.

## C. Landing

- [x] Rediseñar el hero en dos columnas para escritorio y apilado en móvil; conservar titular, subtítulo, CTA, destino y fondo.
- [x] Usar el PNG original confirmado, sin modificarlo; definir dimensiones y proporción, evitar recortes y añadir alt descriptivo.
- [x] Completar las tres tarjetas de servicios con Lucide, títulos, descripciones factuales y listas concisas; conservar alturas/alineación razonables y hover no engañoso.
- [x] Mejorar jerarquía de cobertura para Estados Unidos, Los Ángeles, España y Zaragoza, manteniendo coberturas y transportistas documentados.
- [x] Presentar cuatro beneficios respaldados, incluyendo la redacción tecnológica aprobada y los datos de trayectoria/equipo sin afirmaciones no verificadas.
- [x] Mejorar la introducción y distribución de contacto; conservar `mailto:`, `tel:`, CTA al formulario y datos de ambas oficinas.
- [x] Pulir header y footer, navegación responsive/foco y logos oficiales adecuados al fondo.
- [x] Revisar el atributo `alt` de cada imagen; mantener intactos `application.html` y `validation.js`.
- [x] Evaluar si se requieren reglas puntuales en `styles.css`; las utilidades Tailwind existentes fueron suficientes y no se modificó el archivo.

## D. Verificación y cierre

- [x] Ejecutar diagnósticos disponibles y `git diff --check` después de los últimos cambios; revisar diff/estado y confirmar que `application.html` y `validation.js` no cambiaron.
- [x] Servir la web con el comando documentado en el puerto 3001 (3000 ocupado); la landing, CSS, logos, ilustración y los diez SVG respondieron HTTP 200.
- [ ] Revisar en navegador 320, 375, 768, 1280 y 1440 px; el contenedor no tiene navegador disponible.
- [x] Comprobar rutas locales, anchors, atributos `alt`, trazo/color de los SVG y contraste de iconos (4,69:1 sobre verde agua; 5,13:1 sobre blanco).
- [ ] Comprobar visualmente foco/teclado, overflow en los viewports y contraste del hero completo sobre `#102838`; pendiente por falta de navegador.
- [x] Registrar en `memory-bank/progress.md` los cambios y verificaciones efectivamente realizados, y dejar constancia de las comprobaciones pendientes.

## Restricciones

No crear secciones/páginas, mapas, formularios ni funcionalidades nuevas. No cambiar el orden de las secciones, la paleta, tipografía, logos, ilustración original, Tailwind CDN o capacidades aprobadas. No editar `application.html` ni `validation.js`.
