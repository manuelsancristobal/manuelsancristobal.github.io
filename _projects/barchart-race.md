---
layout: project
title: "Bar Chart Race: Movimiento Aéreo"
category: Visualización de Datos
description: Animación de la evolución y avance del tráfico aéreo internacional, desde y hacia Chile entre el periodo 1984 y 2026.
github_url: "https://github.com/manuelsancristobal/barchart-race"
tech_stack:
  - JavaScript
  - D3.js
  - CSS
---

## Visualización Interactiva

Este proyecto es una animación de la evolución histórica del mercado aéreo internacional en Chile, incluyendo visualizaciones del tráfico emisivo y receptivo, tanto por destinos como por aerolíneas, y mide la cantidad de pasajeros viajado o el tonelaje de carga trasladado.

{::nomarkdown}
<div style="position: relative; width: 100%; padding-bottom: 75%; overflow: hidden;">
  <iframe
    src="./viz.html"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    loading="lazy"
    title="Bar Chart Race: Movimiento Aéreo Internacional de Chile">
  </iframe>
</div>
{:/nomarkdown}

## Análisis complementario

### Evolución del tráfico aéreo internacional de Chile

Este gráfico muestra el volumen total de pasajeros y carga del tráfico aéreo internacional de Chile entre 1984 y 2026, distinguiendo entre tráfico emisivo (desde Chile) y receptivo (hacia Chile). El doble eje permite comparar la evolución de pasajeros y tonelaje simultáneamente.

![Gráfico de líneas con doble eje mostrando la evolución de pasajeros y tonelaje entre 1984 y 2026, con caída visible en 2020 por COVID-19](./assets/charts/01_total_traffic.png)

El tráfico de pasajeros muestra un crecimiento sostenido con una caída dramática en 2020 por COVID-19. La recuperación post-pandemia es notable, especialmente en el tráfico emisivo. El tonelaje tiende a seguir patrones similares pero con menor volatilidad, sugiriendo que la carga aérea es más resiliente a shocks.

### Concentración de mercado: Índice Herfindahl-Hirschman

El Índice HHI mide la concentración de mercado sumando los cuadrados de las cuotas de participación de cada aerolínea. Valores bajo 1500 indican un mercado competitivo; entre 1500 y 2500, moderadamente concentrado; sobre 2500, altamente concentrado.

![Gráfico de líneas del índice HHI para mercados emisivo y receptivo, mostrando transición de alta concentración a mercado competitivo](./assets/charts/02_hhi_concentration.png)

El mercado aéreo chileno ha transitado por fases: alta concentración inicial (dominancia de pocas aerolíneas estatales/legacy), liberalización progresiva, y la entrada de operadores low-cost como SKY y JetSMART que han intensificado la competencia en años recientes.

### Estacionalidad del tráfico aéreo emisivo

El heatmap muestra el flujo mensual de pasajeros emisivos a lo largo de cada año. Los colores más intensos indican mayor tráfico. La estructura año × mes revela patrones estacionales recurrentes.

![Heatmap año por mes mostrando estacionalidad del tráfico emisivo, con peaks en enero y julio y franjas claras en 2020-2021](./assets/charts/03_seasonality_heatmap.png)

Se observa un patrón estacional claro con peaks en enero (verano austral) y julio (vacaciones de invierno). La amplitud estacional crece con el tiempo, reflejando un mercado más grande. Los años 2020-2021 aparecen como franjas claras, evidenciando el impacto COVID.

### Participación continental en el tráfico emisivo

Muestra cómo se distribuye el tráfico emisivo de pasajeros entre los distintos continentes de destino, tanto en valores absolutos como en participación porcentual.

![Dos gráficos de área apilada mostrando participación continental absoluta y porcentual, con América dominante y Europa creciendo](./assets/charts/04_continental_share.png)

América domina ampliamente como destino del tráfico emisivo chileno. Sin embargo, la participación de Europa ha crecido de forma sostenida, mientras que Oceanía y Asia mantienen nichos menores pero crecientes. La composición continental revela la diversificación progresiva de las rutas internacionales.

### Ciclos de vida de las principales aerolíneas

Diagrama de Gantt que muestra el período de actividad de las 25 aerolíneas con mayor volumen de pasajeros emisivos. La longitud de cada barra indica el tiempo de operación.

![Diagrama de Gantt horizontal mostrando períodos de actividad de las 25 aerolíneas con mayor volumen emisivo](./assets/charts/05_airline_lifecycle.png)

Se identifican oleadas de entrada/salida de aerolíneas: las legacy carriers operan durante décadas, mientras que muchas aerolíneas tienen ciclos cortos. Las entradas recientes de low-cost (SKY, JetSMART) marcan una nueva era competitiva.

### Relación pasajeros vs. carga por destino

Scatter plot en escala logarítmica que compara el acumulado total de pasajeros y tonelaje por cada destino emisivo. Cada punto es una ciudad, coloreada por continente.

![Scatter plot log-log comparando acumulado de pasajeros vs tonelaje por destino, coloreado por continente](./assets/charts/06_pax_vs_cargo.png)

La mayoría de los destinos siguen una correlación positiva entre pasajeros y carga, pero existen outliers notables: destinos con alta carga relativa sugieren hubs logísticos/comerciales, mientras que destinos con alto flujo de pasajeros pero baja carga indican rutas predominantemente turísticas.

### Crecimiento interanual: Top 5 destinos

Muestra la tasa de crecimiento año a año del flujo de pasajeros de los 5 destinos emisivos más importantes. Este análisis revela la dinámica oculta por los valores acumulados del barchart race.

![Gráfico de líneas mostrando crecimiento interanual de los 5 destinos principales, con caídas extremas en 2020 y recuperación posterior](./assets/charts/07_yoy_growth_top5.png)

Las tasas de crecimiento revelan fases de aceleración y desaceleración no visibles en datos acumulados. El crash COVID genera caídas extremas seguidas de rebounds igualmente intensos. La velocidad de recuperación post-COVID varía significativamente entre destinos.
