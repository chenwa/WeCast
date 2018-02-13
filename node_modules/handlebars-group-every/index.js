module.exports.ifGroupEveryOpen = function (index, every, options) {
	if( index%every === 0 ){
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
};

module.exports.ifGroupEveryClose = function (index, every, options) {
	if( options.data.last || (index + 1)%every === 0 ){
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
};
