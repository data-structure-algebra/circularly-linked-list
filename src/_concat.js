import assert from 'assert';

import Node from './Node.js';

/**
 * Concatenate two input lists.
 *
 * @param {Node} x First node of first input list.
 * @param {Node} y First node of second input list.
 */
export default function _concat(x, y) {
	assert(x instanceof Node);
	assert(y instanceof Node);
	// FROM x - b - c - d - x        y - f - g - h - y
	//   TO x - b - c - d - y - f - g - h - x
	const d = x.prev;
	const h = y.prev;
	d.next = y; // D -> y
	x.prev = h; // H <- x
	y.prev = d; // D <- y
	h.next = x; // H -> x
}
