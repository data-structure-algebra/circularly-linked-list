import test from 'ava';

import {list, range} from '@aureooms/js-itertools';
import {from, len} from '../../src/index.js';

const macro = (t, input) => {
	const x = from(input);
	const expected = input.length;
	t.is(len(x), expected);
};

macro.title = (title, input) =>
	title || `len(from(${JSON.stringify(input)})) = ${input.length}`;

test(macro, []);
test(macro, '');
test(macro, [{}]);
test(macro, 'z');
test(macro, [1, 2, 3]);
test(macro, 'abracadabra');
test('len(from(list(range(987)))) = 987', macro, list(range(987)));
