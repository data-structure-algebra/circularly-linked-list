import assert from 'assert';
import Node from './Node.js';

/**
 * Generator of nodes in list in order. The list cannot be empty. You should
 * not modify the current node's next pointer unless you know what you are
 * doing.
 *
 * /!\ Modifying the next pointer of the current node will change which node
 * comes next in the iteration.
 *
 * @param {Node} first First node of the list.
 * @return {IterableIterator<Node>} Yields nodes of a list in order.
 */
export default function* _iter_fast(first) {
	assert(first instanceof Node);
	let next = first;

	do {
		yield next;
		next = next.next;
	} while (next !== first);
}
