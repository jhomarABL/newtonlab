# NewtonLab MVC

Aplicación educativa de Física Mecánica Newtoniana hecha con HTML, CSS y JavaScript puro.

## Ejecutar

Los módulos ES y `fetch()` necesitan un servidor HTTP local. Desde esta carpeta ejecuta una de estas opciones:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`. También puedes usar la extensión **Live Server** de VS Code. No abras `index.html` directamente con `file://`.

## Arquitectura

- `data/modules.json`: única fuente de contenido; incluye módulos, lecciones, ejercicios y quizzes.
- `models/`: carga de datos, reglas de ejercicios y calificación de quizzes.
- `views/`: funciones que convierten datos en HTML.
- `controllers/`: navegación y eventos de cada pantalla.
- `app.js`: composición de dependencias e inicio de la aplicación.
- `assets/css/styles.css`: sistema visual responsivo, accesible y con tema claro/oscuro.

## Agregar un módulo

1. Añade otro objeto al arreglo raíz de `data/modules.json` con `id`, `titulo`, `descripcion`, `orden` y `lecciones`.
2. Conserva el esquema de las lecciones, ejercicios y preguntas existentes.
3. Para un ejercicio ya compatible, reutiliza un valor de `datos.operacion` y define sus `campos`.
4. Para una operación nueva, agrega su cálculo en `ExerciseModel._calcular()`; si necesita controles especiales, amplía `ExerciseView._campo()`.
5. No es necesario modificar el router, HomeView, ModuleView ni LessonView.

## Rutas

- `#/home`
- `#/module/2`
- `#/module/2/lesson/2.1`
