import assert from 'assert';
import _iter from './_iter.js';
import Node from './Node.js';

/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first First node of the list (can be null).
 * @return {IterableIterator<Node>}
 */
export default function* iter(first) {
	assert(first === null || first instanceof Node);
	if (first !== null) yield* _iter(first);
}
