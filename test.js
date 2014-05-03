var
	prelude = require('./index.js'),
	assert = require('assert'),
	vows = require('vows');

vows.describe('Prelude-js::eq,not,notEq,otherwise,compare').addBatch({
	'eq 1 1': {
		topic: function() {
			return prelude.eq(1, 1);
		},
		'should return true': function(topic) {
			assert.equal(topic, true);
		}
	},
	'eq 1 0': {
		topic: function() {
			return prelude.eq(1, 0);
		},
		'should return false': function(topic) {
			assert.equal(topic, false);
		}
	},
	'notEq 1 1': {
		topic: function() {
			return prelude.notEq(1, 1);
		},
		'should return false': function(topic) {
			assert.equal(topic, false);
		}
	},
	'notEq 1 0': {
		topic: function() {
			return prelude.notEq(1, 0);
		},
		'should return true': function(topic) {
			assert.equal(topic, true);
		}
	},
	'not true': {
		topic: function() {
			return prelude.not(true);
		},
		'should return false': function(topic) {
			assert.equal(topic, false);
		}
	},
	'not (1>2)': {
		topic: function() {
			return prelude.not(1>2);
		},
		'should return true': function(topic) {
			assert.equal(topic, true);
		}
	},
	'otherwise': {
		topic: function() {
			return prelude.otherwise;
		},
		'should be true': function(topic) {
			assert.equal(topic, true);
		}
	},
	'compare 2 4': {
		topic: function() {
			return prelude.compare(2, 4);
		},
		'should return LT': function(topic) {
			assert.equal(topic, prelude.Ordering.LT);
		}
	},
	'compare 3 3': {
		topic: function() {
			return prelude.compare(3, 3);
		},
		'should return EQ': function(topic) {
			assert.equal(topic, prelude.Ordering.EQ);
		}
	},
	'compare 4 2': {
		topic: function() {
			return prelude.compare(4, 2);
		},
		'should return GT': function(topic) {
			assert.equal(topic, prelude.Ordering.GT);
		}
	}
}).run();


vows.describe('Prelude-js::fst,snd,curry,uncurry,swap').addBatch({
	'fst (1,2)': {
		topic: function() {
			return prelude.fst([1,2]);
		},
		'should return 1': function(topic) {
			assert.equal(topic, 1);
		}
	},
	'snd (1,2)': {
		topic: function() {
			return prelude.snd([1,2]);
		},
		'should return 2': function(topic) {
			assert.equal(topic, 2);
		}
	},
	'curry fst 2 3': {
		topic: function() {
			return prelude.curry(prelude.fst, 2, 3);
		},
		'should return 2': function(topic) {
			assert.equal(topic, 2);
		}
	},
	'curry (\\ (x,y) -> 2*x+y) 2 3': {
		topic: function() {
			return prelude.curry(function(tup){return 2*tup[0]+tup[1];}, 2, 3);
		},
		'should return 7': function(topic) {
			assert.equal(topic, 7);
		}
	},
	'uncurry mod (5,4)': {
		topic: function() {
			return prelude.uncurry(prelude.mod, [5, 4]);
		},
		'should return 1': function(topic) {
			assert.equal(topic, 1);
		}
	},
	'uncurry (*) (3,2)': {
		topic: function() {
			return prelude.uncurry(prelude.mul, [3, 2]);
		},
		'should return 6': function(topic) {
			assert.equal(topic, 6);
		}
	},
	'swap (1,2)': {
		topic: function() {
			return prelude.swap([1,2]);
		},
		'should return (2,1)': function(topic) {
			assert.equal(topic[0], 2);
			assert.equal(topic[1], 1);
		}
	}
}).run();


vows.describe('Prelude-js::id,const,dot').addBatch({
	'id 3': {
		topic: function() {
			return prelude.id(3);
		},
		'should return 3': function(topic) {
			assert.equal(topic, 3);
		}
	},
	'const 12 3': {
		topic: function() {
			return prelude._const(12, 3);
		},
		'should return 12': function(topic) {
			assert.equal(topic, 12);
		}
	}
}).run();


vows.describe('Prelude-js::abs,min,max').addBatch({
	'abs 1': {
		topic: function() {
			return prelude.abs(1);
		},
		'should return 1': function(topic) {
			assert.equal(topic, 1);
		}
	},
	'abs (-1)': {
		topic: function() {
			return prelude.abs(-1);
		},
		'should return 1': function(topic) {
			assert.equal(topic, 1);
		}
	},
	'min -5 5': {
		topic: function() {
			return prelude.min(-5, 5);
		},
		'should return -5': function(topic) {
			assert.equal(topic, -5);
		}
	},
	'min 5 -5': {
		topic: function() {
			return prelude.min(5, -5);
		},
		'should return -5': function(topic) {
			assert.equal(topic, -5);
		}
	},
	'max -5 5': {
		topic: function() {
			return prelude.max(-5, 5);
		},
		'should return 5': function(topic) {
			assert.equal(topic, 5);
		}
	},
	'max 5 -5': {
		topic: function() {
			return prelude.max(5, -5);
		},
		'should return 5': function(topic) {
			assert.equal(topic, 5);
		}
	}
}).run();

