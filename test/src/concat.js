import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {from, concat, values} from '../../src/index.js';
import {str} from './_fixtures.js';

function macro(t, A, B) {
	const _A = from(A);
	const _B = from(B);
	const _C = concat(_A, _B);

	const expected = [A].flat().concat(B);
	const result = list(values(_C));
	t.deepEqual(expected, result);
}

macro.title = (title, A, B) => title || `concat(${str(A)}, ${str(B)})`;

test(macro, [], []);
test(macro, [], [1]);
test(macro, [1], []);
test(macro, [27], [50]);
test(macro, list(range(50)), list(range(50)));
test(macro, list(range(10_000)), [1]);
