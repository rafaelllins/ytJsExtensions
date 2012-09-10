/****************************************
  ytJsExtensions by Yuup Tech v0.3b
  -------------------------------------
autor: Rafaell Lins
e-mail: rafaellmail@gmail.com
criado: 01/10/2011
Última modificação: 10/10/2012
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

Date.prototype.stringFormat = function (format) {
	var ER_separator = /[\/ ,:-]/;
	var ER_field = /d{1,2}|M{1,2}|yy|[y]{4}|h{1,2}|m{1,2}|s{1,2}/;
	
	var arrFields = format.split(ER_separator);
	var arrSeparators = format.split(ER_field).filter(function (obj){return obj != "";});
	
	var dataString = "";
	
	for(var x = 0; x < arrFields.length; x++){
		var typeField = arrFields[x].charAt(0);
		var nameField = arrFields[x];
		var sizeNameField = nameField.length;
		var valueField;
		
		switch(typeField){
			case "y":
				valueField = (sizeNameField == 2) ? this.getFullYear().toString().substr(2,2) : this.getFullYear();
				break;
			case "M":
				valueField = this.getMonth() + 1;
				break;
			case "d":
				valueField = this.getDate();
				break;
			case "h":
				valueField = this.getHours();
				break;
			case "m":
				valueField = this.getMinutes();
				break;
			case "s":
				valueField = this.getSeconds();
				break;
		}
		
		if(sizeNameField == 2 && typeField != "y" && valueField < 10)
			valueField = '0' + valueField;
		
		var separator = (x < arrFields.length - 1) ? arrSeparators[x] : "";
		dataString += valueField + separator;
	}
	
	return dataString;
}