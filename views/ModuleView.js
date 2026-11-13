export class ModuleView {
  constructor(root) {
    this.root = root;
  }

  render(module) {
    this.root.innerHTML = `
      <nav class="breadcrumbs" aria-label="Migas de pan">
        <a href="#/home">Inicio</a>
        <span>/</span>
        <span aria-current="page">Módulo ${module.id}</span>
      </nav>

      <section class="module-header">
        <p class="eyebrow">
          Módulo ${String(module.id).padStart(2, '0')}
        </p>

        <h1>${module.titulo}</h1>

        ${this.renderMindMap(module)}

        <p class="lead">${module.descripcion}</p>

        <div class="module-stats">
          <span>${module.lecciones.length} lecciones</span>
          <span>
            ${module.lecciones.reduce(
      (total, lesson) => total + lesson.ejercicios.length,
      0
    )} ejercicios
          </span>
        </div>
      </section>

      <section class="lesson-list" aria-labelledby="lessons-title">
        <h2 id="lessons-title">Plan de lecciones</h2>

        ${module.lecciones.map((lesson, index) => `
          <article class="lesson-row">
            <div class="lesson-order">
              ${String(index + 1).padStart(2, '0')}
            </div>

            <div>
              <p class="meta">Lección ${lesson.idLeccion}</p>
              <h3>${lesson.titulo}</h3>
              <p>
                ${lesson.ejercicios.length} ejercicios ·
                ${lesson.quiz.length} preguntas
              </p>
            </div>

            <a
              class="button button-secondary"
              href="#/module/${module.id}/lesson/${lesson.idLeccion}"
            >
              Comenzar <span aria-hidden="true">→</span>
            </a>
          </article>
        `).join('')}
      </section>

      <div class="page-actions">
        <a class="button button-ghost" href="#/home">
          ← Volver al inicio
        </a>
      </div>
    `;

    document.title = `${module.titulo} | NewtonLab`;
  }

  /**
   * Muestra el mapa mental únicamente si el módulo tiene
   * configurada la propiedad mapaMental en modules.json.
   */
  renderMindMap(module) {
    const map = module.mapaMental;

    if (!map?.src) {
      return '';
    }

    return `
      <figure class="module-mind-map">
        <a
          href="${map.src}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir mapa mental de ${module.titulo} en tamaño completo"
        >
          <img
            src="${map.src}"
            alt="${map.alt || `Mapa mental de ${module.titulo}`}"
            width="${map.width || 1600}"
            height="${map.height || 900}"
            loading="eager"
            decoding="async"
          >
        </a>

        ${map.pie ? `
          <figcaption>${map.pie}</figcaption>
        ` : ''}
      </figure>
    `;
  }
}