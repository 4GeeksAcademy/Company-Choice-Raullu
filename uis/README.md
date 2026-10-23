# `uis` folder

This folder contains **all projects with a user interface** for the cross-functional AI Engineering company project — for example: a public website, admin dashboard frontend, ecommerce UI, customer portals, Streamlit/Gradio app or other frontend-only tools.

The two main projects stored here are:

- **`website`** — the company's public-facing web presence.
- **`backoffice`** — the internal admin application. This is the ideal place to develop multiple solutions within a single project: authentication, people management, operations management, internal communication, and other back-office capabilities.

Organize `uis/` by **different concerns** — each subfolder covers a distinct area of the company (for example, public web vs internal operations) and includes its own technical and functional documentation.

- **Main purpose**: to centralize in a single place all frontend applications that support the company's use cases.
- **Recommendation**: document in this file (or in sub-READMEs) the applications you add, their objective, the technology used, and how to run them.

## TrackFlow visual identity and website preview

For any TrackFlow interface, consult the canonical visual identity and tokens in [`website/design-system.md`](./website/design-system.md) and follow [`.agents/rules/frontend.md`](../.agents/rules/frontend.md). Website-specific functional requirements are in [`website/BRIEFING.md`](./website/BRIEFING.md). Official originals are in `website/assets/brand/`: `logo-trackflow.png`, `logo-trackflow-oscuro.png`, `ico-trackflow.png`, and `favicon.ico`. Preserve the originals and follow the usage rules in the Design System. Visual identity changes require explicit prior approval.

The public website in [`website/`](./website/) uses Spanish, loads Tailwind CSS via CDN, and simulates lead-form submission without persistence or a backend.

From the repository root, preview the static files in Codespaces with:

```bash
npx --yes http-server ./uis/website -p 3000 -a 0.0.0.0
```

Open port 3000 in the Codespaces **Ports** view. The command serves static files only; it does not build Tailwind or test the website. The CDN requires an Internet connection in the browser.

> _Estas instrucciones también están disponibles en [español](./README.es.md)._
