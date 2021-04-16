import assert from 'assert';
import _iter_fast from './_iter_fast.js';
import Node from './Node.js';

/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first First node of the list (can be null).
 * @return {IterableIterator<any>}
 */
export default function* values(first) {
	assert(first === null || first instanceof Node);
	if (first !== null) {
		for (const x of _iter_fast(first)) yield x.value;
	}
}
