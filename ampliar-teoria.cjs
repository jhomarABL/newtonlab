/**
 * AMPLIACIÓN TEÓRICA DE LOS MÓDULOS 5 AL 10
 *
 * Ejecutar desde la raíz del proyecto:
 *
 *   node ampliar-teoria.cjs
 *
 * También puedes indicar la ruta del JSON:
 *
 *   node ampliar-teoria.cjs ./data/modules.json
 *
 * REQUISITO:
 * Los módulos 5 al 10 y sus lecciones deben existir.
 *
 * MODIFICA:
 * Únicamente contenidoHTML de las lecciones 5.1 a 10.4.
 *
 * CONSERVA:
 * - Módulos 0 al 4.
 * - Títulos y descripciones.
 * - Ejercicios.
 * - Quizzes.
 * - Mapas mentales.
 * - Cualquier otra propiedad existente.
 *
 * Crea una copia de seguridad antes de guardar.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const R = String.raw;

const contenidos = {

  /* =======================================================
     MÓDULO 5 — TRABAJO, ENERGÍA Y POTENCIA
     ======================================================= */

  "5.1": R`
<section class="lesson-section">
  <h2>1. Qué significa realizar trabajo</h2>

  <p>En física, una fuerza realiza trabajo cuando actúa sobre
  un cuerpo cuyo punto de aplicación se desplaza y existe una
  componente de la fuerza en la dirección de ese desplazamiento.
  El trabajo describe una transferencia de energía, no una
  propiedad que el cuerpo tenga almacenada.</p>

  <p>Por eso, sostener una caja inmóvil puede producir cansancio
  fisiológico, pero la fuerza de las manos no realiza trabajo
  mecánico sobre una caja que no se desplaza. El gasto energético
  del organismo y el trabajo mecánico sobre la caja no son la
  misma cantidad.</p>
</section>

<section class="lesson-section">
  <h2>2. Trabajo de una fuerza constante</h2>

  \[
    W=\vec F\cdot\Delta\vec r=Fd\cos\theta
  \]

  <p>En esta expresión, \(F\) es el módulo de la fuerza,
  \(d\) es el módulo del desplazamiento y \(\theta\) es el ángulo
  entre ambos vectores. El resultado es escalar, aunque se
  obtiene a partir de dos vectores.</p>

  <ul>
    <li>Si \(0^\circ\leq\theta<90^\circ\), el trabajo es positivo.</li>
    <li>Si \(\theta=90^\circ\), el trabajo es cero.</li>
    <li>Si \(90^\circ<\theta\leq180^\circ\), el trabajo es negativo.</li>
  </ul>

  <p>La unidad del SI es el julio:
  \(1\,\text{J}=1\,\text{N}\cdot\text{m}\).
  También puede escribirse
  \(1\,\text{J}=1\,\text{kg}\cdot\text{m}^2/\text{s}^2\).</p>
</section>

<section class="lesson-section">
  <h2>3. Interpretación mediante componentes</h2>

  <p>Si el movimiento es horizontal, solamente la componente
  horizontal de la fuerza contribuye al trabajo. Una fuerza
  inclinada puede modificar la normal mediante su componente
  vertical, pero esa componente no realiza trabajo si no hay
  desplazamiento vertical.</p>

  \[
    W=F_x\Delta x+F_y\Delta y
  \]

  <p>Esta forma permite conservar los signos de las componentes
  sin calcular explícitamente el ángulo.</p>
</section>

<section class="lesson-section">
  <h2>4. Fuerzas variables y áreas</h2>

  <p>Si la fuerza cambia, se divide el recorrido en desplazamientos
  pequeños y se suman sus contribuciones. En el límite:</p>

  \[
    W=\int_C\vec F\cdot d\vec r
  \]

  <p>En un movimiento sobre el eje \(x\):</p>

  \[
    W=\int_{x_i}^{x_f}F_x(x)\,dx
  \]

  <p>En una gráfica fuerza–posición, el trabajo es el área con
  signo. Si el intervalo se recorre hacia \(x\) creciente,
  las regiones sobre el eje aportan trabajo positivo y las
  situadas debajo aportan trabajo negativo. Si se invierten
  los límites de integración, cambia el signo.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplos resueltos</h2>

  <div class="example">
    <h3>Fuerza inclinada</h3>
    <p>Una fuerza de 20 N arrastra una caja 5 m formando
    \(60^\circ\) con el desplazamiento.</p>
    \[
      W=20(5)\cos60^\circ=50\,\text{J}
    \]
    <p>El resultado es menor que \(Fd=100\,\text{J}\), porque
    solo la componente paralela contribuye.</p>
  </div>

  <div class="example">
    <h3>Fuerza que aumenta linealmente</h3>
    <p>Una fuerza pasa de 0 a 12 N durante un desplazamiento
    de 4 m. El área bajo la gráfica es triangular:</p>
    \[
      W=\frac12(4)(12)=24\,\text{J}
    \]
    <p>También puede utilizarse la fuerza media de 6 N
    porque la variación es lineal.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>6. Trabajo de varias fuerzas</h2>

  \[
    W_{\text{neto}}=\sum_i W_i
  \]

  <p>En una caja que se mueve horizontalmente, una fuerza aplicada
  puede realizar trabajo positivo y el rozamiento trabajo negativo.
  El peso y la normal realizan trabajo nulo si son perpendiculares
  al desplazamiento.</p>

  <div class="important">
    <p><strong>Errores frecuentes:</strong> usar la distancia
    recorrida en lugar del desplazamiento apropiado sin analizar
    la trayectoria; omitir el coseno; sumar módulos sin signos;
    confundir una gráfica fuerza–tiempo con fuerza–posición.</p>
  </div>
</section>
`,

  "5.2": R`
<section class="lesson-section">
  <h2>1. Energía asociada al movimiento</h2>

  <p>La energía cinética de una partícula de masa constante es:</p>

  \[
    K=\frac12mv^2
  \]

  <p>La masa se expresa en kilogramos y la rapidez en metros por
  segundo. La energía cinética es escalar y no negativa.
  Dos velocidades opuestas con el mismo módulo producen la
  misma energía cinética, aunque sus momentos lineales sean
  diferentes.</p>

  <p>Su valor depende del sistema de referencia: un pasajero
  puede estar en reposo respecto a un tren y moverse respecto
  a la estación.</p>
</section>

<section class="lesson-section">
  <h2>2. De dónde surge el teorema</h2>

  <p>En una dimensión, para masa constante,
  \(F_{\text{neta}}=ma\). Utilizando
  \(a=v\,dv/dx\), se obtiene:</p>

  \[
    W_{\text{neto}}
    =\int F_{\text{neta}}\,dx
    =\int mv\,dv
    =\frac12mv_f^2-\frac12mv_i^2
  \]

  <p>Por tanto:</p>

  \[
    W_{\text{neto}}=\Delta K
  \]

  <p>La relación también es válida para una partícula en
  varias dimensiones. El trabajo neto reúne las contribuciones
  de todas las fuerzas que actúan sobre ella.</p>
</section>

<section class="lesson-section">
  <h2>3. Interpretación del signo</h2>

  <ul>
    <li>Trabajo neto positivo: aumenta la energía cinética.</li>
    <li>Trabajo neto negativo: disminuye la energía cinética.</li>
    <li>Trabajo neto cero: la energía cinética inicial y final
    son iguales.</li>
  </ul>

  <p>Que el trabajo neto entre dos instantes sea cero no significa
  que la rapidez haya sido constante durante todo el intervalo.
  Si la fuerza neta es perpendicular a la velocidad en todo
  instante, como en el MCU ideal, sí se mantiene constante
  la rapidez durante el movimiento.</p>
</section>

<section class="lesson-section">
  <h2>4. Ejemplo de aceleración</h2>

  <div class="example">
    <p>Una masa de 2 kg pasa de 3 a 5 m/s.</p>
    \[
      K_i=\frac12(2)(3^2)=9\,\text{J}
    \]
    \[
      K_f=\frac12(2)(5^2)=25\,\text{J}
    \]
    \[
      W_{\text{neto}}=25-9=16\,\text{J}
    \]
    <p>El trabajo neto no es 25 J: ese es el valor de la
    energía cinética final.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Distancia de frenado</h2>

  <p>Si una fuerza de frenado constante de módulo \(f\) detiene
  un cuerpo que inicialmente se mueve a rapidez \(v_0\):</p>

  \[
    -fd=0-\frac12mv_0^2
  \]
  \[
    d=\frac{mv_0^2}{2f}
  \]

  <div class="example">
    <p>Para \(m=2\,\text{kg}\), \(v_0=4\,\text{m/s}\)
    y \(f=4\,\text{N}\):</p>
    \[
      d=\frac{2(16)}{2(4)}=4\,\text{m}
    \]
    <p>Si se duplica la rapidez inicial manteniendo la misma
    fuerza de frenado, la distancia se cuadruplica.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>6. Cuándo conviene utilizar energía</h2>

  <p>Este método es especialmente útil si se buscan rapideces
  o desplazamientos y no se necesita conocer el tiempo.
  Para un cuerpo extenso que también gira, deben incluirse
  las energías y trabajos adecuados: la fórmula de una
  partícula no describe por sí sola toda su energía interna
  y rotacional.</p>

  <div class="important">
    <p>No confundas \(v_f^2-v_i^2\) con
    \((v_f-v_i)^2\). Al despejar una raíz se obtiene rapidez;
    la dirección de la velocidad debe deducirse de la situación.</p>
  </div>
</section>
`,

  "5.3": R`
<section class="lesson-section">
  <h2>1. Fuerzas conservativas</h2>

  <p>Una fuerza es conservativa si su trabajo entre dos puntos
  no depende de la trayectoria. De forma equivalente, el
  trabajo sobre cualquier recorrido cerrado es cero dentro
  de la región donde se define el potencial.</p>

  <p>Esto permite asociar una energía potencial a la
  configuración del sistema:</p>

  \[
    W_c=-\Delta U
  \]

  <p>Si una fuerza conservativa realiza trabajo positivo,
  disminuye la energía potencial correspondiente.
  La gravedad y un resorte ideal son ejemplos importantes.</p>
</section>

<section class="lesson-section">
  <h2>2. Energía potencial gravitatoria y elástica</h2>

  \[
    U_g=mgy
  \]
  \[
    U_e=\frac12kx^2
  \]

  <p>La primera expresión supone un campo gravitatorio uniforme;
  \(y\) se mide desde una referencia elegida.
  En la segunda, \(x\) representa deformación respecto a
  la longitud natural del resorte, no necesariamente
  respecto al equilibrio de todo el sistema.</p>

  <p>El cero de energía potencial es arbitrario.
  Lo importante para el trabajo son sus diferencias.
  Cambiar la referencia no cambia las predicciones físicas.</p>
</section>

<section class="lesson-section">
  <h2>3. Balance de energía mecánica</h2>

  \[
    E_{\text{mec}}=K+U
  \]
  \[
    K_i+U_i+W_{nc}=K_f+U_f
  \]

  <p>En este balance, las fuerzas conservativas ya se representan
  mediante sus energías potenciales. \(W_{nc}\) recoge el trabajo
  de las demás fuerzas en el modelo seleccionado.</p>

  <p>Si \(W_{nc}=0\), la energía mecánica se conserva.
  Si hay rozamiento, parte de ella puede transformarse en
  energía interna. La energía total sigue conservándose
  cuando se contabilizan todas sus formas y transferencias.</p>
</section>

<section class="lesson-section">
  <h2>4. Ejemplo: caída sin aire</h2>

  <div class="example">
    <p>Un cuerpo parte del reposo a 5 m del suelo.
    Tomando \(U=0\) en el suelo:</p>
    \[
      mgh=\frac12mv^2
    \]
    \[
      v=\sqrt{2gh}
      =\sqrt{2(9.8)(5)}
      \approx9.90\,\text{m/s}
    \]
    <p>La masa se cancela. El resultado da el módulo de la
    velocidad; el movimiento final es hacia abajo.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo: resorte que impulsa una masa</h2>

  <div class="example">
    <p>Un resorte de 200 N/m se comprime 0.10 m.
    Impulsa una masa de 0.5 kg sobre una superficie sin
    rozamiento. Cuando recupera su longitud natural:</p>
    \[
      \frac12kx_i^2=\frac12mv^2
    \]
    \[
      v=x_i\sqrt{\frac{k}{m}}
      =0.10\sqrt{\frac{200}{0.5}}
      =2\,\text{m/s}
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>6. Interpretación de una gráfica de potencial</h2>

  <p>En una dimensión, la fuerza conservativa puede recuperarse
  de la energía potencial:</p>

  \[
    F_x=-\frac{dU}{dx}
  \]

  <p>Una pendiente positiva de \(U(x)\) corresponde a fuerza
  negativa. En puntos donde la pendiente es cero puede haber
  equilibrio. Los mínimos locales suelen indicar equilibrio
  estable y los máximos equilibrio inestable.</p>

  <div class="important">
    <p>No cuentes dos veces una misma interacción:
    si utilizas \(\Delta U_g\), no añadas de nuevo el trabajo
    de la gravedad como una transferencia independiente.</p>
  </div>
</section>
`,

  "5.4": R`
<section class="lesson-section">
  <h2>1. Energía transferida por unidad de tiempo</h2>

  <p>La potencia mide la rapidez con la que se realiza trabajo
  o se transfiere energía. Dos máquinas pueden entregar la
  misma energía, pero la que lo hace en menos tiempo tiene
  mayor potencia media.</p>

  \[
    P_{\text{media}}=\frac{W}{\Delta t}
  \]
  \[
    P=\frac{dW}{dt}
  \]

  <p>La unidad del SI es el vatio:
  \(1\,\text{W}=1\,\text{J/s}\).
  La potencia puede variar durante el funcionamiento de
  una máquina, por lo que no siempre coincide su valor
  instantáneo con el promedio.</p>
</section>

<section class="lesson-section">
  <h2>2. Potencia de una fuerza</h2>

  <p>Como \(dW=\vec F\cdot d\vec r\):</p>

  \[
    P=\vec F\cdot\frac{d\vec r}{dt}
    =\vec F\cdot\vec v
    =Fv\cos\theta
  \]

  <p>La fuerza y la velocidad deben corresponder al punto de
  aplicación considerado. Si ambas son paralelas y tienen
  el mismo sentido, \(P=Fv\). Si se oponen, la potencia es
  negativa: esa fuerza extrae energía mecánica del movimiento.</p>
</section>

<section class="lesson-section">
  <h2>3. Elevación y tracción</h2>

  <div class="example">
    <p>Un motor eleva 20 kg a velocidad constante de 0.5 m/s,
    despreciando pérdidas.</p>
    <p>Al ser constante la velocidad, la fuerza de elevación
    debe equilibrar el peso:</p>
    \[
      F=mg=20(9.8)=196\,\text{N}
    \]
    \[
      P=Fv=196(0.5)=98\,\text{W}
    \]
  </div>

  <p>Con potencia mecánica constante y fuerza paralela al
  movimiento, \(F=P/v\) para \(v>0\). Por eso no puede
  suponerse simultáneamente fuerza constante y potencia
  constante durante cualquier aceleración.</p>
</section>

<section class="lesson-section">
  <h2>4. Rendimiento</h2>

  \[
    \eta=\frac{E_{\text{útil}}}{E_{\text{entrada}}}
  \]
  \[
    \eta=\frac{P_{\text{útil}}}{P_{\text{entrada}}}
  \]

  <p>La segunda relación se usa al comparar potencias en
  condiciones temporales consistentes, por ejemplo en un
  régimen estacionario. Para un dispositivo pasivo con todas
  las entradas energéticas contabilizadas, el rendimiento
  no supera 1.</p>

  <div class="example">
    <p>Si el motor anterior tiene rendimiento de 70 %, la
    potencia que debe recibir es:</p>
    \[
      P_{\text{entrada}}=\frac{98}{0.70}=140\,\text{W}
    \]
    <p>La diferencia de 42 W se transfiere de otras maneras,
    como calentamiento.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Potencia y consumo energético</h2>

  <p>Para potencia constante, \(E=P\Delta t\).
  Un kilovatio-hora es una unidad de energía:</p>

  \[
    1\,\text{kWh}
    =1000\,\text{W}(3600\,\text{s})
    =3.6\times10^6\,\text{J}
  \]

  <p>Si la potencia varía, la energía transferida es el área
  bajo la gráfica potencia–tiempo:
  \(E=\int P(t)\,dt\).</p>

  <div class="important">
    <p>No confundas kW con kWh. Un rendimiento de 75 %
    se introduce como 0.75 en las ecuaciones, no como 75.</p>
  </div>
</section>
`,

  /* =======================================================
     MÓDULO 6 — IMPULSO Y CANTIDAD DE MOVIMIENTO
     ======================================================= */

  "6.1": R`
<section class="lesson-section">
  <h2>1. Cantidad de movimiento</h2>

  \[
    \vec p=m\vec v
  \]

  <p>El momento lineal combina masa y velocidad. Es vectorial:
  sus componentes tienen los signos de las componentes
  de velocidad. Dos cuerpos con la misma rapidez pueden tener
  momentos opuestos si se mueven en sentidos contrarios.</p>

  <p>Su unidad es
  \(\text{kg}\cdot\text{m/s}\).
  No debe confundirse con la energía cinética, que depende
  de \(v^2\) y es escalar.</p>
</section>

<section class="lesson-section">
  <h2>2. El impulso como efecto acumulado</h2>

  \[
    \vec J=\int_{t_i}^{t_f}\vec F_{\text{neta}}(t)\,dt
  \]
  \[
    \vec J=\vec F_{\text{media}}\Delta t
  \]

  <p>La fuerza puede ser muy grande y actuar brevemente,
  o ser menor y actuar durante más tiempo. Lo decisivo para
  cambiar el momento es su integral temporal.</p>

  <p>La unidad de impulso es
  \(\text{N}\cdot\text{s}\), equivalente a
  \(\text{kg}\cdot\text{m/s}\).</p>
</section>

<section class="lesson-section">
  <h2>3. Teorema del impulso</h2>

  <p>Al integrar
  \(\vec F_{\text{neta}}=d\vec p/dt\):</p>

  \[
    \vec J=\vec p_f-\vec p_i
  \]

  <p>Para masa constante:</p>

  \[
    \vec J=m(\vec v_f-\vec v_i)
  \]

  <p>La resta es vectorial. Una inversión de sentido puede
  producir un cambio de momento mayor que el que se obtendría
  restando únicamente los módulos de las velocidades.</p>
</section>

<section class="lesson-section">
  <h2>4. Ejemplo: una pelota que rebota</h2>

  <div class="example">
    <p>Una pelota de 0.2 kg llega a una pared a
    \(+10\,\text{m/s}\) y sale a \(-8\,\text{m/s}\).</p>
    \[
      \Delta p=0.2[-8-10]
      =-3.6\,\text{kg}\cdot\text{m/s}
    \]
    <p>Si el contacto dura 0.02 s:</p>
    \[
      F_{\text{media}}=\frac{-3.6}{0.02}
      =-180\,\text{N}
    \]
    <p>El signo negativo indica que el impulso apunta
    en sentido contrario al movimiento de llegada.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Gráficas y seguridad</h2>

  <p>En una gráfica fuerza–tiempo, el área con signo representa
  el impulso. Para un pulso triangular de base \(\Delta t\)
  y altura \(F_{\max}\), el impulso es
  \(J=F_{\max}\Delta t/2\).</p>

  <p>Los materiales acolchados y sistemas de protección buscan
  aumentar el tiempo o la distancia de desaceleración.
  Para un mismo cambio de momento, aumentar el tiempo reduce
  la fuerza media, aunque la fuerza máxima depende también
  de la forma del pulso.</p>

  <div class="important">
    <p>No confundas impulso con fuerza máxima. La fuerza
    media calculada no describe todos los valores instantáneos
    durante una colisión.</p>
  </div>
</section>
`,

  "6.2": R`
<section class="lesson-section">
  <h2>1. Definir el sistema</h2>

  <p>Antes de aplicar conservación del momento hay que decidir
  qué cuerpos se incluyen. Una fuerza es interna si sus dos
  cuerpos participantes pertenecen al sistema; es externa
  si la interacción involucra un cuerpo ajeno a él.</p>

  <p>La misma fuerza puede ser externa para un cuerpo aislado
  e interna para un sistema que incluya ambos cuerpos.</p>
</section>

<section class="lesson-section">
  <h2>2. Balance del momento total</h2>

  \[
    \vec P=\sum_i m_i\vec v_i
  \]
  \[
    \vec P_f-\vec P_i=\vec J_{\text{ext}}
  \]

  <p>Las fuerzas internas se compensan por pares en el balance
  global newtoniano. Si el impulso externo neto es cero:</p>

  \[
    \vec P_i=\vec P_f
  \]

  <p>Puede haber fuerzas externas durante una colisión, como
  el peso, pero su impulso puede ser despreciable frente al
  de las fuerzas de contacto si el intervalo es muy corto.</p>
</section>

<section class="lesson-section">
  <h2>3. Conservación por componentes</h2>

  \[
    P_{xi}=P_{xf},\qquad P_{yi}=P_{yf}
  \]

  <p>Cada igualdad requiere que la componente correspondiente
  del impulso externo sea nula o despreciable.
  En un sistema apoyado, puede conservarse el momento
  horizontal sin que se conserve el vertical.</p>

  <p>No se conservan por separado los módulos de los momentos
  individuales. Se conserva su suma vectorial.</p>
</section>

<section class="lesson-section">
  <h2>4. Ejemplo de separación</h2>

  <div class="example">
    <p>Dos patinadores inicialmente quietos se empujan.
    Sus masas son 40 kg y 60 kg. El primero sale a
    \(+3\,\text{m/s}\).</p>
    \[
      0=40(3)+60v_2
    \]
    \[
      v_2=-2\,\text{m/s}
    \]
    <p>El patinador de menor masa adquiere mayor rapidez.
    El momento total sigue siendo cero, aunque ambos
    se estén moviendo.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Energía y retroceso</h2>

  <p>En una separación pueden aumentar las energías cinéticas
  a costa de energía interna, química o elástica.
  Conservar momento no obliga a conservar energía cinética.</p>

  <p>En problemas de expulsión, comprueba si la velocidad
  del material expulsado está dada respecto al suelo o
  respecto al dispositivo. Para sumar momentos, todas las
  velocidades deben expresarse en el mismo sistema
  de referencia.</p>

  <div class="important">
    <p>Si se estudia un cohete como un cuerpo cuya masa cambia,
    no basta con escribir \(F=ma\) ignorando el flujo de
    momento. El análisis debe incluir el material expulsado
    o un balance adecuado de masa variable.</p>
  </div>
</section>
`,

  "6.3": R`
<section class="lesson-section">
  <h2>1. Qué se conserva en un choque</h2>

  <p>Durante una colisión, las fuerzas de contacto cambian
  rápidamente las velocidades. Si el impulso externo es
  despreciable, se conserva el momento total.</p>

  <ul>
    <li>Choque elástico: también se conserva la energía
    cinética total.</li>
    <li>Choque inelástico: la energía cinética total cambia
    al transformarse en otras formas.</li>
    <li>Choque perfectamente inelástico: los cuerpos quedan
    unidos después del impacto.</li>
  </ul>
</section>

<section class="lesson-section">
  <h2>2. Choque perfectamente inelástico</h2>

  \[
    m_1u_1+m_2u_2=(m_1+m_2)V
  \]
  \[
    V=\frac{m_1u_1+m_2u_2}{m_1+m_2}
  \]

  <p>Las velocidades \(u_1,u_2\) y \(V\) se expresan con
  signo respecto al mismo eje. La unión de los cuerpos
  aporta una condición adicional: ambos tienen la misma
  velocidad final.</p>

  <div class="example">
    <p>Una masa de 2 kg a 3 m/s alcanza otra de 1 kg quieta
    y quedan unidas.</p>
    \[
      V=\frac{2(3)+1(0)}{3}=2\,\text{m/s}
    \]
    \[
      K_i=9\,\text{J},\qquad K_f=6\,\text{J}
    \]
    <p>Se transforman 3 J de energía cinética en otras formas.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>3. Choque elástico unidimensional</h2>

  <p>Se resuelven conjuntamente conservación del momento y
  de la energía cinética. Para masas positivas:</p>

  \[
    v_1=
    \frac{m_1-m_2}{m_1+m_2}u_1+
    \frac{2m_2}{m_1+m_2}u_2
  \]
  \[
    v_2=
    \frac{2m_1}{m_1+m_2}u_1+
    \frac{m_2-m_1}{m_1+m_2}u_2
  \]

  <p>Si las masas son iguales, intercambian sus velocidades.
  Si una masa pequeña choca elásticamente con un cuerpo
  mucho más masivo inicialmente quieto, puede rebotar
  aproximadamente invirtiendo su velocidad.</p>
</section>

<section class="lesson-section">
  <h2>4. Coeficiente de restitución</h2>

  <p>Para un choque sobre un eje, con el cuerpo 1 aproximándose
  al cuerpo 2 y \(u_1>u_2\):</p>

  \[
    e=\frac{v_2-v_1}{u_1-u_2}
  \]

  <p>Es la razón entre rapidez relativa de separación y
  rapidez relativa de aproximación. En choques pasivos
  ordinarios, \(0\le e\le1\).
  El caso \(e=1\) es elástico y \(e=0\) corresponde a
  velocidad relativa final nula en ese eje.</p>
</section>

<section class="lesson-section">
  <h2>5. Choques en dos dimensiones</h2>

  <p>Se escriben balances de momento en \(x\) y en \(y\).
  Una única ecuación escalar no basta para determinar
  todas las componentes. Pueden necesitarse ángulos de salida,
  conservación de energía u otra condición de contacto.</p>

  <div class="important">
    <p>No impongas conservación de energía cinética en un
    choque inelástico. La energía total no desaparece:
    se redistribuye entre movimiento, deformación,
    calentamiento y sonido.</p>
  </div>
</section>
`,

  "6.4": R`
<section class="lesson-section">
  <h2>1. Un promedio ponderado de posiciones</h2>

  \[
    \vec r_{CM}=\frac{\sum_i m_i\vec r_i}{M},
    \qquad M=\sum_i m_i
  \]

  <p>El centro de masa resume la distribución espacial de
  la masa. Los elementos más masivos tienen mayor influencia
  en su ubicación. Para masas iguales, coincide con el
  promedio aritmético de las posiciones.</p>

  <p>Puede estar en una región sin material: el centro de
  un aro uniforme es un ejemplo. Para distribuciones
  continuas, la suma se sustituye por una integral.</p>
</section>

<section class="lesson-section">
  <h2>2. Cálculo por componentes</h2>

  \[
    x_{CM}=\frac{\sum_i m_ix_i}{M},
    \qquad
    y_{CM}=\frac{\sum_i m_iy_i}{M}
  \]

  <div class="example">
    <p>Se colocan 2 kg en \((0,0)\), 1 kg en \((6,0)\)
    y 1 kg en \((0,4)\), con coordenadas en metros.</p>
    \[
      x_{CM}=\frac{2(0)+1(6)+1(0)}4=1.5\,\text{m}
    \]
    \[
      y_{CM}=\frac{2(0)+1(0)+1(4)}4=1\,\text{m}
    \]
    <p>La posición resultante es \((1.5,1)\,\text{m}\).</p>
  </div>
</section>

<section class="lesson-section">
  <h2>3. Movimiento del centro de masa</h2>

  <p>Para un sistema cerrado de masa total constante,
  derivar respecto al tiempo conduce a:</p>

  \[
    \vec v_{CM}=\frac{\sum_i m_i\vec v_i}{M}
    =\frac{\vec P}{M}
  \]
  \[
    \sum\vec F_{\text{ext}}=M\vec a_{CM}
  \]

  <p>Las fuerzas internas pueden producir giros,
  vibraciones o separaciones, pero no cambian por sí solas
  el momento total de un sistema aislado.</p>
</section>

<section class="lesson-section">
  <h2>4. Aplicaciones</h2>

  <p>Si un objeto explota durante un vuelo ideal y se desprecia
  el aire, el centro de masa del conjunto de fragmentos
  continúa la trayectoria determinada por la gravedad,
  mientras se mantenga el mismo modelo de fuerza externa.</p>

  <p>Si dos personas se mueven dentro de una embarcación,
  sus posiciones individuales cambian. En ausencia de
  fuerza externa horizontal apreciable, el centro de
  masa del sistema completo no adquiere aceleración
  horizontal.</p>
</section>

<section class="lesson-section">
  <h2>5. Energía del movimiento colectivo</h2>

  \[
    K_{\text{total}}
    =\frac12Mv_{CM}^2+K_{\text{relativo al CM}}
  \]

  <p>La primera parte describe la traslación global;
  la segunda reúne el movimiento de las partículas
  respecto al centro de masa. Esta separación prepara
  el estudio de cuerpos que se trasladan y rotan.</p>

  <div class="important">
    <p>No sustituyas una distribución desigual por su punto
    medio geométrico. Comprueba que el centro de masa quede
    más próximo a las regiones de mayor masa.</p>
  </div>
</section>
`,

  /* =======================================================
     MÓDULO 7 — ROTACIÓN
     ======================================================= */

  "7.1": R`
<section class="lesson-section">
  <h2>1. Variables angulares</h2>

  <p>La posición angular \(\theta\) describe la orientación
  alrededor de un eje. El desplazamiento angular puede
  acumular varias vueltas y no debe confundirse con el
  ángulo reducido entre 0 y \(2\pi\).</p>

  \[
    \omega=\frac{d\theta}{dt},
    \qquad
    \alpha=\frac{d\omega}{dt}
  \]

  <p>En una rotación plana se elige un sentido positivo,
  normalmente antihorario. Una velocidad angular negativa
  representa giro en el sentido contrario, no una
  rapidez angular negativa.</p>
</section>

<section class="lesson-section">
  <h2>2. Aceleración angular constante</h2>

  \[
    \omega=\omega_0+\alpha t
  \]
  \[
    \Delta\theta=\omega_0t+\frac12\alpha t^2
  \]
  \[
    \omega^2=\omega_0^2+2\alpha\Delta\theta
  \]

  <p>Estas ecuaciones son análogas a las del MRUA y
  requieren \(\alpha\) constante. Si \(\omega\) y
  \(\alpha\) tienen el mismo signo, aumenta la rapidez
  angular. Si tienen signos opuestos, disminuye hasta
  que eventualmente se invierte el giro.</p>
</section>

<section class="lesson-section">
  <h2>3. Relación con el movimiento lineal</h2>

  \[
    s=r\Delta\theta,\qquad v=|\omega|r
  \]
  \[
    a_t=\alpha r,\qquad a_c=\omega^2r
  \]

  <p>La primera relación utiliza arco orientado.
  Para distancia recorrida en un giro sin inversión
  se usa el módulo del ángulo.
  La aceleración tangencial cambia la rapidez y
  la centrípeta cambia la dirección.</p>

  <p>Ambas son perpendiculares:</p>
  \[
    a=\sqrt{a_t^2+a_c^2}
  \]
</section>

<section class="lesson-section">
  <h2>4. Ejemplo de puesta en marcha</h2>

  <div class="example">
    <p>Una rueda parte de \(2\,\text{rad/s}\) y acelera
    a \(3\,\text{rad/s}^2\) durante 4 s.</p>
    \[
      \omega_f=2+3(4)=14\,\text{rad/s}
    \]
    \[
      \Delta\theta=2(4)+\frac12(3)(4^2)=32\,\text{rad}
    \]
    \[
      N=\frac{\Delta\theta}{2\pi}\approx5.09
      \text{ vueltas}
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>5. Gráficas angulares</h2>

  <ul>
    <li>Pendiente de \(\theta(t)\): velocidad angular.</li>
    <li>Pendiente de \(\omega(t)\): aceleración angular.</li>
    <li>Área con signo bajo \(\omega(t)\): desplazamiento angular.</li>
    <li>Área con signo bajo \(\alpha(t)\): cambio de velocidad angular.</li>
  </ul>

  <div class="important">
    <p>Convierte grados y rpm antes de usar relaciones
    lineales: \(1\text{ vuelta}=2\pi\,\text{rad}\) y
    \(\omega=2\pi(\text{rpm})/60\).
    Aunque \(\alpha=0\), puede existir aceleración centrípeta.</p>
  </div>
</section>
`,

  "7.2": R`
<section class="lesson-section">
  <h2>1. Torque y brazo de palanca</h2>

  \[
    \vec\tau=\vec r\times\vec F
  \]
  \[
    |\tau|=rF\sin\theta=F\ell_\perp
  \]

  <p>El vector \(\vec r\) va desde el origen elegido
  hasta el punto de aplicación. El brazo \(\ell_\perp\)
  es la distancia perpendicular entre el eje y la
  línea de acción de la fuerza.</p>

  <p>Una fuerza grande puede producir torque nulo si
  su línea de acción pasa por el eje. En problemas
  planos se asigna un signo según el sentido de giro.</p>
</section>

<section class="lesson-section">
  <h2>2. Momento de inercia</h2>

  \[
    I=\sum_i m_ir_{\perp i}^2,
    \qquad
    I=\int r_\perp^2\,dm
  \]

  <p>El momento de inercia mide la resistencia a cambiar
  la rotación respecto a un eje. Su unidad es
  \(\text{kg}\cdot\text{m}^2\). Alejar masa del eje
  aumenta I de forma cuadrática.</p>

  <ul>
    <li>Aro delgado, eje central perpendicular:
    \(I=MR^2\).</li>
    <li>Disco uniforme, mismo tipo de eje:
    \(I=MR^2/2\).</li>
    <li>Barra uniforme, eje perpendicular por el centro:
    \(I=ML^2/12\).</li>
    <li>Esfera maciza uniforme, eje por un diámetro:
    \(I=2MR^2/5\).</li>
  </ul>
</section>

<section class="lesson-section">
  <h2>3. Ejes paralelos</h2>

  \[
    I=I_{CM}+Md^2
  \]

  <p>Esta relación traslada un momento de inercia
  desde un eje por el centro de masa a otro eje
  paralelo separado una distancia \(d\).
  No se aplica directamente a ejes no paralelos.</p>

  <div class="example">
    <p>Para una barra uniforme y un eje perpendicular
    por un extremo:</p>
    \[
      I=\frac{ML^2}{12}+M(L/2)^2
      =\frac{ML^2}{3}
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>4. Dinámica alrededor de un eje fijo</h2>

  \[
    \sum\tau_z=I_z\alpha
  \]

  <p>Esta ecuación describe un cuerpo rígido alrededor
  de un eje fijo con I constante. La suma incluye
  torques motores, resistencias, fricción y cualquier
  otra contribución relevante.</p>

  <div class="example">
    <p>Un disco de 2 kg y radio 0.5 m recibe una fuerza
    tangencial de 10 N en el borde, sin rozamiento
    en el eje.</p>
    \[
      I=\frac12(2)(0.5)^2=0.25\,\text{kg}\cdot\text{m}^2
    \]
    \[
      \tau=10(0.5)=5\,\text{N}\cdot\text{m}
    \]
    \[
      \alpha=5/0.25=20\,\text{rad/s}^2
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>5. Comprobaciones</h2>

  <p>El torque y la energía comparten dimensiones,
  pero no son la misma magnitud. El torque se expresa
  habitualmente en N·m, no se interpreta como una
  energía almacenada.</p>

  <div class="important">
    <p>Calcula todos los torques respecto al mismo eje
    y usa el momento de inercia de ese eje. No utilices
    automáticamente el radio completo si la fuerza
    no es tangencial.</p>
  </div>
</section>
`,

  "7.3": R`
<section class="lesson-section">
  <h2>1. Energía de traslación y rotación</h2>

  \[
    K_{\text{rot}}=\frac12I\omega^2
  \]
  \[
    K_{\text{total}}
    =\frac12Mv_{CM}^2+\frac12I_{CM}\omega^2
  \]

  <p>La segunda expresión separa la traslación del
  centro de masa de la rotación alrededor de él.
  Permite estudiar ruedas, cilindros y esferas que
  avanzan mientras giran.</p>
</section>

<section class="lesson-section">
  <h2>2. Rodadura sin deslizamiento</h2>

  \[
    v_{CM}=|\omega|R
  \]

  <p>Sobre suelo quieto, el punto de contacto tiene
  velocidad instantánea cero respecto al suelo.
  El punto superior de una rueda ideal tiene rapidez
  \(2v_{CM}\) y el centro tiene rapidez \(v_{CM}\).</p>

  <p>Velocidad instantánea cero no significa
  aceleración cero: el punto de contacto deja de
  ser el punto de contacto inmediatamente después.</p>
</section>

<section class="lesson-section">
  <h2>3. El papel del rozamiento</h2>

  <p>El rozamiento estático puede proporcionar el
  torque necesario para rodar sin deslizar.
  En el modelo ideal de cuerpo rígido y suelo
  inmóvil, su punto de aplicación tiene velocidad
  instantánea cero y no realiza trabajo mecánico.</p>

  <p>Esto no significa que el rozamiento estático
  nunca haga trabajo en cualquier situación.
  Una superficie móvil o cuerpos deformables
  requieren un análisis diferente.</p>
</section>

<section class="lesson-section">
  <h2>4. Descenso por un plano inclinado</h2>

  <p>Un cuerpo parte del reposo y desciende una altura
  \(h\), rodando sin pérdidas:</p>

  \[
    Mgh=\frac12Mv^2+\frac12I_{CM}\frac{v^2}{R^2}
  \]
  \[
    v=\sqrt{\frac{2gh}{1+I_{CM}/(MR^2)}}
  \]

  <p>Para un plano de ángulo \(\theta\), la aceleración
  del centro es:</p>
  \[
    a=\frac{g\sin\theta}{1+I_{CM}/(MR^2)}
  \]

  <p>Se necesita rozamiento estático suficiente
  para sostener la condición de rodadura.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo y comparación</h2>

  <div class="example">
    <p>Un cilindro macizo uniforme tiene
    \(I_{CM}=MR^2/2\). Entonces:</p>
    \[
      v=\sqrt{\frac{4gh}{3}}
    \]
    <p>Para \(h=0.75\,\text{m}\):</p>
    \[
      v=\sqrt{\frac{4(9.8)(0.75)}3}
      =\sqrt{9.8}\approx3.13\,\text{m/s}
    \]
  </div>

  <p>Para la misma altura, un aro tiene más energía
  rotacional por unidad de \(v^2\) y llega con
  menor rapidez que una esfera maciza uniforme,
  bajo estas mismas condiciones ideales.</p>
</section>

<section class="lesson-section">
  <h2>6. Trabajo y potencia de un torque</h2>

  \[
    W=\int\tau\,d\theta,\qquad P=\tau\omega
  \]

  <div class="important">
    <p>No combines \(v=\omega R\) con una situación
    que tenga deslizamiento. No omitas la energía
    rotacional en el balance de un cuerpo que rueda.</p>
  </div>
</section>
`,

  "7.4": R`
<section class="lesson-section">
  <h2>1. Momento angular de una partícula</h2>

  \[
    \vec L=\vec r\times\vec p
  \]
  \[
    |\vec L|=rmv\sin\theta
  \]

  <p>El momento angular depende del origen elegido.
  Si la velocidad es radial respecto a ese origen,
  el producto vectorial es cero, aunque el cuerpo
  tenga momento lineal distinto de cero.</p>

  <p>La dirección se determina con la regla de
  la mano derecha. Su unidad es
  \(\text{kg}\cdot\text{m}^2/\text{s}\).</p>
</section>

<section class="lesson-section">
  <h2>2. Torque e impulso angular</h2>

  <p>Respecto a un origen fijo de un sistema inercial:</p>

  \[
    \sum\vec\tau_{\text{ext}}=\frac{d\vec L}{dt}
  \]
  \[
    \Delta\vec L
    =\int\sum\vec\tau_{\text{ext}}\,dt
  \]

  <p>El impulso angular cambia el momento angular,
  de manera análoga a como el impulso lineal cambia
  el momento lineal.</p>
</section>

<section class="lesson-section">
  <h2>3. Rotación alrededor de un eje</h2>

  \[
    L_z=I_z\omega
  \]

  <p>Esta expresión proporciona la componente del
  momento angular sobre el eje de rotación.
  La identificación vectorial completa
  \(\vec L=I\vec\omega\) necesita condiciones
  adicionales, como rotación alrededor de un
  eje principal.</p>

  <p>Si el torque externo sobre el eje es cero:</p>

  \[
    I_i\omega_i=I_f\omega_f
  \]
</section>

<section class="lesson-section">
  <h2>4. Ejemplo: cambio de distribución de masa</h2>

  <div class="example">
    <p>Un sistema tiene inicialmente
    \(I_i=2\,\text{kg}\cdot\text{m}^2\) y
    \(\omega_i=3\,\text{rad/s}\). Reduce su
    inercia a \(I_f=1\,\text{kg}\cdot\text{m}^2\)
    sin torque externo.</p>
    \[
      \omega_f=\frac{2(3)}1=6\,\text{rad/s}
    \]
    \[
      K_i=\frac12(2)(3^2)=9\,\text{J}
    \]
    \[
      K_f=\frac12(1)(6^2)=18\,\text{J}
    \]
    <p>El momento angular se conserva, pero aumenta
    la energía cinética por el trabajo asociado
    a la redistribución interna.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Fuerzas centrales</h2>

  <p>Una fuerza central apunta a lo largo del radio
  hacia un origen fijo. Como
  \(\vec r\times\vec F=0\), no produce torque
  respecto a ese origen y conserva el momento
  angular de la partícula.</p>

  <p>Este resultado ayuda a explicar el movimiento
  orbital y el barrido de áreas iguales en
  tiempos iguales.</p>

  <div class="important">
    <p>Conservar L no significa conservar
    \(\omega\) ni energía cinética. Indica
    siempre el origen o eje respecto al cual
    estás trabajando.</p>
  </div>
</section>
`,

  /* =======================================================
     MÓDULO 8 — EQUILIBRIO Y ESTÁTICA
     ======================================================= */

  "8.1": R`
<section class="lesson-section">
  <h2>1. Equilibrio traslacional</h2>

  \[
    \sum\vec F=0
  \]

  <p>Una partícula en equilibrio traslacional tiene
  aceleración cero en un sistema inercial.
  Puede estar en reposo o moverse con velocidad
  constante. La estática estudia específicamente
  configuraciones que permanecen en reposo.</p>

  <p>Las fuerzas individuales no tienen por qué
  ser cero: deben compensarse vectorialmente.</p>
</section>

<section class="lesson-section">
  <h2>2. Diagrama de cuerpo libre</h2>

  <ol>
    <li>Selecciona un solo cuerpo o un sistema claramente definido.</li>
    <li>Sustituye sus contactos por fuerzas.</li>
    <li>Incluye peso, tensiones, normales y rozamiento cuando corresponda.</li>
    <li>Elige ejes que simplifiquen las componentes.</li>
    <li>Escribe un balance independiente por eje.</li>
  </ol>

  \[
    \sum F_x=0,\qquad \sum F_y=0
  \]

  <p>No incluyas fuerzas que el cuerpo ejerce sobre
  otros: pertenecen a otros diagramas.</p>
</section>

<section class="lesson-section">
  <h2>3. Tensiones y ángulos</h2>

  <p>La tensión de un cable ideal tira a lo largo
  del cable. Si forma un ángulo \(\theta\)
  con la horizontal:</p>

  \[
    T_x=T\cos\theta,\qquad T_y=T\sin\theta
  \]

  <div class="example">
    <p>Dos cables simétricos a \(30^\circ\)
    sobre la horizontal sostienen un peso de 100 N.</p>
    \[
      2T\sin30^\circ=100
    \]
    \[
      T=100\,\text{N}
    \]
    <p>Las componentes horizontales se cancelan.
    Si los cables se acercan a la horizontal,
    aumenta la tensión requerida.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>4. Rozamiento estático</h2>

  \[
    |f_s|\leq\mu_sN
  \]

  <p>El rozamiento estático toma el valor necesario
  para impedir el deslizamiento relativo, hasta
  su máximo. La igualdad se usa en el límite
  de deslizamiento inminente.</p>

  <div class="example">
    <p>Sobre un bloque quieto se aplican 12 N
    horizontalmente. Si el máximo rozamiento es
    20 N, el rozamiento real es 12 N en sentido
    contrario, no 20 N.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Equilibrio sobre un plano inclinado</h2>

  <p>Sin otras fuerzas y con ejes paralelo y
  perpendicular al plano:</p>

  \[
    N=mg\cos\theta
  \]
  \[
    f_s=mg\sin\theta
  \]

  <p>El reposo es posible si
  \(mg\sin\theta\leq\mu_smg\cos\theta\),
  es decir, \(\tan\theta\leq\mu_s\).</p>

  <div class="important">
    <p>La normal no siempre equivale a mg.
    El modelo de partícula tampoco basta para
    analizar si un cuerpo extenso puede volcar.</p>
  </div>
</section>
`,

  "8.2": R`
<section class="lesson-section">
  <h2>1. Por qué no basta con equilibrar fuerzas</h2>

  <p>Dos fuerzas iguales y opuestas aplicadas en
  líneas diferentes pueden tener resultante cero
  y producir rotación. Por eso un cuerpo rígido
  necesita equilibrio traslacional y rotacional.</p>

  \[
    \sum F_x=0,\qquad
    \sum F_y=0,\qquad
    \sum\tau_O=0
  \]

  <p>Estas son las tres ecuaciones de equilibrio
  disponibles para un cuerpo rígido en un problema
  plano general.</p>
</section>

<section class="lesson-section">
  <h2>2. Elegir un punto para los momentos</h2>

  <p>Todos los momentos de una ecuación deben
  calcularse respecto al mismo punto. Es conveniente
  escoger una articulación o apoyo con incógnitas:
  las fuerzas que pasan por ese punto tienen
  brazo nulo.</p>

  \[
    \tau=F\ell_\perp
  \]

  <p>Establece un convenio, por ejemplo antihorario
  positivo. El signo no depende solo de que
  una fuerza apunte hacia arriba o abajo, sino
  también del lado del eje donde se aplica.</p>
</section>

<section class="lesson-section">
  <h2>3. Carga puntual sobre una barra</h2>

  <div class="example">
    <p>Una barra sin peso de 4 m tiene apoyos
    en sus extremos y una carga de 80 N a 1 m
    del apoyo izquierdo.</p>
    <p>Momentos respecto al apoyo izquierdo:</p>
    \[
      4R_B-80(1)=0
      \Rightarrow R_B=20\,\text{N}
    \]
    <p>Balance vertical:</p>
    \[
      R_A+20-80=0
      \Rightarrow R_A=60\,\text{N}
    \]
    <p>El apoyo más próximo a la carga soporta
    una reacción mayor.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>4. Peso propio y cargas distribuidas</h2>

  <p>El peso de una barra uniforme puede representarse
  en su centro. Si existe una carga uniforme
  \(q\), en N/m, aplicada a una longitud \(L\),
  su resultante es:</p>

  \[
    P_{\text{equiv}}=qL
  \]

  <p>Actúa en el punto medio del tramo cargado.
  Para cargas no uniformes, la resultante y su
  punto de aplicación se obtienen mediante
  el área y el centroide de la distribución.</p>
</section>

<section class="lesson-section">
  <h2>5. Pares de fuerzas</h2>

  <p>Un par está formado por dos fuerzas paralelas,
  iguales y opuestas, cuyas líneas están separadas
  una distancia perpendicular \(d\). Su fuerza
  neta es cero, pero su momento tiene módulo:</p>

  \[
    M=Fd
  \]

  <div class="important">
    <p>No ignores el peso de la barra salvo que
    se indique despreciable. Después de resolver,
    verifica tanto la suma de fuerzas como
    la suma de momentos.</p>
  </div>
</section>
`,

  "8.3": R`
<section class="lesson-section">
  <h2>1. Centro de gravedad</h2>

  <p>El centro de gravedad es el punto donde puede
  representarse la resultante del peso.
  En un campo gravitatorio uniforme coincide
  con el centro de masa.</p>

  \[
    U_g=Mgy_{CM}
  \]

  <p>Esta relación permite estudiar la estabilidad
  observando cómo cambia la altura del centro
  de masa al perturbar una configuración.</p>
</section>

<section class="lesson-section">
  <h2>2. Tres tipos de equilibrio</h2>

  <ul>
    <li><strong>Estable:</strong> una pequeña perturbación
    produce una tendencia a regresar. La energía potencial
    tiene un mínimo local en la dirección estudiada.</li>
    <li><strong>Inestable:</strong> la perturbación favorece
    alejarse. Se asocia a un máximo local del potencial.</li>
    <li><strong>Indiferente:</strong> la perturbación no
    cambia el potencial en esa dirección.</li>
  </ul>

  <p>Una esfera en un cuenco, en la cima de una
  superficie convexa y sobre un plano horizontal
  ilustran estos casos ideales.</p>
</section>

<section class="lesson-section">
  <h2>3. Base de apoyo y vuelco</h2>

  <p>En una situación estática simple, la vertical
  del centro de gravedad debe caer dentro
  de la base de apoyo. Cuando alcanza un borde,
  puede iniciarse el vuelco alrededor de él.</p>

  <p>Una base más ancha o un centro de masa más
  bajo suelen aumentar la estabilidad frente
  a inclinaciones. En presencia de otras fuerzas,
  también deben analizarse sus torques.</p>
</section>

<section class="lesson-section">
  <h2>4. Bloque rectangular sobre un plano</h2>

  <p>Para un bloque uniforme de base \(b\),
  medida sobre el plano en la dirección de
  inclinación, y altura \(h\), el límite
  geométrico de vuelco sin deslizamiento cumple:</p>

  \[
    \tan\theta_c=\frac{b}{h}
  \]

  <div class="example">
    <p>Si \(b=0.6\,\text{m}\) y
    \(h=1.2\,\text{m}\):</p>
    \[
      \theta_c=\arctan(0.5)\approx26.57^\circ
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>5. ¿Desliza o vuelca primero?</h2>

  <p>El inicio de deslizamiento, en este modelo
  simple, cumple \(\tan\theta_s=\mu_s\).
  Se comparan ambos límites.</p>

  <div class="example">
    <p>Para el bloque anterior,
    \(\tan\theta_c=0.5\). Si \(\mu_s=0.3\),
    el límite de deslizamiento se alcanza antes.
    Si \(\mu_s=0.8\), puede alcanzarse primero
    el límite de vuelco.</p>
  </div>

  <div class="important">
    <p>Equilibrio no significa necesariamente
    estabilidad. El criterio geométrico debe
    acompañarse de una revisión del rozamiento
    y de las fuerzas adicionales.</p>
  </div>
</section>
`,

  "8.4": R`
<section class="lesson-section">
  <h2>1. Modelos de conexiones</h2>

  <p>Un apoyo se sustituye por las acciones que
  impiden los movimientos restringidos:</p>

  <ul>
    <li>Cable ideal: tensión a lo largo del cable.</li>
    <li>Rodillo ideal sin fricción: fuerza normal
    a la superficie de apoyo.</li>
    <li>Articulación plana: dos componentes de fuerza,
    pero no un momento resistente ideal.</li>
    <li>Empotramiento plano: dos componentes de fuerza
    y un momento resistente.</li>
  </ul>

  <p>Estas representaciones son modelos.
  Uniones reales pueden transmitir acciones
  adicionales o presentar deformación.</p>
</section>

<section class="lesson-section">
  <h2>2. Estructuras determinadas e indeterminadas</h2>

  <p>Una estructura estáticamente determinada
  puede resolverse con las ecuaciones independientes
  de equilibrio disponibles. Contar incógnitas
  es una comprobación preliminar, pero también
  importa que las restricciones sean independientes
  y que la estructura sea estable.</p>

  <p>Si faltan ecuaciones, pueden necesitarse
  relaciones entre cargas, deformaciones y
  compatibilidad geométrica.</p>
</section>

<section class="lesson-section">
  <h2>3. Ejemplo completo: barra y cable</h2>

  <div class="example">
    <p>Una barra uniforme horizontal de 3 m pesa
    60 N. Está articulada a la izquierda y sostenida
    en su extremo derecho por un cable a
    \(30^\circ\) sobre la barra.</p>

    <p><strong>Momento respecto a la articulación:</strong></p>
    \[
      T\sin30^\circ(3)-60(1.5)=0
      \Rightarrow T=60\,\text{N}
    \]

    <p><strong>Balance vertical:</strong></p>
    \[
      A_y+60\sin30^\circ-60=0
      \Rightarrow A_y=30\,\text{N}
    \]

    <p><strong>Balance horizontal:</strong></p>
    \[
      A_x-60\cos30^\circ=0
      \Rightarrow A_x\approx51.96\,\text{N}
    \]

    <p>El cable se supone dirigido hacia arriba
    y hacia la izquierda desde el extremo derecho.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>4. Interpretar signos y contactos</h2>

  <p>Si una componente de reacción calculada es
  negativa, apunta en sentido contrario al
  supuesto. Sin embargo, una fuerza normal negativa
  puede ser físicamente imposible si el apoyo
  solo puede empujar: en ese caso se pierde
  el contacto y debe cambiarse el modelo.</p>

  <p>Una tensión negativa tampoco representa
  una cuerda que empuja. Puede indicar que
  la configuración supuesta no es realizable
  con ese cable tenso.</p>
</section>

<section class="lesson-section">
  <h2>5. Comprobación final</h2>

  <p>Revisa el equilibrio vertical, horizontal
  y de momentos. Comprueba unidades:
  las reacciones son fuerzas y los momentos
  se expresan en N·m.</p>

  <div class="important">
    <p>No confundas una tensión inclinada con
    su componente vertical. La dirección del
    cable determina las dos componentes.</p>
  </div>
</section>
`,

  /* =======================================================
     MÓDULO 9 — GRAVITACIÓN
     ======================================================= */

  "9.1": R`
<section class="lesson-section">
  <h2>1. Interacción entre masas</h2>

  <p>En el modelo newtoniano, dos masas se atraen.
  La fuerza actúa sobre la línea que une sus
  posiciones y su módulo es:</p>

  \[
    F=G\frac{m_1m_2}{r^2}
  \]

  <p>La constante gravitatoria tiene valor
  aproximado:</p>

  \[
    G\approx6.67430\times10^{-11}\,
    \text{N}\cdot\text{m}^2/\text{kg}^2
  \]

  <p>Si un ejercicio proporciona un redondeo
  específico, úsalo consistentemente.</p>
</section>

<section class="lesson-section">
  <h2>2. Interpretación de la ley</h2>

  <ul>
    <li>Duplicar una masa duplica la fuerza.</li>
    <li>Duplicar ambas masas cuadruplica la fuerza.</li>
    <li>Duplicar la separación reduce la fuerza
    a la cuarta parte.</li>
    <li>Reducir la separación a la mitad multiplica
    la fuerza por cuatro.</li>
  </ul>

  <p>La separación \(r\) se mide entre partículas
  o, en el modelo esférico exterior, entre
  los centros de los cuerpos.</p>
</section>

<section class="lesson-section">
  <h2>3. Forma vectorial y tercera ley</h2>

  <p>Si \(\hat r_{12}\) apunta desde la masa 1
  hacia la masa 2, la fuerza sobre 2 debida a 1 es:</p>

  \[
    \vec F_{1\to2}
    =-G\frac{m_1m_2}{r^2}\hat r_{12}
  \]

  <p>El signo indica atracción.
  Sobre la masa 1 actúa una fuerza opuesta:</p>

  \[
    \vec F_{2\to1}=-\vec F_{1\to2}
  \]

  <p>Las fuerzas tienen igual módulo, pero las
  aceleraciones pueden ser muy diferentes
  porque las masas son distintas.</p>
</section>

<section class="lesson-section">
  <h2>4. Superposición</h2>

  \[
    \vec F_{\text{total}}=\sum_i\vec F_i
  \]

  <p>Si intervienen varias masas, se calculan
  las fuerzas por separado y se suman
  vectorialmente. Fuerzas de igual módulo
  pueden cancelarse en una configuración simétrica.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo numérico</h2>

  <div class="example">
    <p>Dos masas de \(10^5\,\text{kg}\) y
    \(2\times10^5\,\text{kg}\) están separadas
    1 m. Con \(G=6.674\times10^{-11}\):</p>
    \[
      F=6.674\times10^{-11}
      \frac{(10^5)(2\times10^5)}{1^2}
      =1.3348\,\text{N}
    \]
  </div>

  <p>La ley se aplica directamente a cuerpos
  esféricamente simétricos observados desde
  el exterior. Las distribuciones arbitrarias
  requieren integración.</p>

  <div class="important">
    <p>No confundas G con g. La primera es
    una constante de la ley; la segunda describe
    un campo o aceleración local.</p>
  </div>
</section>
`,

  "9.2": R`
<section class="lesson-section">
  <h2>1. Campo gravitatorio</h2>

  \[
    \vec g=\frac{\vec F_g}{m}
  \]

  <p>El campo gravitatorio expresa la fuerza
  por unidad de masa de prueba. Sus unidades
  N/kg y m/s² son equivalentes.
  En el modelo newtoniano determina la aceleración
  de caída libre.</p>

  <p>Alrededor de una masa esféricamente simétrica,
  desde el exterior:</p>

  \[
    \vec g=-\frac{GM}{r^2}\hat r
  \]
</section>

<section class="lesson-section">
  <h2>2. Masa y peso</h2>

  \[
    \vec P=m\vec g
  \]

  <p>La masa se mide en kg; el peso es una fuerza
  y se mide en N. Trasladar un cuerpo a otro
  planeta no cambia su masa clásica por ese
  hecho, pero sí puede cambiar su peso.</p>

  <p>Un mismo objeto pesa menos donde el campo
  gravitatorio es menor, aunque conserve
  su resistencia inercial a la aceleración.</p>
</section>

<section class="lesson-section">
  <h2>3. Variación con la altura</h2>

  \[
    g(h)=\frac{GM}{(R+h)^2}
    =g_0\left(\frac{R}{R+h}\right)^2
  \]

  <p>\(R\) es el radio del planeta y \(h\)
  la altura sobre su superficie.
  Cerca de la superficie, si \(h\ll R\),
  suele ser razonable tratar g como constante.</p>

  <div class="example">
    <p>A una altura igual al radio del planeta,
    \(r=2R\), por lo que:</p>
    \[
      g(h)=\frac{g_0}{4}
    \]
    <p>Si \(g_0=9.8\,\text{m/s}^2\),
    resulta \(2.45\,\text{m/s}^2\).</p>
  </div>
</section>

<section class="lesson-section">
  <h2>4. Peso aparente</h2>

  <p>Una báscula mide una fuerza de contacto.
  En un ascensor, el balance vertical permite
  distinguir esa lectura del peso gravitatorio.</p>

  \[
    N-mg=ma_y
  \]
  \[
    N=m(g+a_y)
  \]

  <div class="example">
    <p>Una persona de 60 kg acelera hacia
    arriba a \(2\,\text{m/s}^2\):</p>
    \[
      N=60(9.8+2)=708\,\text{N}
    \]
    <p>Su peso gravitatorio sigue siendo 588 N.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>5. Ingravidez aparente</h2>

  <p>En caída libre ideal, \(a_y=-g\) y
  \(N=0\). La ausencia de lectura no significa
  ausencia de gravedad. Los astronautas en
  órbita experimentan caída libre junto
  con la nave.</p>

  <div class="important">
    <p>La altura h no sustituye directamente a r.
    Dentro de un planeta, la distribución
    interna de masa importa y la expresión
    exterior no se aplica sin ajustes.</p>
  </div>
</section>
`,

  "9.3": R`
<section class="lesson-section">
  <h2>1. Energía potencial general</h2>

  <p>Al alejarse mucho de una superficie,
  la variación de g ya no puede ignorarse.
  Tomando energía potencial cero a distancia
  infinita:</p>

  \[
    U(r)=-\frac{GMm}{r}
  \]

  <p>Su valor negativo indica que se requiere
  aportar energía para separar las masas
  hasta el infinito desde el reposo relativo.
  Solo las diferencias de potencial tienen
  consecuencias en el trabajo.</p>
</section>

<section class="lesson-section">
  <h2>2. Cambios de altura y trabajo</h2>

  \[
    \Delta U
    =GMm\left(\frac1{r_i}-\frac1{r_f}\right)
  \]
  \[
    W_g=-\Delta U
  \]

  <p>Al aumentar r, U aumenta hacia cero.
  Cerca de una superficie, para cambios
  pequeños de altura, esta relación conduce
  aproximadamente a
  \(\Delta U\approx mg\Delta h\).</p>
</section>

<section class="lesson-section">
  <h2>3. Energía mecánica orbital</h2>

  \[
    E=\frac12mv^2-\frac{GMm}{r}
  \]

  <p>En el problema ideal con masa central
  dominante y sin otras fuerzas, E es constante.
  Con la referencia elegida, una energía
  negativa corresponde a movimiento ligado;
  el escape límite tiene E igual a cero.</p>

  <p>Para una trayectoria orbital no radial,
  los casos ligados son elipses. La descripción
  geométrica también depende del momento angular.</p>
</section>

<section class="lesson-section">
  <h2>4. Deducción de la rapidez de escape</h2>

  <p>Para alcanzar el infinito con rapidez
  final nula:</p>

  \[
    \frac12mv_{\text{esc}}^2-\frac{GMm}{r}=0
  \]
  \[
    v_{\text{esc}}=\sqrt{\frac{2GM}{r}}
  \]

  <p>La masa del objeto se cancela.
  El resultado supone ausencia de aire,
  de propulsión posterior y de otros cuerpos
  gravitatorios relevantes.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplos</h2>

  <div class="example">
    <p>En un modelo con
    \(GM=200\,\text{m}^3/\text{s}^2\)
    y \(r=4\,\text{m}\):</p>
    \[
      v_{\text{esc}}
      =\sqrt{\frac{2(200)}4}
      =10\,\text{m/s}
    \]
  </div>

  <div class="example">
    <p>Para \(GM=100\,\text{m}^3/\text{s}^2\),
    \(m=2\,\text{kg}\), un traslado de
    \(r_i=5\,\text{m}\) a \(r_f=10\,\text{m}\)
    aumenta el potencial en:</p>
    \[
      \Delta U=100(2)(1/5-1/10)=20\,\text{J}
    \]
  </div>

  <div class="important">
    <p>La rapidez de escape no es una velocidad
    que deba mantenerse para siempre.
    Es una condición energética inicial.
    No la confundas con la rapidez orbital circular.</p>
  </div>
</section>
`,

  "9.4": R`
<section class="lesson-section">
  <h2>1. Una órbita es caída libre</h2>

  <p>Un satélite no permanece en órbita porque
  la gravedad desaparezca. La gravedad curva
  continuamente su trayectoria. En una órbita
  circular proporciona la fuerza centrípeta.</p>

  \[
    \frac{GMm}{r^2}=\frac{mv^2}{r}
  \]
  \[
    v_{\text{circ}}=\sqrt{\frac{GM}{r}}
  \]

  <p>Una órbita circular mayor tiene menor
  rapidez, aunque su recorrido sea más largo.</p>
</section>

<section class="lesson-section">
  <h2>2. Periodo circular</h2>

  \[
    T=\frac{2\pi r}{v}
    =2\pi\sqrt{\frac{r^3}{GM}}
  \]

  <p>El periodo aumenta con el radio orbital.
  No se utiliza la altura sobre la superficie
  como radio: debe sumarse el radio del planeta.</p>
</section>

<section class="lesson-section">
  <h2>3. Las tres leyes de Kepler</h2>

  <ol>
    <li>Las órbitas ligadas son elipses con
    el cuerpo central en un foco, en la
    aproximación de masa central dominante.</li>
    <li>El radio que une el centro atractivo
    y el satélite barre áreas iguales
    en tiempos iguales.</li>
    <li>El cuadrado del periodo es proporcional
    al cubo del semieje mayor.</li>
  </ol>

  \[
    \frac{T^2}{a^3}=\frac{4\pi^2}{GM}
  \]

  <p>En una elipse, a es el semieje mayor,
  no la distancia instantánea al foco.
  Si ambas masas son comparables, se utiliza
  \(G(M+m)\) y el movimiento relativo.</p>
</section>

<section class="lesson-section">
  <h2>4. Rapidez y energía en una elipse</h2>

  \[
    E=-\frac{GMm}{2a}
  \]
  \[
    v^2=GM\left(\frac2r-\frac1a\right)
  \]

  <p>La segunda expresión es la ecuación
  vis-viva. Muestra que el satélite se mueve
  más rápido cerca del cuerpo central y
  más lento lejos de él.</p>

  <p>En una órbita circular, \(a=r\),
  recuperándose \(v^2=GM/r\).</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo de comparación orbital</h2>

  <div class="example">
    <p>Dos órbitas alrededor del mismo cuerpo
    tienen \(a_2=4a_1\).</p>
    \[
      \frac{T_2}{T_1}
      =\left(\frac{a_2}{a_1}\right)^{3/2}
      =4^{3/2}=8
    \]
    <p>Si \(T_1=2\) años, \(T_2=16\) años.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>6. Órbita geoestacionaria</h2>

  <p>Un satélite geoestacionario ideal debe
  describir una órbita circular en el plano
  ecuatorial, en el mismo sentido de rotación
  terrestre y con periodo igual al periodo
  de rotación sideral de la Tierra.</p>

  <p>No basta con igualar el periodo:
  una inclinación orbital distinta produce
  movimiento aparente en el cielo.</p>

  <div class="important">
    <p>La energía cinética no es constante
    en una órbita elíptica, aunque la energía
    mecánica y el momento angular se conserven.</p>
  </div>
</section>
`,

  /* =======================================================
     MÓDULO 10 — OSCILACIONES
     ======================================================= */

  "10.1": R`
<section class="lesson-section">
  <h2>1. Oscilación y equilibrio</h2>

  <p>Una oscilación es un movimiento alrededor
  de una posición de equilibrio. No toda
  oscilación es armónica simple:
  el MAS requiere una aceleración proporcional
  y opuesta al desplazamiento.</p>

  \[
    a=-\omega^2x
  \]

  <p>La amplitud A es el máximo módulo del
  desplazamiento. El periodo T es el tiempo
  de un ciclo y la frecuencia f indica
  cuántos ciclos ocurren por segundo.</p>
</section>

<section class="lesson-section">
  <h2>2. Ecuaciones temporales</h2>

  \[
    x=A\cos(\omega t+\phi)
  \]
  \[
    v=-A\omega\sin(\omega t+\phi)
  \]
  \[
    a=-A\omega^2\cos(\omega t+\phi)
  \]

  <p>La fase inicial \(\phi\) depende de las
  condiciones iniciales. Escribir seno en
  lugar de coseno también es válido si
  se ajusta la fase de forma consistente.</p>

  \[
    \omega=2\pi f=\frac{2\pi}{T}
  \]
</section>

<section class="lesson-section">
  <h2>3. Fases del movimiento</h2>

  <ul>
    <li>En \(x=+A\): velocidad cero y
    aceleración hacia el lado negativo.</li>
    <li>En \(x=0\): rapidez máxima y
    aceleración cero.</li>
    <li>En \(x=-A\): velocidad cero y
    aceleración hacia el lado positivo.</li>
  </ul>

  <p>Posición y aceleración tienen signos
  opuestos. La velocidad puede tener
  cualquiera de los dos signos para
  una misma posición intermedia.</p>
</section>

<section class="lesson-section">
  <h2>4. Relaciones útiles</h2>

  \[
    v_{\max}=A\omega,\qquad
    a_{\max}=A\omega^2
  \]
  \[
    v^2=\omega^2(A^2-x^2)
  \]

  <p>La última ecuación permite calcular
  la rapidez sin conocer el tiempo.
  El signo de v se establece según
  el sentido de movimiento.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo completo</h2>

  <div class="example">
    <p>Sea \(A=0.2\,\text{m}\),
    \(\omega=5\,\text{rad/s}\) y \(\phi=0\).</p>
    \[
      T=2\pi/5\approx1.257\,\text{s}
    \]
    \[
      v_{\max}=0.2(5)=1\,\text{m/s}
    \]
    \[
      a_{\max}=0.2(25)=5\,\text{m/s}^2
    \]
    <p>En \(t=0\), el cuerpo está en \(x=A\)
    y comienza a moverse hacia el equilibrio.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>6. Condiciones iniciales</h2>

  \[
    A=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2}
  \]

  <p>Para la forma con coseno,
  \(x_0=A\cos\phi\) y
  \(v_0=-A\omega\sin\phi\).
  Ambas ecuaciones son necesarias para
  identificar correctamente la fase.</p>

  <div class="important">
    <p>No confundas frecuencia en Hz con
    frecuencia angular en rad/s.
    En un extremo el cuerpo se detiene
    instantáneamente, pero no está en equilibrio.</p>
  </div>
</section>
`,

  "10.2": R`
<section class="lesson-section">
  <h2>1. Fuerza restauradora elástica</h2>

  \[
    F=-kx
  \]

  <p>La constante k mide la rigidez del resorte
  y se expresa en N/m. El signo negativo
  indica que la fuerza se opone a la
  deformación respecto a su longitud natural.</p>

  <p>Para un sistema horizontal sin rozamiento,
  la segunda ley conduce a:</p>

  \[
    m\ddot x=-kx
  \]
  \[
    \ddot x+\frac{k}{m}x=0
  \]
</section>

<section class="lesson-section">
  <h2>2. Frecuencia natural y periodo</h2>

  \[
    \omega_0=\sqrt{\frac{k}{m}},
    \qquad
    T=2\pi\sqrt{\frac{m}{k}}
  \]

  <p>Una masa mayor oscila más lentamente.
  Un resorte más rígido oscila más rápido.
  En el modelo lineal ideal, el periodo
  no depende de la amplitud.</p>

  <p>Las expresiones suponen resorte de
  masa despreciable y deformaciones dentro
  de su régimen elástico lineal.</p>
</section>

<section class="lesson-section">
  <h2>3. Resorte vertical</h2>

  <p>En equilibrio estático, el peso produce
  una elongación:</p>

  \[
    k\Delta\ell_{\text{eq}}=mg
  \]

  <p>Si la posición de oscilación se mide
  desde ese equilibrio, el término constante
  de la gravedad se cancela en la ecuación
  de movimiento y permanece:</p>

  \[
    m\ddot x=-kx
  \]

  <p>La elongación estática y la amplitud
  representan cantidades diferentes.</p>
</section>

<section class="lesson-section">
  <h2>4. Energía del oscilador</h2>

  \[
    E=\frac12mv^2+\frac12kx^2
    =\frac12kA^2
  \]

  <p>Esta expresión utiliza la coordenada
  horizontal o la coordenada vertical
  medida desde el equilibrio, con una
  constante de energía apropiadamente elegida.</p>

  <p>En los extremos la energía oscilatoria
  es potencial. Al cruzar el equilibrio
  es cinética. En posiciones intermedias
  hay ambas formas.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo resuelto</h2>

  <div class="example">
    <p>Para \(m=2\,\text{kg}\),
    \(k=200\,\text{N/m}\) y
    \(A=0.1\,\text{m}\):</p>
    \[
      \omega_0=10\,\text{rad/s}
    \]
    \[
      T=2\pi/10\approx0.628\,\text{s}
    \]
    \[
      E=\frac12(200)(0.1)^2=1\,\text{J}
    \]
    \[
      v_{\max}=A\omega_0=1\,\text{m/s}
    \]
  </div>
</section>

<section class="lesson-section">
  <h2>6. Combinación de resortes ideales</h2>

  <p>Para resortes dispuestos en paralelo
  y con la misma deformación:</p>
  \[
    k_{\text{eq}}=k_1+k_2
  \]

  <p>Para resortes ideales en serie,
  sin masas intermedias relevantes:</p>
  \[
    \frac1{k_{\text{eq}}}
    =\frac1{k_1}+\frac1{k_2}
  \]

  <div class="important">
    <p>No uses estas relaciones sin comprobar
    cómo se conectan realmente los resortes
    y qué deformación experimenta cada uno.</p>
  </div>
</section>
`,

  "10.3": R`
<section class="lesson-section">
  <h2>1. Modelo de péndulo simple</h2>

  <p>El péndulo simple ideal es una masa
  puntual suspendida de un hilo inextensible
  y de masa despreciable. La longitud L
  se mide desde el punto de suspensión
  hasta el centro de la masa idealizada.</p>

  <p>La tensión apunta a lo largo del hilo.
  La componente tangencial del peso
  produce el retorno hacia la posición
  de equilibrio.</p>
</section>

<section class="lesson-section">
  <h2>2. Ecuación del movimiento</h2>

  \[
    F_t=-mg\sin\theta
  \]
  \[
    a_t=L\ddot\theta
  \]
  \[
    \ddot\theta+\frac{g}{L}\sin\theta=0
  \]

  <p>Esta ecuación no es exactamente la
  del MAS. Para ángulos pequeños en
  radianes, \(\sin\theta\approx\theta\):</p>

  \[
    \ddot\theta+\frac{g}{L}\theta\approx0
  \]
</section>

<section class="lesson-section">
  <h2>3. Periodo de pequeñas oscilaciones</h2>

  \[
    \omega_0=\sqrt{\frac gL},
    \qquad
    T\approx2\pi\sqrt{\frac Lg}
  \]

  <p>La masa no aparece porque se cancela
  en la ecuación. Para amplitudes pequeñas,
  aumentar L aumenta el periodo y aumentar
  g lo reduce.</p>

  <p>La aproximación no tiene un límite
  angular único independiente de la
  precisión deseada: su error aumenta
  al aumentar la amplitud.</p>
</section>

<section class="lesson-section">
  <h2>4. Energía y rapidez</h2>

  <p>Tomando energía potencial cero en
  el punto inferior:</p>

  \[
    U=mgL(1-\cos\theta)
  \]

  <p>Si se suelta desde el reposo en
  \(\theta_0\), sin pérdidas:</p>

  \[
    \frac12mv^2
    =mgL(\cos\theta-\cos\theta_0)
  \]

  <p>Esta relación energética no exige
  la aproximación de ángulo pequeño.
  La rapidez máxima ocurre al pasar
  por el punto inferior.</p>
</section>

<section class="lesson-section">
  <h2>5. Ejemplo</h2>

  <div class="example">
    <p>Para \(L=0.98\,\text{m}\) y
    \(g=9.8\,\text{m/s}^2\):</p>
    \[
      T\approx2\pi\sqrt{0.98/9.8}
      \approx1.987\,\text{s}
    \]
    <p>Si la longitud se cuadruplica,
    el periodo aproximado se duplica.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>6. Péndulo físico</h2>

  <p>Si el objeto no puede modelarse como
  una masa puntual, se considera un
  cuerpo rígido que oscila alrededor
  de un eje. Para pequeñas oscilaciones:</p>

  \[
    T\approx2\pi\sqrt{\frac{I_O}{mgd}}
  \]

  <p>\(I_O\) es el momento de inercia
  respecto al eje de suspensión y d
  la distancia desde ese eje al centro
  de masa.</p>

  <div class="important">
    <p>No confundas la longitud del hilo
    con la distancia al centro de masa.
    La tensión tampoco tiene que ser
    igual a mg durante el movimiento.</p>
  </div>
</section>
`,

  "10.4": R`
<section class="lesson-section">
  <h2>1. De la oscilación ideal a la real</h2>

  <p>El rozamiento y otras pérdidas
  transforman energía mecánica en
  energía interna y reducen la
  amplitud de una oscilación libre.</p>

  <p>Un modelo habitual de amortiguamiento
  viscoso utiliza una fuerza proporcional
  y opuesta a la velocidad:</p>

  \[
    F_d=-bv
  \]

  <p>La constante b tiene unidades
  \(\text{N}\cdot\text{s/m}\).
  Este modelo no describe exactamente
  todos los mecanismos de rozamiento.</p>
</section>

<section class="lesson-section">
  <h2>2. Oscilación libre amortiguada</h2>

  \[
    m\ddot x+b\dot x+kx=0
  \]
  \[
    \omega_0=\sqrt{k/m},
    \qquad
    \beta=\frac{b}{2m}
  \]

  <p>En el régimen subamortiguado:</p>

  \[
    x=A_0e^{-\beta t}
    \cos(\omega_dt+\phi)
  \]
  \[
    \omega_d=\sqrt{\omega_0^2-\beta^2}
  \]

  <p>La envolvente de amplitud disminuye
  exponencialmente. La frecuencia amortiguada
  es menor que la natural no amortiguada.</p>
</section>

<section class="lesson-section">
  <h2>3. Regímenes de amortiguamiento</h2>

  \[
    b_c=2\sqrt{mk}
  \]

  <ul>
    <li>Subamortiguado, \(b<b_c\):
    hay oscilaciones con amplitud decreciente.</li>
    <li>Crítico, \(b=b_c\):
    límite entre respuesta oscilatoria
    y no oscilatoria.</li>
    <li>Sobreamortiguado, \(b>b_c\):
    respuesta libre no oscilatoria.</li>
  </ul>

  <p>El comportamiento exacto también
  depende de las condiciones iniciales.
  Estos regímenes se utilizan en modelos
  de suspensión y control de vibraciones.</p>
</section>

<section class="lesson-section">
  <h2>4. Forzamiento periódico</h2>

  \[
    m\ddot x+b\dot x+kx=F_0\cos(\Omega t)
  \]

  <p>La solución contiene una respuesta
  transitoria y una estacionaria.
  Con amortiguamiento positivo, la
  transitoria decae y domina la
  oscilación a la frecuencia de
  la excitación \(\Omega\).</p>

  \[
    A(\Omega)=
    \frac{F_0}
    {\sqrt{(k-m\Omega^2)^2+(b\Omega)^2}}
  \]

  <p>La respuesta no tiene por qué estar
  en fase con la fuerza. El desfase
  depende de la frecuencia y del
  amortiguamiento.</p>
</section>

<section class="lesson-section">
  <h2>5. Resonancia</h2>

  <p>La resonancia describe una respuesta
  especialmente intensa al excitar el
  sistema cerca de una frecuencia
  característica.</p>

  <p>En este modelo, el máximo de amplitud
  de desplazamiento a frecuencia positiva
  aparece en:</p>

  \[
    \Omega_r=\sqrt{\omega_0^2-2\beta^2}
  \]

  <p>La expresión requiere
  \(\beta<\omega_0/\sqrt2\).
  Con amortiguamiento débil,
  \(\Omega_r\approx\omega_0\).
  Si el amortiguamiento es mayor,
  no aparece ese pico de desplazamiento
  a una frecuencia positiva.</p>
</section>

<section class="lesson-section">
  <h2>6. Ejemplo de clasificación</h2>

  <div class="example">
    <p>Para \(m=2\,\text{kg}\) y
    \(k=8\,\text{N/m}\):</p>
    \[
      \omega_0=\sqrt{8/2}=2\,\text{rad/s}
    \]
    \[
      b_c=2\sqrt{2(8)}
      =8\,\text{N}\cdot\text{s/m}
    \]
    <p>Si \(b=4\,\text{N}\cdot\text{s/m}\):</p>
    \[
      \beta=4/[2(2)]=1\,\text{s}^{-1}
    \]
    \[
      \omega_d=\sqrt{4-1}
      =\sqrt3\,\text{rad/s}
    \]
    <p>La respuesta libre es subamortiguada.</p>
  </div>
</section>

<section class="lesson-section">
  <h2>7. Prevención de vibraciones</h2>

  <p>Para reducir una respuesta excesiva
  puede aumentarse el amortiguamiento,
  modificarse la masa o la rigidez
  para cambiar la frecuencia natural,
  o reducir la excitación externa.</p>

  <div class="important">
    <p>No afirmes que toda resonancia implica
    amplitud infinita. Las pérdidas y
    no linealidades limitan los sistemas
    reales. Distingue siempre frecuencia
    natural, amortiguada y de excitación.</p>
  </div>
</section>
`

};

