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