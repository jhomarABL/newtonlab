/** Motor de ejercicios. Añade nuevas operaciones en _calcular para extenderlo. */
export class ExerciseModel {
  validate(exercise, rawValues) {
    const values = this._normalize(rawValues);
    try {
      const expected = this._calcular(exercise, values);
      const answerKeys = Object.keys(expected);
      const comparisons = answerKeys.map(key => this._compare(values[key], expected[key]));
      const correct = comparisons.every(Boolean);
      return {
        correct,
        message: correct ? '¡Correcto! El procedimiento y el resultado coinciden.' : `Aún no. Resultado esperado: ${this._formatExpected(expected)}.`,
        detail: exercise.solucion
      };
    } catch (error) {
      return { correct: false, message: error.message, detail: 'Revisa los valores e intenta nuevamente.' };
    }
  }

  _normalize(values) {
    return Object.fromEntries(Object.entries(values).map(([key, value]) => {
      if (value === '') return [key, value];
      const numeric = Number(String(value).replace(',', '.'));
      return [key, Number.isFinite(numeric) ? numeric : value];
    }));
  }

  _compare(actual, expected) {
    if (actual === '' || actual === undefined) return false;
    if (typeof expected === 'number') return Math.abs(Number(actual) - expected) <= Math.max(0.02, Math.abs(expected) * 0.01);
    return String(actual).trim().toLowerCase() === String(expected).trim().toLowerCase();
  }

  _formatExpected(expected) {
    return Object.entries(expected).map(([key, value]) => `${key} = ${typeof value === 'number' ? Number(value.toFixed(3)) : value}`).join('; ');
  }

  _need(condition, message) { if (!condition) throw new Error(message); }
  _rad(degrees) { return degrees * Math.PI / 180; }

  _calcular(exercise, v) {
    const d = exercise.datos;
    const g = d.g ?? 9.8;
    switch (d.operacion) {
      case 'fixed_numeric': return { respuesta: d.expected };
      case 'choice': return { respuesta: d.expected };
      case 'scientific': return { coeficiente: d.expectedCoefficient, exponente: d.expectedExponent };
      case 'multiply': return { respuesta: v.a * v.b };
      case 'inverse': this._need(v.a !== 0, 'El valor no puede ser cero.'); return { respuesta: 1 / v.a };
      case 'trig_angle': {
        const r = this._rad(v.angulo);
        return { sin: Math.sin(r), cos: Math.cos(r), tan: Math.tan(r) };
      }
      case 'unit_conversion': {
        const factors = { km: 1000, m: 1, cm: 0.01, g: 0.001, kg: 1, 'cm/s': 0.01, 'm/s': 1 };
        const groups = { km: 'length', m: 'length', cm: 'length', g: 'mass', kg: 'mass', 'cm/s': 'speed', 'm/s': 'speed' };
        this._need(groups[v.origen] === groups[v.destino], 'Las unidades deben pertenecer a la misma magnitud.');
        return { respuesta: v.valor * factors[v.origen] / factors[v.destino] };
      }
      case 'vector_from_components': return { modulo: Math.hypot(v.x, v.y), angulo: Math.atan2(v.y, v.x) * 180 / Math.PI };
      case 'vector_to_components': return { x: v.modulo * Math.cos(this._rad(v.angulo)), y: v.modulo * Math.sin(this._rad(v.angulo)) };
      case 'vector_sum': { const rx = v.ax + v.bx, ry = v.ay + v.by; return { rx, ry, modulo: Math.hypot(rx, ry), angulo: Math.atan2(ry, rx) * 180 / Math.PI }; }
      case 'vector_subtract': return { rx: v.ax - v.bx, ry: v.ay - v.by };
      case 'vector_scale': return { rx: v.x * v.k, ry: v.y * v.k };
      case 'average_velocity': this._need(v.t !== 0, 'El tiempo debe ser distinto de cero.'); return { respuesta: (v.xf - v.xi) / v.t };
      case 'mru_position': return { respuesta: v.x0 + v.v * v.t };
      case 'mrua_velocity': return { respuesta: v.v0 + v.a * v.t };
      case 'mrua_position': return { respuesta: v.x0 + v.v0 * v.t + 0.5 * v.a * v.t ** 2 };
      case 'vertical_max': return { tiempo: v.v0 / g, altura: v.v0 ** 2 / (2 * g) };
      case 'impact_speed': this._need(v.h >= 0, 'La altura no puede ser negativa.'); return { respuesta: Math.sqrt(2 * g * v.h) };
      case 'fall_time': this._need(v.h >= 0, 'La altura no puede ser negativa.'); return { respuesta: Math.sqrt(2 * v.h / g) };
      case 'projectile': { const r = this._rad(v.angulo), vx = v.v0 * Math.cos(r), vy = v.v0 * Math.sin(r), tiempo = 2 * vy / g; return { vx, vy, tiempo, alcance: vx * tiempo }; }
      case 'projectile_inverse': { const s = Math.sin(2 * this._rad(v.angulo)); this._need(s > 0 && v.alcance >= 0, 'Usa un ángulo entre 0° y 90° y alcance no negativo.'); return { respuesta: Math.sqrt(v.alcance * g / s) }; }
      case 'projectile_height': return { respuesta: (v.v0 * Math.sin(this._rad(v.angulo))) ** 2 / (2 * g) };
      case 'mcu_period': { this._need(v.T > 0 && v.r > 0, 'Radio y periodo deben ser positivos.'); const omega = 2 * Math.PI / v.T, speed = omega * v.r; return { omega, v: speed, ac: omega ** 2 * v.r }; }
      case 'centripetal': this._need(v.r > 0, 'El radio debe ser positivo.'); return { respuesta: v.v ** 2 / v.r };
      case 'weight': return { respuesta: v.m * g };
      case 'friction': return { respuesta: v.mu * v.m * g };
      case 'newton2': this._need(v.m > 0, 'La masa debe ser positiva.'); return { respuesta: v.F / v.m };
      case 'force_friction': this._need(v.m > 0, 'La masa debe ser positiva.'); return { respuesta: (v.F - v.friccion) / v.m };
      case 'acceleration_2d': this._need(v.m > 0, 'La masa debe ser positiva.'); return { respuesta: Math.hypot(v.fx, v.fy) / v.m };
      case 'incline': { const r = this._rad(v.angulo); return { a: g * Math.sin(r), N: v.m * g * Math.cos(r) }; }
      case 'atwood': { this._need(v.m1 > 0 && v.m2 > 0 && v.m2 > v.m1, 'Usa masas positivas con m₂ > m₁.'); const a = (v.m2 - v.m1) * g / (v.m1 + v.m2); return { a, T: v.m1 * (g + a) }; }
      case 'contact_blocks': this._need(v.m1 + v.m2 > 0, 'La masa total debe ser positiva.'); return { respuesta: v.F / (v.m1 + v.m2) };
      default: throw new Error(`Operación no implementada: ${d.operacion}`);
    }
  }
}
