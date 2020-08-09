import assert from 'assert';
import Node from './Node';
import _concat from './_concat';

/**
 * Unshift value to list.
 *
 * @param {Node} x - First node of first input list (can be null).
 * @param {Object} value - Value to unshift.
 */
export default function unshift(x, value) {
	if (x === null) return new Node(value);
	assert(x instanceof Node);
	const y = new Node(value);
	_concat(y, x);
	return y;
}
