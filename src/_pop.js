import assert from 'assert';
import Node from './Node.js';
import _remove from './_remove.js';

/**
 * Removes last {@link Node} from a non-empty list.
 *
 * @param {Node} x First node (not null).
 * @return {Node} New list (possibly null).
 */
export default function _pop(x) {
	assert(x instanceof Node);
	if (x === x.prev) return null;
	_remove(x.prev);
	return x;
}
