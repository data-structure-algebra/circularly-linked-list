import assert from 'assert';
import _len from './_len.js';
import Node from './Node.js';

/**
 * Compute the length of a list (can be empty).
 *
 * @param {Node} x First node of the input list (can be null).
 * @return {number} The length of the input list.
 */
const len = (x) => {
	assert(x === null || x instanceof Node);
	return x === null ? 0 : _len(x);
};

export default len;
