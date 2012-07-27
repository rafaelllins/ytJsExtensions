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