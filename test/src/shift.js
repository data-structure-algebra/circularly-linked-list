import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {from, shift, values} from '../../src/index.js';
import {str} from './_fixtures.js';

function throws(t, array) {
	const node = from(array);
	t.is(null, node);
	t.throws(() => shift(node), {message: /empty/});
}

throws.title = (title, array) => title || `shift(${str(array)}) ~> throws`;

function macro(t, array) {
	const node = from(array);
	const [after, first] = shift(node);
	t.is(array[0], first.value);
	const result = list(values(after));
	t.deepEqual(array.slice(1), result);
}

macro.title = (title, array) => title || `shift(${str(array)}) ~> ${array[0]}`;

test(throws, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10_000)));
