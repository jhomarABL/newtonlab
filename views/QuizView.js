export class QuizView {
  static render(questions) {
    return `<div class="quiz-shell">
      <div class="quiz-progress" aria-live="polite"><span data-quiz-count>0 de ${questions.length} respondidas</span><div class="progress-track"><span data-progress-bar style="width:0%"></span></div></div>
      ${questions.map((question, index) => `<fieldset class="quiz-question" data-question-id="${question.idPregunta}">
        <legend><span>${String(index + 1).padStart(2, '0')}</span>${question.pregunta}</legend>
        <div class="option-list">${question.opciones.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="${question.idPregunta}" value="${optionIndex}"><span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span></label>`).join('')}</div>
        <div class="feedback" role="status" hidden></div>
      </fieldset>`).join('')}
      <div class="score-card" data-score-card><div><p class="meta">Puntaje actual</p><strong data-score>0%</strong></div><p data-score-message>Responde las preguntas para calcular tu resultado.</p><button class="button button-secondary" type="button" data-reset-quiz>Reiniciar quiz</button></div>
    </div>`;
  }
}
