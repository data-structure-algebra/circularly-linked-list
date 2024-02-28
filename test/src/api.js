import test from 'ava';

import {list} from '@iterable-iterator/list';

import {empty, from, push, pop, shift, unshift, concat, values} from '#module';

const toArray = (first) => list(values(first));

test('API', (t) => {
	let A = empty();

	t.deepEqual(toArray(A), []);

	t.throws(() => pop(A), {message: /empty/});
	t.throws(() => shift(A), {message: /empty/});

	A = push(A, 1);

	t.deepEqual(toArray(A), [1]);

	A = unshift(A, 2);

	t.deepEqual(toArray(A), [2, 1]);

	let B = from([4, 3]);

	t.deepEqual(toArray(B), [4, 3]);

	B = concat(A, B);
	A = empty();

	t.deepEqual(toArray(B), [2, 1, 4, 3]);
	t.deepEqual(toArray(A), []);

	B = concat(A, B);
	t.deepEqual(toArray(B), [2, 1, 4, 3]);

	B = concat(B, A);
	t.deepEqual(toArray(B), [2, 1, 4, 3]);

	A = unshift(A, 8);
	t.deepEqual(toArray(A), [8]);
	B = push(B, 7);
	t.deepEqual(toArray(B), [2, 1, 4, 3, 7]);

	A = concat(A, B);
	B = empty();

	t.deepEqual(toArray(A), [8, 2, 1, 4, 3, 7]);
	t.deepEqual(toArray(B), []);
});
