/**
 * Libreria de utilidades comunes
 * @author LanyuEStudio
 */

function cambiarIcono(id, texto, icono) {
	if(icono){
		var iconos = document.querySelectorAll("#" + id + " i");
		for(var i = 0; i < iconos.length; i++){
			iconos[i].className = "fa fa-" + icono;
		}
	}
	document.querySelector("#" + id + " span").textContent = " " + texto + " ";
}

function activarElemento(elemento, activar){
	elemento.className = activar ?	elemento.className.replace("disabledbutton", "").trim()
									: elemento.className + " disabledbutton";
}

function vaciarElemento(elemento) {
	while(elemento.firstChild){
		elemento.removeChild(elemento.firstChild);
	}
}