vows.describe('Prelude-js::quotRem,quot').addBatch({
	'quotRem 4 3': {
		topic: function() {
			return prelude.quotRem(4, 3);
		},
		'should return (1,1)': function(topic) {
			assert.equal(topic[0], 1);
			assert.equal(topic[1], 1);
		}
	},
	'quotRem 22 8': {
		topic: function() {
			return prelude.quotRem(22, 8);
		},
		'should return (2,6)': function(topic) {
			assert.equal(topic[0], 2);
			assert.equal(topic[1], 6);
		}
	},
	'quotRem 12 4': {
		topic: function() {
			return prelude.quotRem(12, 4);
		},
		'should return (3, 0)': function(topic) {
			assert.equal(topic[0], 3);
			assert.equal(topic[1], 0);
		}
	},
	'quotRem (-12) 6': {
		topic: function() {
			return prelude.quotRem(-12, 6);
		},
		'should return (-2,0)': function(topic) {
			assert.equal(topic[0], -2);
			assert.equal(topic[1], 0);
		}
	},
	/*
	'divMod 3 5': {
		topic: function() {
			return prelude.divMod(3, 5);
		},
		'should return (0,3)': function(topic) {
			assert.equal(topic[0], 0);
			assert.equal(topic[1], 3);
		}
	},
	'divMod 13 (-5)': {
		topic: function() {
			return prelude.divMod(13, -5);
		},
		'should return (-3,-2)': function(topic) {
			assert.equal(topic[0], -3);
			assert.equal(topic[1], -2);
		}
	},
	'divMod (-13) 5': {
		topic: function() {
			return prelude.divMod(5, -13);
		},
		'should return (-3, 2)': function(topic) {
			assert.equal(topic[0], -3);
			assert.equal(topic[1], 2);
		}
	},
	*/
	'3 `quot` 12': {
		topic: function() {
			return prelude.quot(3, 12);
		},
		'should return 0': function(topic) {
			assert.equal(topic, 0);
		}
	},
	'33 `quot` 12': {
		topic: function() {
			return prelude.quot(33, 12);
		},
		'should return 2': function(topic) {
			assert.equal(topic, 2);
		}
	},
	'6 `div` 2': {
		topic: function() {
			return prelude.div(6, 2);
		},
		'should return 3': function(topic) {
			assert.equal(topic, 3);
		}
	},
	'8 `div` 3': {
		topic: function() {
			return prelude.div(8, 3);
		},
		'should return 2': function(topic) {
			assert.equal(topic, 2);
		}
	},
	'3 `mod` 12': {
		topic: function() {
			return prelude.mod(3, 12);
		},
		'should return 3': function(topic) {
			assert.equal(topic, 3);
		}
	},
	'33 `mod` 12': {
		topic: function() {
			return prelude.mod(33, 12);
		},
		'should return 9': function(topic) {
			assert.equal(topic, 9);
		}
	},
	'33 `mod` -12': {
		topic: function() {
			return prelude.mod(33, -12);
		},
		'should return -3': function(topic) {
			assert.equal(topic, -3);
		}
	},
	'-33 `mod` 12': {
		topic: function() {
			return prelude.mod(-33, 12);
		},
		'should return -9': function(topic) {
			assert.equal(topic, -9);
		}
	},
	'-33 `mod` -12': {
		topic: function() {
			return prelude.mod(-33, -12);
		},
		'should return 3': function(topic) {
			assert.equal(topic, 3);
		}
	},
	'3 `rem` 12': {
		topic: function() {
			return prelude.rem(3, 12);
		},
		'should return 3': function(topic) {
			assert.equal(topic, 3);
		}
	},
	'33 `rem` 12': {
		topic: function() {
			return prelude.rem(33, 12);
		},
		'should return 9': function(topic) {
			assert.equal(topic, 9);
		}
	},
	'33 `rem` -12': {
		topic: function() {
			return prelude.rem(33, -12);
		},
		'should return 9': function(topic) {
			assert.equal(topic, 9);
		}
	},
	'-33 `rem` 12': {
		topic: function() {
			return prelude.rem(-33, 12);
		},
		'should return -9': function(topic) {
			assert.equal(topic, -9);
		}
	},
	'-33 `rem` -12': {
		topic: function() {
			return prelude.rem(-33, -12);
		},
		'should return -9': function(topic) {
			assert.equal(topic, -9);
		}
	},
}).run();

vows.describe('Prelude-js::flip,$,until').addBatch({
	'flip (/) 1 2': {
		topic: function() {
			return prelude.flip(function(a,b){return a/b;}, 1, 2);
		},
		'should return 2': function(topic) {
			assert.equal(topic, 2);
		}
	},
	'flip (>) 3 5': {
		topic: function() {
			return prelude.flip(function(a,b){return a>b;}, 3, 5);
		},
		'should return true': function(topic) {
			assert.equal(topic, true);
		}
	},
	'flip mod 3 6': {
		topic: function() {
			return prelude.flip(function(a,b){return a%b;}, 3, 6);
		},
		'should return 0': function(topic) {
			assert.equal(topic, 0);
		}
	},
	'until (> 100) (*2) 1': {
		topic: function() {
			return prelude.until(
				function(x){return x>100;},
				function(y){return y*2;},
				1
			);
		},
		'should return 128': function(topic) {
			assert.equal(topic, 128);
		}
	}
}).run();
