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

/*
versão beta*
Possui alguns erros:
No IE, ao mesclar entre operadores e a sua ausência, como no ex: 
(Date.stringFormat("yyyyMM-ddhhmm:ss")) -> O retorno não é como o esperado. 
Em moteres do mozilla, foram testados e funcionam normalmente.
*/
Date.prototype.stringFormat = function (format) {
	var ER_field = /d{1,2}|M{1,2}|[y]{2,4}|h{1,2}|m{1,2}|s{1,2}/g;
	
	var arrFields = format.match(ER_field);
	var arrSeparators = format.split(ER_field)/*.filter(function (obj){return obj != undefined;})*/;
	
	var skipSeparator = (arrSeparators.length > (arrFields.length - 1)) ? 1 : 0;
	
	var dataString = "";

	for(var x = 0; x < arrFields.length; x++){
		var typeField = arrFields[x].charAt(0);
		var nameField = arrFields[x];
		var sizeNameField = nameField.length;
		var valueField;

		switch(typeField){
			case "y":
				valueField = this.getFullYear().toString().substr(4-sizeNameField,sizeNameField);
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

		var separator = (x < arrFields.length - 1 && arrSeparators[x + skipSeparator] != undefined) ? arrSeparators[x + skipSeparator] : "";
		dataString += valueField + separator;
	}

	return dataString;
}