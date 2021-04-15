import test from 'ava';

import {list, range, map} from '@aureooms/js-itertools';

import {from, shift, iter} from '../../src/index.js';

function throws(t, array) {
	const node = from(array);
	t.is(null, node);
	t.throws(() => shift(node), {message: /empty/});
}

throws.title = (title, array) => title || `shift(${string(array)}) ~> throws`;

function macro(t, array) {
	const node = from(array);
	const [after, first] = shift(node);
	t.is(array[0], first.value);
	const result = list(map((x) => x.value, iter(after)));
	t.deepEqual(array.slice(1), result);
}

macro.title = (title, array) =>
	title || `shift(${string(array)}) ~> ${array[0]}`;

function string(array) {
	const s = JSON.stringify(array);
	if (s <= 40) return s;
	return s.slice(0, 19) + '..' + s.slice(-19);
}

test(throws, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10000)));
