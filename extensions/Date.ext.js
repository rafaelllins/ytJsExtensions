Date.prototype.inInterval = function(date, seconds){
	return ((date - this) <= (seconds * 1000));
}