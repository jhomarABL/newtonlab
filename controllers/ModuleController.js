export class ModuleController {
  constructor(moduleModel, moduleView) { this.model = moduleModel; this.view = moduleView; }
  show(moduleId) {
    const module = this.model.getModuleById(moduleId);
    if (!module) return location.hash = '#/home';
    this.view.render(module);
  }
}
