import assert from 'assert';

import Node from './Node.js';
import _remove from './_remove.js';

/**
 * Removes first {@link Node} from a non-empty list.
 *
 * @param {Node} x First node (not null).
 * @return {Node} New list (possibly null).
 */
export default function _shift(x) {
	assert(x instanceof Node);
	if (x === x.next) return null;
	_remove(x);
	return x.next;
}
