import assert from 'assert';
import Node from './Node.js';

/**
 * Generator of nodes in list in order. You are allowed to edit the current
 * node.
 *
 * /!\ Modifying the next pointer of the current node will NOT change which
 * node comes next in the iteration.
 *
 * @param {Node} first First node of the list.
 * @return {IterableIterator<Node>} Yields nodes of a list in order.
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
