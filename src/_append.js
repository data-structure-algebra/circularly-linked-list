import assert from 'assert';

import Node from './Node.js';

/**
 * Optimization of {@link _concat} when <code>x</code> contains a single element.
 * Works even if <code>x</code> has dangling pointers <code>x.next</code> and <code>x.prev</code>.
 *
 * @param {Node} a First node of list.
 * @param {Node} x Node to be inserted at the end of list.
 */
export default function _append(a, x) {
	assert(a instanceof Node);
	assert(x instanceof Node);
	assert(x.next === x);
	assert(x.prev === x);
	// FROM a - b - c - d - a        x
	//   TO a - b - c - d - x - a
	const d = a.prev;
	x.next = a; // X -> a
	x.prev = d; // D <- x
	d.next = x; // D -> x
	a.prev = x; // X <- a
}
