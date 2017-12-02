/**
 * Libreria para control de banca
 * @author LanyuEStudio
 */

class Banca {
	constructor(saldo){
		this.saldos = [ saldo ];
		this.apuesta = 0;
		this.premio = 0;
	}
	
	setSaldo(nuevoSaldo) {
		this.saldos.unshift(nuevoSaldo);
		if(notificarSaldo)
			notificarSaldo();
	};
	
	getSaldoHistorico(indice) {
		return this.saldos[indice];
	};
	
	getSaldo() {
		return this.getSaldoHistorico(0);
	};
	
	apostar(apuesta) {
		this.setSaldo(this.getSaldo() - this.getApuesta());
	};
	
	getApuesta(){
		return this.apuesta;
	};
	
	getPremio(){
		return this.premio;
	}
	
	setPremio(premio){
		this.premio = premio;
	}
	
	resolverApuesta() {
		this.setSaldo(this.getSaldo() + (this.getApuesta() * this.getPremio()));
		this.setPremio(0);
		this.apuesta = 0;
	};
}