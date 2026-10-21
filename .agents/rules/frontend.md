# Reglas de frontend

**Alcance:** todas las interfaces frontend de TrackFlow. Para el sitio público, aplicar además los requisitos específicos de `uis/website/BRIEFING.md`.

## Identidad visual y aprobaciones

- Antes de cualquier cambio visual o de experiencia de usuario, consulta la versión actual de [`uis/website/design-system.md`](../../uis/website/design-system.md). Es la única fuente de verdad para la identidad visual y sus tokens; no copies sus valores a esta regla ni a otros documentos.
- Reutiliza los tokens y patrones del Design System. No introduzcas colores, tipografías, estilos de componentes, iconografía o recursos gráficos arbitrarios.
- Utiliza exclusivamente los originales oficiales disponibles en `uis/website/assets/brand/`. Comprueba sus nombres y extensiones reales antes de referenciarlos. No generes, redibujes ni sustituyas logotipos o favicon.
- Cualquier modificación o excepción visual —incluidos tokens, paleta, tipografía, componentes de marca, logotipos o favicon— requiere aprobación explícita previa. Una vez aprobada, documenta primero la decisión en `design-system.md` y después aplícala a las interfaces afectadas.
- El Design System gobierna la identidad visual; no anula requisitos técnicos, funcionales, de accesibilidad o seguridad. Si existe conflicto, conserva esos requisitos y solicita aclaración sobre la decisión visual.

## Requisitos específicos del sitio público

- Toma `uis/website/BRIEFING.md` como fuente de requisitos funcionales. Implementa la landing y el formulario B2B descritos allí, sin ampliar el alcance a consumidores finales, APIs, persistencia de leads ni integración con CRM.
- Usa español como único idioma de la experiencia en este hito. El soporte multiidioma queda expresamente pospuesto.
- Usa Tailwind CSS mediante CDN por ahora. El sitio requiere conexión a Internet para cargar Tailwind; no añadas un proceso de build ni dependencias de frontend sin autorización.
- El sitio debe ser responsive, accesible y estar optimizado para SEO. La landing debe incluir el marcado Schema.org `Organization` con los datos del briefing.
- Implementa validación completa del formulario, los mensajes de error especificados, el contador de comentarios, el estado de éxito simulado y la advertencia de volumen bajo indicados en el briefing.
- No inventes el texto o URL de la política de privacidad ni el criterio ambiguo de relevancia de producto para la advertencia de bajo volumen. Registra estos puntos como pendientes y solicita definición cuando sean necesarios para completar el comportamiento.

## Previsualización en Codespaces

Desde la raíz del repositorio, sirve solo los archivos del sitio con:

```bash
npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0
```

Abre el puerto 3000 desde la vista **Ports** de Codespaces. Este comando sirve archivos estáticos; no compila Tailwind, no valida el sitio y no implementa el envío real del formulario. Detén el servidor con `Ctrl+C`.

## Verificación

Comprueba manualmente la experiencia responsive y la navegación, el funcionamiento del formulario y sus errores, el envío simulado, la accesibilidad básica y los metadatos SEO/Schema.org. Informa qué comprobaciones se realizaron y cuáles quedan pendientes; no afirmes validaciones no ejecutadas.
