/**
 * ACTUALIZAR MAPAS MENTALES — MÓDULOS 5 AL 10
 *
 * Ejecutar desde la raíz del proyecto:
 *
 *   node actualizar-mapas.cjs
 *
 * También puedes indicar la carpeta del proyecto:
 *
 *   node actualizar-mapas.cjs "C:/ruta/a/mi-proyecto"
 *
 * Busca las imágenes en:
 *
 *   assets/img/mapas/
 *
 * Formatos admitidos:
 *
 *   .jpg, .jpeg, .png, .webp
 *
 * Solo modifica la propiedad mapaMental de los módulos 5–10.
 * No modifica lecciones, ejercicios, quizzes ni otros módulos.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const CONFIGURACION = [
  {
    id: 5,
    nombre: "modulo-5-trabajo-energia",
    alt:
      "Mapa mental de trabajo, energía y potencia: trabajo de " +
      "fuerzas, energía cinética, energía potencial, conservación " +
      "de la energía, potencia y rendimiento.",
    pie:
      "Resumen visual del módulo 5: trabajo, energía y potencia."
  },
  {
    id: 6,
    nombre: "modulo-6-impulso-momento",
    alt:
      "Mapa mental de impulso y cantidad de movimiento: momento " +
      "lineal, impulso, conservación del momento, colisiones, " +
      "restitución y centro de masa.",
    pie:
      "Resumen visual del módulo 6: impulso y cantidad de movimiento."
  },
  {
    id: 7,
    nombre: "modulo-7-rotacion",
    alt:
      "Mapa mental de rotación de cuerpos rígidos: cinemática " +
      "angular, torque, momento de inercia, energía rotacional, " +
      "rodadura y momento angular.",
    pie:
      "Resumen visual del módulo 7: rotación de cuerpos rígidos."
  },
  {
    id: 8,
    nombre: "modulo-8-estatica",
    alt:
      "Mapa mental de equilibrio y estática: diagramas de cuerpo " +
      "libre, equilibrio de fuerzas y momentos, apoyos, cables, " +
      "rozamiento y estabilidad.",
    pie:
      "Resumen visual del módulo 8: equilibrio y estática."
  },
  {
    id: 9,
    nombre: "modulo-9-gravitacion",
    alt:
      "Mapa mental de gravitación universal: fuerza gravitatoria, " +
      "campo, peso, energía gravitatoria, velocidad de escape, " +
      "órbitas y leyes de Kepler.",
    pie:
      "Resumen visual del módulo 9: gravitación universal."
  },
  {
    id: 10,
    nombre: "modulo-10-oscilaciones",
    alt:
      "Mapa mental de oscilaciones mecánicas: movimiento armónico " +
      "simple, periodo, frecuencia, masa-resorte, energía, " +
      "péndulo, amortiguamiento y resonancia.",
    pie:
      "Resumen visual del módulo 10: oscilaciones mecánicas."
  }
];

const EXTENSIONES = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp"
]);

function exigir(condicion, mensaje) {
  if (!condicion) {
    throw new Error(mensaje);
  }
}

/**
 * Obtiene el arreglo sin cambiar la estructura superior del JSON.
 *
 * Admite:
 *   [ ... ]
 *   { "modules": [ ... ] }
 *   { "modulos": [ ... ] }
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
    "No se encontró el arreglo de módulos en modules.json."
  );
}

/**
 * Busca por nombre y extensión.
 *
 * Si encuentra dos formatos para el mismo mapa, se detiene
 * para no elegir una imagen arbitrariamente.
 */
function buscarImagen(archivos, nombre) {
  const coincidencias = archivos.filter(archivo => {
    const extension = path.extname(archivo).toLowerCase();
    const base = path.basename(
      archivo,
      path.extname(archivo)
    );

    return (
      EXTENSIONES.has(extension) &&
      base.toLowerCase() === nombre.toLowerCase()
    );
  });

  exigir(
    coincidencias.length > 0,
    `Falta la imagen "${nombre}". ` +
    "Guárdala en assets/img/mapas/ como JPG, JPEG, PNG o WebP."
  );

  exigir(
    coincidencias.length === 1,
    `Hay varias imágenes para "${nombre}": ` +
    coincidencias.join(", ") +
    ". Deja únicamente la que deseas utilizar."
  );

  return coincidencias[0];
}

/**
 * Dimensiones PNG.
 * Devuelve null si no reconoce una cabecera válida.
 */
