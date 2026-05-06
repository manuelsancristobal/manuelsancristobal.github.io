---
layout: project
title: "Atractivos Ancla y Brechas en los Clústeres Turísticos de Chile"
category: Estadística e Inferencia
description: "Análisis de brechas turísticas en Chile: identificación de oportunidades de inversión mediante clustering espacial HDBSCAN de 3,996 atractivos permanentes."
github_url: "https://github.com/manuelsancristobal/cluster-turismo"
tech_stack:
  - Python
  - scikit-learn/HDBSCAN
  - Pandas
  - NumPy
  - Shapely
  - SciPy
  - Folium
  - PyDeck
  - Matplotlib
  - Seaborn
  - pytest
---

**Chile posee territorios con atractivos suficientes para ser destinos que son invisibles para la política pública.** Mediante un <abbr title="Proceso de Extracción, Transformación y Carga de datos">pipeline ETL</abbr> sobre **3.996 atractivos permanentes**, este análisis identifica 94 clústeres consolidados y descubre clústeres emergentes que operan fuera del radar oficial.

<div style="position: relative; width: 100%; padding-bottom: 75%; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe
    src="/proyectos/cluster-turismo/assets/mapa_interactivo.html"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    loading="lazy"
    title="Mapa interactivo de atractivos turísticos de Chile"
    allowfullscreen>
  </iframe>
</div>

[Ver en pantalla completa](/proyectos/cluster-turismo/assets/mapa_interactivo.html){: .btn .btn--primary }

## 1. Ingeniería de Datos y Limpieza Espacial

Este proceso comienza con la **extracción** de datos de atractivos turísticos desde un Excel de SERNATUR y los polígonos <abbr title="Keyhole Markup Language Zipped">KMZ</abbr> de destinos oficiales. Mediante un <abbr title="Operación que une dos conjuntos de datos basándose en su ubicación geográfica y geometría">cruce espacial</abbr> y una limpieza rigurosa, se eliminaron eventos temporales y las coordenadas fuera de los límites continentales, para asegurar que el modelo trabaje solo sobre la oferta turística estructural del país.

## 2. Hallazgo: Clústeres Emergentes y "Ruido" Geográfico

**Existen territorios con atractivos y un potencial de captación idéntico al de los destinos oficiales establecidos.** Al reanalizar los datos clasificados en un inicio como <abbr title="Puntos de datos que el algoritmo no logra agrupar por baja densidad o dispersión">ruido</abbr>, identifiqué clústeres emergentes con una mediana de ~25 atractivos. Estos destinos poseen la masa crítica geográfica necesaria para captar flujos, aunque su consolidación dependerá de cerrar brechas en infraestructura y servicios. Su dispersión los mantenía invisibles para los modelos tradicionales de inversión pública.

![Boxplot: Destinos oficiales vs clústeres rezagados](./assets/img/comparativa_boxplot.png)

## 3. Diagnóstico de Superposición y Gestión de Brechas

**La identificación de clústeres de "rezago genuino" permite focalizar esfuerzos donde no existen estructuras previas.** Al comparar la geometría de nuestros hallazgos con los límites de destinos oficiales, detectamos vacíos de cobertura con potencial latente que son prioridad para nuevos modelos de gestión. Los clústeres con superposición parcial ofrecen oportunidades de especialización sin duplicar esfuerzos institucionales existentes.

![Clasificación de superposición entre clústeres](./assets/img/donut_superposicion.png)

## 4. Análisis de Atractivos Ancla e Impacto en Rutas

**Uno de cada tres clústeres posee atractivos de nivel nacional pero carece de un atractivo ancla de jerarquía internacional.** Según la <abbr title="Teoría que postula que los viajeros estructuran su conocimiento del espacio en torno a puntos dominantes o hitos">Anchor-Point Theory</abbr>, la falta de un atractivo de jerarquía internacional (un destino de "clase mundial") frena el desarrollo del entorno al no generar la demanda masiva necesaria para sostener rutas de transporte.

![Distribución de clústeres por categoría de ancla](./assets/img/donut_anclas.png)

## 5. Metodología de Clustering Espacial HDBSCAN

Para procesar esta densidad variable, utilizamos <abbr title="Hierarchical Density-Based Spatial Clustering of Applications with Noise">HDBSCAN</abbr>. Este algoritmo se adapta de forma orgánica a zonas de alta concentración y a áreas dispersas. La implementación incluye la métrica **Haversine** para garantizar cálculos de distancia esférica exactos sobre la superficie terrestre, transformando coordenadas planas en clústeres con relevancia geográfica real.

---

## Conclusión: Impulsando los motores del turismo nacional

Existe una oportunidad al observar los atractivos fuera de los polígonos oficiales, donde es **vital el rol activo de las autoridades regionales y el empuje de los empresarios locales**, quienes son los llamados a descubrir y experimentar con rutas, experiencias y actividades para explotar su potencial.

Podemos transformar clústeres de alcance nacional potenciando alguno de sus atractivos y lograr un efecto "ancla"; Chile ya cuenta con flujos de viajeros (véase el proyecto [**Bar Chart Race: Movimiento Aéreo**](/proyectos/barchart-race/)) que podrían redistribuirse si logramos sofisticar la oferta turística entregada en estos atractivos emergentes.

El sector público, estando al servicio del bien común, debe ayudar a reconocer estas oportunidades, por lo que es necesario **actualizar el catastro nacional de atractivos turísticos**, contar con estos registros es la base para que el Estado y el sector privado tomen decisiones de inversión.

Finalmente, tras definir la base estructural del país, este análisis abre nuevas líneas de estudio para **dimensionar cómo las actividades tipo eventos (festivales, congresos o hitos deportivos) actúan como catalizadores.** Entender si estos hitos temporales pueden ser el motor definitivo para consolidar un clúster emergente, o si su impacto es mínimo, será clave para diseñar un turismo que no solo sea dinámico, sino que también haga eficiente el gasto público en estas actividades, alejándose del rótulo "actividad de campaña política solapada".

<div class="methodology-box" style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-light); border-radius: 8px; border-left: 4px solid var(--secondary);">
    <p style="margin: 0; font-size: 0.95rem;">📌 <strong>Sobre este proyecto:</strong> Esta es una versión rediseñada como aplicación interactiva. El proyecto original está disponible en <a href="https://colab.research.google.com/drive/1S8SzY1u5VMOl1POjpBA1c02yPm-uK5r1?usp=sharing" target="_blank" style="color: var(--secondary); font-weight: 600;">Google Colab</a>.</p>
</div>
