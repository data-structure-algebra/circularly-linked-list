import assert from 'assert';

import Node from './Node.js';
import _append from './_append.js';

/**
 * Push value to list.
 *
 * @param {Node} x First node of first input list (can be null).
 * @param {any} value Value to push.
 * @return {Node} The node at the front of the list (new node if empty, input
 * node otherwise).
 */
export default function push(x, value) {
	if (x === null) return new Node(value);
	assert(x instanceof Node);
	const y = new Node(value);
	_append(x, y);
	return x;
}
