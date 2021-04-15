import assert from 'assert';
import Node from './Node.js';
import _concat from './_concat.js';

/**
 * Unshift value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {Object} value Value to unshift.
 * @return {Node} The node at the front of the list (hence, the new node).
 */
export default function unshift(x, value) {
	if (x === null) return new Node(value);
	assert(x instanceof Node);
	const y = new Node(value);
	_concat(y, x);
	return y;
}