/* =========================================================
   VALIDACIÓN Y ACTUALIZACIÓN DEL JSON
   ========================================================= */

function exigir(condicion, mensaje) {
  if (!condicion) {
    throw new Error(mensaje);
  }
}

/**
 * Admite las estructuras superiores más habituales.
 * No cambia la estructura original del documento.
 */
function obtenerModulos(documento) {
  if (Array.isArray(documento)) {
    return documento;
  }

  if (documento && Array.isArray(documento.modules)) {
    return documento.modules;
  }

  if (documento && Array.isArray(documento.modulos)) {
    return documento.modulos;
  }

  throw new Error(
    "No se encontró un arreglo de módulos. " +
    "Se esperaba un arreglo principal o una propiedad " +
    "modules/modulos."
  );
}

/**
 * Revisa los delimitadores matemáticos básicos.
 * No sustituye una validación completa del motor LaTeX.
 */
function validarContenido(id, html) {
  exigir(
    typeof html === "string" && html.trim().length > 100,
    `Contenido vacío o insuficiente en ${id}.`
  );

  const contar = token => html.split(token).length - 1;

  exigir(
    contar("\\(") === contar("\\)"),
    `Delimitadores inline desbalanceados en ${id}.`
  );

  exigir(
    contar("\\[") === contar("\\]"),
    `Delimitadores de bloque desbalanceados en ${id}.`
  );

  exigir(
    !/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(html),
    `Caracteres de control inesperados en ${id}.`
  );
}

