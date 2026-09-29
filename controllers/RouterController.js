/** Router hash: interpreta la URL y delega la pantalla al controlador adecuado. */
export class RouterController {
  constructor({ root, moduleModel, homeView, moduleController, lessonController }) {
    Object.assign(this, { root, moduleModel, homeView, moduleController, lessonController });
  }
  start() {
    window.addEventListener('hashchange', () => this.resolve());
    if (!location.hash) location.hash = '#/home'; else this.resolve();
  }
  async resolve() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    window.scrollTo({ top:0, behavior:'instant' });
    if (!parts.length || parts[0] === 'home') return this.homeView.render(this.moduleModel.getModules());
    if (parts[0] === 'module' && parts[1] && parts[2] === 'lesson' && parts[3]) return this.lessonController.show(parts[1], decodeURIComponent(parts[3]));
    if (parts[0] === 'module' && parts[1]) return this.moduleController.show(parts[1]);
    this.root.innerHTML = '<section class="error-state"><h1>Ruta no encontrada</h1><p>La página solicitada no existe.</p><a class="button button-primary" href="#/home">Ir al inicio</a></section>';
  }
}
