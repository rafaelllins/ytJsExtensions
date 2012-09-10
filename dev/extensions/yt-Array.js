/****************************************
  ytJsExtensions by Yuup Tech v0.3b
  -------------------------------------
autor: Rafaell Lins
e-mail: rafaellmail@gmail.com
criado: 10/09/2012
última modificação: 10/09/2012
*****************************************/

 /*
@comparer -> delegate bool comparer<TObject>(TObject object);
*/
Array.prototype.filter = function(comparer){
	var arrFilter = [];
	for(var att in this)
		if(comparer(this[att]))
			arrFilter.push(this[att]);
	return arrFilter;
}