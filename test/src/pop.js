import test from 'ava';

import {list, range} from '@aureooms/js-itertools';

import {str} from './_fixtures.js';

import {from, pop, values} from '../../src/index.js';

function throws(t, array) {
	const node = from(array);
	t.is(null, node);
	t.throws(() => pop(node), {message: /empty/});
}

throws.title = (title, array) => title || `pop(${str(array)}) ~> throws`;

function macro(t, array) {
	const node = from(array);
	const [after, last] = pop(node);
	t.is(array[array.length - 1], last.value);
	const result = list(values(after));
	t.deepEqual(array.slice(0, -1), result);
}

macro.title = (title, array) =>
	title || `pop(${str(array)}) ~> ${array[array.length - 1]}`;

test(throws, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10000)));
