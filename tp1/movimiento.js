function seguirMouse(valor, cuadrado, eje) {
  if (cuadrado && eje) return map(valor, 0, 800, 505, 521); // Cuadrado grande X
  if (!cuadrado && eje) return map(valor, 0, 800, 505, 534); // Cuadrado chico X
  if (cuadrado && !eje) return map(valor, 0, 400, 105, 121); // Cuadrado grande Y
  return map(valor, 0, 400, 105, 134); // Cuadrado chico Y
}
