import test from 'ava';

import {list, range, map} from '@aureooms/js-itertools';

import {from, concat, iter} from '../../src/index.js';

function macro(t, A, B) {
	const _A = from(A);
	const _B = from(B);
	const _C = concat(_A, _B);

	const expected = [].concat(A).concat(B);
	const result = list(map((x) => x.value, iter(_C)));
	t.deepEqual(expected, result);
}

function string(array) {
	const s = JSON.stringify(array);
	if (s <= 40) return s;
	return s.slice(0, 19) + '..' + s.slice(-19);
}

macro.title = (title, A, B) => title || `concat(${string(A)}, ${string(B)})`;

test(macro, [], []);
test(macro, [], [1]);
test(macro, [1], []);
test(macro, [27], [50]);
test(macro, list(range(50)), list(range(50)));
test(macro, list(range(10000)), [1]);
