import assert from 'assert';
import Node from './Node.js';

/**
 * Generator of nodes in list in order.
 *
 * TODO yield values/keys instead?
 *
 * @param {Node} first First node of the list.
 * @return {IterableIterator} Yields nodes of a list in order.
 */
export default function* _iter(first) {
	assert(first instanceof Node);
	let next = first;

	do {
		const x = next;
		next = x.next; // Compute next before yielding.
		yield x; // Necessary ?
	} while (next !== first);
}
