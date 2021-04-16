import test from 'ava';

import {list, range, map} from '@aureooms/js-itertools';

import {str} from './_fixtures.js';

import {from, concat, iter} from '../../src/index.js';

function macro(t, A, B) {
	const _A = from(A);
	const _B = from(B);
	const _C = concat(_A, _B);

	const expected = [].concat(A).concat(B);
	const result = list(map((x) => x.value, iter(_C)));
	t.deepEqual(expected, result);
}

macro.title = (title, A, B) => title || `concat(${str(A)}, ${str(B)})`;

test(macro, [], []);
test(macro, [], [1]);
test(macro, [1], []);
test(macro, [27], [50]);
test(macro, list(range(50)), list(range(50)));
test(macro, list(range(10000)), [1]);
