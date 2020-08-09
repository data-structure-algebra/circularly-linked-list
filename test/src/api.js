import test from 'ava';

import {list, map} from '@aureooms/js-itertools';

import {empty, from, push, pop, shift, unshift, concat, iter} from '../../src';

const values = (first) => list(map((x) => x.value, iter(first)));

test('API', (t) => {
	let A = empty();

	t.deepEqual([], values(A));

	t.throws(() => pop(A), {message: /empty/});
	t.throws(() => shift(A), {message: /empty/});

	A = push(A, 1);

	t.deepEqual([1], values(A));

	A = unshift(A, 2);

	t.deepEqual([2, 1], values(A));

	let B = from([4, 3]);

	t.deepEqual([4, 3], values(B));

	B = concat(A, B);
	A = empty();

	t.deepEqual([2, 1, 4, 3], values(B));
	t.deepEqual([], values(A));

	B = concat(A, B);
	t.deepEqual([2, 1, 4, 3], values(B));

	B = concat(B, A);
	t.deepEqual([2, 1, 4, 3], values(B));

	A = unshift(A, 8);
	t.deepEqual([8], values(A));
	B = push(B, 7);
	t.deepEqual([2, 1, 4, 3, 7], values(B));

	A = concat(A, B);
	B = empty();

	t.deepEqual([8, 2, 1, 4, 3, 7], values(A));
	t.deepEqual([], values(B));
});
