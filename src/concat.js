import assert from 'assert';
import Node from './Node';
import _concat from './_concat';

/**
 * Concatenate two input lists.
 *
 * @param {Node} x - First node of first input list (can be null).
 * @param {Node} y - First node of second input list (can be null).
 */
export default function concat(x, y) {
	if (x === null) return y;
	assert(x instanceof Node);
	if (y === null) return x;
	assert(y instanceof Node);
	_concat(x, y);
	return x;
}
