import test from 'ava';

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';

import {str} from './_fixtures.js';

import {from, iter} from '#module';

function macro(t, array) {
	const node = from(array);
	const result = list(map((x) => x.value, iter(node)));
	t.deepEqual(array, result);
}

macro.title = (title, array) => title || `from(${str(array)})`;

test(macro, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10_000)));
