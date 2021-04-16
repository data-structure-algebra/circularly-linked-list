import assert from 'assert';
import Node from './Node.js';
import _remove from './_remove.js';

/**
 * Removes first {@link Node} from a list. Throws if input list is empty.
 *
 * @param {Node} x First node .
 * @return {[Node, Node]} New list (possibly null) and removed node.
 */
export default function shift(x) {
	if (x === null) throw new Error('input list is empty');
	assert(x instanceof Node);
	_remove(x);
	return [x === x.next ? null : x.next, x];
}
