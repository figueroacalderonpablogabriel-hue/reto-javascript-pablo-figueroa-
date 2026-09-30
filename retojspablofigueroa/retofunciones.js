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
