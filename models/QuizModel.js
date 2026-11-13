/** Estado y reglas de un quiz; cada lección conserva su intento en memoria. */
export class QuizModel {
  constructor() { this.sessions = new Map(); }
  start(key, questions) {
    if (!this.sessions.has(key)) this.sessions.set(key, { questions, answers: new Map() });
    return this.sessions.get(key);
  }
  answer(key, questionId, selectedIndex) {
    const session = this.sessions.get(key);
    const question = session?.questions.find(item => item.idPregunta === questionId);
    if (!question) throw new Error('Pregunta no encontrada.');
    const correct = Number(selectedIndex) === question.correcta;
    session.answers.set(questionId, { selectedIndex: Number(selectedIndex), correct });
    return { correct, feedback: question.retroalimentacion, correctIndex: question.correcta };
  }
  score(key) {
    const session = this.sessions.get(key);
    if (!session) return { correct: 0, answered: 0, total: 0, percent: 0 };
    const correct = [...session.answers.values()].filter(answer => answer.correct).length;
    const answered = session.answers.size;
    const total = session.questions.length;
    return { correct, answered, total, percent: total ? Math.round(correct / total * 100) : 0 };
  }
  getAnswer(key, questionId) { return this.sessions.get(key)?.answers.get(questionId); }
  reset(key) { this.sessions.delete(key); }
}
