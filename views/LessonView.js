import { ExerciseView } from './ExerciseView.js';
import { QuizView } from './QuizView.js';

export class LessonView {
  constructor(root) { this.root = root; }
  render(module, lesson) {
    const index = module.lecciones.findIndex(item => item.idLeccion === lesson.idLeccion);
    const previous = module.lecciones[index - 1];
    const next = module.lecciones[index + 1];
    this.root.innerHTML = `
      <nav class="breadcrumbs" aria-label="Migas de pan"><a href="#/home">Inicio</a><span>/</span><a href="#/module/${module.id}">${module.titulo}</a><span>/</span><span aria-current="page">${lesson.idLeccion}</span></nav>
      <div class="lesson-layout">
        <aside class="lesson-sidebar" aria-label="Lecciones del módulo"><p class="meta">Módulo ${module.id}</p><h2>${module.titulo}</h2><ol>${module.lecciones.map(item => `<li><a class="${item.idLeccion === lesson.idLeccion ? 'active' : ''}" href="#/module/${module.id}/lesson/${item.idLeccion}"><span>${item.idLeccion}</span>${item.titulo}</a></li>`).join('')}</ol></aside>
        <article class="lesson-content">
          <header class="lesson-header"><p class="eyebrow">Lección ${lesson.idLeccion}</p><h1>${lesson.titulo}</h1><div class="lesson-tags"><span>Teoría</span><span>${lesson.ejercicios.length} ejercicios</span><span>${lesson.quiz.length} preguntas</span></div></header>
          <section class="theory prose" aria-labelledby="theory-title"><h2 id="theory-title">Conceptos esenciales</h2>${lesson.contenidoHTML}</section>
          <section class="practice" aria-labelledby="practice-title"><div class="section-heading"><div><p class="eyebrow">Laboratorio</p><h2 id="practice-title">Ejercicios interactivos</h2></div><p>Se acepta un margen del 1% en resultados decimales.</p></div><div class="exercise-list">${lesson.ejercicios.map(ExerciseView.render.bind(ExerciseView)).join('')}</div></section>
          <section class="quiz-section" aria-labelledby="quiz-title"><div class="section-heading"><div><p class="eyebrow">Autoevaluación</p><h2 id="quiz-title">Comprueba lo aprendido</h2></div><p>Recibirás retroalimentación al elegir cada respuesta.</p></div>${QuizView.render(lesson.quiz)}</section>
          <nav class="lesson-navigation" aria-label="Navegación entre lecciones">${previous ? `<a class="button button-secondary" href="#/module/${module.id}/lesson/${previous.idLeccion}">← ${previous.titulo}</a>` : `<a class="button button-secondary" href="#/module/${module.id}">← Ver módulo</a>`}${next ? `<a class="button button-primary" href="#/module/${module.id}/lesson/${next.idLeccion}">${next.titulo} →</a>` : `<a class="button button-primary" href="#/home">Finalizar módulo →</a>`}</nav>
        </article>
      </div>`;
    document.title = `${lesson.titulo} | NewtonLab`;
  }
}
