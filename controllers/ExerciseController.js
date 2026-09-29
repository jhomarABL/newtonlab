export class ExerciseController {
  constructor(model) { this.model = model; }
  bind(exercises) {
    exercises.forEach(exercise => {
      const card = document.querySelector(`[data-exercise-id="${exercise.idEjercicio}"]`);
      card?.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.reportValidity()) return;
        const values = Object.fromEntries(new FormData(form).entries());
        const result = this.model.validate(exercise, values);
        const feedback = card.querySelector('.feedback');
        feedback.hidden = false;
        feedback.className = `feedback ${result.correct ? 'is-correct' : 'is-wrong'}`;
        feedback.innerHTML = `<strong>${result.message}</strong><span>${result.detail}</span>`;
        if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([feedback]);
      });
    });
  }
}
