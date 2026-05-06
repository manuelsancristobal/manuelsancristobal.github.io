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

**Chile posee territorios con masa crítica suficiente para ser destinos consolidados que permanecen invisibles para la política pública.** Mediante un <abbr title="Proceso de Extracción, Transformación y Carga de datos">pipeline ETL</abbr> sobre **3.996 atractivos permanentes**, este análisis identifica 94 clústeres consolidados y descubre clústeres emergentes que operan fuera del radar oficial.

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

La robustez del análisis nace de la integración de fuentes heterogéneas. El proceso comienza con la **extracción** de datos brutos desde archivos Excel de SERNATUR y polígonos <abbr title="Keyhole Markup Language Zipped">KMZ</abbr> de destinos oficiales. Mediante un <abbr title="Operación que une dos conjuntos de datos basándose en su ubicación geográfica y geometría">cruce espacial</abbr> y una limpieza rigurosa, se eliminaron eventos temporales y coordenadas fuera de los límites continentales, para asegurar que el modelo trabaje solo sobre la oferta turística estructural del país.

## 2. Hallazgo: Clústeres Emergentes y "Ruido" Geográfico

**Existen territorios con un potencial de captación idéntico al de los destinos consolidados.** Al re-analizar los datos clasificados en un inicio como <abbr title="Puntos de datos que el algoritmo no logra agrupar por baja densidad o dispersión">ruido</abbr>, identifiqué clústeres emergentes con una mediana de ~25 atractivos. Estos destinos poseen la masa crítica necesaria para captar flujos, pero su dispersión geográfica los mantenía invisibles para los modelos tradicionales de inversión pública.

![Boxplot: Destinos oficiales vs clústeres rezagados](./assets/img/comparativa_boxplot.png)

## 3. Diagnóstico de Superposición y Gestión de Brechas

**La identificación de clústeres de "rezago genuino" permite focalizar esfuerzos donde no existen estructuras previas.** Al comparar la geometría de nuestros hallazgos con los límites de destinos oficiales, detectamos vacíos de cobertura que son prioridad para nuevos modelos de gestión. Los clústeres con superposición parcial ofrecen oportunidades de especialización sin duplicar esfuerzos institucionales existentes.

![Clasificación de superposición entre clústeres](./assets/img/donut_superposicion.png)

## 4. Análisis de Atractivos Ancla e Impacto en Rutas

**Uno de cada tres clústeres posee infraestructura nacional pero carece de un atractivo ancla de jerarquía internacional.** Según la <abbr title="Teoría que postula que los viajeros estructuran su conocimiento del espacio en torno a puntos dominantes o hitos">Anchor-Point Theory</abbr>, la ausencia de un motor de desplazamiento global limita el crecimiento del entorno. Como se observa en el proyecto de [**Bar Chart Race: Movimiento Aéreo**](/proyectos/barchart-race/), la resiliencia de las rutas internacionales está ligada en forma directa a la jerarquía de los destinos que conectan.

![Distribución de clústeres por categoría de ancla](./assets/img/donut_anclas.png)

## 5. Metodología de Clustering Espacial HDBSCAN

Para procesar esta densidad variable, utilizamos <abbr title="Hierarchical Density-Based Spatial Clustering of Applications with Noise">HDBSCAN</abbr>. Este algoritmo se adapta de forma orgánica a zonas de alta concentración y áreas dispersas como la Patagonia. La implementación incluye la métrica **Haversine** para garantizar cálculos de distancia esférica exactos sobre la superficie terrestre, transformando coordenadas planas en clústeres con relevancia geográfica real.

---

## Conclusión: Impulsando los motores del turismo nacional

El desarrollo turístico de Chile no requiere crear destinos desde cero, sino reconocer y fortalecer lo que ya late en el territorio. Para que estas oportunidades se transformen en realidad, es **vital el rol activo de las autoridades regionales y el empuje de los empresarios locales**, quienes son los llamados a descubrir y explotar el potencial que los datos aquí revelan.

Mis principales propuestas para avanzar hacia un desarrollo territorial efectivo son:

*   **Inversión con visión global:** No basta con inyectar recursos; debemos elevar el estándar. Transformar clústeres de alcance nacional en destinos con "anclas" internacionales permitiría capturar y potenciar los flujos de viajeros analizados en proyectos como el [**Bar Chart Race: Movimiento Aéreo**](/proyectos/barchart-race/).
*   **Gestión territorial inteligente:** En lugar de aplicar fórmulas genéricas, debemos usar datos espaciales para que la política pública llegue de forma exacta donde ya existe actividad latente, optimizando el impacto de cada inversión.
*   **Modernización del Catastro:** Existe una **necesidad fundamental de actualizar el catastro nacional de atractivos turísticos**. Un análisis de precisión solo es tan bueno como sus datos de base; contar con un registro al día es la piedra angular para que el Estado y el sector privado tomen decisiones sobre el territorio real y no sobre registros obsoletos.

Finalmente, este camino abre nuevas líneas de estudio. **Se requiere más investigación para dimensionar el impacto de las actividades tipo eventos (festivales, congresos o hitos deportivos) que funcionan como anclas de jerarquía superior.** Entender si estos hitos temporales pueden ser el catalizador definitivo para consolidar un clúster emergente será clave para diseñar un turismo que no solo sea dinámico, sino también resiliente y sostenible en el tiempo.

<div class="methodology-box" style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-light); border-radius: 8px; border-left: 4px solid var(--secondary);">
    <p style="margin: 0; font-size: 0.95rem;">📌 <strong>Sobre este proyecto:</strong> Esta es una versión rediseñada como aplicación interactiva. El proyecto original está disponible en <a href="https://colab.research.google.com/drive/1S8SzY1u5VMOl1POjpBA1c02yPm-uK5r1?usp=sharing" target="_blank" style="color: var(--secondary); font-weight: 600;">Google Colab</a>.</p>
</div>
