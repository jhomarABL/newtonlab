export class QuizController {
  constructor(model) { this.model = model; }
  bind(key, questions) {
    this.model.start(key, questions);
    questions.forEach(question => {
      const fieldset = document.querySelector(`[data-question-id="${question.idPregunta}"]`);
      fieldset?.addEventListener('change', event => {
        if (!event.target.matches('input[type="radio"]')) return;
        const result = this.model.answer(key, question.idPregunta, event.target.value);
        this.paintQuestion(fieldset, result);
        this.paintScore(key);
      });
    });
    document.querySelector('[data-reset-quiz]')?.addEventListener('click', () => {
      this.model.reset(key);
      document.querySelectorAll('.quiz-question').forEach(fieldset => {
        fieldset.querySelectorAll('input').forEach(input => { input.checked=false; input.disabled=false; });
        fieldset.querySelectorAll('.quiz-option').forEach(option => option.classList.remove('selected','correct','wrong'));
        const feedback=fieldset.querySelector('.feedback'); feedback.hidden=true; feedback.className='feedback'; feedback.innerHTML='';
      });
      this.model.start(key, questions);
      this.paintScore(key);
    });
    this.restore(key, questions);
    this.paintScore(key);
  }
  paintQuestion(fieldset, result) {
    const selected = fieldset.querySelector('input:checked');
    fieldset.querySelectorAll('.quiz-option').forEach((option,index)=>{
      option.classList.remove('selected','correct','wrong');
      if (index === result.correctIndex) option.classList.add('correct');
    });
    selected.closest('.quiz-option').classList.add('selected', result.correct ? 'correct' : 'wrong');
    const feedback = fieldset.querySelector('.feedback');
    feedback.hidden=false; feedback.className=`feedback ${result.correct?'is-correct':'is-wrong'}`;
    feedback.innerHTML=`<strong>${result.correct?'Respuesta correcta.':'Respuesta incorrecta.'}</strong><span>${result.feedback}</span>`;
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([feedback]);
  }
  paintScore(key) {
    const score=this.model.score(key);
    document.querySelector('[data-quiz-count]').textContent=`${score.answered} de ${score.total} respondidas`;
    document.querySelector('[data-progress-bar]').style.width=`${score.total ? score.answered/score.total*100 : 0}%`;
    document.querySelector('[data-score]').textContent=`${score.percent}%`;
    document.querySelector('[data-score-message]').textContent=score.answered===score.total ? `Resultado final: ${score.correct} de ${score.total} correctas.` : `Llevas ${score.correct} respuestas correctas.`;
  }
  restore(key, questions) {
    questions.forEach(question=>{
      const saved=this.model.getAnswer(key,question.idPregunta); if(!saved)return;
      const fieldset=document.querySelector(`[data-question-id="${question.idPregunta}"]`);
      const input=fieldset.querySelector(`input[value="${saved.selectedIndex}"]`); input.checked=true;
      this.paintQuestion(fieldset,{correct:saved.correct,feedback:question.retroalimentacion,correctIndex:question.correcta});
    });
  }
}
