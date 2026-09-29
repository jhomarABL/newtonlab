/**
 * NewtonLab MVC
 * - Models: datos y reglas de validación, sin conocer el DOM.
 * - Views: generan la interfaz a partir del estado recibido.
 * - Controllers: conectan eventos, modelos, vistas y rutas.
 *
 * Para agregar módulos 5, 6... basta ampliar data/modules.json. Solo modifica
 * ExerciseModel/ExerciseView si introduces un tipo de interacción nuevo.
 */
import { ModuleModel } from './models/ModuleModel.js';
import { ExerciseModel } from './models/ExerciseModel.js';
import { QuizModel } from './models/QuizModel.js';
import { HomeView } from './views/HomeView.js';
import { ModuleView } from './views/ModuleView.js';
import { LessonView } from './views/LessonView.js';
import { ModuleController } from './controllers/ModuleController.js';
import { LessonController } from './controllers/LessonController.js';
import { ExerciseController } from './controllers/ExerciseController.js';
import { QuizController } from './controllers/QuizController.js';
import { RouterController } from './controllers/RouterController.js';

const root = document.querySelector('#app');
const moduleModel = new ModuleModel('./data/modules.json');
const exerciseModel = new ExerciseModel();
const quizModel = new QuizModel();

const homeView = new HomeView(root);
const moduleView = new ModuleView(root);
const lessonView = new LessonView(root);
const exerciseController = new ExerciseController(exerciseModel);
const quizController = new QuizController(quizModel);
const moduleController = new ModuleController(moduleModel, moduleView);
const lessonController = new LessonController(moduleModel, lessonView, exerciseController, quizController);
const router = new RouterController({ root, moduleModel, homeView, moduleController, lessonController });

function initTheme() {
  const button = document.querySelector('[data-theme-toggle]');
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const paint = () => {
    document.documentElement.dataset.theme = theme;
    button.setAttribute('aria-label', `Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`);
    button.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  };
  button.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; paint(); });
  paint();
}

async function bootstrap() {
  initTheme();
  try {
    await moduleModel.load();
    router.start();
  } catch (error) {
    root.innerHTML = `<section class="error-state"><h1>No pudimos cargar el curso</h1><p>${error.message}</p><p>Ejecuta el proyecto mediante un servidor local, como se explica en README.md.</p><button class="button button-primary" onclick="location.reload()">Reintentar</button></section>`;
  }
}

bootstrap();