function dimensionesPNG(buffer) {
  const firma = Buffer.from([
    137, 80, 78, 71, 13, 10, 26, 10
  ]);

  if (
    buffer.length < 24 ||
    !buffer.subarray(0, 8).equals(firma) ||
    buffer.toString("ascii", 12, 16) !== "IHDR"
  ) {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20)
  };
}

/**
 * Dimensiones JPEG: busca un marcador de inicio de trama.
 */
function dimensionesJPEG(buffer) {
  if (
    buffer.length < 4 ||
    buffer[0] !== 0xff ||
    buffer[1] !== 0xd8
  ) {
    return null;
  }

  const marcadoresSOF = new Set([
    0xc0, 0xc1, 0xc2, 0xc3,
    0xc5, 0xc6, 0xc7,
    0xc9, 0xca, 0xcb,
    0xcd, 0xce, 0xcf
  ]);

  let posicion = 2;

  while (posicion < buffer.length) {
    if (buffer[posicion] !== 0xff) {
      return null;
    }

    while (
      posicion < buffer.length &&
      buffer[posicion] === 0xff
    ) {
      posicion++;
    }

    if (posicion >= buffer.length) {
      return null;
    }

    const marcador = buffer[posicion++];

    // Final de imagen o inicio de datos comprimidos.
    if (marcador === 0xd9 || marcador === 0xda) {
      break;
    }

    // Marcadores sin campo de longitud.
    if (
      marcador === 0xd8 ||
      marcador === 0x01 ||
      (marcador >= 0xd0 && marcador <= 0xd7)
    ) {
      continue;
    }

    if (posicion + 2 > buffer.length) {
      return null;
    }

    const longitud = buffer.readUInt16BE(posicion);

    if (
      longitud < 2 ||
      posicion + longitud > buffer.length
    ) {
      return null;
    }

    if (marcadoresSOF.has(marcador)) {
      if (longitud < 8) {
        return null;
      }

      return {
        width: buffer.readUInt16BE(posicion + 5),
        height: buffer.readUInt16BE(posicion + 3)
      };
    }

    posicion += longitud;
  }

  return null;
}

/**
 * Dimensiones WebP: admite VP8X, VP8L y VP8.
 */
function dimensionesWebP(buffer) {
  if (
    buffer.length < 20 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }

  let posicion = 12;

  while (posicion + 8 <= buffer.length) {
    const tipo = buffer.toString(
      "ascii",
      posicion,
      posicion + 4
    );

    const longitud = buffer.readUInt32LE(posicion + 4);
    const inicio = posicion + 8;

    if (inicio + longitud > buffer.length) {
      return null;
    }

    if (tipo === "VP8X" && longitud >= 10) {
      return {
        width: buffer.readUIntLE(inicio + 4, 3) + 1,
        height: buffer.readUIntLE(inicio + 7, 3) + 1
      };
    }

    if (
      tipo === "VP8L" &&
      longitud >= 5 &&
      buffer[inicio] === 0x2f
    ) {
      const datos = buffer.readUInt32LE(inicio + 1);

      return {
        width: (datos & 0x3fff) + 1,
        height: ((datos >>> 14) & 0x3fff) + 1
      };
    }

    if (
      tipo === "VP8 " &&
      longitud >= 10 &&
      buffer[inicio + 3] === 0x9d &&
      buffer[inicio + 4] === 0x01 &&
      buffer[inicio + 5] === 0x2a
    ) {
      return {
        width: buffer.readUInt16LE(inicio + 6) & 0x3fff,
        height: buffer.readUInt16LE(inicio + 8) & 0x3fff
      };
    }

    posicion = inicio + longitud + (longitud % 2);
  }

  return null;
}

/**
 * Lee las dimensiones sin instalar dependencias.
 * También comprueba la correspondencia básica del formato.
 */
function obtenerDimensiones(ruta) {
  const buffer = fs.readFileSync(ruta);
  const extension = path.extname(ruta).toLowerCase();

  let dimensiones = null;

  if (extension === ".png") {
    dimensiones = dimensionesPNG(buffer);
  } else if (
    extension === ".jpg" ||
    extension === ".jpeg"
  ) {
    dimensiones = dimensionesJPEG(buffer);
  } else if (extension === ".webp") {
    dimensiones = dimensionesWebP(buffer);
  }

  exigir(
    dimensiones &&
    dimensiones.width > 0 &&
    dimensiones.height > 0,
    `No se pudieron leer las dimensiones de "${path.basename(ruta)}". ` +
    "Comprueba que la extensión corresponda al formato real."
  );

  return dimensiones;
}

/**
 * Representación de todo lo que debe permanecer sin cambios.
 * Solo excluye mapaMental de los módulos seleccionados.
 */
