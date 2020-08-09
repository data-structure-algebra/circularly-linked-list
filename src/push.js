import assert from 'assert';
import Node from './Node';
import _append from './_append';

/**
 * Push value to list.
 *
 * @param {Node} x - First node of first input list (can be null).
 * @param {Object} value - Value to push.
 */
export default function push(x, value) {
	if (x === null) return new Node(value);
	assert(x instanceof Node);
	const y = new Node(value);
	_append(x, y);
	return x;
}