export class HomeView {
  constructor(root) { this.root = root; }
  render(modules) {
    const lessonCount = modules.reduce((sum, module) => sum + module.lecciones.length, 0);
    this.root.innerHTML = `
      <section class="home-hero">
        <div>
          <p class="eyebrow">Ruta de aprendizaje · 5 módulos</p>
          <h1>Entiende el movimiento.<br><span>Practica cada ley.</span></h1>
          <p class="lead">Una guía progresiva de mecánica newtoniana con teoría, cálculo guiado y retroalimentación inmediata.</p>
        </div>
        <aside class="course-index" aria-label="Resumen del curso">
          <strong>${lessonCount}</strong><span>lecciones</span>
          <strong>45</strong><span>ejercicios</span>
          <strong>53</strong><span>preguntas</span>
        </aside>
      </section>
      <section class="module-section" aria-labelledby="modules-title">
        <div class="section-heading"><div><p class="eyebrow">Contenido</p><h2 id="modules-title">Módulos del curso</h2></div><p>Avanza desde las herramientas matemáticas hasta sistemas de fuerzas.</p></div>
        <div class="module-list">${modules.map((module, index) => `
          <article class="module-row">
            <div class="module-number" aria-hidden="true">${String(module.id).padStart(2, '0')}</div>
            <div class="module-copy"><span class="meta">${module.lecciones.length} lecciones</span><h3>${module.titulo}</h3><p>${module.descripcion}</p></div>
            <a class="button button-secondary" href="#/module/${module.id}">Entrar <span aria-hidden="true">→</span></a>
          </article>`).join('')}</div>
      </section>`;
    document.title = 'NewtonLab | Física Mecánica';
  }
}
