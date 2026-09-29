export class ExerciseView {
  static render(exercise, index) {
    return `<article class="exercise-card" data-exercise-id="${exercise.idEjercicio}">
      <header><span class="exercise-index">${String(index+1).padStart(2,'0')}</span><div><p class="meta">${exercise.tipo}</p><h3>${exercise.titulo}</h3></div></header>
      <p>${exercise.instruccion}</p>
      <form class="exercise-form" novalidate>
        <div class="field-grid">${exercise.datos.campos.map(field => this._field(field, exercise.idEjercicio)).join('')}</div>
        <button class="button button-primary" type="submit">Comprobar resultado</button>
      </form>
      <div class="feedback" role="status" hidden></div>
    </article>`;
  }
  static _field(field, id) {
    const inputId = `${id}-${field.name}`;
    if (field.type === 'select') return `<label class="field" for="${inputId}"><span>${field.label}</span><select id="${inputId}" name="${field.name}" required><option value="">Selecciona…</option>${field.options.map(option=>`<option value="${option}">${option}</option>`).join('')}</select></label>`;
    return `<label class="field" for="${inputId}"><span>${field.label}</span><input id="${inputId}" name="${field.name}" type="${field.type}" step="${field.step ?? 'any'}" inputmode="decimal" required placeholder="0"></label>`;
  }
}
