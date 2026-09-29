/** Repositorio de módulos. Mantiene una caché en memoria tras la primera carga. */
export class ModuleModel {
  constructor(dataUrl) { this.dataUrl = dataUrl; this.modules = []; }

  async load() {
    const response = await fetch(this.dataUrl);
    if (!response.ok) throw new Error(`No fue posible leer modules.json (${response.status}).`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('modules.json debe contener un arreglo de módulos.');
    this.modules = data.sort((a, b) => a.orden - b.orden);
    return this.modules;
  }

  getModules() { return [...this.modules]; }
  getModuleById(id) { return this.modules.find(module => String(module.id) === String(id)); }
  getLessons(moduleId) { return this.getModuleById(moduleId)?.lecciones ?? []; }
  getLesson(moduleId, lessonId) { return this.getLessons(moduleId).find(lesson => String(lesson.idLeccion) === String(lessonId)); }
  getExercises(moduleId, lessonId) { return this.getLesson(moduleId, lessonId)?.ejercicios ?? []; }
  getQuiz(moduleId, lessonId) { return this.getLesson(moduleId, lessonId)?.quiz ?? []; }
}
