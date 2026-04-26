---
layout: project
title: "ArcLayer: Flujos Aéreos de Chile"
category: Visualización de Datos
description: Análisis geoespacial interactivo del tráfico aéreo nacional e internacional, incluyendo pasajeros y carga.
github_url: "https://github.com/manuelsancristobal/arclayer"
image: "/proyectos/arclayer/preview.png"
tech_stack:
  - Python (Pandas)
  - Deck.gl
  - MapLibre
  - JavaScript
---

## Visualización de Flujos Aéreos

Esta herramienta permite explorar la dinámica del transporte aéreo en Chile mediante una interfaz geoespacial interactiva basada en **Deck.gl**. El proyecto integra datos de la Junta de Aeronáutica Civil (JAC) para ofrecer una visión completa tanto de pasajeros como de carga.

### Características Principales

*   **Multidimensional**: Permite alternar entre métricas de **Pasajeros** y **Carga (Tonelaje)**.
*   **Doble Perspectiva**: Visualización de flujos **Emisivos** (desde Chile al mundo) y **Receptivos** (llegadas al país).
*   **Análisis Histórico**: Control deslizante para observar la evolución de las rutas año tras año.
*   **Tecnología Geoespacial**: Uso de `ArcLayer` para representar trayectorias de círculos máximos, optimizado para grandes volúmenes de datos.

### Visualización Interactiva

<div class="project-viz-container" style="height: 600px; border-radius: 8px; overflow: hidden; margin: 20px 0; border: 1px solid #ddd;">
    <iframe src="/proyectos/arclayer/viz.html" width="100%" height="100%" frameborder="0"></iframe>
</div>

[Ver en pantalla completa](/proyectos/arclayer/viz.html){: .btn .btn--primary }

### Impacto y Aplicaciones

Este análisis es fundamental para identificar:
1.  **Hubs Logísticos**: Destinos con alta carga relativa que funcionan como centros de distribución.
2.  **Polos Turísticos**: Rutas con alto volumen de pasajeros que conectan con los principales atractivos del país.
3.  **Conectividad Regional**: La importancia del Aeropuerto de Santiago (SCL) como nodo central y el crecimiento de rutas interregionales.
