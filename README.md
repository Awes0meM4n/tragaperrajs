# TragaperraJS
Slot Machine in JS / Máquina tragaperras en JS

<img src="https://raw.githubusercontent.com/Awes0meM4n/tragaperrajs/master/UI%20tragaperras.png" alt="imagen de una jugada"/>
Este proyecto fue creado para el examen final de un curso que impartí de JavaScript (JS). Aquí puedes acceder al <a href="http://hijosdelspectrum.blogspot.com.es/2017/10/javascript-fundamentos.html">contenido del curso</a>.
Una copia del examen planteado se puede descargar desde este repositorio.

Los conocimientos necesarios para completar la práctica están en las etiquetas JavaScript de <a href="https://hijosdelspectrum.blogspot.com.es/">mi blog</a>, empezando por los <a href="http://hijosdelspectrum.blogspot.com.es/2017/10/javascript-fundamentos.html">fundamentos</a>.

El exámen se limitaba a la edición de archivo tragaperras.js, los otros archivos tiene código cuya explicación aún no está contenida en el blog pues no era objeto del curso (Clases)

La solución completamente funcional y entretenida. Las reglas son:
<ul>
  <li>Se puede apostar como máximo el saldo. Se comienza con 50 unidades. Se puede cambiar la cantidad para apostar cambiando el valor del cajetín.</li>
  <li>Si se llega a 100 o más unidades se gana el juego. Si se llega a cero se pierde</li>
  <li>Cada apuesta permite un giro de toda la linea que se iniciará al apretar el botón de giro. La linea empezará a detenerse al soltar el botón de giro</li>
  <li>Una vez que se ha girado toda la linea se permite el giro de una casilla apretando la casilla que se quiere girar (se coloreará su fondo de amarillo) y se apostará la cantidad que se marque en ese momento. A la finalización de ese giro se deberá volver a apostar por un giro de linea completo para continuar.</li>
  <li> Hay seis resultados distintos por casillas cuyos premios son:</li>
    <ul>
      <li>Limón y Naranja: 0</li>
      <li>Plátanos: 0.5</li>
      <li>Sandía y Cerezas: 1</li>
      <li>Estrella: 2</li>
    </ul>
  <li>Para calcular el premio de la línea se usa lo siguiente:</li>
    <ul>
      <li>Se empieza con premio 0 y se resuelven los premios de las casillas en el orden que se va deteniendo el giro (izquierda a drecha)</li>
      <li>Si el premio que se está calculando tiene actualmente un valor de cero, cuando se alcance una casilla con premio mayor que cero el premio actual para a ser ese valor</li>
      <li>Si el premio que se está calculando tiene actualmente un valor mayor de cero, se multiplica el premio actual por el valor del premio de la casilla</li>
      <li>Si las tres casillas son iguales se multiplica el premio de la linea completa calculado previament por el número de casillas de la línea (en nuestro caso *3)</li>
  </ul>
  <li>Las ganancias son el producto de la apuesta por el premio de la linea</li>
</ul>

Se mantiene un histórico de saldos en la parte de abajo para ver la evolución. Como máximo se muestran los 15 últimos.

En un futuro se ampliará la funcionalidad quitando el límite de ganancias de 100 y añadiendo una tabla de puntuaciones de los mayores saldos conseguidos en una partida.

Para probarlo acude a la pestaña <a href="https://github.com/Awes0meM4n/tragaperrajs/releases">releases</a> y escoge la versión que prefieras, <a href="https://lanyu-estudio.itch.io/jslot-machine-tragaperrajs-">juégalo directamente en itch.io</a> o descárgate el proyecto (se debe abrir el archivo tragaperras/tragaperras.html con tu navegador - no soportado por IE).

Espero que te diviertas.
