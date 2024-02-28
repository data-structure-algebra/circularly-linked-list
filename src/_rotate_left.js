import assert from 'assert';

import Node from './Node.js';

/**
 * Rotate list to the left n steps. The parameter n must be positive.
 *
 * @param {Node} x The current first node.
 * @param {number} n MUST be positive.
 * @return {Node} The new first node.
 */
export default function _rotate_left(x, n) {
	assert(Number.isInteger(n));
	assert(n > 0);
	assert(x instanceof Node);
	do {
		x = x.prev;
	} while (--n);

	return x;
}
