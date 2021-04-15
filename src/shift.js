import assert from 'assert';
import Node from './Node.js';
import _remove from './_remove.js';

/**
 * Removes first {@link Node} from a list. Throws if input list is empty.
 *
 * TODO I do not think we need to return the popped node since it is x.
 *      Currently this is kept so to have the same signature as {@link pop}.
 *
 * @param {Node} x First node .
 * @return {[Node, Node]} New list (possibly null) and popped node.
 */
export default function shift(x) {
	if (x === null) throw new Error('input list is empty');
	assert(x instanceof Node);
	_remove(x);
	return [x === x.next ? null : x.next, x];
}
