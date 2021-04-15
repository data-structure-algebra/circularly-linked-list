import test from 'ava';

import {list, map} from '@aureooms/js-itertools';

import {empty, from, push, pop, shift, unshift, concat, iter} from '../../src/index.js';

const values = (first) => list(map((x) => x.value, iter(first)));

test('API', (t) => {
	let A = empty();

	t.deepEqual(values(A), []);

	t.throws(() => pop(A), {message: /empty/});
	t.throws(() => shift(A), {message: /empty/});

	A = push(A, 1);

	t.deepEqual(values(A), [1]);

	A = unshift(A, 2);

	t.deepEqual(values(A), [2, 1]);

	let B = from([4, 3]);

	t.deepEqual(values(B), [4, 3]);

	B = concat(A, B);
	A = empty();

	t.deepEqual(values(B), [2, 1, 4, 3]);
	t.deepEqual(values(A), []);

	B = concat(A, B);
	t.deepEqual(values(B), [2, 1, 4, 3]);

	B = concat(B, A);
	t.deepEqual(values(B), [2, 1, 4, 3]);

	A = unshift(A, 8);
	t.deepEqual(values(A), [8]);
	B = push(B, 7);
	t.deepEqual(values(B), [2, 1, 4, 3, 7]);

	A = concat(A, B);
	B = empty();

	t.deepEqual(values(A), [8, 2, 1, 4, 3, 7]);
	t.deepEqual(values(B), []);
});