function contenidoProtegido(documento) {
  const copia = JSON.parse(JSON.stringify(documento));
  const ids = new Set(CONFIGURACION.map(item => item.id));

  for (const modulo of obtenerModulos(copia)) {
    if (ids.has(Number(modulo.id))) {
      delete modulo.mapaMental;
    }
  }

  return JSON.stringify(copia);
}

function main() {
  const raiz = path.resolve(
    process.argv[2] || process.cwd()
  );

  const rutaJSON = path.join(
    raiz,
    "data",
    "modules.json"
  );

  const carpetaMapas = path.join(
    raiz,
    "assets",
    "img",
    "mapas"
  );

  exigir(
    fs.existsSync(rutaJSON),
    `No existe: ${rutaJSON}`
  );

  exigir(
    fs.existsSync(carpetaMapas) &&
    fs.statSync(carpetaMapas).isDirectory(),
    `No existe la carpeta: ${carpetaMapas}`
  );

  const original = fs.readFileSync(rutaJSON, "utf8");

  const documento = JSON.parse(
    original.replace(/^\uFEFF/, "")
  );

  const modulos = obtenerModulos(documento);
  const protegidoAntes = contenidoProtegido(documento);

  const archivos = fs
    .readdirSync(carpetaMapas, { withFileTypes: true })
    .filter(entrada => entrada.isFile())
    .map(entrada => entrada.name);

  /*
   * Primero valida todas las imágenes y módulos.
   * Si falta alguno, no modifica modules.json.
   */
  const cambios = CONFIGURACION.map(config => {
    const coincidencias = modulos.filter(
      modulo => Number(modulo.id) === config.id
    );

    exigir(
      coincidencias.length === 1,
      `El módulo ${config.id} debe existir exactamente una vez.`
    );

    const archivo = buscarImagen(
      archivos,
      config.nombre
    );

    const dimensiones = obtenerDimensiones(
      path.join(carpetaMapas, archivo)
    );

    return {
      config,
      modulo: coincidencias[0],
      archivo,
      dimensiones
    };
  });

  for (const cambio of cambios) {
    const anterior =
      cambio.modulo.mapaMental &&
      typeof cambio.modulo.mapaMental === "object" &&
      !Array.isArray(cambio.modulo.mapaMental)
        ? cambio.modulo.mapaMental
        : {};

    cambio.modulo.mapaMental = {
      ...anterior,
      src: `./assets/img/mapas/${cambio.archivo}`,
      alt: cambio.config.alt,
      pie: cambio.config.pie,
      width: cambio.dimensiones.width,
      height: cambio.dimensiones.height
    };
  }

  exigir(
    protegidoAntes === contenidoProtegido(documento),
    "Se detectó un cambio fuera de mapaMental. Operación cancelada."
  );

  const resultado =
    JSON.stringify(documento, null, 2) + "\n";

  // Confirma que el texto final es JSON interpretable.
  JSON.parse(resultado);

  // Si ya estaba actualizado, no crea respaldos innecesarios.
  if (
    JSON.stringify(
      JSON.parse(original.replace(/^\uFEFF/, ""))
    ) === JSON.stringify(documento)
  ) {
    console.log("Los mapas ya estaban actualizados.");
    return;
  }

  const marca = new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

  const respaldo =
    `${rutaJSON}.bak-mapas-${marca}`;

  const temporal =
    `${rutaJSON}.tmp-mapas-${process.pid}`;

  // Conserva el contenido original exacto.
  fs.writeFileSync(respaldo, original, {
    encoding: "utf8",
    flag: "wx"
  });

  try {
    fs.writeFileSync(temporal, resultado, {
      encoding: "utf8",
      flag: "wx"
    });

    fs.renameSync(temporal, rutaJSON);
  } finally {
    if (fs.existsSync(temporal)) {
      fs.unlinkSync(temporal);
    }
  }

  console.log("Mapas actualizados correctamente.");

  console.table(
    cambios.map(cambio => ({
      modulo: cambio.config.id,
      imagen: cambio.archivo,
      ancho: cambio.dimensiones.width,
      alto: cambio.dimensiones.height
    }))
  );

  console.log("Copia de seguridad:", respaldo);
  console.log(
    "Los SVG anteriores no se eliminaron."
  );
  console.log(
    "Recarga la aplicación para comprobar las imágenes."
  );
}

try {
  main();
} catch (error) {
  console.error("\nNo se completó la actualización:");
  console.error(error.message);
  process.exitCode = 1;
}