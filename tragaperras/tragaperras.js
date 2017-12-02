/**
 * Libreria para máquina tragaperras
 * @author LanyuEStudio
 */

//Cargar una capa con la imagen adecuada
function cargarCapaConSlotItem(slotDiv, slotItem) {
	//vaciarElemento(slotDiv);
	//var img = document.createElement("img");
	var img = slotDiv.querySelector("img");
	img.alt = slotItem.nombre;
	img.src = slotItem.imagen;
	//slotDiv.appendChild(img);
}

