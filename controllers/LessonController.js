export class LessonController {
  constructor(moduleModel, lessonView, exerciseController, quizController) {
    Object.assign(this, { moduleModel, lessonView, exerciseController, quizController });
  }
  show(moduleId, lessonId) {
    const module = this.moduleModel.getModuleById(moduleId);
    const lesson = this.moduleModel.getLesson(moduleId, lessonId);
    if (!module || !lesson) return location.hash = module ? `#/module/${moduleId}` : '#/home';
    this.lessonView.render(module, lesson);
    this.exerciseController.bind(lesson.ejercicios);
    this.quizController.bind(`${moduleId}:${lessonId}`, lesson.quiz);
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([document.querySelector('#app')]);
  }
}
