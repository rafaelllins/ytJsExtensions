/****************************************
  ytJsExtensions by Yuup Tech v0.3b
  -------------------------------------
autor: Rafaell Lins
e-mail: rafaellmail@gmail.com
criado: 01/10/2011
�ltima modifica��o: 24/11/2011
*****************************************/

Date.prototype.inInterval = function(date, seconds){
	return ((date - this) <= (seconds * 1000));
}

//Retorna nova data com dias somados.
//The Universal Coordinated Time (UTC)
//Date.UTC(2012,02,30) -> 1333065600000
Date.prototype.addDays = function (days) {
    return new Date(this - (86400000 * days * -1));
}

//Retorna nova data com dias subtraídos.
Date.prototype.subtractDays = function (days) {
    return new Date(this - (86400000 * days));
}

Date.prototype.toDDMMYYYYString = function () {
    return isNaN(this) ? 'NaN' : [
        this.getDate() > 9 ? this.getDate() : '0' + this.getDate(),
        this.getMonth() > 8 ? this.getMonth() + 1 : '0' + (this.getMonth() + 1),
        this.getFullYear()
    ].join('/') 
}