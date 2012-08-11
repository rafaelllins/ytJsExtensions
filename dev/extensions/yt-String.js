/****************************************
  ytJsExtensions by Yuup Tech v0.3b
  -------------------------------------
autor: Rafaell Lins
e-mail: rafaellmail@gmail.com
criado: 01/10/2011
Última modificação: 11/08/2012
*****************************************/

String.prototype.ltrim = function(){
    return this.replace(/^\s+/g,"");
}

String.prototype.rtrim = function(){
    return this.replace(/\s+$/g,"");
}

String.prototype.trim = function(){
    return this.replace(/^\s+|\s+$/g,"");
}

String.prototype.endWith = function(str){
	var result;
	if(result = str.length <= this.length)
		result = this.substr(this.length - str.length, str.length) == str;
	return result;
}

String.prototype.startWith = function(str){
	var result;
	if(result = str.length <= this.length)
		result = this.substr(0, str.length) == str;
	return result;
}