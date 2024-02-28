import assert from 'assert';

import Node from './Node.js';
import rotate_right from './rotate_right.js';

/**
 * Do nothing if x is empty or n is zero.
 * Rotate left n steps if n is positive.
 * Rotate right n steps if n is negative.
 *
 * @param {Node} x The current first node.
 * @param {number} n
 * @return {Node} The new first node.
 */
const rotate_left = (x, n) => {
	assert(x === null || x instanceof Node);
	return rotate_right(x, -n);
};

export default rotate_left;
