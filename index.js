"use strict;"

/* Boolean functions */

var Ordering = {
		LT : 1,
		EQ : 2,
		GT : 3
	};

var eq = function(x, y) {
	/* eq :: a -> a -> Bool */
	return x === y;
}

var notEq = function(x, y) {
	/* notEq :: a -> a -> Bool */
	return x !== y;
}

var not = function(x) {
	/* eq :: a -> a -> Bool */
	return (x == true ? false : true);
}


var compare = function(x, y) {
	if(x < y) {
		return Ordering.LT;
	} else if(x > y) {
		return Ordering.GT;
	}
	return Ordering.EQ;
}

/* Tuples */
var fst = function(tup) {
	return tup[0];
}

var snd = function(tup) {
	return tup[1];
}

var curry = function(fn, a, b) {
	/* curry :: ((a, b) -> c) -> a -> b -> c */
	return fn([a, b]);
}

var uncurry = function(fn, p) {
	/* uncurry :: (a -> b -> c) -> (a, b) -> c */
	return fn(fst(p), snd(p));
}

var swap = function(tup) {
	return [tup[1], tup[0]];
}


/* .. */

var abs = function(x) {
	return (x < 0 ? x*(-1) : x);
}

var minMax = function(x, y) {
	return (x < y ? [x, y] : [y, x]);
}

var min = function(x, y) {
	return minMax(x, y)[0];
}

var max = function(x, y) {
	return minMax(x, y)[1];
}


/* .. */

/* .. */

var quotRem = function(x, y) {
	/* quotRem :: a -> a -> (a, a) */
	return [quot(x, y), rem(x, y)];
}

var divMod = function(x, y) {
	/* divMod :: a -> a -> (a, a) */
	return [div(x, y), mod(x, y)];
}

var quot = function(x, y) {
	return div(x, y);
}

var rem = function(x, y) {
	return x % y;
}

var div = function(x, y) {
	return (x / y) | 0;
}

var mul = function(x, y) {
	return x * y;
}

var mod = function(x, y) {
	var mul = 1;
	if(x < 0 && y < 0) {
		mul = (-1);
		x = x*(-1);
	} else if(x < 0 && y > 0) {
		mul = (-1);
		x = x*(-1);
	}
	return (x - (y * Math.floor(x/y))) * mul;
}

var toInteger = function(x) {
	return Number(x);
}


/* miscellaneous function */

var id = function(a) {
	/* id :: a -> a */
	return a;
}

var _const = function(a, b) {
	/* const :: a -> b -> a */
	return a;
}

var flip = function(fn, b, a) {
	/* flip :: (a -> b -> c) -> b -> a -> c */
	return fn(a, b);
}

var until = function(test, fn, a) {
	/* until :: (a -> Bool) -> (a -> a) -> a -> a */
	while(test(a)==false) {
		a = fn(a);
	}
	return a;
}

module.exports = {

	/* boolean functions */
	eq : eq,
	notEq : notEq,
	not : not,
	otherwise : true,
	compare : compare,

	/* tuples */
	fst : fst,
	snd : snd,
	curry : curry,
	uncurry : uncurry,
	swap : swap,

	/* .. */
	abs : abs,
	min : min,
	max : max,
	minMax : minMax,

	/* .. */
	quotRem : quotRem,
	divMod : divMod,
	quot : quot,
	rem : rem,
	div : div,
	mul : mul,
	mod : mod,
	toInteger : toInteger,
	/* miscellaneous functions */
	id : id,
	_const : _const,
	flip : flip,
	until : until,
	/* trigonometric and hyperbolic functions */
	/*
	pi : pi,
	exp : exp,
	log : log,
	sin : sin,
	cos : cos,
	sinh : sinh,
	cosh : cosh,
	asin : asin,
	acos : acos,
	atan : atan,
	asinh : asinh,
	acosh : acosh,
	atanh : atanh
	*/
	Ordering : Ordering,
}
