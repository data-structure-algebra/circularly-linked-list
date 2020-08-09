import test from 'ava';

import {list, range, map} from '@aureooms/js-itertools';

import {from, iter} from '../../src';

function macro(t, array) {
	const node = from(array);
	const result = list(map((x) => x.value, iter(node)));
	t.deepEqual(array, result);
}

function string(array) {
	const s = JSON.stringify(array);
	if (s <= 40) return s;
	return s.slice(0, 19) + '..' + s.slice(-19);
}

macro.title = (title, array) => title || `from(${string(array)})`;

test(macro, []);
test(macro, [27]);
test(macro, list(range(50)));
test(macro, list(range(10000)));
