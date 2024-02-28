import assert from 'assert';

import Node from './Node.js';

/**
 * Removes input {@link Node} from its list.
 *
 * /!\ Pointers in the extracted node are left unchanged.
 * /!\ <code>x</code> will have dangling pointers after removal if not single element.
 *
 * @param {Node} x Node to remove.
 */
export default function _remove(x) {
	assert(x instanceof Node);
	x.prev.next = x.next;
	x.next.prev = x.prev;
}