function main() {
  const archivo = path.resolve(
    process.argv[2] || "./data/modules.json"
  );

  exigir(
    fs.existsSync(archivo),
    `No existe el archivo: ${archivo}`
  );

  const original = fs.readFileSync(archivo, "utf8");

  // Elimina únicamente un posible BOM inicial para analizar JSON.
  const documento = JSON.parse(
    original.replace(/^\uFEFF/, "")
  );

  const modulos = obtenerModulos(documento);
  const idsEsperados = Object.keys(contenidos);
  const ubicaciones = new Map();

  /*
   * Primero se localizan todas las lecciones.
   * No se modifica nada si falta una o hay duplicados.
   */
  for (const modulo of modulos) {
    if (!Array.isArray(modulo.lecciones)) {
      continue;
    }

    for (const leccion of modulo.lecciones) {
      const id = String(leccion.idLeccion);

      if (!Object.prototype.hasOwnProperty.call(contenidos, id)) {
        continue;
      }

      exigir(
        !ubicaciones.has(id),
        `La lección ${id} aparece más de una vez.`
      );

      const moduloEsperado = Number(id.split(".")[0]);

      exigir(
        Number(modulo.id) === moduloEsperado,
        `La lección ${id} no está dentro del módulo ` +
        `${moduloEsperado}.`
      );

      ubicaciones.set(id, leccion);
    }
  }

  const faltantes = idsEsperados.filter(
    id => !ubicaciones.has(id)
  );

  exigir(
    faltantes.length === 0,
    "Faltan estas lecciones: " + faltantes.join(", ") +
    ". Primero incorpora los módulos 5 al 10."
  );

  for (const id of idsEsperados) {
    validarContenido(id, contenidos[id]);
  }

  /*
   * Conserva una representación de todo lo que NO debe cambiar.
   * La comparación permite detectar modificaciones accidentales.
   */
  function sinContenidoActualizado(valor) {
    return JSON.stringify(valor, (clave, item) => {
      if (
        item &&
        typeof item === "object" &&
        !Array.isArray(item) &&
        Object.prototype.hasOwnProperty.call(
          contenidos,
          String(item.idLeccion)
        )
      ) {
        const copia = { ...item };
        delete copia.contenidoHTML;
        return copia;
      }

      return item;
    });
  }

  const estructuraAntes = sinContenidoActualizado(documento);

  for (const id of idsEsperados) {
    ubicaciones.get(id).contenidoHTML = contenidos[id].trim();
  }

  const estructuraDespues = sinContenidoActualizado(documento);

  exigir(
    estructuraAntes === estructuraDespues,
    "Se detectó un cambio inesperado fuera de contenidoHTML."
  );

  /*
   * JSON.stringify escapa automáticamente las barras de LaTeX,
   * comillas del HTML y saltos de línea.
   */
  const resultado =
    JSON.stringify(documento, null, 2) + "\n";

  // Comprueba que el resultado se pueda volver a interpretar.
  const comprobacion = JSON.parse(resultado);
  const modulosComprobados = obtenerModulos(comprobacion);

  let verificadas = 0;

  for (const modulo of modulosComprobados) {
    for (const leccion of modulo.lecciones || []) {
      const id = String(leccion.idLeccion);

      if (
        Object.prototype.hasOwnProperty.call(contenidos, id)
      ) {
        exigir(
          leccion.contenidoHTML === contenidos[id].trim(),
          `El contenido no se conservó correctamente en ${id}.`
        );

        verificadas += 1;
      }
    }
  }

  exigir(
    verificadas === idsEsperados.length,
    "La cantidad de lecciones verificadas no coincide."
  );

  const marca = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const respaldo = `${archivo}.bak-teoria-${marca}`;
  const temporal = `${archivo}.tmp-${process.pid}`;

  /*
   * La copia de seguridad conserva el texto original exacto.
   * Se crea antes de sustituir modules.json.
   */
  fs.writeFileSync(respaldo, original, {
    encoding: "utf8",
    flag: "wx"
  });

  try {
    fs.writeFileSync(temporal, resultado, {
      encoding: "utf8",
      flag: "wx"
    });

    fs.renameSync(temporal, archivo);
  } finally {
    if (fs.existsSync(temporal)) {
      fs.unlinkSync(temporal);
    }
  }

  console.log(
    `Actualizadas ${verificadas} lecciones de los módulos 5 al 10.`
  );
  console.log("Respaldo:", respaldo);
  console.log(
    "Se conservaron ejercicios, quizzes, mapas y demás propiedades."
  );
  console.log(
    "Abre la aplicación y revisa la presentación de las fórmulas."
  );
}

try {
  main();
} catch (error) {
  console.error("No se completó la actualización:");
  console.error(error.message);
  process.exitCode = 1;
}