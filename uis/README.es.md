# Carpeta `uis`

Esta carpeta contiene **todos los proyectos con interfaz de usuario** para el proyecto transversal de AI Engineering de la compañía — por ejemplo: un sitio web público, un frontend de panel de administración, una interfaz de ecommerce, portales para clientes, aplicaciones Streamlit/Gradio u otras herramientas sólo-frontend.

Los dos proyectos principales que se almacenan aquí son:

- **`website`** — la presencia web pública de la compañía.
- **`backoffice`** — la aplicación interna de administración. Es el lugar ideal para desarrollar múltiples soluciones dentro de un mismo proyecto: autenticación, gestión de personas, gestión de operaciones, comunicación interna y otras capacidades de back-office.

Organiza `uis/` por **distintas áreas de la compañía** — cada subcarpeta agrupa un ámbito diferente (por ejemplo, web pública frente a operaciones internas) e incluye su propia documentación técnica y funcional.

- **Propósito principal**: centralizar en un único lugar todas las aplicaciones frontend que dan soporte a los casos de uso de la compañía.
- **Recomendación**: documenta en este archivo (o en sub-READMEs) las aplicaciones que vayas añadiendo, su objetivo, tecnología usada y cómo ejecutarlas.

## Identidad visual de TrackFlow y previsualización del sitio

Para cualquier interfaz de TrackFlow, consulta la identidad visual y los tokens canónicos en [`website/design-system.md`](./website/design-system.md) y sigue [`.agents/rules/frontend.md`](../.agents/rules/frontend.md). Los requisitos funcionales específicos del sitio están en [`website/BRIEFING.md`](./website/BRIEFING.md). Los originales de logotipo y favicon deben ubicarse en `website/assets/brand/`; todavía no están presentes, así que verifica los nombres y formatos de los archivos recibidos antes de referenciarlos. Los cambios de identidad visual requieren aprobación explícita previa.

El sitio público en [`website/`](./website/) se desarrolla en español, carga Tailwind CSS mediante CDN y simula el envío del formulario sin persistencia ni backend.

Desde la raíz del repositorio, previsualiza los archivos estáticos en Codespaces con:

```bash
npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0
```

Abre el puerto 3000 en la vista **Ports** de Codespaces. El comando solo sirve archivos estáticos; no compila Tailwind ni prueba el sitio. El CDN requiere conexión a Internet en el navegador.

> _These instructions are also available in [English](./README.md)._
