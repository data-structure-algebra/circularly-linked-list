import assert from 'assert';

import Node from './Node.js';
import _rotate_left from './_rotate_left.js';
import _rotate_right from './_rotate_right.js';

/**
 * Do nothing if x is empty or n is zero.
 * Rotate right n steps if n is positive.
 * Rotate left n steps if n is negative.
 *
 * @param {Node} x The current first node.
 * @param {number} n
 * @return {Node} The new first node.
 */
export default function rotate_right(x, n) {
	assert(Number.isInteger(n));
	if (x === null) return null;
	assert(x instanceof Node);
	if (n === 0) return x;
	return n > 0 ? _rotate_right(x, n) : _rotate_left(x, -n);
}
