# Contexto del proyecto: TrackFlow

Este documento resume el negocio, los problemas y los objetivos descritos en `BRIEFING.md`. Se centra en el contexto empresarial y no repite referencias de fuente en cada apartado.

## Sitio web público

Como parte de la modernización de la presencia comercial de TrackFlow, se ha decidido desarrollar un sitio público que explique sus servicios, cobertura binacional y propuesta de valor, y permita a empresas de e-commerce solicitar información mediante un formulario estructurado. Los requisitos funcionales detallados se describen en [`uis/website/BRIEFING.md`](../uis/website/BRIEFING.md).

Según lo decidido hasta ahora, la experiencia se ofrecerá en español; el soporte multiidioma queda pospuesto. Tailwind CSS se incorporará mediante CDN. El formulario validará los datos solicitados y simulará el envío en el navegador, sin API, persistencia de leads, envío de correo ni integración con CRM dentro de este alcance.

Quedan por definir el texto o URL de la política de privacidad y la interpretación de «tipo de producto relevante» para mostrar la advertencia de bajo volumen. No se deben inventar esos datos o criterios.

## La empresa

TrackFlow presta servicios de logística de última milla y gestión de almacenes para marcas de comercio electrónico. Fundada en 2009 en Los Ángeles, opera en Estados Unidos y España, con almacenes en Los Ángeles y Zaragoza. Cuenta con unos 130 empleados y factura alrededor de 9 millones de euros anuales.

Sus clientes directos son las marcas (B2B), mientras que los consumidores finales (B2C) reciben los pedidos. TrackFlow se hace cargo del ciclo logístico: almacena inventario, prepara y empaqueta pedidos, los envía mediante transportistas y gestiona las devoluciones.

## Organización

La operación se distribuye entre Operaciones de Almacén, Última Milla y Gestión de Transportistas, Logística Inversa, Atención al Cliente, Comercial y Relación con Clientes, Tecnología y Dirección Ejecutiva. Los equipos de operaciones, comercial y atención al cliente están distribuidos entre Estados Unidos y España; la mayor parte del equipo tecnológico trabaja desde Zaragoza.

La red incluye dos almacenes y ocho transportistas. Atención al cliente atiende tanto a las marcas como a los destinatarios de los paquetes. Los contratos de clientes son anuales, y la renovación depende en parte de la percepción sobre el funcionamiento de la operación logística.

## Problemas que debe resolver el proyecto

La empresa carece de una infraestructura común para coordinar una operación de dos países. Los dos almacenes usan sistemas distintos y no comparten una vista de inventario. Los pedidos llegan por email en formatos diferentes, se transcriben manualmente y el picking se gestiona con listas de papel. La asignación y el seguimiento de envíos requieren trabajo manual en portales separados, sin datos históricos estructurados para comparar transportistas.

La logística inversa depende de revisiones humanas y criterios de inspección inconsistentes. Las consultas de marcas y consumidores se atienden por email, WhatsApp y teléfono, sin un sistema de tickets unificado ni una base de conocimiento. Comercial no dispone de un CRM común y prepara manualmente informes para clientes. A nivel ejecutivo, los informes semanales combinan datos parciales y llegan con retraso. La tecnología tiene integraciones poco documentadas, no dispone de telemetría centralizada y suele enterarse de los fallos mediante mensajes de operaciones.

El briefing cuantifica parte del impacto: las devoluciones representan entre el 18 % y el 25 % del volumen, según cliente y país; se estima que el 80 % de las consultas de CX podría resolverse automáticamente; y cada director dedica entre tres y cuatro horas a preparar el informe semanal. La situación hace que TrackFlow sea más lenta, propensa a errores y menos rentable de lo necesario.

## Objetivo del proyecto

TrackFlow Tech tiene el mandato de construir los sistemas, integraciones y automatizaciones inteligentes necesarios para que TrackFlow opere como una empresa logística moderna. El proyecto debe dar visibilidad compartida a la operación, reducir tareas manuales y facilitar decisiones oportunas en almacenes, entregas, devoluciones, atención al cliente, relación comercial y dirección ejecutiva.

## Objetivos por área

### Operaciones de almacén

- Crear una API que permita consultar en tiempo real las existencias de un SKU en ambos almacenes.
- Ingerir automáticamente pedidos que llegan por email en formatos distintos, reduciendo transcripción y tareas manuales de picking.
- Proporcionar un dashboard operativo y alertas de stock bajo para clientes y equipo de compras.

### Última milla y gestión de transportistas

- Recomendar transportista según destino, peso y urgencia.
- Unificar el tracking de paquetes procedentes de distintos transportistas y ofrecer un portal público de seguimiento.
- Construir información estructurada sobre entregas a tiempo, incidencias por ruta y coste por kilogramo para comparar el rendimiento.

### Logística inversa

- Automatizar la aprobación de devoluciones mediante reglas configurables por cliente.
- Coordinar el proceso de recogida, emisión de etiqueta, instrucciones al cliente y programación con transportista.
- Asistir la inspección con clasificación del estado del producto a partir de imágenes y analizar patrones de devolución.

### Experiencia del cliente

- Resolver automáticamente consultas frecuentes de seguimiento y estado de devoluciones, con escalado de los casos que requieran atención humana.
- Crear una base de conocimiento semántica para RAG, unificar tickets y ofrecer un dashboard de CX.
- Analizar sentimiento para detectar clientes frustrados. El soporte en español e inglés es opcional, pero recomendado; se plantea empezar por un idioma base.

### Comercial y relación con clientes

- Integrar la información de clientes en un CRM con perfil unificado.
- Generar automáticamente informes PDF para clientes y un dashboard de salud de cada cuenta con riesgo de renovación.
- Crear alertas a 90 y 30 días del vencimiento contractual y asistir al equipo comercial en la recomendación de servicios y precios.

### Tecnología

- Centralizar telemetría y logs de ambos países, con monitorización en tiempo real y alertas automáticas.
- Mantener un pipeline de datos que alimente los dashboards de la empresa.
- Asistir la documentación técnica y automatizar tareas operativas como backups, health checks y notificaciones de incidencias con contexto.

### Dirección ejecutiva

- Ofrecer un dashboard global con KPIs de ambos países, incluyendo volumen de envíos, entregas a tiempo, coste operativo, devoluciones y satisfacción.
- Generar automáticamente el informe semanal previsto para los lunes a las 7:00, con comparativas por país y alertas por umbrales.
- Permitir consultas de negocio en lenguaje natural mediante un asistente de IA.

## Necesidades transversales

La operación abarca Estados Unidos y España, dos idiomas y entornos regulatorios distintos. Entre los retos de IA identificados están la clasificación visual de productos devueltos, la búsqueda semántica de políticas logísticas en dos idiomas, la recomendación explicable de transportistas y la agregación de tracking. El agente de CX, el portal de seguimiento y el dashboard de operaciones deben estar disponibles 24/7.
