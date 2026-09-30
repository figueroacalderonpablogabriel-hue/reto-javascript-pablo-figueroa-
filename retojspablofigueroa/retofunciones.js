function obtenerIniciales(nombreCompleto) {
  if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
    return "Entrada inválida";
  }

  return nombreCompleto
  .trim()
  .split(/\s+/)
  .map(palabra => palabra[0].toUpperCase())
  .join('');
}
console.log(obtenerIniciales("pablo gabriel figueroa calderon "));
console.log(obtenerIniciales(" son supersayayin goku "));
console.log(obtenerIniciales("palito"));
console.log(obtenerIniciales(123456789098765432));
console.log(obtenerIniciales("    "));