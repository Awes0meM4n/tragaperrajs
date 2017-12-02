/**
 * Libreria para máquina tragaperras (Slot)
 * @author LanyuEStudio
 */

var idsSpinners = [];
var tiempoEntreParadaSlotAdyacente = 500;
var msGiro = 10;
var limiteSaldoParaMostrar = 15;
var banco;
var slotItems;
var slotsActuales;
var capasSlot;
var multiplicadorPorPleno;
function cambioDeSlot(){};
function notificarSaldo(){};

class Slot {
	constructor(nombre, imagen, premio){
		this.nombre = nombre;
		this.imagen = imagen;
		this.premio = premio || 0;
	}

}
Slot.prototype.toString = function(){ return this.nombre + " (" + this.premio + ")"};

//Devuelve un numero al azar entre el maximo (no incluido) y el minimo
//O entre cero y 1 si no se especifica
function getNumeroAlAzar(maximo, minimo){
	var min = minimo || 0;
	var max = maximo || 1;
	return Math.floor((Math.random() * max) + min);
}

//Devuelve un slot al azar de la coleccion
function getSlotItem(slots){
	var numero = getNumeroAlAzar(slots.length);
	return slots[numero];
}

//Carga el slot en el indice dado con el item marcado
//O con uno aleatorio si no se pasa el argumento
function cargarSlot(slots, indice, slotItem){
	slots[indice] = slotItem || getSlotItem(slotItems);
	//Usado para notificar cambio de Slot
	if(cambioDeSlot)
		cambioDeSlot(slots, indice);
}

//Gira un slot y gestiona el id del temporizador
function girarSlot(slots, indice){
	var id = setInterval(() => {
		cargarSlot(slots, indice);
	}, msGiro);
	idsSpinners.push(id);
}

//Devuelve true si hay algun slot girando
function estaGirando(){
	return idsSpinners.length > 0;
}

//Detiene el giro mas antiguo
function pararGiro(){
	clearInterval(idsSpinners.shift());
	if(!estaGirando()){
		getPremioSlots(slotsActuales);
		banco.resolverApuesta();
	}
}

//Recorre los slots pasados y ejecuta en cada una la funcion pasada
function operarSlots(slots, funcion) {
	for(var i = 0; i < slots.length; i++){
		funcion(slots, i);
	}
}

//Carga los slots del argumento
function cargarSlots(slots){
	operarSlots(slots, cargarSlot);
}

//Gira los slotsActuales
function girarLineaSlots() {
	operarSlots(slotsActuales, girarSlot);
}

//Para los slotsActuales
function pararLineaSlots() {
	var tiempoEntreParadas = tiempoEntreParadaSlotAdyacente;
	operarSlots(slotsActuales, function(){
			setTimeout(pararGiro, tiempoEntreParadas);
			tiempoEntreParadas += tiempoEntreParadaSlotAdyacente;
		});
}

//Calcula la aportacion de un slot al premio actual
function sumaPremio(slot) {
	//premio = premio > 0 ? premio * (slot.premio > 0 ? slot.premio : 1) : premio + slot.premio;
	banco.setPremio(banco.getPremio() > 0 ? banco.getPremio() * slot.premio : banco.getPremio() + slot.premio);
	//alert(slot.premio + "|" + banco.getPremio());
	return banco.getPremio();
}

//Premio segun todos los slots resultantes
function getPremioSlots(slots) {
	//banco.premio = 0;
	operarSlots(slots, function(slots, indice){ sumaPremio(slots[indice]) });
	if(esPleno(slots))
		banco.setPremio(banco.getPremio() * (multiplicadorPorPleno || slots.length));
}

//Devuelve "true" si todos los slots son iguales
function esPleno(slots) {
	var igual = true;
	var slotPrimero = slots[0];
	for(var i = 0; i < slots.length && igual; i++){
		igual &= slots[i] == slotPrimero;
	}
	
	return igual;
}

slotItems = [
		new Slot("Limón", "graficos/limon.png", 0),
		new Slot("Naranja", "graficos/naranja.png", 0),
		new Slot("Plátanos", "graficos/platano.png", .5),
		new Slot("Sandía", "graficos/sandia.png", 1),
		new Slot("Cerezas", "graficos/cereza.png", 1),
		new Slot("Dolar", "graficos/dolar.png", 2)
	];

function giroAceptado(){
	var aceptado = !estaGirando() && getApuesta() > 0;
	if(aceptado) banco.apostar(apuesta);
	
	return aceptado;
}


//Operaciones con DIVs

//Cuando hay un cambio de slot se ejecuta este codigo
cambioDeSlot = function(slots, indice){
	//alert("Cambio en slot " + indice + " ahora es: " + slots[indice]);
	cargarCapaConSlotItem(capasSlot[indice], slots[indice]);
}

