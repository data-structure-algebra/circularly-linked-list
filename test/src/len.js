import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {from, len} from '../../src/index.js';
import {str} from './_fixtures.js';

const macro = (t, input) => {
	const x = from(input);
	const expected = input.length;
	t.is(len(x), expected);
};

macro.title = (title, input) =>
	title || `len(from(${str(input)})) = ${input.length}`;

test(macro, []);
test(macro, '');
test(macro, [{}]);
test(macro, 'z');
test(macro, [1, 2, 3]);
test(macro, 'abracadabra');
test(macro, list(range(987)));
